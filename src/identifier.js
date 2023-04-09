/**
 * A Identifier module.
 * @module Identifier
 */

/**
 * generate a uuid
 *
 * @alias module:Identifier
 * @since 2.0.0
 * @category identifier
 * @returns {string} return a uuid
 * @example
 *
 * uuid()
 * // => '557abf46-ecf7-4464-a37b-c8cc54bcffb2'
 */
const uuid = () => {
  let dt = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    // eslint-disable-next-line no-bitwise, no-mixed-operators
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

/**
 * method for generate identifier with a specific length
 *
 * @alias module:Identifier
 * @since 2.0.0
 * @category identifier
 * @param {number} length length of id
 * @returns {string} return identifier
 * @example
 *
 * // default id
 * generateID()
 * // => 'kMqkrcgGzfSspSfBNvwqX'
 *
 * // with specific length
 * generateID(10)
 * // => 'QpNyWcYEG0'
 */
const generateID = (length = 21) => {
  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';

  for (let i = 0; i < length; i += 1) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return id;
};

module.exports = {
  uuid,
  generateID,
};
