document.getElementById('switch-input').addEventListener('input', (event)=> {
    let item = document.getElementById('text')

    if (event.target.value && event.target.value !== '') {
        item.innerHTML = setSwitchValue(Number(event.target.value))
    } else {
        item.innerHTML = ''
    }
})

function setSwitchValue(event) {
    let value = "";
    
    switch (event) {
        case 0:
            value = "ноль"
            break;

        case 1:
            value = "один"
            break;
        
        case 2:
            value ="два"
            break;
        
        case 3:
            value = "три"
            break;

        case 4:
            value = "четыре"
            break;
        
        case 5:
            value = "пять"
            break;
        
        case 6:
            value = "шесть"
            break;
        
        case 7:
            value =  "семь"
            break;
        
        case 8:
            value =  "восемь"
            break;

        case 9:
            value =  "девять"
            break;

        default:
            value =''
        
  }
  return value;
}