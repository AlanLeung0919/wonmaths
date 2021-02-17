function inject() {
	if (window.injected) return;
	window.injected = true;
	chrome.runtime.onMessage.addListener((request) => {
		const el = document.createElement('script');
		el.src = chrome.runtime.getURL(`utils/${request.opt}${request.val}.js`);
		document.body.appendChild(el);
		el.remove();
	});
}

function logger(name, tabId, info) {
	console.log(
		`%c[${name}]%c[${tabId}]`,
		'color: #2b8a3e',
		'color: #c92a2a',
		info
	);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (
		changeInfo.status !== 'complete' ||
		!tab.url.includes('winbooks.onrender.com')
	)
		return;
	console.log(changeInfo);
	chrome.tabs.query(
		{ status: 'complete', url: '*://winbooks.onrender.com/*' },
		(tabs) => {
			tabs.forEach((e) => {
				chrome.action.setPopup({ tabId: e.id, popup: 'popups/enabled.html' });
				chrome.action.setIcon({
					tabId: e.id,
					path: {
						16: 'icons/icon16.png',
						48: 'icons/icon48.png',
						128: 'icons/icon128.png'
					}
				});
				chrome.scripting.executeScript(
					{ target: { tabId: e.id }, function: inject },
					() => {
						chrome.storage.local.get(null, (items) => {
							for (const k in items)
								chrome.tabs.sendMessage(e.id, { opt: k, val: items[k] });
							logger('Inject', e.id, items);
						});
					}
				);
			});
		}
	);
});

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.get(null, (items) => {
		for (const k in items) {
			chrome.storage.local.remove(k);
		}
	});
	chrome.storage.local.set({
		dark: false,
		ans: false,
		cool: false,
		star: false
	});
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.init) {
		chrome.storage.local.get(null, (items) => {
			sendResponse(items);
		});
	} else chrome.storage.local.set({ [request.opt]: request.val });
	return true;
});

chrome.storage.onChanged.addListener((changes) => {
	for (const k in changes) {
		chrome.tabs.query(
			{ status: 'complete', url: '*://winbooks.onrender.com/*' },
			(tabs) => {
				tabs.forEach((e) => {
					chrome.tabs.sendMessage(e.id, { opt: k, val: changes[k].newValue });
					logger('Config', e.id, { [k]: changes[k].newValue });
				});
			}
		);
	}
});
