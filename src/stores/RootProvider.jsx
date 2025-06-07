import { createContext, useContext } from "react";
import { observer, useLocalObservable } from "mobx-react";
import RootStore from "./RootStore";

const StoreContext = createContext(null);

export const RootStoreProvider = observer(({children}) =>{
    const store = new RootStore();
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
})

export const useRootStore = () => {
    const store = useContext(StoreContext);
    return store;
}