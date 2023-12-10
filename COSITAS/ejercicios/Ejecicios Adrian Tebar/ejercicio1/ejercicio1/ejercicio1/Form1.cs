using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Text;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ejercicio1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int mes=comboBox1.SelectedIndex;
            mes++;
            switch (mes)
            { 
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    MessageBox.Show("este mes tiene 31");
                    break;
                case 7:
                case 8:
                    MessageBox.Show("est mes tiene 28");
                    break;
                case 10:
                case 9:
                case 11:
                    MessageBox.Show("este mes es de 30 dias");
                    break;
                
                


            }

        }
    }
}
