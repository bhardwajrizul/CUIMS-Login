
let UID = localStorage.getItem('CUIMS_UID');
let pass = localStorage.getItem('CUIMS_PASS');

if (UID && pass) {
  document.getElementById('UID_pop_field').value = UID;
  document.getElementById('pass_pop_field').value = pass;
}
console.log('script loaded');
document.getElementById('submit_pop_button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    UID = document.getElementById('UID_pop_field').value.trim()
    pass = document.getElementById('pass_pop_field').value.trim()
  
    localStorage.setItem('CUIMS_UID', UID)
    localStorage.setItem('CUIMS_PASS', pass)

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
