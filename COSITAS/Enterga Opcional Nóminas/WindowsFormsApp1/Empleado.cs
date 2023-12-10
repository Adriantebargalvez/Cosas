using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WindowsFormsApp1
{

    public class Empleado
    {
        private String Nombre = "";
        private String Apellidos = "";
        private DateTime Fecha_Nacimiento;
        private DateTime Fecha_Alta;
        private double Salario;
        private int PersonasAdministracion;
        private int PersonasMantenimiento;
        private int Comerciales;
        private int PersonasProduccion;

        public Empleado()
        {
        }

        public Empleado(string Nombre, string Apellidos, DateTime Fecha_Nacimiento, DateTime Fecha_Alta, double Salario, int PersonaAdministracion, int PersonasMantenimiento, int Comerciales, int PersonasProduccion)
        {
            this.Nombre = Nombre;  
            this.Apellidos = Apellidos;
            this.Fecha_Nacimiento = Fecha_Nacimiento;   
            this.Fecha_Alta = Fecha_Alta;
            this.Salario = Salario;
            this.PersonasAdministracion = PersonaAdministracion;
            this.PersonasMantenimiento = PersonasMantenimiento;
            this.Comerciales = Comerciales;
            this.PersonasProduccion = PersonasProduccion;
        }

        public string Nombre1 
        { 
            get => Nombre; 
            set => Nombre = value; 
        }
        public string Apellidos1 
        { 
            get => Apellidos;
            set => Apellidos = value; 
        }
        public DateTime Fecha_Nacimiento1 
        { 
            get => Fecha_Nacimiento;
            set => Fecha_Nacimiento = value; 
        }
        public DateTime Fecha_Alta1 
        {
            get => Fecha_Alta;
            set => Fecha_Alta = value; 
        }
        public double Salario1 
        { 
            get => Salario; 
            set => Salario = value; 
        }
        public int PersonasAdministracion1
        { 
            get => PersonasAdministracion; 
            set => PersonasAdministracion = value; 
        }
        public int PersonasMantenimiento1 
        { 
            get => PersonasMantenimiento; 
            set => PersonasMantenimiento = value; 
        }
        public int Comerciales1 
        {
            get => Comerciales; 
            set => Comerciales = value; 
        }
        public int PersonasProduccion1 
        { 
            get => PersonasProduccion;
            set => PersonasProduccion = value; 
        }

        public String fileString()
        {
            String linea = Nombre1 + ":" + Apellidos1 + ":" + Fecha_Nacimiento1.Day + "/" + Fecha_Nacimiento1.Month + "/" + Fecha_Nacimiento1.Year + ":" + Fecha_Alta1.Day + "/" + Fecha_Alta1.Month + "/" + Fecha_Alta1.Year + ":" + Salario1 + ":" + PersonasAdministracion1 + ":" + PersonasMantenimiento1 + ":" + Comerciales1 + ":" + PersonasProduccion1;
            return linea;
        }
 
        
    }
}
