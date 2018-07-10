const person = {
	age: 26,
	location: {
		city: 'São Paulo',
		temp: 92
	}
};

const { name: firstName = 'Anonymous', age } = person; // Adicionando um default para name e renomeando a variavel
// const name = person.name;
// const age = person.age;

// console.log(`${person.name} is ${person.age}.`)
console.log(`${firstName} is ${age}.`)

const { city, temp: tempature } = person.location; // Renomeando a variavel de dentro pra fora

// if (person.location.city && person.location.temp) {
// 	console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }

if (city && tempature) {
	console.log(`It's ${tempature} in ${city}`);
}

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);