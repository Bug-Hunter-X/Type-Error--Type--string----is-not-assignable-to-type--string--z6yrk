function greeter(person: string): string {
  return "Hello, " + person;
}

function greetUsers(users: string[]): string[] {
  return users.map(user => greeter(user));
}

let users = ["Jane User", "John User"];

console.log(greetUsers(users)); // This will now correctly greet each user in the array