let entry = document.querySelector(".entry");
let toll = document.querySelector(".toll");


//Add entry
let isAddEntry = false;
function addEntry() {
    toll.style.display = "none";
    if (!isAddEntry) {
        entry.style.display = "flex";
        isAddToll = false;
        // isModalPresent = true;
    } else {
        entry.style.display = "none";
        // isModalPresent = false;
    }
    isAddEntry = !isAddEntry; //toggling effect
}
function closeEntry() {
    entry.style.display = "none";
    isAddEntry = !isAddEntry;
}

//Add Toll
let isAddToll = false;
function addToll(){
    entry.style.display = "none";
    if(!isAddToll){
        isAddEntry = false;
        toll.style.display = "flex";
    }
    else{
        toll.style.display = "none";
    }
    isAddToll = !isAddToll;
}
function closeToll() {
    toll.style.display = "none";
    isAddToll = !isAddToll;
}