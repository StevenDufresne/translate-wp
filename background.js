chrome.contextMenus.create({
    id: "translateText",
    title: "Translate on wp.org",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translateText" && info.selectionText) {
      chrome.storage.sync.get('language', (data) => {
        const language = data.language || 'ru'; // Default to 'ru' if no language is set
        const selectedText = encodeURIComponent(info.selectionText);
        const url = `https://translate.wordpress.org/projects/meta/wordpress-org/${language}/default/?filters[term]=${selectedText}&filters[term_scope]=scope_any&filters[status]=current_or_waiting_or_fuzzy_or_untranslated&filters[user_login]=&filter=Apply+Filters&sort[by]=priority&sort[how]=desc`;
        chrome.tabs.create({ url: url });
      });
    }
  });
  