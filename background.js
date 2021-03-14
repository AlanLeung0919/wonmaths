function inject() {
	if (window.injected) return;
	window.injected = true;
	chrome.runtime.onMessage.addListener((message) => {
		const script = document.createElement('script');
		script.src = chrome.runtime.getURL(
			`utils/${message.val}/${message.opt}.js`
		);
		document.body.appendChild(script);
		script.remove();
	});
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (
		changeInfo.status !== 'complete' ||
		!tab.url.includes('winbooks.onrender.com/app')
	)
		return;
	chrome.tabs.query(
		{ status: 'complete', url: '*://winbooks.onrender.com/*' },
		(result) => {
			result.forEach((e) => {
				chrome.action.setPopup({ tabId: e.id, popup: 'popups/enabled.html' });
				chrome.action.setIcon({
					tabId: e.id,
					path: { 48: 'icons/icon48.png' }
				});
				chrome.scripting.executeScript(
					{ target: { tabId: e.id }, function: inject },
					() => {
						chrome.storage.local.get(null, (items) => {
							for (const k in items)
								chrome.tabs.sendMessage(e.id, { opt: k, val: items[k] });
						});
					}
				);
			});
		}
	);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.init) {
		chrome.storage.local.get(null, (items) => {
			sendResponse(items);
		});
	} else chrome.storage.local.set({ [message.opt]: message.val });
	return true;
});

chrome.storage.onChanged.addListener((changes) => {
	for (const k in changes) {
		chrome.tabs.query(
			{ status: 'complete', url: '*://winbooks.onrender.com/*' },
			(result) => {
				result.forEach((e) => {
					chrome.tabs.sendMessage(e.id, { opt: k, val: changes[k].newValue });
				});
			}
		);
	}
});

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.clear(() => {
		chrome.storage.local.set({
			ans: false,
			cool: false,
			dark: false,
			star: false
		});
	});
	chrome.tabs.create({ url: chrome.runtime.getURL('popups/warning.html') });
});
