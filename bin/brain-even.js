#!/usr/bin/env node
import { getName, checkIfEven } from '../src/games/even.js';

const name = getName();
console.log(`Hello, ${name}!`);
console.log(checkIfEven(name));