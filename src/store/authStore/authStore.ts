import { action, makeAutoObservable, makeObservable, observable } from "mobx";

import uuid from "uuid-random";
import { IRootStore, RootStore } from "../rootStore";

interface ILoginData {
  email: string;
  password: string;
}

interface IAuthStore {
  isAuthenticated: boolean;
  authToken: string | null;
  login: (loginData: ILoginData) => void;
  logout: () => void;
}

class AuthStore implements IAuthStore {
  isAuthenticated = false;
  authToken: string | null = null;
  rootStore: RootStore;
  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  login = async ({ email, password }: ILoginData) => {
    try {
      const mockResponse = {
        token: "test-token",
        user: { id: uuid(), name: email, email },
      };
      this.authToken = mockResponse.token;
      this.isAuthenticated = true;
      localStorage.setItem("authToken", this.authToken);
      this.rootStore.userStore.setUserData(mockResponse.user);
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    localStorage.removeItem("authToken");
    this.isAuthenticated = false;
    this.rootStore.userStore.clearUserData();
  };

  initializeSession = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      this.authToken = token;
      this.isAuthenticated = true;
      this.rootStore.userStore.setUserData({
        id: "1",
        email: "user@example.com",
        name: "John Doe",
      });
    }
  };
}

export default AuthStore;
