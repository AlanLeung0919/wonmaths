(() => {
  if (window.dark) return;
  window.dark = true;
  const style = document.createElement("style");
  style.id = "dark";
  style.textContent = `
	.v-application .green:not(button) {
		background-color: #212121 !important;
		border-color: #212121 !important;
	}
	.v-application .green.lighten-1 {
		background-color: #212121 !important;
		border-color: #212121 !important;
	}
	.v-application .green.lighten-2 {
		background-color: #424242 !important;
		border-color: #424242 !important;
	}
	.v-application .green.lighten-5 {
		background-color: #424242 !important;
		border-color: #424242 !important;
	}
	.v-application .green--text {
		color: #ffffff !important;
		caret-color: #ffffff !important;
	}
	.v-application .green--text.text--darken-1 {
		color: #ffffff !important;
		caret-color: #ffffff !important;
	}
	.v-application .green--text.text--lighten-1 {
		color: #ffffff !important;
		caret-color: #ffffff !important;	
	}
	.v-application .green--text.text--lighten-3 {
		color: #424242 !important;
		caret-color: #424242 !important;	
	}
	.v-application .light-green.lighten-2 {
		background-color: #424242 !important;
		border-color: #424242 !important;
	}
	.v-application .grey.lighten-3 {
		background-color: #212121 !important;
		border-color: #212121 !important;
	}
	.v-application .grey.lighten-5 {
		background-color: #212121 !important;
		border-color: #212121 !important;
	}
	.v-application .primary--text {
		color: #ffffff !important;
		caret-color: #ffffff !important;
	}
	.theme--dark.v-card {
		background-color: transparent !important;
		color: #ffffff !important;
	}
	.v-application a {
		color: #ffffff !important;
	}
	img {
		filter: invert(1);
	}
	`;
  document.head.appendChild(style);
  document.getElementById("app").__vue__.$vuetify.theme.isDark = true;
})();
