document.querySelectorAll('.produto button').forEach(button => {
    button.addEventListener('click', () => {
        const produtoNome = button.parentElement.querySelector('h3').innerText;
        alert(`Você adicionou o ${produtoNome} ao carrinho!`);
    });
});
