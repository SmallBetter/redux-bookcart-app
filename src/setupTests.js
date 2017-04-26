/* eslint-disable no-console */

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {}
  }
}

/**
 * fix: `warning` all dependencies not use prop-types (react 15.5)
 */
const consoleError = console.error
console.error = message => {
  if (!message.includes('deprecated')) {
    consoleError(message)
  }
}