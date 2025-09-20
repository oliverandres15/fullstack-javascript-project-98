
import readlineSync from 'readline-sync';
import respuesta from '../index.js';
import {cont} from '../index.js';
import {saludo} from '../index.js';
export default function Bool() {
	// Saludo General
	const name = saludo();
	// Pregunta
	console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
	// Variables
	let correct = '';
	let contador = 0;
	// Codigo funcional

	for (let i = 0; i < 3; i += 1) {
		const aleatorio = Math.floor(Math.random() * 100);
		const rpta = readlineSync.question('Pregunta: ' + aleatorio);

		if (aleatorio % 2 === 0) {
			contador += 1;
			correct = 'yes';
		} else {
			contador += 1;
			correct = 'no';
		}

		// Validación
		contador = respuesta(rpta, correct, name, contador);

		if (contador === 0) {
			break;
		}

		cont(contador, name);
	}
}

