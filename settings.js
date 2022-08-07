

function onWindowLoad() {
    const url = chrome.runtime.getURL('keywords.json');

    fetch(url)
        .then((response) => response.json())
        .then((json) => alert(JSON.parse(json)))
        //document.querySelector("#keywords").innerText = JSON.parse(json).keywords);
 /*       
    var json = '{"keywords":"suicide"}'

    const keywords = JSON.parse(json).keywords;
    const text = document.querySelector("#keywords");
*/
   // text.innerText=keywords;
}

window.onload = onWindowLoad