import readlineSync from 'readline-sync';

export default function respuesta(rpta, correct, name, contador) {
	if (rpta == correct) {
		console.log('¡Correcto!');
		contador += 1;
		return contador;
	}

	console.log(rpta + ' es una respuesta incorrecta ;(. La respuesta correcta era ' + correct + '. ¡Intentémoslo de nuevo, ' + name);
	contador = 0;
	return contador;
}

export function cont(contador, name) {
	if (contador === 3) {
		return console.log('¡Felicidades, ' + name + '!');
	}
}

export const saludo = () => {
	const pregunta = ' ¿ Cuál es tu nombre ?';
	const name = readlineSync.question(pregunta);
	console.log('¡Hola, ' + name + '!');
	return name;
};
