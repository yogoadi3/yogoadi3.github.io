import fetch from 'node-fetch';

try {
	await fetch('https://domain.invalid/');
} catch (error) {
	console.log(error);
}