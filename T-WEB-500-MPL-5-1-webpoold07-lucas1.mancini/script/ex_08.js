let canvasArray = document.querySelectorAll("canvas");
let colors = [];
for (const [i, v] of canvasArray.entries()) {
    colors.push(window.getComputedStyle(v).backgroundColor);
}

let colorTemplate = [
    "rgb(255, 165, 0)",
    "rgb(128, 0, 128)",
    "rgb(0, 0, 0)",
    "rgb(128, 128, 0)",
];
let sortedArray = [];

for (const [index] of colorTemplate.entries()) {
    for (const color of colors) {
        if (color == colorTemplate[index]) {
            sortedArray.push(color);
        }
    }
}

canvasArray.forEach((value, index) => {
    value.style.backgroundColor = sortedArray[index];
});
