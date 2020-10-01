let lien = document.querySelector("footer > div > a");
lien.onclick = function() {
    let mem = document.querySelector("footer > div").innerHTML;
    document.cookie = "AcceptsCookies;true;Max-Age=" + 30 * 24 * 60 * 60;
    if (document.cookie != null || document.cookie == true) {
        document.querySelector("footer > div").textContent = "";
        let footer = document.querySelector("footer");
        let div = document.createElement('div');
        div.id = 'newDiv';
        footer.appendChild(div);

        let newDiv = document.getElementById('newDiv');
        let btn = document.createElement('button');
        btn.innerHTML = "Delete the cookie";
        btn.id = "btnSuppr";
        btn.onclick = function() {
            btn.remove();
            newDiv.remove();
            document.cookie = "AcceptsCookies;expire=Thu, 01 Aug 2012 20:00:00 UTC";
            document.querySelector("footer > div").innerHTML = mem;
        }
        newDiv.appendChild(btn);
    }
}