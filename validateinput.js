
//trigger of submission of info//

function validateInput(event){
    
    //ensure that the page does NOT refresh//
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);

    let firstLast = firstName + " " + lastName;
    console.log(firstName)

//ensures that it is valid with more than 20 characters//

    if(firstLast.length  < 20){ 
        alert("Not enough characters, First and Last name must have at LEAST 20 characters");
        return;
    }
    console.log("Valid first and last name!");
    

    // this ensures the input is valid zipRegExp//

    const zipRegExp = /\b\d{5}\b/;

    // ! = if not true (anything other than 5 ints then throws warning flag)//
    if(!zipRegExp.test(zip)){
        alert("invalid zip code. Zip must be a number of 5 digits.");
        return;

    }


console.log(parseInt("33"));
console.log(parseInt("3.3"));

//hidden//
console.log("zip valid")
}

//submits the form information, check to see if form exists, add event listener to the event//

window.addEventListener("DOMContentLoaded",(event) => {   
    const form = document.getElementById("myform");
    if(form) {
    form.addEventListener("submit", validateInput);


}
});

