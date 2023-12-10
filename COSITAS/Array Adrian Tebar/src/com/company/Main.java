package com.company;

import java.util.ArrayList;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // Creamos un objeto Random
        Random rand = new Random();
        // Creamos un ArrayList
        ArrayList<Integer> arry = new ArrayList<Integer>();
        // Generamos numeros aleatorios entre 0 y 100
        while (true) {
            // Generamos un numero aleatorio entre 0 y 100
            int random = rand.nextInt(101);
            // Si el numero es igual a 50, salimos del while
            if (random == 50)
                break;
            // Añadimos el numero generado al ArrayList
            arry.add(random);
        }
        // Creamos un ArrayList auxiliar
        ArrayList<Integer> arrAux = new ArrayList<Integer>();
        // Recorremos el ArrayList
        for (int i = 0; i < arry.size(); i++) {
            // Si el numero es par
            if (arry.get(i) % 2 == 0)
                // Lo añadimos al principio del ArrayList auxiliar
                arrAux.add(0, arry.get(i));
            else // Si el numero es impar
                // Lo añadimos al final del ArrayList auxiliar
                arrAux.add(arry.get(i));
        }
        // Reemplazamos el ArrayList original por el auxiliar
        arry = arrAux;

        // Mostramos el ArrayList
        System.out.println("ArrayList: " + arry);
    }
}