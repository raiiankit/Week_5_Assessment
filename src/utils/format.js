/**
 * format.js — reusable name and grade formatting helpers
 *
 * These are small, pure helper functions intended to be deterministic and
 * easy to test. They handle edge-cases like missing inputs and non-numeric
 * scores and make behavior consistent across modules.
 */

/**
 * Normalize a person's name into Title Case.
 * - Splits on spaces and hyphens
 * - Removes empty parts
 * - Capitalizes first letter of each part
 *
 * Examples:
 *  formatName(' alice ') -> 'Alice'
 *  formatName('bob-smith') -> 'Bob Smith'
 *
 * @param {string|any} name
 * @returns {string} Title-cased name or 'Unknown' when input is falsy
 */
function formatName(name) {
  if (!name) return 'Unknown';
  return name
    .toString()
    .trim()
    .split(/\s|\-+/)
    .filter(Boolean)
    .map(p => p[0].toUpperCase() + p.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Convert a numeric score to a letter grade using conventional boundaries.
 * Coerces non-numeric input to 0 (yielding 'F').
 *
 * @param {number|string} score
 * @returns {'A'|'B'|'C'|'D'|'F'}
 */
function scoreToGrade(score) {
  const s = Number(score) || 0;
  if (s >= 90) return 'A';
  if (s >= 80) return 'B';
  if (s >= 70) return 'C';
  if (s >= 60) return 'D';
  return 'F';
}

module.exports = { formatName, scoreToGrade };
