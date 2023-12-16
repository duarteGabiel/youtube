import { createContext, useState,ReactNode } from "react";

type MenuContextProps = {
    children: ReactNode
}

type MenuContextType = {
    openMenu: boolean,
    setOpenMenu: (newState: boolean) => void;
}

const initialValue = {
    openMenu: false,
    setOpenMenu: () => {},
}

export const MenuContext = createContext<MenuContextType>(initialValue);

export const MenuStore = ({ children}:MenuContextProps) => {
    const [openMenu, setOpenMenu] = useState(initialValue.openMenu);
    
    return(
        <MenuContext.Provider value={{openMenu, setOpenMenu}}>
            { children }
        </MenuContext.Provider>

    )
}