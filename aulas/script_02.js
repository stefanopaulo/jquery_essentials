$(function() {
    $(".app").html("jQuery Essentials!");

    console.group("Mensagens gerais");
    console.log("jQuery Essentials");
    console.info("O jQuery foi carregado com succeso!");
    console.warn("Um alterta");
    console.error("Um erro");
    console.groupEnd();

    var cadastro = false;

    console.group("Cadastro de usuários");
    console.info("Cadastro iniciado!");

    if(cadastro == true) {
        console.log("Cadastro Realizado!");
    } else {
        console.warn("Erro ao cadastrar!");
    }

    console.groupEnd();
});