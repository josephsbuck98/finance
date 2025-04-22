const client = new Appwrite.Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setPrject('6807fc44003482ba367f');

const account = new Appwrite.Account(client);
const databases = new Appwrite.Databases(client);

export { client, account, databases };