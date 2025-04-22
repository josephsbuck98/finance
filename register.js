import { Client, Account, ID, Databases } from "https://cdn.jsdelivr.net/npm/appwrite@13.0.1/+esm";

const client = new Client()

client
  .setEndpoint('hhtps://cloud.appwrite.io/v1')
  .setProject('6807fc44003482ba367f');

const account = new Account(client);
const databases = new Databases(client);

databases.listDocuments('680809010021d3f8bedf', '680809350024be9bb75f')
  .then(res => {
    console.log("✅ Connected to DB. Documents:", res.documents);
    document.body.innerHTML += "<p>✅ Connected to database!</p>";
  })
  .catch(err => {
    console.error("❌ Error accessing database:", err);
    document.body.innerHTML += `<p>❌ DB error: ${err.message}</p>`;
  });

// document.getElementById('register-form').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const name = document.getElementById('name').value;

//   try {
//     const response = await account.create(ID.unique(), email, password, name);
//     document.getElementById('message').textContent = `✅ User registered: ${response.email}`;
//     console.log(response);
//   } catch (error) {
//     document.getElementById('message').textContent = `❌ Error: ${error.message}`;
//     console.error(error);
//   }
//   });






