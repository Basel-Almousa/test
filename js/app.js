'use strict'



let solArr = [];
function Solar(location, numberOfWatt) {
    this.location = location;
    this.numberOfWatt = numberOfWatt;
    solArr.push(this);
    
}



let solarForm = document.getElementById('solarForm');

solarForm.addEventListener('submit', handleSubmit);
// let newNumber;
function handleSubmit(event) {
    event.preventDefault();
    // this.newNumber = event.target.numberOfWatt.value;

    let newNumber = event.target.numberOfWatt.value;
    this.newNumber = parseInt(newNumber);
    console.log(newNumber);
    // s : system size 
    // i : inverter size 
    // P : NUMBER OF PANELS 
    // a : area 
    let s = newNumber / (4 * 0.77 * 1 * 30);
    let i = (newNumber / 30) / 4 * 1.25;
    let p = (newNumber / 41);
    let a = p * 2;


     let dv = document.getElementById('result');
     dv.textContent = "";
    if (350 < newNumber) {
        dv.textContent = ('Your facility need a solar system size of ' + Math.round(s*100.0)/100.0 + ' KW with an inverter of ' + Math.round(i*100.0)/100.0  + ' KW and ' + Math.round(p) + ' modules covering ' + Math.round(a) + ' square meter.');
        
        

    } else{ 
    dv.textContent = ("your facility does't need any solar panel");
    
}



// if (newNumber < 400) {
//     let link = document.createElement('a')
//     link.textContent = ("your facility does't need any solar panel");
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);

// } else if(400 < s < 500){

//     let link = document.createElement('a')
//     link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);


// }else if (500 < s < 3000){
//     let link = document.createElement('a')
//     link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);


// }else if (3000 < x < 4000){
//     let link = document.createElement('a')
//     link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);



// }else if (4000 < x < 5000){
//     let link = document.createElement('a')
//     link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);



// }else if (5000 < x < 6000){
//     let link = document.createElement('a')
//     link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);



// }else if (6000 < x < 7000){
//     let link = document.createElement('a')
//     link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);



// }else if (7000 < x < 8000){
//     let link = document.createElement('a')
//     link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
//      document.getElementById('result').appendChild(link);
//      solarForm.removeEventListener('submit', handleSubmit);


// }

console.log(Math.floor(x));

}
// handleSubmit();


