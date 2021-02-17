(() => {
	if (window.dark) return;
	window.dark = true;
	const style = document.createElement('style');
	style.id = 'dark';
	style.textContent = `
	.v-application .green:not(button) {
		background-color: #252525 !important;
		border-color: #252525 !important;
	}
	.v-application .green.lighten-1 {
		background-color: #252525 !important;
		border-color: #252525 !important;
	}
	.v-application .green.lighten-2 {
		background-color: #454545 !important;
		border-color: #454545 !important;
	}
	.v-application .green.lighten-5 {
		background-color: #353535 !important;
		border-color: #353535 !important;
	}
	.v-application .light-green.lighten-2 {
		background-color: #454545 !important;
		border-color: #454545 !important;
	}
	.v-application .green--text {
		color: #fff !important;
		caret-color: #fff !important;
	}
	.v-application .green--text.text--lighten-1 {
		color: #fff !important;
		caret-color: #fff !important;	
	}
	.v-application .green--text.text--lighten-3 {
		color: #404040 !important;
		caret-color: #404040 !important;	
	}
	.v-application .green--text.text--darken-1 {
		color: #fff !important;
		caret-color: #fff !important;
	}
	.v-application .grey.lighten-3 {
		background-color: #252525 !important;
		border-color: #252525 !important;
	}
	.v-application .grey.lighten-5 {
		background-color: #252525 !important;
		border-color: #252525 !important;
	}
	.theme--dark.v-card {
		background-color: transparent;
		color: #fff;
	}
	.v-application .primary--text {
		color: #fff !important;
		caret-color: #fff !important;
	}
	.v-application a {
		color: #fff !important;
	}
	img {
		filter: invert(1);
	}
	`;
	document.head.appendChild(style);
	document.getElementById('app').__vue__.$vuetify.theme.isDark = true;
})();
/*.v-application .green:not(button) {
		background-color: #151515 !important;
		border-color: #151515 !important;
	}
	.v-application .green.lighten-1 {
		background-color: #202020 !important;
		border-color: #202020 !important;
	}
	.v-application .green.lighten-2 {
		background-color: #252525 !important;
		border-color: #252525 !important;
	}
	.v-application .green.lighten-5 {
		background-color: #303030 !important;
		border-color: #303030 !important;
	}
	.v-application .green--text {
		color: #bdbdbd !important;
		caret-color: #bdbdbd !important;
	}
	.v-application .green--text.text--darken-1 {
		color: #bdbdbd !important;
		caret-color: #bdbdbd !important;
	}
	.v-application .green--text.text--lighten-1 {
		color: #616161 !important;
		caret-color: #bdbdbd !important;	
	}
	.v-application .green--text.text--lighten-3 {
		color: #616161 !important;
		caret-color: #bdbdbd !important;	
	}
	.v-application .light-green.lighten-2 {
		background-color: #616161 !important;
		border-color: #bdbdbd !important;
	}
	.v-application .grey.lighten-3 {
		background-color: #505050 !important;
		border-color: #505050 !important;
	}
	.v-application .grey.lighten-5 {
		background-color: #353535 !important;
		border-color: #353535 !important;
	}
	.v-application .grey--text {
		color: #ffffff !important;
	}
	.v-application .primary--text {
		color: #bdbdbd !important;
		caret-color: #bdbdbd !important;
	}
	.v-application a {
		color: #fafafa !important;
	}
	.theme--dark.v-card {
		background-color: transparent;
	}
	img {
		filter: invert(1);
	} */
