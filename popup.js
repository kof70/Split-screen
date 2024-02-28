document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentTabUrl = tabs[0].url;
    document.getElementById("current-page").src = currentTabUrl; // Chargement de l'URL de l'onglet actuel dans le premier iframe
    document.getElementById("new-page").src = "https://www.openai.com"; // Chargement d'une autre URL dans le deuxième iframe
  });
});

