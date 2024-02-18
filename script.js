function calcAge() {
    //Descobrindo a data atual
    var currtime = new Date();
    var currday = currtime.getDate();
    var currmonth = currtime.getMonth();
    var curryear = currtime.getFullYear();
    var  months31days = [1, 3, 5, 7, 8, 10, 12];

    //Validando os inputs
    var invday = false;
    var invmonth = false;
    var invyear = false;

    var bdaytxt = document.getElementById('bday');
    var bmonthtxt = document.getElementById('bmonth');
    var byeartxt = document.getElementById('byear');

    if (bdaytxt.value.length == 0 || bmonthtxt.value.length == 0 || byeartxt.value.length == 0) {
        window.alert('Por favor, preencha todos os campos');
    } else {

        var bday = Number(bdaytxt.value);
        var bmonth = Number(bmonthtxt.value);
        var byear = Number(byeartxt.value);
    
        if (bday < 1 || bday > 31) {
            //window.alert('Insira um dia válido');
            invday = true;
        }

        if (bmonth < 1 || bmonth > 12) {
            //window.alert('Insira um mês válido');
            invmonth = true;
        } else if (months31days.indexOf(bmonth) == -1 && bday == 31) {
            //window.alert('O dia inserido não existe');
            invday = true;
        }

        if (bmonth == 2 && bday > 28) {
            //window.alert('O dia inserido não existe');
            invday = true;
        }

        if (byear < 0 || byear > curryear) {
            invyear = true;
        }
        
        if ((byear == curryear) && (bday >= currday || bmonth > currmonth)){
            //window.alert('A data inserida está no futuro');
            invyear = true;
        }
        
        //Mensagem de erro
        showError(invday, bdaytxt);
        showError(invmonth, bmonthtxt);
        showError(invyear, byeartxt)
            
        //Checando se todos são válidos
        if (invday == false && invmonth == false && invyear == false) {
            window.alert('Tudo ok')
        }
    }
}

function showError(invalid, elem) {
    if (invalid) {
        elem.style.backgroundColor = 'red';
    } else { 
        elem.style.backgroundColor = 'white'; 
    }
}