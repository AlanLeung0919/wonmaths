function onChange(e) {
  chrome.runtime.sendMessage({
    opt: e.target.id,
    val: e.target.checked,
  });
}

document.querySelectorAll("input").forEach((e) => {
  e.addEventListener("change", onChange);
});

chrome.runtime.sendMessage({ init: true }, (response) => {
  for (const k in response) document.getElementById(k).checked = response[k];
});
