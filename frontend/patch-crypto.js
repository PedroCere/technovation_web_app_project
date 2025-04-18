if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = {};
}

if (typeof globalThis.crypto.getRandomValues !== 'function') {
  globalThis.crypto.getRandomValues = function (array) {
    const crypto = require('crypto');
    const bytes = crypto.randomBytes(array.length);
    array.set(bytes);
    return array;
  };
}
