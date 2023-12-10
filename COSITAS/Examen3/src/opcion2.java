import java.util.ArrayList;
import java.util.Scanner;

public class opcion2 {
   static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
//Hacemos la arraylist
        ArrayList<String> list = new ArrayList<String>();

        // Agregar algunos números
        list.add("");



        // Imprimir la lista
        System.out.println(list);
        // limite de 20 veces y preguntamos la palabra la que añadir a la lista y le decimos con un if que si pone salir que salga del programa
        for (int i = 1; i <= 20; i++) {

            System.out.println("Introduzca una palabra (o escriba 'salir' para terminar):");
            String palabra = sc.nextLine().toLowerCase();
            String palabra2 = sc.nextLine().toLowerCase();
            if (palabra.equals("salir")) {
                break;
            } else {
                list.add(palabra);
            }
            //preguntamos si existen
            System.out.println("Introduzca una palabra para comprobar si existe en la lista:");
            String palabraBuscada = sc.nextLine();
            if (list.contains(palabraBuscada)) {
                System.out.println("La palabra existe en la lista");
            } else {
                System.out.println("La palabra no existe en la lista");
            }

            Scanner scanner = new Scanner(System.in);
            //que intruduzca una letra y mostramos
            System.out.println("Introduce una letra para buscar productos: ");
            String letra = scanner.nextLine();

            System.out.println("Productos que contienen la letra '" + letra + "':");
            for (int S = 0; i < list.size(); i++) {
                System.out.println("Producto -> "  + list.get(i));
            }

                    }
        //para que salga cuando terminado
        System.out.println("Ya se a terminado");

            }
        }


