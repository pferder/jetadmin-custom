let counter = 0; 
let selects = [];

const translate = () => {
    // cambiar CHOOSE a Elegir opción

for (i=0;i<selects.length;i++) {
    
    selects[i]['children'][0]['innerHTML'] = 'Elegir opción';
    }   

}

const getSelects = () => {
    counter++;
    selects = document.getElementsByClassName('mat-select-value');
    
    if(selects.length > 1) {
            translate()
    } else {
//        clearInterval(interval)
    }
    
    console.log(counter)
    console.log(selects)
}

let interval = setInterval(getSelects(),3000)
