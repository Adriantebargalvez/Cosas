using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows.Forms.VisualStyles;

namespace WindowsFormsApp1
{
    public partial class Empresa : Form
    {
        List<Empleado> lista = new List<Empleado>();
        String ruta = "empleados.txt";


        public Empresa()
        {
            Empleado empleado = new Empleado();
            InitializeComponent();
            cargarFichero();
        }

        private void Empresa_Load(object sender, EventArgs e)
        {

        }

        private void dATOSPERSONALESToolStripMenuItem_Click(object sender, EventArgs e)
        {
         Datos datos = new Datos(lista);
            datos.MdiParent = this;
            datos.Show();
        }

        private void nOMINAToolStripMenuItem_Click(object sender, EventArgs e)
        {
         Nominas nomina = new Nominas(lista);
            nomina.MdiParent = this;
            nomina.Show();
        }
        private void cargarFichero()
        {

            lista.Clear();
            StreamReader sr = File.OpenText(ruta);
            String linea = sr.ReadLine();
            while (linea != null)
            {
                String [] trozos = linea.Split(':');
                Empleado empleado1 = new Empleado();
                empleado1.Nombre1 = trozos[0];
                empleado1.Apellidos1 = trozos[1];
                empleado1.Fecha_Nacimiento1 = DateTime.Parse(trozos[2]);
                empleado1.Fecha_Alta1 = DateTime.Parse(trozos[3]);
                empleado1.Salario1 = Int32.Parse(trozos[4]);
                empleado1.PersonasAdministracion1 = Int32.Parse(trozos[5]);
                empleado1.PersonasMantenimiento1 = Int32.Parse(trozos[6]);
                empleado1.Comerciales1 = Int32.Parse(trozos[7]);
                empleado1.PersonasProduccion1 = Int32.Parse(trozos[8]);
                lista.Add(empleado1);
                linea = sr.ReadLine();
            } sr.Close();
        }
    }
        

}

