Algoritmo sin_titulo
	Repetir
	Escribir "1 - Area del rectangulo(Base*Altura)"
	Escribir "2.- Area del cuadrado (Lado * Lado)"
	Escribir "3.- Area del triangulo (Base * Altura / 2)"
	Escribir "4.- Area del circulo (Pi * R2)"
	Escribir "5.- Area del Rombo (Diagonal mayor * Diagonal menor / 2)"
	Escribir "0.- Salir."
	leer num

	
	Segun num hacer 
		1:
			escribir"cual es la base"
			leer base
			escribir"cual es la altura"
			leer altura
			resul<-base*altura
			escribir"es ",resul
		2:
			escribir "dime el lado"
			leer lado1
			escribir "dime el otro lado"
			leer lado2
			result<-lado1*lado2
			escribir"es",result
		3:
			escribir"dime lado"
			leer lado
			escribir"dime altura"
			leer altura
			result<-lado*altura/2
			escribir"es ",result
		4:
			escribir"dime r2"
			leer r2
			p<-3.14
			result<-p*r2
			escribir"es ",result
		5:
			escribir"dime la diagolan mayor"
			leer m
			escribir"dime la diagonal menor"
			leer me
			result<-m*me/2
			escribir"es ",result
		0:
			escribir "has salido"
		
			
		De Otro Modo:
			Escribir"esta opcion no es valida"
		
		
	Fin Segun
Hasta Que num=0
	
FinAlgoritmo
