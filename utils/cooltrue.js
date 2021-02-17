(() => {
	if (window.cool) return;
	window.cool = true;
	function cool() {
		setTimeout(() => {
			document.querySelectorAll('.v-tooltip.v-tooltip--top').forEach((e) => {
				e.__vue__.$parent.colding.time = 0;
				e.__vue__.$parent.colding.locked = false;
			});
		}, 1000);
	}
	function callback(name) {
		if (name === 'modestar') {
			const isLoaded = setInterval(() => {
				const el = document.querySelectorAll('li');
				if (el.length) {
					document.querySelector('[num]').__vue__.$watch('question', cool, {
						deep: true,
						immediate: true
					});
					clearInterval(isLoaded);
				}
			}, 100);
		}
	}
	window.unwatchCool = document
		.getElementById('app')
		.__vue__.$watch('$route.name', callback, { immediate: true });
})();
