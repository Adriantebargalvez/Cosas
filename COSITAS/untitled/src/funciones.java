import java.util.*;

public class funciones {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        boolean ganar = false;
        int intentos = 0;

        do {

//Hacemos las variables y los arrays y la lista
            String[] array = new String[5];
            String[] introducircolo = new String[5];
            String[] simbolos = new String[5];


            List<String> lista = new ArrayList<>();
            lista.add("Blanco");
            lista.add("Amarillo");
            lista.add("Naranja");
            lista.add("Rosa");
            lista.add("Rojo");
            lista.add("Verde");
            lista.add("Azul");
            lista.add("Negro");
            array=random(lista);
            preguntar();
            simbolo();
            ganryperder();



            //Si intentos es menor que 5 y aun no a ganado sige el programa
        }while(intentos<5 && ganar==false);




    }
    public static String[] random (List<String> lista){
        //Hacemos un random de la lista
        String[]array =new  String[5];
        for (int i = 0; i < 5; i++) {
            Random random = new Random();
            int numeroRandom = random.nextInt(lista.size());
            array[i] = lista.get(numeroRandom);
            lista.remove(numeroRandom);
        }
        return array;
    }
    public static void preguntar(){
        String[] introducircolo = new String[5];
        //Preguntamos los colores que cree que es
        System.out.println("Dime 5 colores y haber si lo adivinas");
//Introducir color
        for (int i = 0; i < 5; i++) {
            introducircolo[i] = sc.next();

        }
    }
    public static void simbolo(){
        //Segun si coincide pones * sino nada y si esta pero no en el puesto /
        String[] introducircolo = new String[5];
        String[] simbolos = new String[5];
        String[] array = new String[5];
        for (int i = 0; i < 5; i++) {
            if (introducircolo[i].equals(array[i])) {
                simbolos[i] = "*";
            } else if (Arrays.asList(array).contains(introducircolo[i])) {
                simbolos[i] = "/";
            } else {
                simbolos[i] = " ";
            }
            System.out.println(Arrays.toString(simbolos));
        }

    }
    public static void ganryperder(){
        String[] array = new String[5];
        String[] introducircolo = new String[5];
        boolean ganar = false;
        int intentos = 0;
        //Ganar y perder
        if (Arrays.equals(array, introducircolo)) {
            ganar = true;
            System.out.println("Felicidades has ganado");
        } else{
            intentos++;
        }
        if (intentos == 5) {
            System.out.println("Oh, lo siento has perdido");
        }
    }
}

