/*
Modules
*/

import { Navigator } from "./modules/navigator.js";

/*
Navigator and menu
*/

const navigator = new Navigator();
navigator.openSection(0);

/*
Bouncing basketball
*/

let bouncing = true;
        
document.getElementById("bounce-toggle").onclick = () => {
    if (bouncing) {
        document.getElementById("basketball").style.animation = "none";
        document.getElementById("basketball-shadow").style.animation = "none";
        document.getElementById("bounce-toggle").textContent = "Start bouncing";
        bouncing = false;
    } else {
        document.getElementById("basketball").style.animation = "var(--anim-ball-drop-and-deform)";
        document.getElementById("basketball-shadow").style.animation = "var(--anim-ball-shadow-fade-in)";
        document.getElementById("bounce-toggle").textContent = "Stop bouncing";
        bouncing = true;
    }
}

document.getElementById("bounce-speed-input").onchange = () => {
    const newSpeed = document.getElementById("bounce-speed-input").value;
    document.getElementById("bouncing-ball").style.setProperty("--bounce-duration", `${10000/newSpeed}ms`);
    document.getElementById("bounce-speed-output").textContent = newSpeed;
}