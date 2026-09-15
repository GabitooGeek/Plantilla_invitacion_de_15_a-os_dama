Copia todo el contenido que aparece dentro del siguiente bloque de código y guárdalo en un archivo llamado **`README.md`** en la raíz de tu repositorio:

```markdown
# 👑 Invitación Digital de 15 Años — Anyoull Yaritza Gonzalez Rico

> **Plantilla Web Interactiva de Alta Costura para Quinceañera (Mobile-First)**  
> Diseño editorial exclusivo en gama *Blush & Rosewood*, animaciones fluidas por scroll, cronómetro en vivo, pases personalizados por URL y confirmación de asistencia automatizada a WhatsApp.

---

## 🌐 Demo en Vivo (Live Preview)

Puedes ver la invitación funcionando en tiempo real aquí:  
👉 **[Ver Invitación en GitHub Pages](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/)**

---

## 📸 Muestra de Personalización de Invitado

Prueba cómo cambia automáticamente el nombre del invitado abriendo estos enlaces de ejemplo:

* [Invitación para Familia Pérez](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=Familia+Pérez)
* [Invitación para Tía Carmen y Familia](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=Tía+Carmen+y+Familia)
* [Invitación para Carlos Andrés Mendoza](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=Carlos+Andrés+Mendoza)

---

## ✨ Características Principales

### 🎨 Diseño y UI/UX de Lujo
* **Mobile-First Responsive:** Chasis optimizado para smartphones con centrado fluido en computadoras de escritorio.
* **Paleta Cromática Alta Costura:** Fondo marfil-rosado pastel (`#F9E4EC`), tipografías en *Rosewood* profundo (`#7A2840`), acentos en terciopelo (`#80233B`) y detalles en oro satinado (`#D4AF37`).
* **Marco Concéntrico Continuo:** Doble filete perimetral en Rosewood y oro satinado con curvas matemáticas perfectas.
* **Texturas Botánicas Flotantes:** Más de 20 ilustraciones lineales (*line-art*) de rosas y corazones suspendidos en desorden con micro-animaciones de brisa.
* **Transiciones en Ondas Suaves:** Divisores orgánicos estilo seda/terciopelo entre secciones fotográficas y el fondo rosado.

### ⚙️ Funcionalidades Interactivas (JavaScript Puro)
1. **Pases de Honor Personalizados vía URL:**
   * La invitación lee el parámetro `?invitado=Nombre+Apellido` desde el enlace y lo estampa automáticamente en la tarjeta de honor del invitado.
2. **Confirmación RSVP Directa a WhatsApp:**
   * Botón conectado al número oficial **`+573042394091`**.
   * Al seleccionar *«¡Sí, asistiré! ✨»* o *«No podré asistir 💌»*, genera un mensaje personalizado con el nombre del invitado y los detalles del evento listo para enviar en un clic.
3. **Cronómetro Regresivo Dinámico:**
   * Cuenta regresiva precisa en tiempo real (Días, Horas, Minutos, Segundos) sincronizada con la fecha del evento: **03 de Octubre de 2026 a las 6:00 p.m.**
4. **Animaciones por Scroll (*Scroll Reveal*):**
   * Animaciones a 60 FPS aceleradas por GPU mediante `IntersectionObserver` nativo, revelando fotos, tarjetas y el itinerario en cascada a medida que el usuario se desplaza.
5. **Geolocalización Integrada:**
   * Botón directo a Google Maps con la ubicación exacta del evento: [Salón Orlando Forero, Maripí, Boyacá](https://maps.app.goo.gl/uRkBLQErFVaHwk6Z8).

---

## 📁 Estructura del Proyecto

El proyecto está diseñado para ser ultraligero y autocontenido en un único archivo `index.html` con soporte modular para imágenes locales:

```plaintext
Plantilla_invitacion_de_15_a-os_dama/
│
├── index.html          # Código maestro (HTML5, CSS3 y JS integrados)
├── README.md           # Documentación del proyecto
│
├── foto1.jpg           # Fotografía principal de portada (enmarcada en arco)
├── foto2.jpg           # Foto 1 de la galería de recuerdos
├── foto3.jpg           # Foto 2 de la galería de recuerdos
├── foto4.jpg           # Foto ambiental para el Hero de la Fecha
│
├── misa.png            # Ícono 1 del itinerario (06:00 p.m. Misa)
├── icono1.png          # Ícono 2 del itinerario (07:00 p.m. Llegada)
├── icono2.png          # Ícono 3 del itinerario (08:00 p.m. Protocolo)
├── icono3.png          # Ícono 4 del itinerario (09:00 p.m. Brindis)
├── icono4.png          # Ícono 5 del itinerario (10:00 p.m. Rumba)
│
├── recepcion.png       # Ícono decorativo de la tarjeta de recepción
├── vestidos.png        # Ilustración de moda dentro del Código de Vestimenta
└── sobre.png           # Ícono de sobre para Lluvia de Sobres
```

> **Nota:** Si alguna imagen `.png` de los íconos no está presente en la carpeta, el código cuenta con un sistema de respaldo vectorial (*SVG fallback*) que mantiene la invitación visualmente completa sin errores.

---

## 🚀 Guía de Personalización Masiva para WhatsApp

Para enviar la invitación a cada persona con su nombre en pantalla:

### Estructura del Enlace:
```text
https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=NOMBRE_DEL_INVITADO
```
*(Los espacios se pueden escribir con un signo `+` o `%20`)*.

### 💡 Automatizar 100 enlaces en Excel o Google Sheets:
1. En la **Columna A** coloca la lista de nombres de tus invitados.
2. En la celda **B2** pega esta fórmula:
   ```excel
   ="https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=" & SUSTITUIR(A2, " ", "+")
   ```
3. Arrastra la fórmula hacia abajo y tendrás todos los enlaces personalizados listos para copiar y pegar en los chats de WhatsApp.

---

## 📅 Datos del Evento

* **Quinceañera:** Anyoull Yaritza Gonzalez Rico
* **Padres:** José Edilfonso González Briceño y Sandy Maricela Rico García
* **Fecha:** Sábado, 03 de Octubre de 2026
* **Hora:** 06:00 p.m. (18:00 hrs)
* **Lugar de Recepción:** Salón Orlando Forero
* **Municipio / Departamento:** Maripí, Boyacá — Colombia
* **Código de Vestimenta:** Elegante - Formal (*Colores reservados: Palo de rosa, blanco y dorado*)
* **Regalo:** Lluvia de Sobres
* **WhatsApp de Confirmación:** [+573042394091](https://wa.me/573042394091)

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** Estructura limpia y accesible.
* **CSS3 Avanzado:**
  * Variables CSS nativas (*Custom Properties*).
  * Flexbox y CSS Grid.
  * Curvas Bézier personalizadas para transiciones y animaciones (`cubic-bezier`).
  * Reglas de renderizado concéntrico con `pointer-events: none`.
* **JavaScript Moderno (ES6+):**
  * `IntersectionObserver API` para animaciones por scroll a 60 FPS.
  * `URLSearchParams` para lectura dinámica de parámetros GET en URL.
  * `Date API` para el cálculo en vivo del cronómetro.
* **SVG Vectorial Puro:** Gráficos vectoriales inline sin librerías externas de íconos para carga instantánea.
* **Google Fonts:** *Great Vibes*, *Cinzel*, *Playfair Display*, *Cormorant Garamond* y *Montserrat*.

---

## 💻 Instalación y Despliegue Local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/gabitoogeek/Plantilla_invitacion_de_15_a-os_dama.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd Plantilla_invitacion_de_15_a-os_dama
   ```
3. Abre el archivo `index.html` en tu navegador favorito:
   ```bash
   # En Windows
   start index.html

   # En Mac
   open index.html
   ```

---

## 💖 Créditos y Licencia

Diseñado y programado con esmero para la celebración de los **15 Años de Anyoull Yaritza Gonzalez Rico** en Maripí, Boyacá.

Distribuido bajo la Licencia MIT. ¡Siéntete libre de utilizarlo y adaptarlo para tus propios eventos!
```