import { createContext } from "react";
import { IRootStore, RootStore } from "../../store/rootStore";

export interface IStoreContext {
  rootStore: IRootStore;
}

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const rootStore = new RootStore();
  return (
    <StoreContext.Provider value={{ rootStore }}>
      {children}
    </StoreContext.Provider>
  );
};
