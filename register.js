import { Client, Account, ID } from "https://cdn.jsdelivr.net/npm/appwrite@13.0.1/+esm";

const client = new Client()

client
  .setEndpoint('hhtps://cloud.appwrite.io/v1')
  .setProject('6807fc44003482ba367f')

const account = new Account(client);

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;

  try {
    const response = await account.create(ID.unique(), email, password, name);
    document.getElementById('message').textContent = `✅ User registered: ${response.email}`;
    console.log(response);
  } catch (error) {
    document.getElementById('message').textContent = `❌ Error: ${error.message}`;
    console.error(error);
  }
  });