import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class cita {

        private String nombreCliente;
        private String servicio;
        private static Date fecha;

        public cita(String nombreCliente, String servicio, String fecha) {
            this.nombreCliente = nombreCliente;
            this.servicio = servicio;
            try {
                SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
                this.fecha = formatter.parse(fecha);
            } catch (ParseException e) {
                System.out.println("Error: formato de fecha inválido.");
                this.fecha = null;
            }
        }

        public String getNombreCliente() {
            return nombreCliente;
        }

        public String getServicio() {
            return servicio;
        }

        public static Date getFecha() {
            return fecha;
        }
}
