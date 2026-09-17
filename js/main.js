document.addEventListener('DOMContentLoaded', () => {

  /* 1. ANIMACIONES SUAVES POR SCROLL */
  const animatedElements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale, .timeline-row');

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  animatedElements.forEach(el => scrollObserver.observe(el));

  /* 2. LECTURA DE INVITADO Y CUPOS ASIGNADOS EN URL (?invitado=Nombre&cupos=5) */
  const urlParams = new URLSearchParams(window.location.search);
  const rawGuest = urlParams.get('invitado') || urlParams.get('pase') || urlParams.get('guest');
  const rawPasses = urlParams.get('cupos') || urlParams.get('personas') || urlParams.get('pases');
  
  let guestName = "Apreciado(a) Invitado(a)";
  if (rawGuest && rawGuest.trim() !== "") {
    guestName = decodeURIComponent(rawGuest.trim());
  }
  document.getElementById('guestNameDisplay').textContent = guestName;

  // Asignación de cupos por defecto
  let defaultCount = 1;
  if (rawPasses && !isNaN(parseInt(rawPasses)) && parseInt(rawPasses) > 0) {
    defaultCount = parseInt(rawPasses);
    document.getElementById('guestPassSubtitle').textContent = 
      `Pase de honor reservado para ${defaultCount} persona${defaultCount > 1 ? 's' : ''}.`;
  }

  /* 3. LÓGICA DEL DESPLEGABLE Y ESCRITURA DE ASISTENTES */
  const attendeesBox = document.getElementById('attendeesBox');
  const attendeesSelect = document.getElementById('attendeesSelect');
  const customInputWrapper = document.getElementById('customAttendeesInputWrapper');
  const customInput = document.getElementById('customAttendeesInput');
  const rsvpRadios = document.querySelectorAll('input[name="rsvpStatus"]');
  const whatsappBtn = document.getElementById('whatsappRsvpBtn');
  const phoneNumber = "573123911199";

  // Aplicar valor por defecto al select
  if (defaultCount <= 6) {
    attendeesSelect.value = String(defaultCount);
    customInputWrapper.style.display = "none";
  } else {
    attendeesSelect.value = "mas";
    customInputWrapper.style.display = "block";
    customInput.value = defaultCount;
  }

  function getSelectedCount() {
    const val = attendeesSelect.value;
    if (val === "mas") {
      const typed = parseInt(customInput.value);
      return (!isNaN(typed) && typed > 6) ? typed : 7;
    }
    return parseInt(val) || 1;
  }

  function handleSelectChange() {
    if (attendeesSelect.value === "mas") {
      customInputWrapper.style.display = "block";
      if (!customInput.value || parseInt(customInput.value) <= 6) {
        customInput.value = 7;
      }
      customInput.focus();
    } else {
      customInputWrapper.style.display = "none";
    }
    updateWhatsAppUrl();
  }

  attendeesSelect.addEventListener('change', handleSelectChange);
  customInput.addEventListener('input', updateWhatsAppUrl);

  /* 4. ACTUALIZACIÓN DINÁMICA DE LA RESPUESTA DE WHATSAPP */
  function updateWhatsAppUrl() {
    const selectedRadio = document.querySelector('input[name="rsvpStatus"]:checked');
    const selectedStatus = selectedRadio ? selectedRadio.value : "SI";
    let message = "";

    if (selectedStatus === "SI") {
      attendeesBox.style.display = "block";
      attendeesBox.style.opacity = "1";
      attendeesBox.style.visibility = "visible";
      const count = getSelectedCount();
      
      if (count === 1) {
        message = `¡Hola Anyoull! ✨ Confirmo con mucha alegría mi asistencia a tus 15 Años el 03 de Octubre de 2026 en el Salón Orlando Forero (Maripí, Boyacá).\n\n👤 Invitado: *${guestName}*\n🎟️ Cupos confirmados: *1 persona*\n\n¡Nos vemos pronto para celebrar tu noche mágica! 👑🥂`;
      } else {
        message = `¡Hola Anyoull! ✨ Confirmamos con mucha alegría nuestra asistencia a tus 15 Años el 03 de Octubre de 2026 en el Salón Orlando Forero (Maripí, Boyacá).\n\n👤 Invitados: *${guestName}*\n🎟️ Cupos confirmados: *${count} personas*\n\n¡Nos vemos pronto para celebrar tu noche mágica! 👑🥂`;
      }
    } else {
      attendeesBox.style.display = "none";
      message = `¡Hola Anyoull! 💌 Agradezco de corazón tu invitación a tus 15 Años. Con pesar no podremos acompañarte físicamente, pero te deseamos una noche mágica y llena de bendiciones.\n\n👤 De: *${guestName}*`;
    }

    whatsappBtn.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  }

  rsvpRadios.forEach(radio => radio.addEventListener('change', updateWhatsAppUrl));
  updateWhatsAppUrl();

  /* 5. CRONÓMETRO REGRESIVO ACTIVO (03 OCTUBRE 2026 - 18:00 HRS) */
  const targetDate = new Date(2026, 9, 3, 18, 0, 0).getTime();

  const elDays = document.getElementById('timer-days');
  const elHours = document.getElementById('timer-hours');
  const elMin = document.getElementById('timer-minutes');
  const elSec = document.getElementById('timer-seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    let distance = targetDate - now;

    if (distance <= 0) {
      elDays.textContent = "00";
      elHours.textContent = "00";
      elMin.textContent = "00";
      elSec.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMin.textContent = String(minutes).padStart(2, '0');
    elSec.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
