# ODILO Senior Fullstack MEAN Engineer Test

<br/>

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

## Mejoras Propuestas

### Server

- Movería todo el proyecto de JavaScript a TypeScript, para tener todo bien tipado.
- Haría refactor hacia una Clean-Architecture con Vertical-Slicing para evitar que todo esté acoplado.
- Dejaría atrás el codigo legacy en ES5 e iría migrando todo a ES6 de forma progresiva.

### Client

- Actualizaría Angular hasta mínimo la versión v15.0.0 ya que es la primera que Node12 la actual LTS puede ejecutar
- Cambiaría Jest por Karma
  - Jest es de 2 a 3 veces más rápido ya que no utiliza un navegador, esto ahorra tiempo en local en en PipeLines
  - La comunidad de Jest es bastante más grande y su repositorio se actualiza más frecuentemente
- Por temas de performance en el navegador partiría los scss para que cada componente solo renderice el suyo cuando sea necesario
- La carpeta app parece muy desordenada, aplicaría un refactor para tener algo similar a
  - app
    - routes
      - home
        - home.component.html
        - home.component.ts
        - home.component.scss
    - user
      - userService.ts
      - components
        - user.component.html
        - userService.component.ts
        - userService.component.scss

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
