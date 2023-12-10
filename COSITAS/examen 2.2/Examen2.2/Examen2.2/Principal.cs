using System.Xml.Linq;

namespace Examen2._2
{
    public partial class Principal : Form
    {
        Sala[] arraysalas = new Sala[4];
        public Principal()
        {
            InitializeComponent();
            this.arraysalas =arraysalas;
        }
      



        private void Form1_Load(object sender, EventArgs e)
        {
            
  
       
        }

        private void configurarSalaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            ConfigurarSala menu = new ConfigurarSala(arraysalas);
            menu.ShowDialog();
        }

        private void ventaDeEntradasToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Ventas menu = new Ventas(arraysalas);

            menu.Show();
        }
        public void limpiar()
        {
            configurarSalaToolStripMenuItem= new System.Windows.Forms.ToolStripMenuItem();
        }
    }
}