using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace WindowsFormsApp1
{
    public partial class Datos : Form
    {

        List<Empleado> lista = new List<Empleado> ();
        String ruta = "empleados.txt";
        public Datos(List<Empleado> lista2)
        {
            Empleado empleado = new Empleado();
            InitializeComponent();
            lista = lista2;
        }
        private bool validarDatos()
        {
            if (txtboxApellido.Text == "" || txtboxNombre.Text == "")
            {
                return false;
            }
            else
                return true;
        }


        private void BtnAbrirFichero_Click(object sender, EventArgs e)
        {
           
        }

        private void btnGuardar_Click(object sender, EventArgs e)
        {
            
        }

        private void BtnAlta_Click(object sender, EventArgs e)
        {
            Empleado empleado1 = new Empleado();
            empleado1.Nombre1 = txtboxNombre.Text;
            empleado1.Apellidos1 = txtboxApellido.Text;
            empleado1.Fecha_Nacimiento1 = datepickDatosPersonales.Value;
            empleado1.Fecha_Alta1 = datepickDatosEmpresa.Value;
            empleado1.Salario1 = Double.Parse(txtbxsalario.Text);
            empleado1.PersonasAdministracion1 = (Int32)nUpDownAdmin.Value;
            empleado1.PersonasMantenimiento1 = (Int32)nUpDownMante.Value;
            empleado1.Comerciales1 = (Int32)nUpDownComerc.Value;
            empleado1.PersonasProduccion1 = (Int32)nUpDownProducc.Value;
            lista.Add(empleado1);
            guardarFichero();
        }

        private void BtnEdad_Click(object sender, EventArgs e)
        {
            long edad = 0;
            TimeSpan ts = new TimeSpan(DateTime.Now.Ticks - datepickDatosPersonales.Value.Ticks);
            edad = (ts.Days / 365);
            MessageBox.Show("La edad que tiene el empleado es :" + edad);

        }

        private void BtnAntiguedad_Click(object sender, EventArgs e)
        {
            int meses = ((DateTime.Now.Year - datepickDatosEmpresa.Value.Year) * 12) + DateTime.Now.Month - datepickDatosEmpresa.Value.Month;
            MessageBox.Show("El empleado lleva estos " + meses + " meses trabajando en la empresa");
        }

        private void cboxSalario_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            if (cboxSalario.Text == "Empleado")
                txtbxsalario.Text = "1000";
            if (cboxSalario.Text == "Jefe departamento")
                txtbxsalario.Text = "1750";
            if (cboxSalario.Text == "Director")
                txtbxsalario.Text = "2500";
        }

        private void txtBoxRuta_TextChanged(object sender, EventArgs e)
        {

        }

        private void guardarFichero()
        {
            StreamWriter sw = File.CreateText(ruta);
            foreach (Empleado empleado in lista)
            {
                sw.WriteLine(empleado.fileString());
            }
            sw.Close();
        }

        private void txtbxsalario_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
