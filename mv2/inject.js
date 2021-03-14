(() => {
  if (window.injected) return;
  window.injected = true;
  chrome.runtime.onMessage.addListener((message) => {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL(
      `utils/${message.val}/${message.opt}.js`
    );
    document.body.appendChild(script);
    script.remove();
  });
})();
