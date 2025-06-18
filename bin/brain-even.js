#!/usr/bin/env node
import { getName, checkIfEven } from '../src/engine.js';

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);
console.log(checkIfEven(name));