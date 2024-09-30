var sms;
var op = prompt('Por favor, digite seu nome');
document.getElementById('nome').innerHTML = op;

function conta()
{
    var funcao = document.getElementById ('opcao').value;
    var num1 = parseInt (document.getElementById('num1').value);
    var num2 = parseInt (document.getElementById('num2').value);

    if(funcao == '+')
    {
        op = num1 + num2;
    }

    if (funcao == '-')
    {
        op = num1 - num2;
    }

    if (funcao == '/')
    {
        op = num1 / num2;
    }

    if (funcao == '*')
    {
        op = num1 * num2;
    }

    document.getElementById('resultado').innerHTML = op;
}