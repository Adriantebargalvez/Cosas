using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EJERCICIO3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string precio;


            if (pequeña.Checked)
                textBox1.Text = ("vale 7 euros");
            else
            {
                if (mediana.Checked)
                    textBox1.Text = ("vale 9 euros");
                else
                {
                    if (familiar.Checked)
                        textBox1.Text=("vale 11 euros");
                }
            }
               
           
           
        }

        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {

        }
    }
}
