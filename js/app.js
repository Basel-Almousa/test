'use strict'



let solArr = [];
function Solar(location, numberOfWatt) {
    this.location = location;
    this.numberOfWatt = numberOfWatt;
    solArr.push(this);
}



let solarForm = document.getElementById('solarForm');
solarForm.addEventListener('submit', handleSubmit);
let newNumber;
function handleSubmit(event) {
    event.preventDefault();
    // this.newNumber = event.target.numberOfWatt.value;

    let newNumber = event.target.numberOfWatt.value;
    this.newNumber = parseInt(newNumber);
    console.log(newNumber);
    // y is constant and it is the average sun hour per day in joradn
    //   0.75 is the efficiency of the panels in jordan considering the dust effects 
    const y = 300.2;
    // y >>>> hour per day
    let x = (newNumber/y) * 0.75 *1000;
    let w = x / 350;
    // w = (watt/unit) 
    if (x <1000) {
        let link = document.createElement('a')
        link.textContent = ("your facility does't need any solar panel");
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);

    } else if(1000 < x < 2000){

        let link = document.createElement('a')
        link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);


    }else if (2000 < x < 3000){
        let link = document.createElement('a')
        link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);


    }else if (3000 < x < 4000){
        let link = document.createElement('a')
        link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);



    }else if (4000 < x < 5000){
        let link = document.createElement('a')
        link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);



    }else if (5000 < x < 6000){
        let link = document.createElement('a')
        link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);



    }else if (6000 < x < 7000){
        let link = document.createElement('a')
        link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);



    }else if (7000 < x < 8000){
        let link = document.createElement('a')
        link.textContent = ('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with '+ Math.ceil(w) + ' solar panels with capaility of 350 watt of each panel.');
         document.getElementById('result').appendChild(link);
         solarForm.removeEventListener('submit', handleSubmit);


    }

    console.log(Math.floor(x));

}
// handleSubmit();


