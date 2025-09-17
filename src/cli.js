
import readlineSync from 'readline-sync';

export default function nombre() {
	const pregunta = ' ¿ Cuál es tu nombre ?';
	const name = readlineSync.question(pregunta);
	return '¡Hola, ' + name + '!';
}

