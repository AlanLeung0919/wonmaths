(() => {
	function ans() {
		setTimeout(() => {
			document.querySelectorAll('li')[
				document.querySelector('[num]').__vue__.question.ans.charCodeAt(0) - 65
			].style = 'background-color: #4caf50; border-radius: 5px';
		}, 1000);
	}
	function callback(route) {
		if (route === 'modestar' || route === 'modesurvival') {
			const loaded = setInterval(() => {
				const el = document.querySelectorAll('li');
				if (el.length) {
					window.unwatchAnsQn = document
						.querySelector('[num]')
						.__vue__.$watch('question', ans, {
							deep: true,
							immediate: true
						});
					clearInterval(loaded);
				}
			}, 100);
		}
		if (route === 'modedrill') {
			const loaded = setInterval(() => {
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
					clearInterval(loaded);
				}
			}, 100);
		}
	}
	if (window.ans) return;
	window.ans = true;
	window.unwatchAns = document
		.getElementById('app')
		.__vue__.$watch('$route.name', callback, { immediate: true });
})();
