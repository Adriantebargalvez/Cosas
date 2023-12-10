package com.company;

import java.util.Scanner;

public class Main {
    //scanner para que pueda leer durante todo el programa
    static Scanner sc = new Scanner(System.in);
    public static boolean esCapi(long e) {
        //Le digo que me devuelva
        return e == num(e);

    }
//Hacemos la funcion de la capicua que lo que hace es si el numero al reves es el mismo que derecho es tru sino false
    public static boolean esCapi(int r) {
        return esCapi((long) r);
    }


    public static long num(long qw) {
        if (qw < 0) {
            return -num(-qw);
        }
        long nume = 0;
        while (qw > 0) {
            nume = (nume * 10) + (qw % 10);
            qw = qw / 10;
        }
        return nume;
    }
    //hacemos la funcion del primo que son aquellos que solo se pueden dividir por sí mismos
    public static boolean esPrimo(long w){
        if (w<2){
            return false;
        }
        else{
            for (long i = w/2; i >= 2;i --){
                if (w % i == 0){
                    return false;
                }
            }
        }
        return true;
    }
    //Hacemos la funcion de la potencia le vamos a pedir la base y el exponente y lo calculamos
    public static double Potencia(int Base,int exponente){
        int q=1;
        for (int i = 0; i < exponente; i++) {
            q=(q*Base);}
        return q;
    }
    //hacemos la funcion de quitar los numeros que nos diga el usuario al numero por detras
    public static long quitaDetras(long L,int Q){
        return L/ (int) Potencia(10,Q);
    }
    public static int quitaDetras(int L,int Q){
        return (int) quitaDetras((long)L, Q);
    }
    //hacemos la funcion de quitar los numeros que nos diga el usuario al numero por detras
    public static int quitaDelante(int S,int D){
        return (int)quitaDelante((long)S,D);
    }
    public static long quitaDelante(long S,int D){
        S=num(quitaDetras(num(S),D));
        return S;
    }

    public static void main(String[] args) {
//creamos el menu para que el usuario lo visualice

        int a, b, numeroInvertido,numero;
        numeroInvertido = 0;
        numero = 0;
        System.out.println("1-EsCapicua");
        System.out.println("2-EsPrimo");
        System.out.println("3-potencia");
        System.out.println("4-quitar por delante");
        System.out.println("5-Quitar por detras");
        a = sc.nextInt();
        //Hacemos un switch con las opciones
switch (a){
    //capicua que pregunte y de el resultado
    case 1:
        System.out.println("Dime y te dire si es capicua");
        int x =sc.nextInt();
        System.out.println("El resultado es:"+ esCapi(x));
        break;
    case 2:
        //primo que pregunte y de el resultado
        System.out.println("Dime un numero entero y te dire si es Primo");
        int P =sc.nextInt();
        System.out.println("El resultado es:"+ esPrimo(P));
        break;
    case 3:
        //base que pregunte y de el resultado
        System.out.println("Dime la BASE");
        int base =sc.nextInt();
        System.out.println("Dime el exponente y te dire la Potencia");
        int exponente = sc.nextInt();
        System.out.println("El resultado es:"+ Potencia(base,exponente));
        break;
    case 4:
        //quitar numeros pr delante que pregunte y de el resultado
    System.out.println("Introduce los numeros");
    int S =sc.nextInt();
    System.out.println("Cuantos numeros quieres quitar");
    int D=sc.nextInt();
    System.out.println("El resultado es " + quitaDelante(S,D));
    break;
    case 5:
        //quitar numeros pr Detras que pregunte y de el resultado
        System.out.println("Introduce los numeros");
        int L = sc.nextInt();
        System.out.println("Cuantos numeros quieres quitar");
        int Q =sc.nextInt();
        System.out.println("El resultado es " + quitaDetras(L,Q));
        break;
    default:
        //para que cuando ponga un numero que no esta en el switch que ponga no valido
        System.out.println("No valido");

}
    }


}

