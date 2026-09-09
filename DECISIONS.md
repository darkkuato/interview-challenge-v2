# Decisiones técnicas

## Separación de responsabilidades

- Las páginas funcionan como contenedores: coordinan navegación, estado de carga y respuestas de API.
- Los componentes de `components/` son presentacionales y emiten las acciones del usuario.
- Los servicios HTTP implementan las interfaces existentes de `models/repositories/`, manteniendo el contrato separado de la implementación.
- `BankingSessionService` concentra el acceso a `sessionStorage` para no repetir claves ni lógica de parseo.

## Autenticación y contexto de empresa

El interceptor agrega el token `Bearer` cuando existe una sesión y agrega el encabezado `CUIT` únicamente al pedido de transferencias. Los guards evitan acceder a las pantallas protegidas sin los datos requeridos.

## Interfaz

Se reutilizaron los componentes base de botón, input, tipografía, detalle de empresa, modal lateral y tabla. Se mantuvo la distribución principal de los prototipos y se agregaron estados de carga, foco visible y etiquetas accesibles sin cambiar el flujo solicitado.

## Posibles mejoras

En un proyecto productivo propondría reemplazar el uso directo de `sessionStorage` por una estrategia de autenticación acordada con backend, sumar expiración de sesión, pruebas de integración y un manejador global de errores. No se agregaron para mantener el alcance del challenge.
