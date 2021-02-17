function onChange(e) {
  chrome.runtime.sendMessage({
    opt: e.target.id,
    val: e.target.checked,
  });
}

const opts = document.querySelectorAll("input");
for (let i = 0; i < opts.length; i++)
  opts[i].addEventListener("change", onChange);

chrome.runtime.sendMessage({ init: true }, (response) => {
  for (const k in response) document.getElementById(k).checked = response[k];
});
