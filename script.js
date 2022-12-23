let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startMenu")[0];

taskbar.addEventListener("click", () => {
  //console.log("clicked");  // this is used to check whether our call-back argument will work or not.
  if (startmenu.style.bottom == "-3px") {
    startmenu.style.bottom = "-650px";
  } else {
    startmenu.style.bottom = "-3px";
  }
});

taskbar.removeEventListener("click", () => {
  //   console.log("clicked");
  if (startmenu.style.bottom == "-3px") {
    startmenu.style.bottom = "-650px";
  } else {
    startmenu.style.bottom = "-3px";
  }
});
