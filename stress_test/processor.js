const faker = require('faker')

module.exports.randomNum = (userContext, events, done) => {
  const diceRoll = Math.random()
  const highRoll = [1234, 123456, 2332]
  const lowRoll = [2, 3, 4, 511, 132455, 66666, 2378]
  if (diceRoll < 0.85) {
    userContext.vars.id = highRoll[faker.random.number(highRoll.length - 1)]
  } else {
    userContext.vars.id = lowRoll[faker.random.number(lowRoll.length - 1)]
  }
  return done()
}
