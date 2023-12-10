using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ejercicio2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int numero;
            numero = (int)numericUpDown1.Value *100 + (int)numericUpDown2.Value*10 + (int)numericUpDown3.Value;
            if (numero == 246) 
                textBox1.Text = numero.ToString("es correcta");
        else
                    textBox1.Text = numero.ToString("es incorrecta");

          } 
    }
}
