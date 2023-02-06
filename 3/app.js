var blacklist = ['dastan', 'tima', 'ariet', 'ruslan', 'Tima',
    'DASTAN', 'AIZIREK', ' ARIET', 'KYLIE', 'kim',
    'TIMA', 'Daniel', 'DANIEL', 'daniel', 'Kutman']

var name1 = prompt('Введите имя')

var i = 0;

do {
    if (blacklist.includes(name1)) {
        name1 = prompt('Введите имя:')
    } else {
        alert(`Welcome ${name1}`);
        break;
    }
    i++
} while (true)