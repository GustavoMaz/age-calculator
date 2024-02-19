function calcAge() {
    //Descobrindo a data atual
    var currtime = new Date();
    var currday = currtime.getDate();
    var currmonth = currtime.getMonth();
    var curryear = currtime.getFullYear();
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //Validando os inputs
    var invday = false;
    var invmonth = false;
    var invyear = false;

    var bdaytxt = document.getElementById('bday');
    var bmonthtxt = document.getElementById('bmonth');
    var byeartxt = document.getElementById('byear');

    var daydiv = document.getElementById('day');
    var monthdiv = document.getElementById('month');
    var yeardiv = document.getElementById('year');
    var datedivs = [daydiv, monthdiv, yeardiv];

    if (bdaytxt.value.length == 0 || bmonthtxt.value.length == 0 || byeartxt.value.length == 0) {
        window.alert('Por favor, preencha todos os campos');
    } else {

        var bday = Number(bdaytxt.value);
        var bmonth = Number(bmonthtxt.value);
        var byear = Number(byeartxt.value);
    
        //No caso de anos bissextos
        if (curryear % 4 == 0) {
            months[1] = 29;
        }

        if (bday < 1 || bday > 31) {
            invday = true;
            showError(daydiv, 'Dia inválido');
        }

        if (bmonth < 1 || bmonth > 12) {
            invmonth = true;
            showError(monthdiv, 'Mês inválido');
        } else if (bday > months[bmonth-1]) {
            invday = true;
            showError(daydiv, 'Dia inválido');
        }

        if (byear < 0) {
            invyear = true;
            showError(yeardiv, 'Ano inválido');
        }
        
        if ((byear == curryear) && (bday > currday || bmonth > currmonth) || (byear > curryear)){
            invyear = true;
            showError(yeardiv, 'Precisa estar no passado');
        }
            
        //Checando se todos são válidos
        if (invday == false && invmonth == false && invyear == false) {

            var errormsg = document.getElementsByClassName('errormsg');
            for (i in datedivs) {
                datedivs[i].className = 'valid'
                errormsg[i].innerHTML = '';
            }

            var age = {
                days: undefined,
                months: undefined,
                years: undefined
            };
            age.years = curryear - byear;
            
            let prevmonth = currmonth-1;
            
            //Calculando a idade
            if (prevmonth < 0) {
                prevmonth = 12;
            }
            if (currday < bday) {
                age.months--;
                currday += months[prevmonth];
            }
            age.days = currday - bday;

            if (currmonth < bmonth) {
                currmonth += 12;
                age.years--;
            } 
            age.months = currmonth - bmonth;

            var rday = document.getElementById('rday');
            rday.innerText = age.days;
            var rmonth = document.getElementById('rmonth');
            rmonth.innerText = age.months;
            var ryear = document.getElementById('ryear');
            ryear.innerText = age.years;
        }
    }
}

function showError(elem, msg) {
    elem.className = 'invalid';
    elem.querySelector('.errormsg').innerHTML = msg;
}

