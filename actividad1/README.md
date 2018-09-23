# ACTIVIDAD 1

## Abrir una rama para desarrollar alguna funcionalidad

Al recibir una tarea es muy importante descomponerla en tareas pequeños para de esta manera identificar el trabajo a desarrollar.

Luego de identificar el trabajo puntual procedemos a abrir una rama que contendrá todo nuestro trabajo.

Dentro el proyecto tenemos una aplicación web que servirá para ejemplificar el flujo de trabajo al usar ramas.

Nos colocamos dentro de la carpeta que contiene el código de la página

```
    git pull

    cd ejemploweb
    
    git checkout -b cambiar-cabecera

```

La tarea asignada es modificar el texto dentro de la cabecera de nuestro sitio web, para que describa la actividad que estamos desarrollando
y que nuestro futuros clientes puedan saber sobre nuestro servicios.

Para ello vamos a renombrar nuestro sitio

```
    CONSULTORA GENERICA XYZ
```

Buscamos el archivo llamado **src/app/header/header.component.html** y buscamos la línea **8**

```
    <h1>Dimension</h1>
```
Reemplazamos el texto, haciendo referencia a nuestro nuevo nombre 

```
    <h1>CONSULTORA GENERICA XYZ</h1>
```

Debemos agregar los archivos los cuales hemos modificado y marcar los como **stagging files** 

```
    git add src/app/header/header.component.html
```

Una vez realizado el trabajo y luego de revisar que todo funciona normalmente debemos hacer un **commit**  agregando un comentario que describa el 
trabajo realizado

```
    git commit -m 'cambiar texto del sitio web'
```

Al tener nuestro trabajo guardado podemos cambiarnos hacia la rama master

```
    git checkcout master
```

Dentro de la rama master procedemos a traer los cambios desde la rama **cambiar-cabecera**

```
    git pull
    git merge cambiar-cabecera
```

Al tener nuestro cambios dentro dentro de la rama master de manera local, debemos comprobar que todo se integre sin novedades ni errores, luego de verficar
que todo está bien procedemos a enviar todos nuestros cambios hacia rama master remota para que otros desarrolladores puedan descargar nuestros cambios

```
    git push
```

## Observaciones

1. Asumimos que el desarrollador tiene permisos de lectura y escritura dentro del proyecto, de esta manera al enviar el código hacia la rama master
remoto no producirá errores.

2. No olvidar que este proceso es de integración del código, por lo que siempre debemos traer todos los cambios remotos antes de enviar nuestro código hacia
el master remoto