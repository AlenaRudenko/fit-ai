import { makeObservable } from "mobx";
import AuthStore from "./authStore/authStore";
import UserStore from "./userStore/userStore";

export interface IRootStore {
  authStore: AuthStore;
  userStore: UserStore;
}

export class RootStore {
  authStore: AuthStore;
  userStore: UserStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    makeObservable(this, {
      authStore: true,
      userStore: true,
    });
  }
}
