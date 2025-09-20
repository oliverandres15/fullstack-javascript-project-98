
import readlineSync from 'readline-sync';
import respuesta from '../index.js';
import {cont} from '../index.js';
import {saludo} from '../index.js';
export default function mcm() {
	// Saludo General
	const name = saludo();
	// Pregunta
	console.log('Encuentra el máximo común divisor de los números dados.');
	// Variables
	let contador = 0;
	let correct = 0;
	let resto = 0;
	// Codigo funcional
	for (let i = 0; i < 3; i += 1) {
		const aleatorio = Math.floor(Math.random() * 100);
		const aleatorio2 = Math.floor(Math.random() * 200);
		const rpta = readlineSync.question('Pregunta: ' + aleatorio + ' ' + aleatorio2);

		correct = Math.max(aleatorio, aleatorio2);
		resto = Math.min(aleatorio, aleatorio2);

		while (resto !== 0) {
			const temp = resto; // Guardamos el valor de b temporalmente
			resto = correct % resto; // El nuevo b es el resto de a / b
			correct = temp; // El nuevo a es el antiguo b
		}

		// Validación
		contador = respuesta(rpta, correct, name, contador);

		if (contador === 0) {
			break;
		}

		cont(contador, name);
	}
}

