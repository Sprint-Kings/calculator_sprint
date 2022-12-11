const prompt = require("prompt-sync")();

const input1 = prompt("Выберите операцию: 1.сложение, 2.вычитание, 3.умножение, 4.деление, 5.корень, 6.квадрат числа.");

if (input1 == '1') {
	const input2 = prompt("Введите первое число: ")
	const input3 = prompt("Введите второе число: ")
	let output1 = Number(input2) + Number(input3)
	console.log(`Ответ: ${output1}`)
};
if (input1 == '2') {
	const input2 = prompt("Введите первое число: ")
	const input3 = prompt("Введите второе число: ")
	let output1 = input2 - input3
	console.log(`Ответ: ${output1}`)
};
if (input1 == '3') {
	const input2 = prompt("Введите первое число: ")
	const input3 = prompt("Введите второе число: ")
	let output1 = input2 * input3
	console.log(`Ответ: ${output1}`)
};
if (input1 == '4') {
	const input2 = prompt("Введите первое число: ")
	const input3 = prompt("Введите второе число: ")
	if (input3 == 0) console.log('Делить на ноль нельзя.');
	else {
	let output1 = input2 / input3
	console.log(`Ответ: ${output1}`)
	}
};
if (input1 == '5') {
	const input2 = prompt("Введите число: ")
	if (input2 < 0) console.log('Нельзя найти корень отрицательного числа.');
	else {
	let output1 = Math.sqrt(input2)
	console.log(`Ответ: ${output1}`)
	}
};
if (input1 == '6') {
	const input2 = prompt("Введите число: ")
	let output1 = Math.pow(input2,2)
	console.log(`Ответ: ${output1}`)
};