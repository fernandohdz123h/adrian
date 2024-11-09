function validateLogin() {
    // Datos de usuario y contraseña válidos
    const validUsername = 'user1';
    const validPassword = '12345';

    // Obtiene los valores de los campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica si los datos ingresados son correctos
    if (username === validUsername && password === validPassword) {
        alert('Inicio de sesión exitoso');
        // Redirecciona a otra página (por ejemplo, dashboard.html)
        window.location.href = 'dashboard.html';
    } else {
        // Muestra un mensaje de error
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
}
 