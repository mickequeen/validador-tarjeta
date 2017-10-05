## Validador de Tarjeta

#### Este Archivo contiene
		-Pseudocódigo de función para validar tarjetas
		-Número de versión
		-Diagrama de Flujo



```
inicio funcion isValidCard 
		 
		se solicita datos de tarjeta al usuario
			si cumple con condición de no estar vacía y ser número se ejecuta lo siguiente:
				recorrer el número de tarjeta y calcular mediante algoritmo de Luhn que los dígitos sean válidos
				si el número de tarjeta es válido
				imprimir que tarjeta es válida
				sino imprimir que no es válida
			si no cumple condición inicial, se arroja mensaje de error para que ingrese parámetros válidos

		si los datos ingresados por usuario no son numéricos o está vacía la variable retornar al inicio donde se solicitarán datos nuevamente

fin función 

```

#### Diagrama de flujo
![Diagrama de flujo tarjeta de crédito](http://subirimagen.me/uploads/20171005085209.png)
#### versión `0.0.1`
##### Creado por Carol Martínez
###### Squad 5to Elemento