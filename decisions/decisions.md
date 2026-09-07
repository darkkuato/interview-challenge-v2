# Untitled

# Login

Pantalla principal en '/'.
Texto de presentación: "Banca Argentina".
Texto de descripción: "Ingrese sus datos para empezar a operar."
Campos Correo/Clave.
botón de Ingresar.

![image.png](img\image.png)

Validación de campos:

![image.png](img\image-1.png)

Consulta api: - Al dar click en botón ingresar debe llamarse a POST '/api/auth/sign-in'.

![image.png](img\image-2.png)

Manejo de respuesta: - En caso de ser exitoso guardar la autenticación y redireccionar a /seleccionar-empresa.

![image.png](img\image-3.png) - En caso de haber un error 406 listar arriba del formulario los errores en rojo. - En caso de haber otro error mostrar arriba del formulario como único error: "Error genérico del sistema, vuelva a intentarlo más tarde".

![image.png](img\image-4.png)

![image.png](img\image-5.png)

![image.png](img\image-6.png)

---

## Seleccionar Empresa

![image.png](img\image-7.png)

Pantalla en '/seleccionar-empresa'
Se listan las empresas en la pantalla
En la empresa se visualiza el nombre y el CUIT

Consulta api: - Buscar las empresas en el GET '/api/enterprises'

![image.png](img\image-8.png)

Al seleccionar una empresa: - Debe guardarse para su uso en la pantalla de transferencias - Redireccionar a '/transferencias'.

![image.png](img\image-9.png)

Manejo de respuesta: - Se listan las empresas dentro del modal aside - En caso de error volver al login borrando el sessionStorage

#### Caso de prueba para el caso en el que no haya empresas, se testeo bloqueando la peticion a nivel network lo que nos permitio eliminar el sessionStorage y al mismo tiempo volver a ‘/’ reaccionando de la manera solicitada.

---

## **Transferencias**

![image.png](img\image-10.png)

Pantalla en '/transferencias'

Se lista en la tabla la lista de transferencias.

- Una tabla donde se listen los campos: (Transacción) (Destinatario) (Importe) (Referencia) (Estado)
- Visualización de Estados:
  - AP debe verse como: **_Aprobado_**
  - RE debe verse como: **_Rechazado_**
  - PE debe verse como: **_Pendiente_**

Consulta api:

- Buscar las transferencias en GET '/api/transferencias'

![image.png](img\image-11.png)

Manejo de respuesta:

- Se listan las transferencias en la tabla
- En caso de error debe haber un mensaje: "No se pudieron recuperar las transferencias, intentelo de nuevo más tarde"

Nuevamente mediante el bloqueo de peticiones pudimos obtener el error de las transferencias.

![image.png](img\image-12.png)

Devolucion de la prueba tecnica:

Buena prueba, tuve que hacer algunas modificaciones a archivos que ya eran del proyecto para mejorar su reaccion como por ejemplo algo tan simple como el agregar los estilos de error en el caso de una tabla.
Se implementaron variables globales en css.
Tambien un bug en api.yaml que escribia cuit en vez de cuil pudiendo traer errores en los datos.

Las mejoras que yo propondria en caso de crecer este proyecto es poder utilizar jwt para manejar el token, tambien idealmente consumir paginada la informacion.
Un store (NgRx o signals) si el estado compartido entre pantallas crece más allá de token/cuit

Tambien un guard para /seleccionar-empresa y /transferencias, hoy cada pantalla decide sola que hacer si no hay sesion y no lo resuelven igual.
El interceptor manda el header CUIT a cualquier request que lo tenga guardado en sesion, no solo a la que lo necesita, funciona pero no es la forma correcta de escalarlo.
