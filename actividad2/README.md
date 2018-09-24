# Actividad 2

## Abrir una rama y usar rebase

Para ejemplificar este escenario abriremos una rama que contenga un cambio pequeño dentro de un componente y también haremos cambios
directamente sobre master, en este caso el cambio sobre master representa código subido por otro integrante del equipo.

Empezamos abriendo una rama para trabajar sobre el archivo **src/app/intro/intro.component.html**

```
    git checkout -b feature-contenido-intro
```

Cambiaremos el texto del último parrafo de la página intro para que tenga un contenido descriptivo de nuestro sitio web.

```
    Este sitio web es un ejemplo para poder planificar un escenario de pruebas para trabajar con ramas y hacer un rebase
    usando las herramientas de git.

```

Una vez que hemos reemplazado el texto, procedemos a agregar el archivo como **stagging file**

```
    git add src/app/intro/intro.component.html
```

Procedemos a guardar nuestro cambios localmente

```
    git commit -m 'cambios dentro de página intro'
```

Luego de regresamos a la rama master

```
    git checkout master
```

Ahora simularemos cambios subidos por otro miembro del equipo de desarrollo, para ello modificaremos el archivo **src/app/work/work.component.html**

Al igual que el archivo anterior procedemos a reemplazar el texto del segundo parrafo por un contenido diferente.

```
    El texto dentro de este parrafo sirve para simular el trabajo que ha subido otro desarrolador al repositorio de código

```

Una vez que hemos reemplazado el texto, procedemos a agregar el archivo como **stagging file**

```
    git add src/app/work/work.component.html
```

Procedemos a guardar nuestro cambios localmente

```
    git commit -m 'cambios dentro de página work'
```

Regresamos hacia la rama que abrimos anteriormente

```
    git checkout feature-contenido-intro
```

Hacemos un rebase hacia master para que nuestros cambios sea puesto sobre master

```
    git rebase master
```

Una vez hecho esto nuestros cambios son creados en la rama master, obteniendo un historial lineal de los cambios realizado,
en este caso nuestro debemos igualar master con el HEAD del repositorio. Para ello regresamos hacia master y hacemos un merge de la
rama para poder igualar HEAD con master

```
    git checkout master

    git merge feature-contenido-intro
```

