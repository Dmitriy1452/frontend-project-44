#!/usr/bin/env node
import { getName, checkIfEven } from '../src/engine.js';

console.log('Welcome to the Brain Games!');

export const name = getName();
console.log(`Hello, ${name}!`);
const evenNumber = checkIfEven();
console.log(evenNumber);