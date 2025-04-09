import { useContext } from "react";
import {
  IStoreContext,
  StoreContext,
} from "../contexts/StoreContext/StoreContext";

export const useStore = (): IStoreContext => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};
