let keyPress = document.getElementsByTagName("p");


document.addEventListener("keypress", (keyboard) => {
    keyPress[0].textContent = keyboard.which;
    keyPress[1].textContent = keyboard.key;
    keyPress[2].textContent = keyboard.code;
    keyPress[3].textContent = keyboard.which;

});

