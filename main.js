$(document).ready(function() {                          //recuperando o documento html
    $('form').on('submit', function(e){
        e.preventDefault();                             //eliminando padrão do botão
        
        const novaTarefa = $("#nova-tarefa").val()      //recuperando o valor do input    
        const novoItem = $('<li></li>');                //criando uma tag 'li'
        
        $(`<p>${novaTarefa}<p/>`).appendTo(novoItem);   //adicionando o conteudo na 'li'
        $(novoItem).appendTo('ul');                     //adicionando a lista na tag 'ul'
        
        $('#nova-tarefa').val('');                      //limpando o campo input
        
        $('p').click(function(){
            $(this).css("text-decoration-line", "line-through");    //manipulado o estilo ao clicar no elemento
            $(this).css("color", "blue");                           //manipulado o estilo ao clicar no elemento
        })
        })
    })