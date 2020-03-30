# jQuery Essentials

## O que é?
jQuery é uma biblioteca de funções JavaScript que interage com o HTML.

## A documentação
[api.jquery.com](https://api.jquery.com/)

# Iniciando o jQuery

Para iniciar, são necessários dois arquivos, o arquivo de download do jQuery, e outro arquivo para manipular o jQuery

## No HTML

```
    <script src="jquery.js"></script>
    <script src="script.js"></script>

```

## No script

### Forma padrão de iniciar o jQuery

```
    $(document).ready(function() {
        $(".app").html("jQuery Iniciado!");
    });

```

O **ready** carrega todo o JavaScript necessário para a página na hora que está carregando a página
# 
Podemos usar o **load**, que espera os arquivos .html e .css serem carregados para depois carregar o JavaScript

### Forma padrão de iniciar o jQuery simplificado

```
    $(function() {
        $(".app").html("jQuery Iniciado com Gatilho!");
    });

```

### Carregando antes de outra LIB

```
    jQuery(function($) {
        $(".app").html("jQuery antes de outra Lib");
    });

```

### Carregando depois de outra LIB

```
    var $j = jQuery.noConflict();
    $j(document).ready(function() {
        $j(".app").html("jQuery depois de outra Lib");
    });

```

# Algumas funções do console que ajudam no debug do jQuery no console do browser

```
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

```
