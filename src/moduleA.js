// moduleA.js — has duplicated logic (formatting + response building)

const { formatName, scoreToGrade } = require('./utils/format');
const { buildStandardResponse, makeId, timestampNow } = require('./utils/response');

/**
 * Build the Module A response object for a user.
 * - Normalizes the user's name
 * - Converts score to a grade
 * - Computes a boolean pass/fail
 * - Wraps result in a standard envelope
 *
 * @param {{name?:string,score?:number}} user
 * @returns {object}
 */
function buildResponse(user = {}) {
  const name = formatName(user.name);
  const grade = scoreToGrade(user.score);
  const pass = Number(user.score) >= 60;
  const payload = { user: { name, grade, pass } };
  // Use the response helper to produce consistent id/timestamp behavior.
  return buildStandardResponse({ id: makeId('', 100000), timestamp: timestampNow(), payload });
}

module.exports = { processUser: buildResponse };
