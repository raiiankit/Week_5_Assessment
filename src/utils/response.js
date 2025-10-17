/**
 * response.js — reusable response building helpers
 *
 * This module centralizes id and timestamp generation and provides a small
 * envelope builder so modules can produce consistent response shapes.
 */

/**
 * Create a simple numeric id with an optional prefix. This is intentionally
 * simple so it can be swapped out for a UUID generator in the future.
 *
 * @param {string} prefix
 * @param {number} max
 * @returns {string}
 */
function makeId(prefix = '', max = 100000) {
  return prefix + Math.floor(Math.random() * max).toString();
}

/**
 * Return the current timestamp in ISO format. Small wrapper so tests can be
 * stubbed or replaced with a deterministic clock.
 *
 * @returns {string}
 */
function timestampNow() {
  return new Date().toISOString();
}

/**
 * Build a standard response envelope by merging id, timestamp and payload.
 * If id or timestamp are omitted, defaults are generated.
 *
 * @param {{id?:string,timestamp?:string,payload?:object}} opts
 * @returns {object}
 */
function buildStandardResponse({ id, timestamp, payload } = {}) {
  return Object.assign({ id: id || makeId('', 100000), timestamp: timestamp || timestampNow() }, payload || {});
}

module.exports = { makeId, timestampNow, buildStandardResponse };
