(function() {
    console.log("fired!");

//variables
    var showMenu = document.getElementById("burgBtn");

//function
    function toggle() {
        document.getElementById("burgBtn").classList.toggle("menu"); 
        document.getElementById("toggleList").classList.toggle("active");//when toggled display active toggleList div
    }

//execute  
    showMenu.addEventListener("click", toggle);


//Mailer

const form = document.querySelector('form'), submit = form.querySelector('.submit-button');

function handleMail(event) {
    event.preventDefault();

    // formdata will be the values of the fields the user fills out (the inputs)
    // maildata is an object we'll build and send through with those values

    let formdata = new FormData(form),
        maildata = {};

    // parse the form data (it's an iterable, so you have to do it this way)
    // and populate the maildata object with the input values (the formdata entries)
    for (let [key, value] of formdata.entries()) {
        maildata[key] = value;
    }

    let url = `/mail`;

    // use the POST superglobal which is more secure than GET, and hit the /mail route in index.js
    // inside the routes folder. this will take in the formdata we're sending, and use that to send our email
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },

        body: JSON.stringify(maildata)
    })
        .then(res => res.json())
        .then(data => {
            // remove this when testing is done and everything is working
            console.log(data);

            if (data.response.includes("OK")) {
                // we successfully sent an email via gmail and nodemailer!
                // flash success here, reset the form
                form.reset();
                alert("email was sent!"); // DO NOT use alerts. they are so hacky and gross.
            }
        }) // this will be a success or fail message from the server
        .catch((err) => console.log(err));

    console.log('tried sending mail');
}

form.addEventListener('submit', handleMail)

}());
