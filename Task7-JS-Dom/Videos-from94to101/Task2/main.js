let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let classListContainer = document.querySelector(".classes-list div");

function updateClassList() {
    
    let classes = Array.from(currentElement.classList).sort();

    classListContainer.innerHTML = classes.length
        ? classes.map(cls => `<span>${cls}</span>`).join("")
        : "No Classes To Show";
}


addInput.addEventListener("blur", function () {
    let classesToAdd = this.value.trim().toLowerCase().split(/\s+/); 
    if (classesToAdd[0] !== "") { 
        currentElement.classList.add(...classesToAdd); 
        this.value = ""; 
        updateClassList(); 
    }
});


removeInput.addEventListener("blur", function () {
    let classesToRemove = this.value.trim().toLowerCase().split(/\s+/);
    if (classesToRemove[0] !== "") { 
        currentElement.classList.remove(...classesToRemove);
        this.value = "";
        updateClassList(); 
    }
});


updateClassList();
