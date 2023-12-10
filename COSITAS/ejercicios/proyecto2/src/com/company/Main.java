package com.company;

import java.util.Scanner;

public class Main {
    //scanner para que pueda leer
    static Scanner sc = new Scanner(System.in);


    public static void main(String[] args) {
	// write your code here
        //hacemos el menu
        int a,b,numeroInvertido,numero;
        numeroInvertido=0;
        numero=0;
        System.out.println("1-EsCapicua");
        System.out.println("2-EsPrimo");
        System.out.println("3-potencia");
        System.out.println("4-quitar por delante");
        System.out.println("5-Quitar por detras");
        a=sc.nextInt();
        //hacemos un switch para poner las opciones
        switch (a){
            //Hacemos la operacion capicua
            case 1:
                int N, aux, inverso = 0, cifra;

                do {
                    System.out.print("Introduce un número >= 10: ");
                    N = sc.nextInt();
                } while (N < 10);

                //le damos la vuelta al número
                aux = N;
                while (aux!=0){
                    cifra = aux % 10;
                    inverso = inverso * 10 + cifra;
                    aux = aux / 10;
                }

                if(N == inverso){
                    System.out.println("Es capicua");
                }else{
                    System.out.println("No es capicua");
                }
                break;
                //hacemos la operacion del numero primo
            case 2:
                int contador= 2;
                System.out.println("dime un numero");
                numero = sc.nextInt();
                boolean primo=true;
                while ((primo) && (contador!=numero)){
                    if (numero % contador == 0)
                        primo = false;
                    contador++;
                    System.out.println(primo);
                }
                break;
                //hacemos la operacion de la elevacion de un numero
            case 3:
                int base;
                System.out.println("Dime base");
                base=sc.nextInt();
                double numero1 = base;
                Double cuadrado = Math.pow(numero1, 2);
                System.out.println(base+" elevado al cuadrado es " + cuadrado);
                break;
                //hacemos la operacion de quitar los numeros que le digas a un numero por detras
            case 4:
                System.out.println("dime un numero");
                b= sc.nextInt();
                System.out.println("Dime cuantos numeros le quito");
                a=sc.nextInt();
                String s=Integer.toString(b);
                System.out.println(s.substring(0,s.length()-a));
                break;
                //hacemos la operacion de quitar los numeros que le digas a un numero por delante
            case 5:
                System.out.println("dime un numero");
                b= sc.nextInt();
                System.out.println("Dime cuantos numeros le quito");
                a=sc.nextInt();
                s=Integer.toString(b);
                System.out.println(s.substring(a,s.length()));
                break;
        }






    }

    }











