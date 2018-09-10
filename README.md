# BRANCH-TUTORIAL

## Objetivo

Este tutorial tiene como objetivo listar aquellos comandos usados para trabajar con ramas
, se debe desarrollar funcionalidades fuera de la rama master y una vez que la funcionalidad 
ha sido terminada y probada se procede a integrar aquellos cambios dentro de la rama master

### Utilizando Ramas 

Es posible listar las ramas que existen dentro del proyecto:

```
    git branch -a
    * master
      feature-branch-a
```

Siempre se identifica la rama activa en la que nos encontramos trabajando por medio de un asterico ubicado
en la parte izquierda del nombre de la rama

Para crear una rama se utiliza el comando: **git branch** nombre-rama

```
    git branch new-feature
```

Este comando crea una rama de manera local sobre la cual podemos desarrollar sin introducir errores o inconsistencias
dentro de la rama master. La rama master en muchos casos es la rama que contiene todas las funcionalidades que deben ir
a productivo.

Como desarrollador es normal cambiar de tareas con bastante frecuencia. Al trabajar con ramas es posible cambiar de 
tarea con bastante facilidad sin perder el trabajo realizado.

Es importante considerar que debemos hacer un commit de manera local de todos los cambios desarrollados dentro de nuetra rama
antes de cambiar de rama o crear una nueva rama

Siempre es recomendado revisar aquellos cambios que hemos realizado, para ello listamos los archivos modificados de la siguiente manera

```
    git status
```

Podemos visualizar a detalle los cambios dentro de cada archivo usando el comando 

```
    git diff nombreArchivo
```

Podemos cambiar desde una rama hacia otra utilizado el comando **git checkout** nombreRama, tener en cuenta que debemos hacer un commit o un
stash de nuestros cambios segun sea el caso para evitar generar aconflictos al trabajar dentro de otra funcionalidad que posiblemente modifique
los mismos archivos de otra funcionalidad en la que trabajamos con anterioridad

En caso de estar sobre la rama *new-feature* y debemos pasar hacia la rama *master*

```
    git checkout master
```

## Recursos Adicionales

Dentro de la red existen muchas fuentes de informacion acerca de esta herramienta tan util, se han encontrado recursos que son sencillos y putuales 
relacionados a la tematica tratada en este tutorial

### [GIT La Guia Sencilla](http://rogerdudler.github.io/git-guide/index.es.html)


