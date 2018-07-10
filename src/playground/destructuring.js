// Object Destructuring

// const person = {
// 	age: 26,
// 	location: {
// 		city: 'São Paulo',
// 		temp: 92
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person; // Adicionando um default para name e renomeando a variavel
// const name = person.name;
// const age = person.age;

// console.log(`${person.name} is ${person.age}.`)
// console.log(`${firstName} is ${age}.`)

// const { city, temp: tempature } = person.location; // Renomeando a variavel de dentro pra fora

// if (person.location.city && person.location.temp) {
// 	console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }

// if (city && tempature) {
// 	console.log(`It's ${tempature} in ${city}`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// 
// Array Destructuring
// 

const address = ['Rua Santo Amaro', 'Bela Vista', 'São Paulo', '01315-001'];

// const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address; // Somente pegando o segundo e terceiro item no array

console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [name, smallSize, mediumSize, largeSize] = item;

console.log(`A medium ${name} costs ${mediumSize}`);