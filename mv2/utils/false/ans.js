(() => {
  if (!window.ans) return;
  if (window.unwatchAnsQn) window.unwatchAnsQn();
  window.ans = false;
  window.unwatchAns();
})();
