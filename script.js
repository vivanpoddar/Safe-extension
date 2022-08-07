chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
      if (request.source != -1) {
        message.innerText="Wants to commit suicide"
      } else {
      message.innerText = "yay";
        }
    }
  });
  
  function onWindowLoad() {
  
    var message = document.querySelector('#message');
  
    chrome.tabs.executeScript(null, {
      file: "getPagesSource.js"
    }, function() {
      if (chrome.runtime.lastError) {
        message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
      }
    });
  
  }
  
  window.onload = onWindowLoad;