(() => {
	if (window.star) return;
	window.star = true;
	function callback(name) {
		if (name === 'modestar') {
			const isLoaded = setInterval(() => {
				const el = document.querySelectorAll('li');
				if (el.length) {
					const com = document.querySelectorAll('.container')[0].children[0]
						.__vue__;
					com.num = 3;
					com.score = 3;
					com.reached = true;
					clearInterval(isLoaded);
				}
			}, 100);
		}
	}
	window.unwatchStar = document
		.getElementById('app')
		.__vue__.$watch('$route.name', callback, { immediate: true });
})();
