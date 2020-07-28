const args = process.argv
	.slice(2)
	.map((x) => parseInt(x))
	.filter((x) => typeof x !== NaN && x >= 0)
	.map((x) => x * 1000); // [..., ..., ...]

console.log('args', args);

const timer = (array) => {
	for (let arg of array) {
		setTimeout(() => {
			process.stdout.write('\x07');
		}, arg);
	}
};

timer(args);

// Another Way
/* const args = process.argv.slice(2);
const beep = () => {
	process.stdout.write('\x07');
};

for (let i of args) {
	if (isNaN(i) || i < 0) continue;
	setTimeout(() => beep(), i * 1000);
}
 */

// let numbers = [40, 500, 10, 80, 0, 2, 1, 50, 1000];
// for (let num of numbers) {
// 	setTimeout(() => {
// 		console.log(num);
// 	}, num);
// }

// console.log('end of file'); [ 0, 1, 2, 10, 40, 50, 80, 500, 1000 ]
