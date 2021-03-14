(() => {
	if (!window.cool) return;
	if (window.unwatchCoolQn) window.unwatchCoolQn();
	window.cool = false;
	window.unwatchCool();
})();
