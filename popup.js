document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, { code: "localStorage.getItem('access_token')" }, function(result) {
      if (chrome.runtime.lastError || result[0] === null) {
        document.getElementById('accessToken').textContent = 'Access token not found.';
      } else {
        document.getElementById('accessToken').textContent = result[0];
      }
    });
  });
});
