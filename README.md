# Nombre del Proyecto

Descripción breve del proyecto.

## Tabla de contenidos

- [Nombre del Proyecto](#nombre-del-proyecto)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Descripción del proyecto](#descripción-del-proyecto)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Funcionalidades](#funcionalidades)
      - [Geolocalización](#geolocalización)
      - [Solicitud de datos](#solicitud-de-datos)
  - [Contribuyendo Marco Cruz](#contribuyendo-marco-cruz)

## Descripción del proyecto

Proporciona una descripción más detallada del proyecto, incluyendo su propósito, las tecnologías utilizadas y cualquier otra información relevante.

## Instalación

1. Clona el repositorio: `https://github.com/marcobou89/entregable-2`
2. Navega al directorio del proyecto: `https://entregable-2-mcruz.netlify.app`
3. Instala las dependencias: `npm install`

## Uso

Proporciona instrucciones sobre cómo usar el proyecto, incluyendo cómo iniciar el servidor de desarrollo, abrir el navegador en la URL correcta, etc.

## Funcionalidades

Lista las funcionalidades principales del proyecto y cómo se utilizan. Por ejemplo:

- Geolocalización: El proyecto utiliza la API de geolocalización para obtener la ubicación del usuario.
- Solicitud de datos: El proyecto realiza solicitudes a una API externa para obtener datos adicionales.

#### Geolocalización

- Se utiliza la API de geolocalización para obtener la ubicación del usuario.
- Se utiliza la función `navigator.geolocation.getCurrentPosition()` para obtener la ubicación actual.
- Se almacena la latitud y longitud en el estado del componente principal.

#### Solicitud de datos

- Se realiza una solicitud a la API externa utilizando la biblioteca Axios.
- Se utiliza el estado del componente principal para pasar los valores de latitud y longitud a la URL de la solicitud.

## Contribuyendo Marco Cruz