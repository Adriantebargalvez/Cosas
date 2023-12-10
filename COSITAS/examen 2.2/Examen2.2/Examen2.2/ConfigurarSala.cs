using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Examen2._2
{
    public partial class ConfigurarSala : Form
    {
        Sala[] arraysalas = new Sala[4];
        public ConfigurarSala()
        {
            InitializeComponent();
            this.arraysalas = arraysalas;
        }
       
        
        private void ConfigurarSala_Load(object sender, EventArgs e)
        {

        }

        private void Terminado_Click(object sender, EventArgs e)
        {
            

        }
    }
}
