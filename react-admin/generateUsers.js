const fs = require('fs')
const namor = require('namor')
const program = require('commander');

program
  .option('-c, --count [count]', 'Users count')
  .parse(process.argv)

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (id) => {
  const statusChance = Math.random();
  return {
    id,
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
          ? "complicated"
          : "single"
  };
};

const users = range(program.count).map(i => newPerson(i))

const db = { users }
fs.writeFile('./db.json', JSON.stringify(db, null, 2), 'utf-8', () => console.log(`Successfully generated ${program.count} users`))