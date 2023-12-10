package com.company;

import java.util.ArrayList;
import java.util.Collections;
class array4 {

        public static void main(String[] args) {

            //creación de un array list
            ArrayList<Carta1> barajaEspañola = new ArrayList<Carta1>();


            //creación de 10 objetos de la clase Carta
            Carta1 c1 = new Carta1(1, "oros", "As");
            Carta1 c2 = new Carta1(2, "copas", "Dos");
            Carta1 c3 = new Carta1(3, "espadas", "Tres");
            Carta1 c4 = new Carta1(4, "bastos", "Cuatro");
            Carta1 c5 = new Carta1(5, "oros", "Cinco");
            Carta1 c6 = new Carta1(6, "copas", "Seis");
            Carta1 c7 = new Carta1(7, "espadas", "Siete");
            Carta1 c8 = new Carta1(8, "bastos", "Ocho");
            Carta1 c9 = new Carta1(9, "oros", "Nueve");
            Carta1 c10 = new Carta1(10, "copas", "sota");
            Carta1 c11 = new Carta1(10, "copas", "caballo");
            Carta1 c12 = new Carta1(10, "copas", "rey");

            //añadir los objetos al array list
            barajaEspañola.add(c1);
            barajaEspañola.add(c2);
            barajaEspañola.add(c3);
            barajaEspañola.add(c4);
            barajaEspañola.add(c5);
            barajaEspañola.add(c6);
            barajaEspañola.add(c7);
            barajaEspañola.add(c8);
            barajaEspañola.add(c9);
            barajaEspañola.add(c10);
            barajaEspañola.add(c11);
            barajaEspañola.add(c12);
            //creación de un arraylist para almacenar las cartas seleccionadas
            ArrayList<Carta1> cartasSeleccionadas = new ArrayList<Carta1>();

            while (cartasSeleccionadas.size()<10) {
                //generar un número aleatorio entre 0 y el tamaño del arraylist
                int indiceSeleccionado = (int) (Math.random()*barajaEspañola.size());

                //comprobar si el objeto seleccionado ya ha sido seleccionado
                boolean repetido = false;
                for (int i=0; i<cartasSeleccionadas.size(); i++) {
                    if (barajaEspañola.get(indiceSeleccionado) == cartasSeleccionadas.get(i)) {
                        repetido = true;
                    }
                }

                //si no ha sido seleccionado, añadirlo al array de cartas seleccionadas
                if (!repetido) {
                    cartasSeleccionadas.add(barajaEspañola.get(indiceSeleccionado));
                }
            }

            //ordenar el arraylist
            Collections.sort(cartasSeleccionadas);

            //imprimir las cartas seleccionadas
            for (int i=0; i<cartasSeleccionadas.size(); i++) {
                System.out.println(cartasSeleccionadas.get(i));
            }
        }
    }

    class Carta1 implements Comparable<Carta1> {
        int numero;
        String palo;
        String nombre;

        public Carta1(int numero, String palo, String nombre) {
            this.numero = numero;
            this.palo = palo;
            this.nombre = nombre;
        }

        public String toString() {
            return "Carta: " + nombre + " de " + palo;
        }


        public int compareTo(Carta1 c) {
            if (palo.compareTo(c.palo) == 0) {
                return numero - c.numero;
            } else {
                return palo.compareTo(c.palo);
            }
        }

    }




