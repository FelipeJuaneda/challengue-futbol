# ATC Dream Match

## Introducción

**ATC Dream Match** es una web app desarrollada para el desafío de **Alquila tu Cancha**, en la que los usuarios pueden crear "El partido de tus sueños", un enfrentamiento de fútbol 5 entre sus 10 jugadores favoritos. La aplicación es responsive, tanto para escritorio como para dispositivos móviles.

## Funcionalidades Implementadas

- **Bienvenida al usuario**: La app ofrece una pantalla de bienvenida amigable.
- **Listar equipos creados**: Los usuarios pueden ver una lista de los equipos que han creado.
- **Crear equipos**: Los usuarios pueden crear hasta dos equipos, asignándoles nombres y editándolos si es necesario.
- **Eliminar equipos**: Los usuarios pueden eliminar equipos creados.
- **Restricciones de equipo**: La aplicación impide la creación de más de dos equipos y asegura que cada equipo tenga exactamente 5 jugadores.
- **Detalle de equipos**: Muestra el listado de jugadores vinculados a cada equipo.
- **Vincular jugadores a equipos**: Los usuarios pueden vincular jugadores a un equipo desde una lista de jugadores obtenida de la API de [API Football](https://apifootball.com/documentation/).
- **Visualización gráfica**: La app comunica gráficamente cuando ambos equipos están formados y completos.

## Tecnologías Utilizadas

- **Next.js con TypeScript**: Framework utilizado para construir la aplicación web.
- **Tailwind CSS**: Utilizado para el diseño y estilo de la aplicación.
- **Docker**: Para la contenedorización de la aplicación y facilitar su despliegue.
- **Git**: Para el control de versiones.

## Instrucciones para Levantar el Proyecto

### Requisitos Previos

- Docker instalado en tu máquina
- Node.js y npm instalados

### Pasos para Ejecutar el Proyecto

1. **Clonar el repositorio e ingresar a la carpeta**:
   ```bash
   git clone https://github.com/FelipeJuaneda/challengue-futbol.git
   cd challengue-futbol

 2. **Ejecutar la aplicación con Docker**:
      ```bash
      docker-compose up --build
      
-La aplicación estará disponible en http://localhost:3000.

  3. **Ejecutar la aplicación con Docker**:
     ```bash
       npm run dev
-La aplicación estará disponible en http://localhost:3000.

