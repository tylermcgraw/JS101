function greetings(name, occupation) {
  return `Hello, ${name.join(' ')}! Nice to have a ${Object.values(occupation).join(' ')} around!`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.