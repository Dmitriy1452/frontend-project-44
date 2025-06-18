#!/usr/bin/env node
import { getName, checkIfEven } from '../src/engine.js';

const name = getName();
console.log(`Hello, ${name}!`);
console.log(checkIfEven(name));