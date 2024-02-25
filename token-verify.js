const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcwNTc2Nzc0N30.DVKD1B_uzXwoA7CQCYEWZOWOJVN3Xuy37YOCMbH6oBM'
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
