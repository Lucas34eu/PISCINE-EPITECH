(function() {

    let body = document.querySelector("body");
    let footer = document.querySelector("footer");
    let footerDiv = footer.querySelector("div");
    let buttons = footerDiv.getElementsByTagName("button");
    let select = footerDiv.getElementsByTagName("select")[0];

    let but1 = buttons[0];

    let but2 = buttons[1];

    but1.onclick = function() {
        let fontSize = parseInt(getComputedStyle(document.body).fontSize);
        fontSize += 1;
        fontSize = `${fontSize}px`;
        body.style.fontSize = fontSize;
    }

    but2.onclick = function() {
        let fontSize = parseInt(getComputedStyle(document.body).fontSize);
        fontSize -= 1;
        fontSize = `${fontSize}px`;
        body.style.fontSize = fontSize;
    }

    select.onchange=function(){
        
        var backgroundcolor=select.value;
        body.style.backgroundColor=backgroundcolor;
    }


})()