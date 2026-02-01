const readline = require('readline');

(() => {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	const lines = [];
	rl.on('line', line => {
		if (line === '') rl.close();
		lines.push(line);
	}).on('close', () => {
		const [[N], ...rest] = lines.map(line => line.split(' ').map(Number));

		const results = [];
		for (let i = 0; i < N; i++) {
			const [, ...cardA] = rest[2 * i];
			const [, ...cardB] = rest[2 * i + 1];
			cardA.sort((a, b) => b - a);
			cardB.sort((a, b) => b - a);
			let cursor = 0;
			while (cardA[cursor] && cardB[cursor]) {
				if (cardA[cursor] > cardB[cursor]) {
					results.push('A');
					break;
				}
				if (cardA[cursor] < cardB[cursor]) {
					results.push('B');
					break;
				}
				cursor++;
			}
			if (cardA[cursor] && !cardB[cursor]) {
				results.push('A');
			}
			if (!cardA[cursor] && cardB[cursor]) {
				results.push('B');
			}
			if (!cardA[cursor] && !cardB[cursor]) {
				results.push('D');
			}
		}
		console.log(results.join('\n'));
		
		process.exit();
	});
})();
