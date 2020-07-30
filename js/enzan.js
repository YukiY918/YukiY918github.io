function shisoku_cal(a, b, cal_method) {
    var result;
    var methodArray = ['+', '-', '*', '/']

    if (cal_method == 0) result = parseInt(a) + parseInt(b);
    else if (cal_method == 1) result = parseInt(a) - parseInt(b);
    else if (cal_method == 2) result = parseInt(a) * parseInt(b);
    else {
        if (b == 0) result = "計算不可";
        else result = parseInt(a) / parseInt(b);
    }

    console.log(a);
    console.log(b);
    console.log(result);
    $('#shisoku_cal_result').append('<p>' + a + ' ' + methodArray[cal_method] + ' ' + b + ' = ' + result + '</p>');
}


function sosuu_cal(a, cal_method) {
    var i;
    if (cal_method == 0) {
        for (i = 2; i < (parseInt(a) / i); i++) {
            if ((parseInt(a) % i) == 0) break;
        }
        if (parseInt(a) % i != 0 || a == 2) $('#sosuu_cal_result_1').append('<p>' + a + 'は素数');
        else $('#sosuu_cal_result_1').append('<p>' + a + ' は素数でない');

    } else if (cal_method == 1) {
        $('#sosuu_cal_result_1').append('<p></p>');
        $('#sosuu_cal_result_1').append(a + ' = ');
        var k = 2;
        i = 2;
        while (a > 1) {
            var bunkai = 0
            while ((parseInt(a)) % i == 0) {
                a = parseInt(a) / i;
                bunkai++
            }
            if (bunkai > 0) {
                if (k != 2) $('#sosuu_cal_result_1').append(' * ');
                $('#sosuu_cal_result_1').append(i + '^' + bunkai);
                k++;
            }
            i++;
        }
    } else {
        var hyouji;
        if (a > 2) {
            $('#sosuu_cal_result_2').append('<p></p>');
            $('#sosuu_cal_result_2').append(a + '以下の素数 : 2');

            for (hyouji = 2; hyouji <= a; hyouji++) {
                for (i = 2; i < hyouji / i; i++) {
                    if (hyouji % i == 0) break;
                }
                if (hyouji % i != 0) $('#sosuu_cal_result_2').append(' ' + hyouji);
            }
        }
    }
}

function saidaishou(a, b, cal_method) {
    var a_mem = parseInt(a);
    var b_mem = parseInt(b);
    var mem;
    var c;
    var e = a_mem * b_mem;

    if (a < b) {
        mem = a_mem;
        a_mem = b_mem;
        b_mem = mem
    }

    for (c = a_mem % b_mem; c != 0; c = a_mem % b_mem) {
        a_mem = b_mem;
        b_mem = c;
    }

    if (cal_method == 0) {
        $('#saidaishou_cal_result').append('<p>' + a + ' と ' + b + ' の最大公約数は ' + b_mem + '</p>');
    } else if (cal_method == 1) {
        $('#saidaishou_cal_result').append('<p>' + a + ' と ' + b + ' の最小公倍数は ' + e / b_mem + '</p>');
    }

}

function shisuu_cal(a, b, cal_method) {
    if (cal_method == 0) {
        var result = 1;
        for (var i = 0; i < b; i++) result *= a;
        $('#shisuu_cal_result').append('<p>' + a + '^' + b + ' = ' + result + '</p>');
    } else if (cal_method == 1) {
        $('#shisuu_cal_result').append('<p>√' + a + ' = ' + Math.sqrt(parseInt(a)) + '</p>');
    } else if (cal_method == 2) {
        $('#shisuu_cal_result').append('<p>3√' + a + ' = ' + Math.cbrt(parseInt(a)) + '</p>');
    } else if (cal_method == 3) {
        $('#shisuu_cal_result').append('<p>log(' + a + ') = ' + Math.log(parseInt(a)) + '</p>');
    } else if (cal_method == 4) {
        $('#shisuu_cal_result').append('<p>log10(' + a + ') = ' + Math.log10(parseInt(a)) + '</p>');
    }
}
