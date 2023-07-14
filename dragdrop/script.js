// data
const listItems = ["1 listItem", "2 list Item", "3 list Item", "4 list Item"]

// creating markup
const leftBoxDiv = document.createElement("div");
leftBoxDiv.className = "leftBox";

listItems.map((list) => {
    const listDiv = document.createElement("div");
    listDiv.className = "listItem";
    listDiv.setAttribute("draggable", true)
    listDiv.innerText = list;

    leftBoxDiv.appendChild(listDiv);

})

const rightBoxBoxDiv = document.createElement("div");
rightBoxBoxDiv.className = "rightBox";

const container = document.querySelector(".container");
container.appendChild(leftBoxDiv);
container.appendChild(rightBoxBoxDiv);

// selectors
const leftBox = document.querySelector(".leftBox");
const rightBox = document.querySelector(".rightBox");

leftBox.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragged");
});

rightBox.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragged");
});

[leftBox, rightBox].forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", (e) => {
        const selected = document.querySelector(".dragged");
        if (selected && e.target === box) {
            box.appendChild(selected);
            selected.classList.remove("dragged");
        }
    });
});
