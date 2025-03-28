window.addEventListener('DOMContentLoaded', (event) => {
    const mobileDevSections = document.querySelectorAll('.esquerda'); // Seleciona todas as divs com a classe 'mobile-dev'
    mobileDevSections.forEach((mobileDevSection) => {
        // Inicializa a animação com a div à direita (fora da tela) e invisível
        mobileDevSection.classList.add('translate-x-full', 'opacity-0');
        
        setTimeout(() => {
            // Após o atraso, remove a posição da direita e torna a div visível
            mobileDevSection.classList.remove('translate-x-full', 'opacity-0');
            mobileDevSection.classList.add('translate-x-0', 'opacity-100');
        }, 300); // Delay de 300ms antes da animação começar
    });
});