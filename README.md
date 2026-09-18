# 👑 Invitación Digital de 15 Años — Anyoull Yaritza Gonzalez Rico

<p align="center">
  <img src="https://img.shields.io/badge/Estado-Producci%C3%B3n-success?style=for-the-badge&logo=github" alt="Estado">
  <img src="https://img.shields.io/badge/Dise%C3%B1o-Mobile--First-ff69b4?style=for-the-badge" alt="Mobile-First">
  <img src="https://img.shields.io/badge/Gama-Blush_%26_Rosewood-9E3B5A?style=for-the-badge" alt="Paleta">
  <img src="https://img.shields.io/badge/Licencia-MIT-gold?style=for-the-badge" alt="Licencia">
</p>

> **Invitación Web Interactiva de Alta Costura para Quinceañera.**  
> Arquitectura modular profesional, diseño editorial *Blush & Rosewood*, marco concéntrico de lujo, animaciones por scroll, cronómetro regresivo en vivo, pases de honor dinámicos con asignación de cupos por URL y confirmación de asistencia inteligente sincronizada con WhatsApp.

---

## 🌐 Demo en Vivo (Live Preview)

Explora la experiencia interactiva en tiempo real:  
👉 **[Abrir Invitación en GitHub Pages](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/)**

---

## 💌 Demostración de Pases y Cupos Personalizados

Prueba cómo la tarjeta detecta automáticamente el **nombre del invitado** y la **cantidad de cupos asignados**:

* 🎟️ **Familia (5 cupos asignados):**  
  [Ver Invitación de David Pérez y Familia](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=David+Perez+y+familia&cupos=5)
* 🎟️ **Pareja (2 cupos asignados):**  
  [Ver Invitación de Carlos y Esposa](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=Carlos+y+Esposa&cupos=2)
* 🎟️ **Familia Numerosa (8 cupos asignados):**  
  [Ver Invitación de Familia Benítez](https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=Fredy+Ben%C3%ADtez+y+familia&cupos=8)

---

## 📑 Ficha Técnica del Evento

| Detalle | Información Oficial |
| :--- | :--- |
| **Quinceañera** | **Anyoull Yaritza Gonzalez Rico** |
| **Padres** | José Edilfonso González Briceño y Sandy Maricela Rico García |
| **Fecha** | **Sábado, 03 de Octubre de 2026** |
| **Hora de Inicio** | 06:00 p.m. (18:00 hrs) |
| **Lugar de Recepción** | **Salón Orlando Forero** |
| **Ubicación** | Maripí, Boyacá — Colombia |
| **Geolocalización** | [Ver en Google Maps](https://maps.app.goo.gl/uRkBLQErFVaHwk6Z8) |
| **Código de Vestimenta** | Elegante - Formal (*Reservados: Palo de rosa, blanco y dorado*) |
| **Obsequio** | Lluvia de Sobres |
| **WhatsApp RSVP** | [+573123911199](https://wa.me/573042394091) |

---

## ⏰ Itinerario Oficial de Actividades

```text
  06:00 p.m. ─── ⛪ Misa de quince años
  07:00 p.m. ─── 🍸 Llegada de invitados
  08:00 p.m. ─── 👠 Inicio del protocolo
  09:00 p.m. ─── 🥂 Brindis y cena
  10:00 p.m. ─── 💃 Rumba
```

---

## ✨ Características de Diseño y Frontend

### 🎨 Estética Editorial y UI/UX
* **Paleta de Alta Costura:** Marfil-rosado pastel (`#F9E4EC`), tipografías en *Rosewood* profundo (`#7A2840`), acentos en terciopelo (`#80233B`) y detalles satinados en oro (`#D4AF37`).
* **Marco Concéntrico Continuo:** Doble filete perimetral en Rosewood y oro que abraza el diseño con curvas matemáticamente balanceadas.
* **Divisores de Seda Orgánicos:** Transiciones fluidas en curvas Bézier entre las fotos y los fondos claros, sin cortes rectos ni deformaciones.
* **Atmósfera Floral Flotante:** Más de 25 ilustraciones lineales (*line-art*) de rosas y corazones suspendidos en desorden con micro-animaciones de brisa.

### ⚡ Interactividad y Lógica (JavaScript ES6+)
* **Pases Personalizados por URL:** Lectura dinámica del parámetro `?invitado=Nombre+Apellido` en el enlace.
* **Preselección de Cupos (`&cupos=`):** Si el enlace incluye `&cupos=5`, el Pase de Honor muestra los cupos asignados y el menú desplegable se preselecciona automáticamente.
* **Desplegable Flexible con Escritura Manual:** Si asisten más de 6 personas, el menú abre un campo de texto para escribir la cifra exacta (ej: 7, 8, 10, etc.).
* **Mensaje Inteligente a WhatsApp:**  
  * En singular (*"Confirmo mi asistencia con 1 persona"*) o plural (*"Confirmamos con 4 personas"*).  
  * Oculta el selector y envía un mensaje de declinación educado si eligen *"No podré asistir"*.
* **Cronómetro Regresivo en Tiempo Real:** Cálculo dinámico con la API nativa de `Date`, descontando segundo a segundo hacia el **3 de Octubre de 2026**.
* **Animaciones 60 FPS por Scroll:** Detección de visibilidad por hardware con `IntersectionObserver API`.

---

## 🗂️ Arquitectura de Archivos Modular

El proyecto cuenta con una separación limpia y profesional entre estructura, presentación, interactividad y recursos multimedia:

```plaintext
Plantilla_invitacion_de_15_a-os_dama/
│
├── index.html                   # Marcado semántico HTML5
├── README.md                    # Documentación técnica del proyecto
├── organizar.sh                 # Script bash de automatización y despliegue
│
├── css/
│   └── styles.css               # Reglas de estilo, variables y animaciones
│
├── js/
│   └── main.js                  # Lógica del cronómetro, RSVP, URL y scroll
│
└── assets/
    └── img/                     # Recursos gráficos y fotografías
        ├── foto1.jpg            # Portada principal en arco
        ├── foto2.jpg            # Galería de recuerdos (mascota)
        ├── foto3.jpg            # Galería de recuerdos (destellos de gala)
        ├── foto4.jpg            # Fotografía ambiental hero de la fecha
        ├── misa.png             # Ícono de Misa (06:00 p.m.)
        ├── icono1.png           # Ícono de Llegada (07:00 p.m.)
        ├── icono2.png           # Ícono de Protocolo (08:00 p.m.)
        ├── icono3.png           # Ícono de Brindis (09:00 p.m.)
        ├── icono4.png           # Ícono de Rumba (10:00 p.m.)
        ├── vestidos.png         # Ilustración de Código de Vestimenta
        ├── recepcion.png        # Torre de copas de recepción
        └── sobre.png            # Sobre para lluvia de sobres
```

> **Sistema de Respaldo Vectorial:** Si alguna imagen `.png` de los íconos no está presente en la carpeta, el sistema activa automáticamente un respaldo vectorial SVG inline idéntico.

---

## 🚀 Guía de Personalización Masiva para WhatsApp

Para compartir la invitación personalizada con cada familia o invitado:

### Estructura del Enlace:
```text
https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=NOMBRE&cupos=CANTIDAD
```

### 💡 Automatizar cientos de enlaces en Excel o Google Sheets:
1. En la **Columna A** escribe los nombres de los invitados.
2. En la **Columna B** escribe la cantidad de cupos (1, 2, 4, 5, etc.).
3. En la **Columna C** pega la siguiente fórmula:
   ```excel
   ="https://gabitoogeek.github.io/Plantilla_invitacion_de_15_a-os_dama/?invitado=" & SUSTITUIR(A2; " "; "+") & "&cupos=" & B2
   ```
4. Arrastra la fórmula hacia abajo y obtendrás todos los enlaces personalizados listos para enviar por WhatsApp.

---

## 🛠️ Instalación y Uso Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/gabitoogeek/Plantilla_invitacion_de_15_a-os_dama.git
   ```
2. Entra a la carpeta:
   ```bash
   cd Plantilla_invitacion_de_15_a-os_dama
   ```
3. Ejecuta el archivo en tu navegador:
   ```bash
   # En Windows
   start index.html

   # En macOS
   open index.html
   ```

---

## 💖 Créditos y Licencia

Diseñado con amor para la celebración de los **15 Años de Anyoull Yaritza Gonzalez Rico** en el Salón Orlando Forero (Maripí, Boyacá).

Distribuido bajo la **Licencia MIT**. Siéntete libre de adaptarlo para bodas, aniversarios y fiestas de quince años.