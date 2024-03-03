document.addEventListener('DOMContentLoaded', function () {
  var splitButton = document.getElementById('splitButton');
  splitButton.addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "splitWindow" });
  });
});


