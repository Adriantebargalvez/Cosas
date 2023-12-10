using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;

namespace Examen2._2
{
    public partial class Ventas : Form
    {
        Sala[] arraysalas = new Sala[4];
        public Ventas()
        {
            InitializeComponent();
            this.arraysalas = arraysalas;
        }
       
       
        private void Guardar_Click(object sender, EventArgs e)
        {

            string nombreArchivo = "Salasdecine.txt";

            FileStream fs = File.Create(nombreArchivo);

        }

        private void button2_Click(object sender, EventArgs e)
        {
            
            
        }

        private void label2_Click(object sender, EventArgs e)
        {
           
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            
        }
    }
}
