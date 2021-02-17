(() => {
	if (window.ans) return;
	window.ans = true;
	function answer() {
		setTimeout(() => {
			console.log('answer revealed');
			document.querySelectorAll('li')[
				document.querySelector('[num]').__vue__.question.ans.charCodeAt(0) - 65
			].style = 'background-color: #4caf50; border-radius: 5px';
		}, 1000);
	}
	function callback(name) {
		if (name === 'modestar' || name === 'modesurvival') {
			const isLoaded = setInterval(() => {
				const el = document.querySelectorAll('li');
				if (el.length) {
					document.querySelector('[num]').__vue__.$watch('question', answer, {
						deep: true,
						immediate: true
					});
					clearInterval(isLoaded);
				}
			}, 100);
		}
		if (name === 'modedrill') {
			const isLoaded = setInterval(() => {
				const el = document.querySelectorAll('li');
				if (el.length) {
					document
						.querySelector('.container')
						.children[0].children[1].__vue__.$watch(
							'questions',
							() => {
								document.querySelectorAll('[num]').forEach((e) => {
									e.querySelectorAll('li')[
										e.__vue__.question.ans.charCodeAt(0) - 65
									].style = 'background-color: #4caf50; border-radius: 5px';
								});
							},
							{ deep: true, immediate: true }
						);
					clearInterval(isLoaded);
				}
			}, 100);
		}
	}
	window.unwatchAns = document
		.getElementById('app')
		.__vue__.$watch('$route.name', callback, { immediate: true });
})();
