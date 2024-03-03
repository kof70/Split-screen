chrome.action.onClicked.addListener(function (tab) {
    splitTab();
});


function splitTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        var url = activeTab.url;
        var index = activeTab.index;

        chrome.tabs.create({ url: url, index: index + 1, active: false });
    });
}





