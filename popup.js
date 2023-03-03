chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    console.log(tab.url);
  });
});

let UID;
let pass;

chrome.storage.local.get('CUIMS_UID', function(result) {
  UID = result.CUIMS_UID;
  if (UID) {
    document.getElementById('UID_pop_field').value = UID;
  }
});
chrome.storage.local.get('CUIMS_PASS', function(result) {
  pass = result.CUIMS_PASS;
  if (pass) {
    document.getElementById('pass_pop_field').value = pass;
  }
});


console.log('script loaded');
document.getElementById('submit_pop_button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    UID = document.getElementById('UID_pop_field').value.trim()
    pass = document.getElementById('pass_pop_field').value.trim()
  
    chrome.storage.local.set({ 'CUIMS_UID': UID }, function() {
      console.log('Value stored');
    });
    chrome.storage.local.set({ 'CUIMS_PASS': pass }, function() {
      console.log('Value stored');
    });

    // Send a message to index.js
    let dataToWebPage = {
        UID, 
        pass
      };
      
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: dataToWebPage});
      console.log('message sent with data');
    });
})
