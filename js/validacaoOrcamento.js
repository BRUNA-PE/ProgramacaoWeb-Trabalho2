function validarOrcamento()
{
    var nome = formulario.nome;
    if (nome.value ==""){
        alert ("Nome não informado");
        nome.focus ();
    }

}