using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Nominas : Form
    {
        private Empleado[] empleados;
        private List<Empleado> lista;

        public Nominas(List<Empleado> lista2)
        {
            InitializeComponent();
            this.lista = lista2;
            rellenarComboBox();
        }

        public Nominas(Empleado[] empleados)
        {
            this.empleados = empleados;
        }

        private void CBoxEmpleado_SelectedIndexChanged(object sender, EventArgs e)
        {
            Empleado empleadoElegido = lista[CBoxEmpleado.SelectedIndex];
            txtBoxSalarioBase.Text = empleadoElegido.Salario1.ToString();
            double prestaciones;
            int meses = ((DateTime.Now.Year - empleadoElegido.Fecha_Alta1.Year) * 12) + DateTime.Now.Month - empleadoElegido.Fecha_Alta1.Month;
            if(meses > 3)
            {
                prestaciones = (5 * empleadoElegido.Salario1 / 30) * (meses - 3);
            }
            else
            {
                prestaciones = 5 * empleadoElegido.Salario1 / 30;
            }
            double nomina = empleadoElegido.Salario1 * (empleadoElegido.PersonasAdministracion1 + empleadoElegido.PersonasMantenimiento1 + empleadoElegido.Comerciales1 + empleadoElegido.PersonasProduccion1) * 0.05;
            double salarioTotal = prestaciones + nomina + empleadoElegido.Salario1;
            txtBoxPrestaciones.Text = "" + prestaciones;
            txtBoxNomina.Text = "" + nomina;
            txtBoxSalarioTotal.Text = "" + salarioTotal;
            
         



        }
        private void rellenarComboBox()
        {
            CBoxEmpleado.Items.Clear();
            CBoxEmpleado.SelectedItem = "";
            foreach (Empleado empleado in lista)
            {
                CBoxEmpleado.Items.Add(empleado.Nombre1 + " " + empleado.Apellidos1);
            }
            
        }

        private void txtBoxNomina_TextChanged(object sender, EventArgs e)
        {

        }

        private void txtBoxSalarioTotal_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
