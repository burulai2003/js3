var month = prompt('enter your birth month-')
var day = Number(prompt('enter your birth day-'))
if (month == 'december' && day >= 21 && day <= 31 ||
    month == 'january' && day >= 1 && day <= 19) {
    console.log('Capricorn')
}
else if (month == 'january' && day >= 20 && day <= 31 ||
    month == 'february' && day >= 1 && day <= 18) {
    console.log('sagittarius')
}

else if (month == 'february' && day >= 18 && day <= 31 ||
    month == 'march' && day <= 19 && day >= 1) {
    console.log('pisces')
}
else if (month == 'march' && day >= 20 && day <= 31) {
    console.log('aries')
}
else if (month == 'april' && day >= 20 && day <= 31 ||
    month == 'may' && day <= 20 && day >= 1) {
    console.log('taurus')
}

else {
    alert('error,a month has only 31 days,so enter the number from 1 till 31');
}

