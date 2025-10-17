// Very small unit tests for utilities. Run with: node test/utils.test.js

const assert = require('assert');
const { formatName, scoreToGrade } = require('../src/utils/format');
const { makeId, timestampNow, buildStandardResponse } = require('../src/utils/response');

// formatName tests
assert.strictEqual(formatName(' alice '), 'Alice');
assert.strictEqual(formatName('bob-smith'), 'Bob Smith');
assert.strictEqual(formatName(null), 'Unknown');

// scoreToGrade tests
assert.strictEqual(scoreToGrade(95), 'A');
assert.strictEqual(scoreToGrade(85), 'B');
assert.strictEqual(scoreToGrade(75), 'C');
assert.strictEqual(scoreToGrade(65), 'D');
assert.strictEqual(scoreToGrade(50), 'F');
assert.strictEqual(scoreToGrade('not-a-number'), 'F');

// response tests
const id = makeId('x-', 1000);
assert.ok(id.startsWith('x-'));
const ts = timestampNow();
assert.ok(typeof ts === 'string' && ts.length > 0);
const enveloped = buildStandardResponse({ id: 'i1', timestamp: 't1', payload: { foo: 'bar' } });
assert.strictEqual(enveloped.id, 'i1');
assert.strictEqual(enveloped.timestamp, 't1');
assert.strictEqual(enveloped.foo, 'bar');

console.log('All utils tests passed');
