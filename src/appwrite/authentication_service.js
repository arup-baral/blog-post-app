import { Client, Account, ID } from "appwrite";
import config from "../config/config";
import handleError from "./handleError";

class Authentication {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // method to create a new user account
  async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // log in to user account
        return this.logIn({email, password});
      } else {
        // give alert message to user
        alert("Account is denied !");
        return null;
      }
    } catch (error) {
      handleError(error);
    }
  }

  // method to create a user log in session
  async logIn({email, password}) {
    try {
        return await this.account.createEmailSession(email, password);
    } catch (error) {
        handleError(error);
    }
  }

  // method to check status of a new user account session
  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        handleError("current user not found");
    }
    return null;
  }

  // method to log out a user
  async logOut() {
    try {
        await this.account.deleteSession('current');
    } catch (error) {
        handleError(error);
    }
  }
}

export default Authentication;
