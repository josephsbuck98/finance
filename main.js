import { account, databases } from './appwrite.js';

account.createEmailSession('user@example.com', 'password123')
  .then(res => console.log('Logged in:', res))
  .catch(err => console.error(err));