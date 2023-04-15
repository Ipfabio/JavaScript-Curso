function fibonacci(num) {
  let value;
  if (num === 1 || num === 2) {
    value = 1;
  } else if (num > 2) {
    value = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return value;
}

for (let i = 1; i <= 10; i++) {
  console.log(`fibonacci() -> ${i} ->`, fibonacci(i));
}
