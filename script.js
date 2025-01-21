document.getElementById('serviceForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener los datos del formulario
  const ownerName = document.getElementById('ownerName').value;
  const dogName = document.getElementById('dogName').value;
  const service = document.getElementById('service').value;
  const phone = document.getElementById('phone').value;

  // Crear el mensaje que se enviará por WhatsApp
  const message = `*Solicitud de servicio para Perritos Saludables*%0A%0A` +
    `Nombre del Propietario: ${ownerName}%0A` +
    `Nombre del Perrito: ${dogName}%0A` +
    `Servicio Necesario: ${service}%0A` +
    `Número de Teléfono: ${phone}`;

  // Crear el enlace de WhatsApp con el mensaje preformateado
  const whatsappLink = `https://wa.me/68760685?text=${message}`;

  // Redirigir al usuario a WhatsApp con el mensaje preformateado
  window.location.href = whatsappLink;

  // Mostrar mensaje de éxito
  document.getElementById('successMessage').textContent = '¡Tu solicitud ha sido enviada correctamente! Pronto nos pondremos en contacto contigo.';
});
