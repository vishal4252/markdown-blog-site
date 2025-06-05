---
title: Mastering JavaScript ES6+
date: 12 May 2025
author: Vishal
tag: JavaScript
image: /js.png
slug: mastering-javascript-es6-plus
description: This is a sample blog post description.
---

# Mastering JavaScript ES6+

JavaScript ES6+ (ECMAScript 2015 and later) introduced several powerful features that have transformed how developers write modern JavaScript. Whether you're just getting started or brushing up, this guide covers everything essential.



## 🔥 Why Learn ES6+?

- Cleaner syntax
- Improved readability
- More expressive and modular code
- Widely supported by modern browsers
- Crucial for React, Vue, Angular, Node.js and other ecosystems



## ✨ Key Features of ES6+

### 1. `let` and `const`

```js showLineNumbers {1-2}
let name = "Vishal";
const PI = 3.14;
```

### 2. Arrow Functions

```js showLineNumbers
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### 3. Template Literals

```js showLineNumbers
const user = "Vishal";
console.log(`Hello, ${user}!`);
```

### 4. Destructuring Assignment

```js showLineNumbers
const person = { name: "Vishal", age: 25 };
const { name, age } = person;
console.log(name, age);
```

### 5. Default Parameters

```js showLineNumbers
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet(); // Hello, Guest
```

### 6. Spread and Rest Operators

```js showLineNumbers
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

### 7. Classes

```js showLineNumbers  {1-5}
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
```

### 8. Promises & Async/Await

```js showLineNumbers  {3-7}
function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("Data!"), 1000));
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData(); // Data!
```

---

Mastering these ES6+ features will make your JavaScript code cleaner, more powerful, and future-proof!
