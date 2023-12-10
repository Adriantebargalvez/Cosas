package com.company;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

    class OrdenarPalabras {

        public static void main(String[] args) {

            Scanner sc = new Scanner(System.in);
            ArrayList<String> palabras = new ArrayList<String>();

            for (int i = 0; i < 10; i++) {
                System.out.println("Introduzca la palabra numero " + (i + 1));
                String palabra = sc.nextLine();
                palabras.add(palabra);
            }

            Collections.sort(palabras);

            System.out.println("Las palabras ordenadas son:");

            for (String palabra : palabras) {
                System.out.println(palabra);
            }
}
        }