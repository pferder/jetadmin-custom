
let selects = [];

const translate = () => {
    // cambiar CHOOSE a Elegir opción

    for (i=0;i<selects.length;i++) {
        selects[i]['children'][0]['innerHTML'] = 'Elegir opción';
    }   

}

const getSelects = () => {
    selects = document.getElementsByClassName('mat-select-value');
    
    if(selects.length > 1) {
        translate()
    } else {
        console.log(selects)
    }
     
}

getSelects()
