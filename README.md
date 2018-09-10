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

Siempre se identifica la rama activa en la que nos encontramos trabajando por medio de un asterisco ubicado
en la parte izquierda del nombre de la rama

Para crear una rama se utiliza el comando: **git branch** nombre-rama

```
    git branch new-feature
```

Este comando crea una rama de manera local sobre la que podemos desarrollar sin introducir errores o inconsistencias
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
stash de nuestros cambios según sea el caso para evitar generar aconflictos al trabajar dentro de otra funcionalidad que posiblemente modifique
los mismos archivos de otra funcionalidad en la que trabajamos con anterioridad

En caso de estar sobre la rama *new-feature* y debemos pasar hacia la rama *master*

```
    git checkout master
```

Una vez que nuestra funcionalidad ha sido terminada y probada esta debe ser incluida dentro de la rama master para poder pasarla a los diferentes
ambientes donde sea requerida. Para ello es muy importante cambiar hacia nuestra rama master local y traer todos los cambios.

```
    git checkout master
    git pull
```

## Git Merge vs Git Rebase

Ambas opciones permiten integrar el codigo dentro de la rama master, *git merge* preserva la información de la rama, mientras *git rebase* no lo hace

El uso de *git merge* es el enfoque mas comun y sencillo para integrar cambios dentro de una rama, al hacer un merge el commit contiene toda la información
de los commit previos sobre los que se basa, de esta manera se esta contaminando el historial de la rama

```
    git checkout master
    git merge feature-branch

```

Con un *git rebase* es posible reescribir la historia del commit de una manera limpia y lineal. Al hacer un rebase se toman todos los commits de una rama y 
se los coloca dentro de la rama base normalmente master.

```
    git checkout my-feature-branch
    git rebase master
    git checkout master
    git merge branch
```


## Conclusiones

El uso de la herramienta git permite implementar varios flujos de trabajo de mediana y gran complejidad dentro del proceso de desarrollo de software
y se han convertido en una práctica habitual. Es parte de una cultura de trabajo que libera el potencial de un equipo de trabajo haciendo que sean más 
ágiles y respondan de mejor manera los problemas y errores dentro de los diferentes ambientes de despliegue de una aplicación.
 
## Recursos Adicionales

Dentro de internet existen muchas fuentes de información acerca de esta herramienta tan útil, se han encontrado recursos que son sencillos y puntuales 
relacionados a la temática tratada en este tutorial

### [git La Guia Sencilla](http://rogerdudler.github.io/git-guide/index.es.html)

Herramientas Gráficas para manejar git

1. [GitKracken](https://www.gitkraken.com)
2. [SourceTree](https://www.sourcetreeapp.com)
3. [SmartGit](http://www.syntevo.com/smartgit)

