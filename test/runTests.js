const a = require('../src/moduleA');
const b = require('../src/moduleB');

function isValidA(res) {
  return res && res.user && typeof res.user.name === 'string' && res.user.grade;
}

function isValidB(res) {
  return res && res.profile && typeof res.profile.displayName === 'string' && res.profile.grade;
}

const ra = a.processUser({ name: '   alice   ', score: 95 });
const rb = b.processUser({ name: 'bob-smith', score: 82 });

console.log('A valid:', isValidA(ra), '->', ra);
console.log('B valid:', isValidB(rb), '->', rb);
