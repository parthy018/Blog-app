import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        console.log("appwrite url",conf.appwriteUrl, " appwrite Project id", conf.appwriteProjectId)
        console.log("envionement vairables auth file ",conf)
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            console.log("called createPost method for ",title)
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,
                slug, { title, content, featuredImage, status, userId });
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ", error);
        }
    }

    async updatePost(slug,{title,  content, featuredImage, status }){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,
                slug, { title, content, featuredImage, status })
            
        } catch (error) {
            console.log("Appwrite service :: updatedPost :: error ", error);
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,
                slug);
            return true;    
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
          return  await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,
                slug);
                 
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            console.log("Called getPosts method with queries:", queries);
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            console.log("Response from getPosts:", response);
            return response;
        } catch (error) {
            console.error("Appwrite service :: getPosts :: error:", error);
            return false;
        }
    }
    


    // file upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error ", error);
            return false;
        }
    }

    // Delete file
    async deleteFile(fileID){
       try {
            await this.bucket.deleteFile(conf.appwriteBucketId,
            fileID);
            return  true;
       } catch (error) {
        console.log("Appwrite service :: deleteFile :: error ", error);
        return false;
       } 
    }

    getFilePreview(fileId){
         return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
         )
    }
}


const service = new Service();

export default service;