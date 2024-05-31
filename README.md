# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- Crea una aplicación con **viteJs** o create-react-app -[x]
- Instalar la(s) librería(s) necesarias para hacer peticiones asíncronas -[x]  
- El endpoint de la API anteriormente nombrada, necesita una latitud y una longitud y una api KEY
    - Respecto de la latitud y longitud todo se ve en la sección anterior
    - Respecto de la Api Key, también leer la sección anterior
- Una vez que hacemos la petición asíncrona tanto de la latitud y longitud, como de la información del clima, desplegamos la información en nuestra aplicación (Abrir para ver imagen)
    
    ### La información que se debe desplegar es:
    
    - Ciudad y país
    - Condición del clima
    - Velocidad del viento
    - Porcentaje de nubes
    - Presión atmosférica
    - Temperatura actual
    
    ![img](https://prod-files-secure.s3.us-west-2.amazonaws.com/0640d539-599c-477d-b514-cd74b15ced93/7ca5f39c-c260-47be-a819-a49cd8e28f93/Untitled.png)
    
- Una de las opciones mas importantes que desplegar es la temperatura, por lo tanto debemos crear un botón que cambie la temperatura de grados Celsius a grados Farenheit y viceversa. (Ver imagen del punto anterior)
