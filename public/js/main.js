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

}());
