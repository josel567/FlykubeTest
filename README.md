# FlykubeTest
### Flykube Technical Assessment

#### Instrucciones para arrancar el proyecto
Iniciar el servidor en modo desarrollo es muy simple.
1. Descargamos la carpeta del proyecto y entramos en ella.
2. Instalamos las dependencias necesarias mediante el comando `npm install`
3. Iniciamos el servidor mediante nodemon con el comando `npm start`

La API REST cuenta con tan solo tres endpoints:
1. `.../places/{queryString}` : Mediante el String introducido en la ruta el endpoint devuelve las 'places' encontradas y las almacena en la base de datos.
2. `.../places` : Devuelve todas las 'places' de la base de datos.
3. `.../quotes` : Recibe en el 'body' un objeto con la siguiente estructura:
	```
	{
		"originplace": "BCN-sky",
		"destinationplace": "MAD-sky",
		"outboundpartialdate": "2020-01-15",
		"inboundpartialdate" : "2020-01-20"
	}
	```
	El endpoint devuelve las 'quotes' encontradas y las almacena en la base de datos.
	
_Soy consciente de que dentro del servicio 'FlightService' no debería estar la persistencia de datos. La persistencia debería ir en un servicio aparte con su propia interfaz y a su vez nuevos 'UseCase' para desacoplarlo pero no lo he podido hacer por falta de tiempo._