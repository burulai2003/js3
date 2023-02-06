var days = 'friday';
switch (days) {
    case 'Monday':
    case 'monday':
    case 'MONDAY':
        console.log('ponedelnik')
        break;
    case 'Tuesday':
    case 'tuesday':
    case 'TUESDAY':
        console.log('vtornik')
        break;
    case 'wednesday':
    case 'Wednesday':
    case 'WEDNESDAY':
        console.log('sreda')
        break;
    case 'THURSDAY':
    case 'Thursday':
    case 'thursday':
        console.log('chetverg')
        break;
    case 'friday':
    case 'Friday':
    case 'FRIDAY':
        console.log('pyatnica')
        break;
    case 'SATURDAY':
    case 'Saturday':
    case 'saturday':
        console.log('subbota')
        break;
    case 'sunday':
    case 'SUNDAY':
    case 'Sunday':
        console.log('voskresenye')
        break;

    default:
        console.log('unknown day of the week')


}
