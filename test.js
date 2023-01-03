var key = 'real secret keys should be long and random';
 
// Create an encryptor:
var encryptor = require('simple-encryptor')(key);
var encrypted = encryptor.encrypt('testing github leetcode');
// Should print gibberish:
console.log('encrypted: %s', encrypted);


var decrypted = encryptor.decrypt(encrypted);
// Should print 'testing'
console.log('decrypted: %s', decrypted);

