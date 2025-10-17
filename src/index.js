const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

// Example runner: demonstrates both modules producing their responses.
// In a larger app these modules would be imported by application code instead
// of a small runner script.

const sampleA = moduleA.processUser({ name: 'Alice', score: 92 });
const sampleB = moduleB.processUser({ name: 'Bob-smith', score: 73 });

console.log('Module A output:\n', sampleA);
console.log('\nModule B output:\n', sampleB);

// Helpful: if you want to compare the two outputs programmatically you can
// inspect fields such as id/timestamp and the nested profile/user data.
