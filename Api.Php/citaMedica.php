<?php

$request_uri = $_SERVER['REQUEST_URI'];
$resource = str_replace('/', '', $request_uri);

$centrosMedicos = array(
    1 => array(
        'nombre' => 'Centro Médico A',
        'direccion' => 'Calle 123, Ciudad A'
        
    ),
    2 => array(
        'nombre' => 'Centro Médico B',
        'direccion' => 'Calle 456, Ciudad B'
        
    ),
    3 => array(
        'nombre' => 'Centro Médico C',
        'direccion' => 'Calle 789, Ciudad C',
        'Telefono' => '657 48 50 32'
    )
);

$medicos = array(
    1 => array(
        'nombre' => 'Dr. Médico A',
        'especialidad' => 'Cardiología',
        'Telefono' => '657 48 90 32'
    ),
    2 => array(
        'nombre' => 'Dr. Médico B',
        'especialidad' => 'Pediatría',
        'Telefono' => '657 98 90 32'
    ),
    3 => array(
        'nombre' => 'Dr. Médico C',
        'especialidad' => 'Dermatología',
        'Telefono' => '657 34 90 32'
    )
);

$pacientes = array(
    1 => array(
        'nombre' => 'Paciente A',
        'edad' => 35,
        'DNI' => '49461778K'
    ),
    2 => array(
        'nombre' => 'Paciente B',
        'edad' => 28,
        'DNI' => '49461744L'
    ),
    3 => array(
        'nombre' => 'Paciente C',
        'edad' => 45,
        'DNI' => '49423744S'
    )
);
$citas = array();

if ($resource == 'centrosmedicos') {
    echo json_encode($centrosMedicos);
} elseif ($resource == 'medicos') {
    echo json_encode($medicos);
} elseif ($resource == 'pacientes') {
    echo json_encode($pacientes);
} elseif ($resource == 'crearCita') {
    
    $nuevaCita = array(
        'paciente' => $_POST['paciente'], 
        'medico' => $_POST['medico'], 
        'fecha' => $_POST['fecha'], 
    );
    
    // Agregar la nueva cita al array de citas
    $citas[] = $nuevaCita;

    echo 'Cita creada con éxito.';
} else {
    echo 'Cita no encontrado';
}