import {Client,Account,Databases,Storage,Avatars} from 'appwrite'


export const appwriteConfig ={
    projectId:"65a1c62de35e9d7beaa7",
    url:"https://cloud.appwrite.io/v1",
    databaseId:"65a1d36c199d86ad47f8",
    collectionId:"65a1d38d7f4a45f0f24a"
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const database = new Databases(client);