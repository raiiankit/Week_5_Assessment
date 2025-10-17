// moduleB.js — similar duplicated logic with slight differences

const { formatName, scoreToGrade } = require('./utils/format');
const { buildStandardResponse, makeId, timestampNow } = require('./utils/response');

/**
 * Create result object for Module B. Module B historically returned a
 * slightly different object shape; to preserve compatibility we adapt the
 * standard envelope but keep `uid` and `createdAt` fields.
 *
 * @param {{name?:string,score?:number}} user
 * @returns {object}
 */
function createResult(user = {}) {
  const name = formatName(user.name);
  const grade = scoreToGrade(user.score);
  const status = Number(user.score) >= 60 ? 'passed' : 'failed';
  const payload = { profile: { displayName: name, grade, status } };
  const base = buildStandardResponse({ id: makeId('user-', 100000), timestamp: timestampNow(), payload });
  // Preserve module B's outward-facing fields for backward compatibility.
  base.uid = base.id;
  base.createdAt = base.timestamp;
  return base;
}

module.exports = { processUser: createResult };
