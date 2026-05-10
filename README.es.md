Español | [English](README.md)

# Star Wars blog reading list

[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![SWAPI](https://img.shields.io/badge/API-SWAPI-yellow?logo=starwars&logoColor=black)](https://swapi.dev/)

<br>

> **⚠️ Nota:** Este es un proyecto de aprendizaje antiguo (legacy) desarrollado durante mis primeros meses de desarrollo web como parte del bootcamp de Full Stack Developer en 4Geeks Academy. Lo mantengo como referencia de mi evolución técnica y mis inicios en el consumo de APIs y gestión de estados.

<br>

Panel interactivo que consume la API de Star Wars (SWAPI) para mostrar información sobre personajes, planetas y vehículos, incluyendo un sistema de gestión de favoritos.

<br>

## Vista Previa

![Project Preview](./screenshots/preview.png)

<br>

## Tecnologías

- React.js 18.2
- JavaScript (ES6+)
- Vanilla CSS (Estilos personalizados)
- Context API & useReducer
- SWAPI (Star Wars API)

<br>

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Antonio-Borrero/starwars-blog-reading-list.git
   ```
   
2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm run start
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador:

   - La aplicación se recargará automáticamente al modificar cualquier archivo.

<br>

## Características

- **Explorador Multicategoría:** Consumo dinámico y visualización de Personajes, Planetas y Vehículos.
- **Gestión Global de Favoritos:** Sistema para añadir y eliminar elementos de una lista de favoritos accesible desde cualquier parte de la aplicación.
- **Contador de Favoritos en Tiempo Real:** Contador dinámico en la barra de navegación que se actualiza instantáneamente.
- **Vista de detalles:** Rutas dinámicas específicas para explorar información extendida de cada entidad de Star Wars.
- **Operaciones CRUD:** Lógica funcional para manejar la interacción de datos (Me gusta / Eliminar / Ver) mediante estado global.

<br>

## Resultados de Aprendizaje

- **Arquitectura de Gestión de Estado:** Implementación de un patrón de "Store" escalable utilizando useContext y useReducer para manejar el estado global.
- **Manejo de Datos Asíncronos:** Experiencia en la gestión de respuestas de API complejas, manejo de estados de carga y mapeo de datos a componentes dinámicos.
- **Interfaz Declarativa y Enrutamiento:** Dominio de la naturaleza declarativa de React para sincronizar la interfaz de usuario con el estado y uso de React Router para una experiencia SPA (Single Page Application) fluida.
