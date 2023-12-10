import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Scanner;

public class Examen1 {

            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
//array
                int contador = 0;
                cita[] citas = new cita[10];


                citas[0] = new cita("Juan", "Corte de cabello", "19/02/2023"); // cita para el 19 de febrero de 2023
                citas[1] = new cita("María", "Manicure", "20/02/2023"); // cita para el 20 de febrero de 2023
                citas[2] = new cita("Pedro", "Pedicure", "21/02/2023"); // cita para el 21 de febrero de 2023
                contador = 3; // Establecer el contador en el número de citas ya existentes

                System.out.println("Ingrese los elementos del array:");
                for (int i = 0; i < 13; i++) { // Sólo permitir agregar 7 citas más (total 10 citas)
                    if (contador == 13) { // Si se han agregado 10 citas, no se pueden agregar más
                        System.out.println("Ya no hay más citas disponibles.");

                        break;
                    }
                    System.out.print("Cita " + (i + 1) + ": "); // Sumar 3 al índice para que empiece en 3
                    preguntar(citas, contador);
                    contador++; // Incrementar el contador de citas
                }
            }

    public static void preguntar(cita[] citas, int contador) {
                //preguntamos
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese la información en el formato nombre,servicio,fecha (dd/mm/aaaa):");
        String informacion = scanner.nextLine();
        String[] elementos = informacion.split(",");
        //si tiene mas de 3 elementos saca eso
        if (elementos.length != 3) {
            System.out.println("Formato inválido. Debe ser nombre,servicio,fecha (dd/mm/aaaa).");
            return;
        }
        String nombre = elementos[0];
        String servicio = elementos[1];
        String fechaString = elementos[2];
        Date fecha;
        try {
            fecha = new SimpleDateFormat("dd/MM/yyyy").parse(fechaString);
        } catch (ParseException e) {
            System.out.println("Fecha inválida. Debe ser en el formato dd/mm/aaaa.");
            return;
        }
        if (contador < 10) {
            citas[contador] = new cita(nombre, servicio, fechaString);
        }
        //fecha posterior
        Date fechaActual = new Date();
        if (fecha.compareTo(fechaActual) < cita.getFecha().compareTo(fecha)) {
            System.out.println("La fecha ingresada es anterior a la fecha actual.");
            return;
        }


    }

}