/**
 * An unuseful function used as an example
 * @param firstname 
 * @param lastname 
 * @param age 
 * @returns An unsueful string
 */
export function exampleFunc(firstname: string, lastname: string, age: number): string {
  if (firstname.length === 0 || lastname.length === 0) {
    throw new Error('Firstname or lastname or both are empty');
  }
  if (age <= 0) {
    throw new Error ('Age must be greater than 0');
  }
  return `${firstname} ${lastname} is ${age} years old.`;
}


const result = exampleFunc('Peter', 'Parker', 20);

console.log(result);