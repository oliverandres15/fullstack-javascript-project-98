
import readlineSync from 'readline-sync';
import respuesta from '../index.js';
import {cont} from '../index.js';
import {saludo} from '../index.js';
export default function mcm() {
	// Saludo General
	const name = saludo();
	// Pregunta
	console.log('¿Qué número falta en la progresión?');
	// Variables
	let contador = 0;
	const listNumb = new Array(10).fill(0);
	let correct = 0;
	// Codigo funcional
	for (let i = 0; i < 3; i += 1) {
		const aleatorio = Math.ceil(Math.random() * 5);
		const aleatorio2 = Math.floor(Math.random() * 10);
		for (let i = 1; i < 10; i += 1) {
			correct = aleatorio;
			listNumb[i] = listNumb[i - 1] + correct;
		}

		listNumb[aleatorio2] = '..';
		const rpta = readlineSync.question('Pregunta: ' + listNumb.join(' '));
		correct = listNumb[aleatorio2 - 1] + aleatorio;
		if (correct === undefined) {
			correct = 0;
		}

		// Validación
		contador = respuesta(rpta, correct, name, contador);

		if (contador === 0) {
			break;
		}

		cont(contador, name);
	}
}

