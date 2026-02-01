const readline = require('readline');

(() => {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	const lines = [];
	rl.on('line', line => {
		if (line === '') rl.close();
		lines.push(line);
	}).on('close', () => {
		const [[N, M], heights, ...rawRanges] = lines.map(line => line.split(' ').map(Number));
		const ranges = [null, ...rawRanges.map(rawRange => [rawRange[0] - 1, rawRange[1]])];
		const waters = heights.map(() => 0);
		for (let day = 1; day <= M; day++) {
			for (let i = ranges[day][0]; i < ranges[day][1]; i++) {
				waters[i]++;
			}
			if (day % 3 === 0) {
				// 배수 시스템 작동
				const drainageTargetSet = new Set();
				for (let i = ranges[day][0]; i < ranges[day][1]; i++) {
					drainageTargetSet.add(i);
				}
				for (let i = ranges[day - 1][0]; i < ranges[day - 1][1]; i++) {
					drainageTargetSet.add(i);
				}
				for (let i = ranges[day - 2][0]; i < ranges[day - 2][1]; i++) {
					drainageTargetSet.add(i);
				}
				for (const target of drainageTargetSet) {
					if (waters[target] >= 1) waters[target] -= 1;
				}
			}
		}
		console.log(heights.map((_, i, heights) => heights[i] + waters[i]).join(' '));
		process.exit();
	})
})();
