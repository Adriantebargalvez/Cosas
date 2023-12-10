using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Examen2._2
{
    internal class Sala
    {
        String pelicula;

        public Sala(string pelicula)
        {
            this.pelicula = pelicula;
        }
       

        int aforo;

        public Sala(int aforo,int ocupadas)
        {
            this.aforo = aforo;
            this.ocupadas= ocupadas;

        }

        int ocupadas;
        float entrada;

        public Sala(float entrada)
        {
            this.entrada = entrada;
        }

        public string Pelicula { get => pelicula; set => pelicula = value; }
        public int Aforo { get => aforo; set => aforo = value; }
        public int Ocupadas { get => ocupadas; set => ocupadas = value; }
        public float Entrada { get => entrada; set => entrada = value; }

        public int butacasLibres()
        {
            return aforo - ocupadas;
        }
        public float porcentajeOcupacion()
        {
            return ocupadas*100/aforo;
        }
        public float ingresos()
        {
            return ocupadas * entrada;
        }
        public void vaciar()
        {
            ocupadas = 0;
        }
       
    }

   
}

