(() => {
	if (!window.dark) return;
	window.dark = false;
	document.getElementById('dark').remove();
	document.getElementById('app').__vue__.$vuetify.theme.isDark = false;
})();
