# MiStays

MiStays es una aplicación web de alojamiento turístico desarrollada con Angular. Permite consultar alojamientos, revisar sus características, gestionar reservas y acceder a secciones de eventos y servicios turísticos.

El proyecto se desarrolló con fines académicos para aplicar conceptos de desarrollo frontend, componentes, servicios, navegación, validaciones y persistencia de datos en el navegador.

## Integrantes

- Jorge Núñez
- Juan García
- Juan Tibazosa
- Sebastián Osorio

## Tecnologías utilizadas

- Angular: framework principal de la aplicación.
- TypeScript: lógica de los componentes y servicios.
- HTML5 y CSS3: estructura y presentación de la interfaz.
- Bootstrap: estilos y componentes visuales (se carga desde un CDN en `index.html`).
- Bootstrap Icons: iconografía (se carga desde un CDN en `index.html`).
- LocalStorage: almacenamiento local de cuentas, sesiones y reservas.
- JSON: datos iniciales de alojamientos, eventos, servicios turísticos y preguntas frecuentes.
- Open-Meteo API: consulta de información meteorológica.
- GitHub: alojamiento del repositorio del proyecto.

## Requisitos previos

Antes de iniciar, se necesita:

- WebStorm.
- Un navegador actualizado.
- Conexión a internet para descargar las dependencias del proyecto, cargar Bootstrap desde su CDN y consultar la información meteorológica.

Node.js y npm deben quedar configurados en WebStorm antes de instalar las dependencias.

## 1. Descargar el proyecto desde GitHub

1. Abre en el navegador el repositorio de GitHub donde está publicado MiStays.
2. Pulsa el botón verde **Code**.
3. Selecciona **Download ZIP**.
4. Espera a que termine la descarga.
5. En el Explorador de archivos, haz clic derecho sobre el archivo ZIP y selecciona **Extraer todo**.
6. Elige una ubicación fácil de encontrar y extrae el contenido.

No abras el archivo ZIP como si fuera la carpeta del proyecto. Primero debes extraerlo.

## 2. Abrir el proyecto en WebStorm

1. Inicia WebStorm.
2. Selecciona **Open**.
3. Busca y selecciona la carpeta del proyecto que acabas de extraer.
4. Abre la carpeta que contiene directamente los archivos `package.json` y `angular.json`. Según cómo se descargue el ZIP, la carpeta podría llamarse `AirSixsevenFront`.
5. Si WebStorm pregunta si confías en el proyecto, revisa que seleccionaste el repositorio correcto y autoriza su apertura.

Es importante abrir la carpeta raíz del frontend, no solamente la carpeta `src` ni una carpeta superior que no contenga `package.json`.

## 3. Configurar Node.js desde WebStorm

Node.js es el entorno que permite ejecutar las herramientas de Angular y npm. WebStorm permite seleccionar o descargar una versión de Node.js directamente desde sus ajustes, por lo que no es necesario instalarlo por separado ni crear un proyecto temporal.

1. Abre **File > Settings** (o pulsa `Ctrl + Alt + S`). En macOS, la opción equivalente se encuentra en **WebStorm > Settings**.
2. Entra en **Languages & Frameworks > JavaScript Runtime**. En versiones anteriores de WebStorm esta página se llama **Languages & Frameworks > Node.js**.
3. En **Preferred runtime**, deja seleccionado **Node.js**.
4. Abre la lista **Node.js runtime** y elige una de estas opciones:
   - Si ya aparece una versión compatible de Node.js, selecciónala.
   - Si no hay ninguna disponible, selecciona **Download Node.js**, elige la versión que quieras instalar (preferiblemente una versión LTS compatible con la versión de Angular del proyecto) y confirma. WebStorm descargará y configurará esa versión.
   - Si ya tienes Node.js instalado en una ubicación que WebStorm no detectó, pulsa el botón de los tres puntos (**...**) junto a la lista, haz clic en **+** (**Add**) y selecciona **Add Local**.
5. Comprueba que el campo **Version** muestre la versión de Node.js que seleccionaste.
6. En **Package manager**, selecciona `npm`.
7. Si aparece la opción **Coding assistance for Node.js**, puedes activarla para disponer de autocompletado y asistencia de código para las funciones principales de Node.js.
8. Pulsa **Apply** y luego **OK**.

Una vez seleccionada una versión, WebStorm la usará automáticamente en las configuraciones de ejecución que utilicen el valor **Project** en el campo **Node runtime**. Si en la lista aparece la opción `node`, WebStorm usará la versión de Node.js instalada en el sistema.

Los nombres y la ubicación de algunas opciones pueden variar ligeramente según la versión de WebStorm. La opción **Download Node.js** puede no aparecer en versiones antiguas; en ese caso, instala Node.js desde [nodejs.org](https://nodejs.org/) y selecciónalo desde la misma lista.

## 4. Instalar las dependencias y crear node_modules

Este paso debe completarse antes de ejecutar la aplicación. La forma más sencilla es crear una configuración de ejecución de tipo **npm** con el comando `install`.

1. En el menú superior, abre **Run > Edit Configurations**. También puedes hacer clic en la lista de configuraciones que aparece junto al botón de ejecutar (arriba a la derecha) y seleccionar **Edit Configurations**.
2. Haz clic en el botón **+** (**Add New Configuration**) y selecciona **npm**.
3. En **package.json**, selecciona el archivo `package.json` que se encuentra en la raíz del frontend.
4. En **Command**, selecciona `install`. No es necesario elegir nada en el campo **Scripts**.
5. En **Node runtime**, deja el valor `Project` para que WebStorm utilice la versión de Node.js que configuraste en el paso anterior. En **Package manager**, deja también `Project` o selecciona `npm`.
6. En **Name**, escribe un nombre fácil de reconocer, por ejemplo `npm install`.
7. Pulsa **Apply** y luego **OK**.
8. Selecciona la configuración `npm install` en la lista de configuraciones y pulsa el botón verde de **Run**.
9. Espera a que termine el proceso en la ventana **Run**. Es necesario contar con conexión a internet durante la instalación.
10. Comprueba que aparezca la carpeta `node_modules` en la raíz del proyecto y que la instalación haya finalizado sin errores.

WebStorm ejecutará npm utilizando el entorno configurado y descargará las dependencias declaradas en `package.json`. La carpeta `node_modules` se genera durante este proceso; no debes crearla manualmente ni descargarla desde GitHub.

No elimines ni reemplaces `package.json` ni `package-lock.json`. Estos archivos describen las dependencias del proyecto y ayudan a mantener una instalación reproducible.

Si prefieres no crear una configuración, hay dos alternativas equivalentes:

- Haz clic derecho sobre `package.json` en el panel **Project** y selecciona **Run 'npm install'**.
- Abre la terminal integrada con **View > Tool Windows > Terminal** y ejecuta, desde la carpeta que contiene `package.json`:

```bash
npm install
```

No continúes con la ejecución de Angular hasta que la instalación de las dependencias haya terminado correctamente.

## 5. Ejecutar la aplicación desde WebStorm

Una vez configurado Node.js y creada la carpeta `node_modules`:

1. Abre `package.json`.
2. Busca la sección `scripts`.
3. El proyecto incluye un script llamado `start` (que ejecuta `ng serve`). Pulsa el icono de ejecución que aparece junto a ese script. También puedes usar el panel npm de WebStorm y ejecutar `start`.
4. Espera a que Angular termine de compilar.
5. Abre en el navegador la dirección local que muestre WebStorm. Normalmente es `http://localhost:4200/`.

También puedes crear una configuración de ejecución como en el paso anterior: en **Run > Edit Configurations**, agrega una configuración **npm**, elige `run-script` en **Command** y `start` en **Scripts**, y ejecútala con el botón verde de **Run**. En la pestaña **Browser / Live Edit** de esa configuración puedes indicar la URL `http://localhost:4200/` para que WebStorm abra la aplicación en el navegador al iniciar.

Si prefieres no usar el script `start`, abre la terminal integrada de WebStorm, verifica que estés en la carpeta que contiene `package.json` y ejecuta:

```bash
npx ng serve
```

Mantén activo el proceso mientras utilices la aplicación. Para detener el servidor, usa el botón de detener de WebStorm o pulsa `Ctrl + C` en la terminal integrada.

## Funcionalidades principales

### Alojamientos

- Consulta de alojamientos disponibles.
- Visualización de imágenes, ubicación, capacidad, precios y características.
- Página de detalle de cada alojamiento.
- Filtros por ciudad, tipo, capacidad, precio, calificación y servicios.
- Ordenamiento de los resultados.
- Consulta de información meteorológica cuando la API externa está disponible.

### Usuarios

- Registro de cuentas.
- Inicio y cierre de sesión.
- Validación de los formularios.
- Asociación de reservas con la cuenta activa.

### Reservas

- Selección de fechas de llegada y salida.
- Selección del número de huéspedes.
- Cálculo del número de noches y del precio estimado de la estancia.
- Confirmación de reservas.
- Consulta de las reservas asociadas a la cuenta activa.
- Cancelación de reservas y actualización de los datos guardados localmente.

### Eventos turísticos

- Consulta de eventos.
- Visualización de detalles y horarios.
- Interfaz demostrativa para el flujo de pago de eventos.

### Servicios turísticos

- Consulta de servicios turísticos asociados a distintas ciudades.
- Visualización de información y horarios.
- Interfaz demostrativa para la contratación de servicios.

### Información y ayuda

- Página de contacto con formulario.
- Explicación del proceso de reserva y del cálculo del total de la estancia.
- Preguntas frecuentes.
- Página de error para rutas que no existen.

## Estructura general del proyecto

Esta es la estructura del frontend. Dentro de `src/app` están todos los componentes, modelos y servicios de la aplicación.

```text
AirSixsevenFront/
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── data/
│       │   ├── Eventosdata.json
│       │   ├── Faq.json
│       │   ├── Marketplacedata.json
│       │   └── Serviciosciudades.json
│       └── images/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── alojamientocomponent/
│   │   │   ├── barrabusquedacomponente/
│   │   │   ├── cierrecomponent/
│   │   │   ├── comoreservarcomponent/
│   │   │   ├── confianzacomponent/
│   │   │   ├── confirmacionreservacomponent/
│   │   │   ├── contactocomponent/
│   │   │   ├── crearcuentacomponent/
│   │   │   ├── destacadoscomponent/
│   │   │   ├── detallealojamientocomponent/
│   │   │   ├── detalleeventocomponent/
│   │   │   ├── escenciacomponent/
│   │   │   ├── eventoscomponent/
│   │   │   ├── footercomponent/
│   │   │   ├── iniciocomponent/
│   │   │   ├── iniciosesioncomponent/
│   │   │   ├── misreservascomponent/
│   │   │   ├── navbarcomponent/
│   │   │   ├── pagarservicioscomponent/
│   │   │   ├── paginanoencontradacomponent/
│   │   │   ├── preguntasfrecuentescomponent/
│   │   │   ├── reservascomponent/
│   │   │   ├── serviciociudadescomponent/
│   │   │   └── tarjetaalojamientocomponent/
│   │   ├── models/
│   │   │   ├── alojamientomodel.ts
│   │   │   ├── ciudadesmodel.ts
│   │   │   ├── eventomodel.ts
│   │   │   ├── preguntamodel.ts
│   │   │   ├── reservasmodel.ts
│   │   │   └── usuariomodel.ts
│   │   ├── services/
│   │   │   ├── alojamientosservice.ts
│   │   │   ├── authservice.ts
│   │   │   ├── ciudadesservice.ts
│   │   │   ├── climaservice.ts
│   │   │   ├── cotizacionservice.ts
│   │   │   ├── eventosservice.ts
│   │   │   ├── preguntasservice.ts
│   │   │   └── reservasservice.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app-module.ts
│   │   └── app-routing-module.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```


### Componentes de la aplicación

La aplicación tiene 24 componentes, declarados en `app-module.ts`. Se dividen en tres grupos según su función.

#### Estructura general (visibles en todas las páginas)

`app.html` muestra la barra de navegación, el contenido de la ruta activa y el pie de página.

- `navbarcomponent`: barra de navegación principal, con acceso a las secciones y al inicio y cierre de sesión.
- `footercomponent`: pie de página.

#### Páginas (tienen una ruta propia)

Las rutas están definidas en `app-routing-module.ts`.

- `iniciocomponent` (`/`): página de inicio. Reúne la barra de búsqueda y las secciones de presentación.
- `alojamientocomponent` (`/alojamientos`): listado de alojamientos con filtros y ordenamiento.
- `detallealojamientocomponent` (`/alojamientos/:id`): detalle de un alojamiento y cotización de la estancia.
- `iniciosesioncomponent` (`/iniciar-sesion`): inicio de sesión.
- `crearcuentacomponent` (`/crear-cuenta`): registro de cuentas.
- `reservascomponent` (`/reservas`): selección de fechas y huéspedes, y confirmación de la reserva.
- `confirmacionreservacomponent` (`/reserva-confirmada/:id`): confirmación de una reserva realizada.
- `misreservascomponent` (`/mis-reservas`): reservas asociadas a la cuenta activa.
- `eventoscomponent` (`/eventos`): listado de eventos turísticos.
- `detalleeventocomponent` (`/eventos/:id`): detalle y horarios de un evento.
- `serviciociudadescomponent` (`/servicios`): servicios turísticos por ciudad.
- `pagarservicioscomponent` (`/servicios/:id`): detalle, horarios y flujo demostrativo de contratación de un servicio.
- `contactocomponent` (`/contacto`): formulario de contacto.
- `comoreservarcomponent` (`/comoreservar`): explicación del proceso de reserva y del cálculo del total de la estancia.
- `preguntasfrecuentescomponent` (`/faq`): preguntas frecuentes.
- `paginanoencontradacomponent` (`**`): página que se muestra cuando la ruta no existe.

#### Componentes reutilizables y secciones (sin ruta propia)

Se insertan dentro de otras páginas mediante su selector.

- `barrabusquedacomponente`: barra de búsqueda con destino, fechas de llegada y salida, y número de huéspedes. Se usa en el inicio.
- `destacadoscomponent`: muestra alojamientos destacados en el inicio.
- `tarjetaalojamientocomponent`: tarjeta de un alojamiento. Se usa en el listado de alojamientos y en los destacados, y consulta el clima del destino.
- `escenciacomponent`, `confianzacomponent` y `cierrecomponent`: secciones informativas y de cierre de la página de inicio.

### Organización de carpetas y archivos

- `src/app/components`: componentes de interfaz y lógica de presentación.
- `src/app/models`: modelos que definen las estructuras de datos: `alojamientomodel` (alojamientos y reseñas), `ciudadesmodel` (ciudades y servicios turísticos), `eventomodel` (eventos), `preguntamodel` (preguntas frecuentes), `reservasmodel` (reservas y cotizaciones) y `usuariomodel` (usuarios y sesión).
- `src/app/services`: servicios que centralizan la lógica y el acceso a los datos:
  - `alojamientosservice`: carga los alojamientos desde `Marketplacedata.json`.
  - `authservice`: registro, inicio y cierre de sesión; guarda cuentas y sesión en `localStorage`.
  - `reservasservice`: crea, consulta y cancela reservas; las guarda en `localStorage`.
  - `cotizacionservice`: calcula el número de noches y el precio estimado de la estancia.
  - `eventosservice`: carga los eventos desde `Eventosdata.json`.
  - `ciudadesservice`: carga los servicios turísticos por ciudad desde `Serviciosciudades.json`.
  - `climaservice`: consulta la temperatura actual en la API Open-Meteo.
  - `preguntasservice`: carga las preguntas frecuentes desde `Faq.json`.
- `app.ts`, `app.html` y `app.css`: componente raíz de la aplicación.
- `app-module.ts`: módulo principal de Angular y configuración de declaraciones e importaciones de la aplicación.
- `app-routing-module.ts`: rutas de navegación entre las páginas.
- `public/assets/data`: datos iniciales en formato JSON (alojamientos, eventos, servicios por ciudad y preguntas frecuentes).
- `public/assets/images`: imágenes y recursos gráficos.
- `src/styles.css`: estilos globales.
- `package.json`: dependencias, scripts y configuración de npm.
- `package-lock.json`: registro de las versiones concretas de las dependencias instaladas.
- `angular.json`: configuración del proyecto Angular.
- `node_modules`: dependencias instaladas mediante npm. Esta carpeta se genera al completar el paso de instalación y no es necesario descargarla ni agregarla manualmente.

## Almacenamiento de datos

La aplicación utiliza varios mecanismos para gestionar su información:

- Los alojamientos, los eventos, los servicios turísticos y las preguntas frecuentes se cargan desde archivos JSON en `public/assets/data`.
- Las cuentas, las sesiones y las reservas se guardan en `localStorage` del navegador.
- La información meteorológica se consulta mediante la API externa Open-Meteo.

Los datos de `localStorage` están vinculados al navegador, al perfil y al dispositivo utilizados. No se sincronizan automáticamente con otros dispositivos ni con otros usuarios.

## Pagos

Los flujos de pago de eventos y servicios son demostrativos. La aplicación no procesa transacciones bancarias reales ni integra una pasarela de pagos para operaciones reales.

## Consideraciones de seguridad

MiStays es un proyecto académico de frontend. Las validaciones de Angular ayudan a comprobar la información introducida en los formularios, pero no sustituyen las validaciones ni los controles de autorización que debería realizar un backend.

Los datos almacenados en `localStorage` pueden consultarse y modificarse desde el navegador. Por ello, no se recomienda utilizar la aplicación para guardar información sensible ni considerarla un sistema de reservas preparado para producción.


## Solución de problemas comunes

### WebStorm no reconoce Node.js

Abre **Settings > Languages & Frameworks > JavaScript Runtime** y revisa el campo **Node.js runtime**. Si no hay ninguno disponible, abre la lista y selecciona **Download Node.js** para que WebStorm descargue una versión, o usa el botón **...** para agregar una instalación local. Hazlo antes de intentar instalar las dependencias.

### No sé cómo instalar las dependencias

Crea una configuración en **Run > Edit Configurations > + > npm**, selecciona el `package.json` de la raíz del frontend, elige `install` en **Command** y ejecútala. Como alternativa, haz clic derecho sobre `package.json` y selecciona **Run 'npm install'**, o ejecuta `npm install` en la terminal integrada desde la raíz del frontend.

### La carpeta node_modules no aparece

Revisa la salida de la ventana **Run** o de la terminal. Si el proceso terminó con errores, corrige el problema indicado y vuelve a ejecutar la instalación. Comprueba también que la configuración npm apunte al `package.json` correcto (el de la raíz del frontend) y que tengas conexión a internet.

### La aplicación no abre en el navegador

Confirma que Angular terminó de compilar sin errores y utiliza la dirección local mostrada en la consola de ejecución. El puerto habitual es `4200`, pero puede cambiar si ya está ocupado.

## Estado del proyecto

MiStays es una aplicación académica en desarrollo que reúne funcionalidades de consulta de alojamientos, autenticación, reservas, eventos y servicios turísticos. En futuras versiones podría ampliarse mediante un backend y una base de datos centralizada.
