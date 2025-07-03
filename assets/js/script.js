// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const errorMessage = document.getElementById('errorMessage');
    const registerBtn = document.getElementById('register');
    const forgotPasswordBtn = document.getElementById('forgotPassword');

    // Mostrar/Esconder Senha
    togglePassword.addEventListener('click', function() {
        if (passwordInput.value.trim() === '') return; // Se vazio, não faz nada
        
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Alterna ícone
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Validação do Formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita recarregar a página
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Valida campos vazios
        if (!email || !password) {
            errorMessage.textContent = 'Informe o E-mail e a Senha';
            return;
        }
        
        // Simulação de validação (sem banco de dados)
        if (email === 'usuario@exemplo.com' && password === '123456') {
            errorMessage.textContent = 'Logado com sucesso!';
            errorMessage.style.color = 'green';
            // Redireciona para a página inicial (futura Tela 3)
            setTimeout(() => { window.location.href = 'pages/home.html'; }, 1000);
        } else {
            errorMessage.textContent = 'Usuário ou Senha Inválidos';
            errorMessage.style.color = 'red';
            passwordInput.value = ''; // Limpa a senha
        }
    });

    // Redirecionamentos (Telas futuras)
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecionar para Tela 2 (Cadastro)');
        // window.location.href = 'pages/register.html';
    });

    forgotPasswordBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecionar para Tela 3 (Recuperação)');
        // window.location.href = 'pages/forgot-password.html';
    });
});