let counter = 0; 
let selects = [];

function translate() {

    for (i=0;i<selects.length;i++) {
        // cambiar CHOOSE a Elegir opción    
        selects[i]['children'][0]['innerHTML'] = 'Elegir opción';
    }   

}

function getSelects() {
    counter++;
    selects = document.getElementsByClassName('mat-select-value');
    
    if(selects.length > 1) {
            translate()
    }
    console.log(counter)
    console.log(selects)
}

while (selects.length <= 1) {
    setTimeout(getSelects(),3000)
}
