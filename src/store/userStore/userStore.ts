import { action, makeObservable, observable } from "mobx";
import { IRootStore, RootStore } from "../rootStore";

interface IUser {
  id: string | null;
  email: string | null;
  name: string | null;
}

interface IUserStore {
  currentUser: IUser;
  setUserData: (userData: IUser) => void;
  clearUserData: () => void;
}
class UserStore implements IUserStore {
  currentUser: IUser = {
    id: null,
    email: null,
    name: null,
  };
  rootStore: IRootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      currentUser: observable,
      setUserData: action,
      clearUserData: action,
    });
  }

  setUserData = (userData: IUser) => {
    this.currentUser = { ...userData };
  };

  clearUserData = () => {
    this.currentUser = { id: null, email: null, name: null };
  };
}

export default UserStore;
