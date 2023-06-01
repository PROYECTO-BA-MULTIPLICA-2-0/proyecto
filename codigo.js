
    document.getElementById("myForm").addEventListener("submit", function(event) {
      // Detiene el envío del formulario
      event.preventDefault();

      // Verifica las condiciones del formulario
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;

      if (name === "" || email === "") {
        // Muestra una alerta si algún campo está vacío
        alert("Por favor, completa todos los campos");
      } else {
        // Enviar el formulario si todas las condiciones se cumplen
        // Aquí puedes agregar el código para enviar el formulario a tu servidor
        alert("Formulario enviado correctamente");
        document.getElementById("myForm").submit();
      }
    });
