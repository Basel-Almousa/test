'use strict'



let solArr = [];
function Solar(location, numberOfWatt) {
    this.location = location;
    this.numberOfWatt = numberOfWatt;
    solArr.push(this);
}





let solarForm = document.getElementById('solarForm');
solarForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let newNumber = numberOfWatt.value;
    newNumber = parseInt(newNumber);
    console.log(newNumber);
//    y is constant and it is the average sun hour per day in joradn
    //   0.75 is the efficiency of the panels in jordan considering the dust effects 
    const y = 9.87;
    let x = (newNumber / y) * 0.75 * 1000;
    if (x <2000) {
         document.write("your facility does't need any solar panel")    
    } else if(2000 < x < 6000){
        document.write('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with 15 to 24 of solar panels');
    }else if (6000 < x < 10000){
        document.write('Your facility needs a solar panel with a ' + Math.floor(x) + ' Watt with 24 to 40 of solar panels');

    }
    console.log(Math.floor(x));

}
// handleSubmit();


