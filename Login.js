document.addEventListener('DOMContentLoaded', function() {
    const email = "josue@gmail.com";
    const contra = "12345";
    
    const formulario = document.querySelector('.form');
    const errorMessage = document.getElementById('error-message');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const in_email = document.getElementById('email').value.trim();
        const in_contra = document.getElementById('password').value.trim();

        // Ocultar mensaje anterior
        errorMessage.style.display = 'none';
        
        // Validar extensiones de email
        if(!in_email.endsWith("@gmail.com") && !in_email.endsWith("@outlook.com") && !in_email.endsWith("@yahoo.com")){
            errorMessage.textContent = "El correo debería tener estas extensiones: @gmail.com, @outlook.com, @yahoo.com";
            errorMessage.className = "error-message";
            errorMessage.style.display = "block";
            return;
        }

        // Mostrar mensaje de éxito o error según corresponda
        if(email === in_email && contra === in_contra){
            errorMessage.textContent = "¡Login exitoso! Redirigiendo a la pagina Principal...";
            errorMessage.className = "success-message";
            errorMessage.style.display = "block";
            
            // Redirigir después de 1.5 segundos
            setTimeout(() => {
                window.location.href = "https://www.youtube.com";
            }, 1500);
            
        } else{
            errorMessage.textContent = "Credenciales incorrectas. Usa: josue@gmail.com / 12345";
            errorMessage.className = "error-message";
            errorMessage.style.display = "block";
        }
    });
});