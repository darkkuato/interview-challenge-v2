# Configuración del proyecto

Stack técnico:

- Vscode
- Angular
- MSW
- Node.js >= 18
- [Bun](https://bun.sh/)

> El uso de Bun es solo para simplificar la instalación.
> No se evalúa conocimiento específico de Bun.

## Iniciando

Debe hacer un fork de este proyecto y subir sus modificaciones en su espacio de trabajo.

## Instalación

```bash
bun install
```

## Inicio del servidor

```bash
bun start
```

## Prioridades recomendadas

- Camino exitoso, no pierdas tiempo en manejo de errores
- 3 pantallas simples.
- Arquitectura armada, usa el tiempo para seguir las mejores practicas en la estructura prestablecida

## Enfoque recomendado

**Prioridades:**

1. Funcionalidad del camino feliz
2. Adherencia a la arquitectura existente
3. Código limpio y legible
4. Manejo de errores (baja prioridad)
5. NO se evaluara: testing, responsive, ui muy personalizada

**Tips:**

- Revisá primero la estructura del proyecto
- Implementá feature por feature
- Si algo no queda claro, usá criterio y documentalo
- Es mejor terminar 2 features completas que 3 incompletas
- Puedes modificar el código existente, pero justifica tus decisiones

## Proyecto Base

Este proyecto implementa una estructura de carpetas por tipos.
Antes de comenzar, familiarizate con la estructura del proyecto.

El proyecto sigue la siguiente estructura:

```text
src/app
    | components/         # Componentes de negocio
    | core/               # Elementos de configuración del proyecto
    | layouts/            # Layouts
    | lib/                # Componentes UI Reutilizables
    | models/
        | const/          # Variables globales del proyecto
        | entities/       # Tipado de los objetos
        | repositories/   # Tipado de los repositorios a implementar
    | pages/              # Páginas
    | services/           # Servicios http (repositorio implementado)
```

## Qué incluye el proyecto base

El proyecto ya tiene:

- Estructura de carpetas por tipo
- Configuración de Angular
- Un mock para correr en modo desarrollo

Necesitás completar las 3 pantallas implementando:

- Los componentes
- Servicios
- Layouts (si aplican)
- Páginas

## Criterios de evaluación

1. **Adherencia arquitectónica (40%)**

   - Respetás las capas definidas
   - Usás las abstracciones existentes
   - Seguís los patrones del código base

2. **Implementación funcional (30%)**

   - Features completas y funcionando
   - Manejo de errores (baja prioridad)

3. **Calidad de código (20%)**

   - TypeScript apropiado
   - Naming conventions del proyecto

4. **Criterio técnico (10%)**

   - Decisiones justificadas
   - Propuestas de mejora documentadas (sin implementar si rompen patrones)

## Documentación (Opcional pero valorada)

Si tomaste decisiones técnicas o de interfaz importantes, podés documentarlas brevemente:

- ¿Por qué creaste de X forma el servicio http?
- ¿Por qué organizaste los componentes de Y manera?
- ¿Por qué los datos se ven de tal manera?

Puede ser un simple `DECISIONS.md` o comentarios en el código.

## Ejercicio de entrevista, Banca Argentina

Banca Argentina es un banco donde hasta ahora siempre atendió de forma presencial, quiere emprezar a crear soluciones online y para eso está haciendo primeras pruebas de posibles integraciones a usuarios empresariales.

Nuestro objetivo es en este caso es crear una página de ingreso, una selección de la empresa con la que quiera operar el usuario y una lista de transferencias efectuadas desde la sucursal o cajero.

### Requerimientos

[Documentación Api](./docs/api.yaml)

#### LOGIN

[Prototipo](./docs/pantalla-login.jpeg)

    Definición:

    - Esta debe ser la pantalla principal en  '/'.
    - Debe haber un texto de presentación: "Banca Argentina".
    - Debe haber un texto de descripción: "Ingrese sus datos para empezar a operar."
    - Campos de texto de Correo/Clave.
    - Debe haber un botón de Ingresar.

    Validación de campos:
        - Campo Correo
            - Debe validar que efectivamente sea un correo electrónico.
            - No debe tener más de 155 carácteres.
            - Debe ser obligatorio.
        - Campo Clave
            - Debe tener entre 8 y 16 carácteres.
            - Debe ser obligatorio.

    Consulta api:
        - Al dar click en botón ingresar debe llamarse a POST '/api/auth/sign-in'.

    Manejo de respuesta:
        - En caso de ser exitoso guardar la autenticación y redireccionar a /seleccionar-empresa.
        - En caso de haber un error 406 listar arriba del formulario los errores en rojo.
        - En caso de haber otro error mostrar arriba del formulario como único error: "Error genérico del sistema, vuelva a intentarlo más tarde".

#### SELECCIONAR EMPRESA:

[Prototipo](./docs/pantalla-seleccionar-empresa.jpeg)

    Definición
    - La pantalla debe estar en '/seleccionar-empresa'
    - Se busca la lista de empresas
    - Se listan las empresas en la pantalla
    - En la empresa se debe visualizar el nombre y el CUIT
    - Dentro la pantalla se debe mostrar como título:
        - "Elegir empresa"
    - Debajo del título debe estar:
        - "Seleccioná la empresa con la que querés operar".
    - Al seleccionar una empresa:
        - Debe guardarse para su uso en la pantalla de transferencias
        - Redireccionar a '/transferencias'.

    Consulta api:
        - Buscar las empresas en el GET '/api/enterprises'

    Manejo de respuesta:
        - Se listan las empresas dentro del modal aside
        - En caso de error volver al login borrando el sessionStorage

#### LISTADO TRANSFERENCIAS

[Prototipo](./docs/pantalla-transferencias.jpeg)

    Definición:
    - La pantalla debe estar en '/transferencias'
    - Se busca la lista de transferencias
    - Se lista en la tabla la lista de transferencias.
    - Una tabla donde se listen los campos: (Transacción) (Destinatario) (Importe) (Referencia) (Estado)
    - Visualización de Estados:
        - AP debe verse como: ***Aprobado***
        - RE debe verse como: ***Rechazado***
        - PE debe verse como: ***Pendiente***

    Consulta api:
    - Buscar las transferencias en GET '/api/transferencias'

    Manejo de respuesta:
    - Se listan las transferencias en la tabla
    - En caso de error debe haber un mensaje: "No se pudieron recuperar las transferencias, intentelo de nuevo más tarde"
