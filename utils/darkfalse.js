(() => {
	window.dark = false;
	const style = document.getElementById('dark');
	if (style) style.remove();
	document.getElementById('app').__vue__.$vuetify.theme.isDark = false;
})();
