let landOwned = 10;
let isWarMode = false;
let selectedWeapon = null;
let weaponPower = 0;

function toggleWarMode() {
    isWarMode = !isWarMode;
    const map = document.getElementById('map');
    const dock = document.getElementById('weapon-dock');
    const msg = document.getElementById('status-msg');

    if (isWarMode) {
        map.classList.add('war-active');
        dock.classList.remove('hidden');
        msg.innerText = "WAR DECLARED: Pick a weapon and strike!";
    } else {
        map.classList.remove('war-active');
        dock.classList.add('hidden');
        msg.innerText = "Peace time. Expand your borders.";
    }
}

function setWeapon(name, power) {
    selectedWeapon = name;
    weaponPower = power;
    document.getElementById('status-msg').innerText = "Weapon Armed: " + name;
}

function attackCountry(element, name) {
    if (!isWarMode) {
        alert("You must Declare War first!");
        return;
    }
    if (!selectedWeapon) {
        alert("Select a weapon from the dock!");
        return;
    }

    // Logic for capturing land
    landOwned += weaponPower;
    document.getElementById('land-size').innerText = landOwned;
    
    // Visual feedback
    element.style.background = "green";
    element.innerText = "CONQUERED";
    element.onclick = null; // Can't attack the same place twice

    alert(`You used ${selectedWeapon} on ${name}! You gained ${weaponPower}km² of land.`);
}
