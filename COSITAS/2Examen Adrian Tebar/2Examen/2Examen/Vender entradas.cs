using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace _2Examen
{
    public partial class Vender_entradas : Form
    {
        public Vender_entradas()
        {
            InitializeComponent();
        }
        
       


        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            Form1 menu = new Form1();
            menu.ShowDialog();
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            //Al elejir la sala sale l informacion
            if (comboBox1.SelectedIndex == 0)
            {
                 label5.Text = "45";
                label6.Text = "18";
               


            }
            if (comboBox1.SelectedIndex == 1)
            {
                label5.Text = "45";
                label6.Text = "18";
            }
            if (comboBox1.SelectedIndex == 2)
            {
                label5.Text = "45";
                label6.Text = "25";
            }
            if (comboBox1.SelectedIndex == 3)
            {
                label5.Text = "45";
                label6.Text = "11";
            }
            if (comboBox1.SelectedIndex == 4)
            {
                label5.Text = "45";
                label6.Text = "15";
            }

        }
        
        }
    }
    

