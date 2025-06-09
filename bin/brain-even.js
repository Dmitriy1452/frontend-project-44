#!/usr/bin/env node
import { getName, isEven } from '../src/engine.js';

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(`Hello, ${name}!`);
const evenNumber = isEven();
console.log(evenNumber);