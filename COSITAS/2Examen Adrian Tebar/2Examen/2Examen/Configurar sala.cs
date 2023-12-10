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
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace _2Examen
{
    public partial class Configurar_sala : Form
    {

        public Configurar_sala()
        {
            InitializeComponent();

        }
     //lista

        List<Sala> lista = new List<Sala>();

       
        private void Configurar_sala_Load(object sender, EventArgs e)
        {

        }

        private void Guardar_Click(object sender, EventArgs e)
        {
            //Agregar a lista
            lista.Add(new Sala());
           
        }
            private void button2_Click(object sender, EventArgs e)
            {
            //borrar lista
             lista.RemoveAt(0);


        }




        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
            //Pra que cuando selecione las salas le apareccan los datos
        {
           if( comboBox1.SelectedIndex == 0)
            {
                textBox1.Text = "caperucita";
                numericUpDown2.Value = 18;
                numericUpDown1.Value = 45;
            }
            if (comboBox1.SelectedIndex == 1)
            {
                textBox1.Text = "lobo y la niña";
                numericUpDown2.Value = 18;
                numericUpDown1.Value = 45;
            }
            if (comboBox1.SelectedIndex == 2)
            {
                textBox1.Text = "Totugas ninja";
                numericUpDown2.Value = 11;
                numericUpDown1.Value = 45;
            }
            if (comboBox1.SelectedIndex == 3)
            {
                textBox1.Text = "La totuga";
                numericUpDown2.Value = 15;
                numericUpDown1.Value = 45;
            }
            if (comboBox1.SelectedIndex == 4)
            {
                textBox1.Text = "Spiderman";
                numericUpDown2.Value = 6;
                numericUpDown1.Value = 45;
            }
        }
    }
    } 


