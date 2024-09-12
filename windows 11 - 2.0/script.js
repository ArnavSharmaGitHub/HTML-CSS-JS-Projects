console.log("Welcome to Windows 11 - 2.0");

//Helps to select that HTML element on which u have to do the function 
let taskbar = document.getElementsByClassName("taskbar")[0];
let start = document.getElementsByClassName("start")[0];

//Taskbar toggles the menu bar when clicked on windows/Taskbar
taskbar.addEventListener("click", ()=>{
    console.log("Clicked");
    if(start.style.bottom == "50px"){
        start.style.bottom = "-550px";
    }
    else{
        start.style.bottom = "50px";
    }
})