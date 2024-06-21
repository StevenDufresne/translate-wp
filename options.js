document.getElementById('save').addEventListener('click', () => {
    const language = document.getElementById('language').value;
    chrome.storage.sync.set({ language: language }, () => {
      alert('Language code saved.');
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('language', (data) => {
      if (data.language) {
        document.getElementById('language').value = data.language;
      }
    });
  });
  