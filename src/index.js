const messages = [
  "Carlos",
  "Elkin",
  "Liz",
  "Joana",
  "Fabio",
  "Yudis",
  "Humberto",
];

const randomMsg = () => {
  const length= messages.length
  const x = Math.random()
  const mult = length * x
  const message = messages[Math.floor(mult)]
  console.log(message);
}

module.exports = {randomMsg}