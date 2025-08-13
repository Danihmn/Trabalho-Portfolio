(function () {
    emailjs.init("CwO8qYysF7YhpR2LM"); // Cria novo envio
})();

document.querySelector('.contato-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Seleciona as API Key
    emailjs.sendForm('service_8t7fdjf', 'template_vcay8gi', this).then(function () {
        alert('Mensagem enviada com sucesso!');
    }, function (error) {
        alert('Erro ao enviar: ' + error.text); // Exibe a mensagem de erro
    });
});