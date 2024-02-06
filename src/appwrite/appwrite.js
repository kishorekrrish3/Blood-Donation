import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65be444624cc99e511f4")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "65c080981dd0a32d81f3")