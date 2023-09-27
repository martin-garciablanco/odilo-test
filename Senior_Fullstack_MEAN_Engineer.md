ODILO Senior Fullstack MEAN Engineer Test

## Como arrancar el proyecto

### Server

- Entrar en la carpeta server y ejecutar:
  - yarn
  - yarn start
- Para ejecutar los tests:
  - yarn test

### Client

- Entrar en la carpeta client y ejecutar:
  - yarn
  - yarn ng serve
- Para ejecutar los tests:
  - yarn cypress:run

</br>
</br>

## Club de lectura

Se quiere implementar una aplicación de un club de lectura, donde usuarios podrán entrar a esta plataforma y navegar por los diferentes clubs de lectura, donde podrás encontrar cientos/miles de clubs potencialmente.

Partimos entonces, de usuarios y clubs como modelo de datos.

Este proyecto parte con un cliente en angular y la parte servidor en node 12 y mongodb, ambos funcionales.

El arquetipo funcional está en la carpeta resources/Senior_Fullstack_MEAN. Descargalo en un repo personal y trabaja sobre esa versión.

Requerimiento no funcional: Se asume que el proyecto potencialmente podría tener altas volumetrías de usuarios o clubs.

Implementar:

- Listar todos los clubs de lectura en la home, diferenciando entre los que sigue el usuario y los que no sigue

- Permitir a un usuario seguir un club de lectura concreto y reflejarlo en la interfaz
