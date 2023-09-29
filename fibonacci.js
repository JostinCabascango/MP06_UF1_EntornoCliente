function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;

  document.write(`<h1>Serie Fibonacci del número ${n}</h1>`);
  document.write(`<li>Fibo[${0}] = ${n1}</li>`);
  document.write(`<li>Fibo[${1}] = ${n2}</li>`);

  for (let i = 2; i <= n; i++) {
    n3 = n1 + n2;
    document.write(`<li>Fibo[${i}] = ${n3}</li>`);
    n1 = n2;
    n2 = n3;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(1, 10);
fibonacci(randomNumber);
