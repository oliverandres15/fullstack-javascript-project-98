
import readlineSync from 'readline-sync';
import respuesta from '../index.js';
import {cont} from '../index.js';
import {saludo} from '../index.js';
export default function calc() {
	// Saludo General
	const name = saludo();
	// Pregunta
	console.log('¿Cuál es el resultado de la expresión?');
	// Variables
	let contador = 0;
	let operador = '+';
	let correct = 0;
	// Codigo funcional
	for (let i = 0; i < 3; i += 1) {
		const aleatorio = Math.floor(Math.random() * 100);
		const aleatorio2 = Math.floor(Math.random() * 100);
		const rpta = readlineSync.question('Pregunta: ' + aleatorio + operador + aleatorio2);

		if (operador === '+') {
			correct = aleatorio + aleatorio2;
		} else if (operador === '*') {
			correct = aleatorio * aleatorio2;
		} else {
			correct = aleatorio - aleatorio2;
		}

		if (rpta == correct) {
			if (operador === '+') {
				operador = '*';
			} else {
				operador = '-';
			}
		}

		// Validación
		contador = respuesta(rpta, correct, name, contador);

		if (contador === 0) {
			break;
		}

		cont(contador, name);
	}
}

