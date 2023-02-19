document.getElementById('submit_pop_button').addEventListener('click', (e) => {
    e.preventDefault();
    let UID = document.getElementById('UID_pop_field').value.trim()
    let pass = document.getElementById('pass_pop_field').value.trim()

    localStorage.setItem('CUIMS_UID', UID)
    localStorage.setItem('CUIMS_PASS', pass)

    document.getElementById('UID_pop_field').value = UID;
    document.getElementById('pass_pop_field').value = pass;

    // Send a message to index.js
    var dataToWebPage = {
        UID, 
        pass
      };
      
    chrome.tabs.executeScript({
        code: '(' + function(params) {
          localStorage.setItem('CUIMS_UID', params.UID)
          localStorage.setItem('CUIMS_PASS', params.pass)
          return {
            success: true,
            response: "This is from webpage."
          };
        } + ')(' + JSON.stringify(dataToWebPage) + ');'
      }, function(results) {
        console.log(results[0]); 
      });
    alert('!! REFRESH uims.cuchd.in/uims !!');
})

let UID = localStorage.getItem('CUIMS_UID').trim();
let pass = localStorage.getItem('CUIMS_PASS').trim();


if (UID.length && pass.length) {
    document.getElementById('UID_pop_field').value = UID;
    document.getElementById('pass_pop_field').value = pass;

    // Send a message to index.js
    var dataToWebPage = {
        UID, 
        pass
      };
      
    chrome.tabs.executeScript({
        code: '(' + function(params) {
          localStorage.setItem('CUIMS_UID', params.UID)
          localStorage.setItem('CUIMS_PASS', params.pass)
          return {
            success: true,
            response: "This is from webpage."
          };
        } + ')(' + JSON.stringify(dataToWebPage) + ');'
      }, function(results) {
        console.log(results[0]); 
      });

}