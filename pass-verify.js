const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123';
  const hash = '$2b$10$fkMf7VKOvS3jNGphew4wjuCUfkSfNKgbkQPDB9yaJP8kCPybKMcj2';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
