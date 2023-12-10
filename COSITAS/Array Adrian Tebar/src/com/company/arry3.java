package com.company;

import java.util.ArrayList;

public class arry3 {

    public static void main(String[] args) {

        //creación de un array list
        ArrayList<Carta> barajaEspañola = new ArrayList<Carta>();


    //creación de 10 objetos de la clase Carta
    Carta c1 = new Carta(1, "oros", "As");
    Carta c2 = new Carta(2, "copas", "Dos");
    Carta c3 = new Carta(3, "espadas", "Tres");
    Carta c4 = new Carta(4, "bastos", "Cuatro");
    Carta c5 = new Carta(5, "oros", "Cinco");
    Carta c6 = new Carta(6, "copas", "Seis");
    Carta c7 = new Carta(7, "espadas", "Siete");
    Carta c8 = new Carta(8, "bastos", "Ocho");
    Carta c9 = new Carta(9, "oros", "Nueve");
    Carta c10 = new Carta(10, "copas", "Diez");

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

    //creación de un arraylist para almacenar las cartas seleccionadas
    ArrayList<Carta> cartasSeleccionadas = new ArrayList<Carta>();

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

    //imprimir las cartas seleccionadas
        for (int i=0; i<cartasSeleccionadas.size(); i++) {
        System.out.println(cartasSeleccionadas.get(i));
    }
}
}

class Carta {
    int numero;
    String palo;
    String nombre;

    public Carta(int numero, String palo, String nombre) {
        this.numero = numero;
        this.palo = palo;
        this.nombre = nombre;
    }

    public String toString() {
        return "Carta: " + nombre + " de " + palo;
    }

    }




