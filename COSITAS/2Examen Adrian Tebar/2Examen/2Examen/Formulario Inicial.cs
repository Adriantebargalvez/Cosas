using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _2Examen
{
    public partial class Formulario_Inicial : Form
    {
        public Formulario_Inicial()
        {
            InitializeComponent();
        }

        private void Formulario_Inicial_Load(object sender, EventArgs e)
        {

        }

        private void crearFicheroToolStripMenuItem_Click(object sender, EventArgs e)
        {
          
           
        }
        private void guardarFichero()
        {


            //  guandar ficheros
            string fichero = "pelicula";

            if (!File.Exists(fichero))
            {
                File.Create(fichero);
                MessageBox.Show("Fichero creado.");
            }
            else
            {
                MessageBox.Show("El fichero ya existe.");
            }


        }
    }
}
