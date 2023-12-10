namespace _2Examen
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        //lista crear
        List<Configurar_sala> salas = new List<Configurar_sala>()
    {
        new Sala() { SalaId = 1, Pelicula = "caperucita", Aforo = 45, Precio = 0 },
        new Sala() { SalaId = 2, Pelicula = "el lobo ", Aforo = 35, Precio = 0 },
        new Sala() { SalaId = 3, Pelicula = "la abeja ", Aforo = 67, Precio = 0 },
        new Sala() { SalaId = 4, Pelicula = "cocodrilo", Aforo = 23, Precio = 0 },
        new Sala() { SalaId = 5, Pelicula = "leopardo", Aforo = 23, Precio = 0 }
    };
        

        private void Form1_Load(object sender, EventArgs e)
        {
         
        }

        private void formularioInicialToolStripMenuItem_Click(object sender, EventArgs e)
        {
            //crear fichero
            string nombreArchivo = "peliculas.txt";

            if (File.Exists(nombreArchivo))
            {
                FileStream fs = File.Create(nombreArchivo);
                fs.Close();
                MessageBox.Show("FICHERO CREADO");
               
            }
            else
            {
                 MessageBox.Show("EL FICHERO YA EXISTE");
            }
        
    }
              

        private void configuracionDeSalaToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Configurar_sala menu = new Configurar_sala();
            menu.ShowDialog();
            
        
    
    }

    private void venderEntradasToolStripMenuItem_Click(object sender, EventArgs e)
        {
           Vender_entradas menu = new Vender_entradas();
            menu.ShowDialog();
        }

     
    }
}