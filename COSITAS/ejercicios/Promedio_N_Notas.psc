Algoritmo Promedio_N_Notas
	definir prom Como Real
	definir n Como Real
	Definir acum Como Entero
	acum<-1
	suma<-0
	Escribir "�Cuantas notas desea promediar?"
	leer notas
	mientras acum <=notas Hacer
		Escribir "Ingrese la nota n�mero ",acum
		leer n
		suma<-suma+n
		acum<-acum+1
	FinMientras
	prom<- suma / notas
	Escribir "El promedio es: ",prom
	Si prom >=3 Entonces
		Escribir "El estudiante gan� la materia"
	SiNo
		Escribir "El estudiante perdi� la materia"
	FinSi
FinAlgoritmo
