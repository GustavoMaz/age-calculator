function calcAge() {
    //Descobrindo a data atual
    var currtime = new Date();
    var currday = currtime.getDate;
    var currmonth = currtime.getMonth;
    var curryear = currtime.getFullYear;
    var  months31days = [1, 3, 5, 7, 8, 10, 12];

    //Validando os inputs
    var bday = Number(document.getElementById('bday').value);
    var bmonth = Number(document.getElementById('bmonth').value);
    var byear = Number(document.getElementById('byear').value);
    if (bday.length == 0 || bmonth.length == 0 || byear.length == 0) {
        window.alert('Por favor, preencha todos os campos');
    } else if (bday < 1 || bday > 31) {
        window.alert('Insira um dia válido');
    }

    if (bmonth < 1 || bmonth > 12) {
        window.alert('Insira um mês válido');
    } else if (months31days.indexOf(bmonth) == -1 && bday == 31) {
        window.alert('O dia inserido não existe');
    }

    if (bmonth == 2 && bday > 28) {
        window.alert('O dia inserido não existe');
    }

    if (byear < 0 || byear > curryear) {
        window.alert('Insira um ano válido')
    } else if ((byear == curryear) && (bday >= currday || bmonth > currmonth)){
        window.alert('A data inserida está no futuro');
    }
}