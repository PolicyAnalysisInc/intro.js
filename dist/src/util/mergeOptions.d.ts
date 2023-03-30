/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
 *
 * @returns obj3 a new object based on obj1 and obj2
 */
export default function mergeOptions<A = any, B = any>(obj1: A, obj2: B): A & B;
