
// Displays user data in an alert
function userData() {
    var name = document.querySelector('input#firstName').value
    var phone = document.querySelector('input#phone').value
    var email = document.getElementById('email').value
    alert(`Nome: ${name}. \nTelefone: ${phone}. \nEmail: ${email}`)
}


// Checks whether password and password confirmation are the same
function verifyPassword() {
    var password = document.querySelector('input#password').value
    var repeatPassword = document.querySelector('input#repeatPassword').value
    var res = document.querySelector('div#res')

    if (password != repeatPassword) {                                             // Se senhas diferentes, então exibe um alerta informando
        res.innerHTML = `As senhas devem ser iguais, verifique o valor digitado`
        return false
    } else {                                                                      // Se senhas iguais, chama a função userData() e exibe os dados do usários
        res.innerHTML = ""
        userData()
    }
}

// Mask for phone/cell formatting
$(document).ready(function () {
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('#phone').mask(SPMaskBehavior, spOptions);
})
