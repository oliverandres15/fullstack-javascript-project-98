
import readlineSync from 'readline-sync';
import respuesta from '../index.js';
import {cont} from '../index.js';
import {saludo} from '../index.js';
export default function prime() {
	// Saludo General
	const name = saludo();
	// Pregunta
	console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
	// Variables
	let contador = 0;
	let correct = '';
	// Codigo funcional
	for (let i = 0; i < 3; i += 1) {
		correct = 'yes';
		const aleatorio = Math.floor(Math.random() * 100);
		const rpta = readlineSync.question('Pregunta: ' + aleatorio);

		if (aleatorio <= 1) {
			correct = 'no';
		}

		for (let i = 2; i * i <= aleatorio; i += 1) {
			if (aleatorio % i === 0) {
				correct = 'no';
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

