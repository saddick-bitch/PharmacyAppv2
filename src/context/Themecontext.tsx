import { createContext, useContext, useState, type ReactNode } from 'react';
import { type StoreType } from '../types';
interface ThemeContextType {
storeType: StoreType;
setStoreType: (type: StoreType) => void;
colors: {
primary: string;
secondary: string;
bgPrimary: string;
bgSecondary: string;
};
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [storeType, setStoreType] = useState<StoreType>('farmacia');
    const colors = storeType === 'farmacia'
        ? {
                primary: '#114b8c', // Azul
                secondary: '#f9d000', // Amarillo
                bgPrimary: 'bg-primary', // Clase de Tailwind
                bgSecondary: 'bg-secondary'
            }
        : {
                primary: '#f9d000', // Amarillo
                secondary: '#114b8c', // Azul
                bgPrimary: 'bg-secondary',
                bgSecondary: 'bg-primary'
            };
return (
<ThemeContext.Provider value={{ storeType, setStoreType, colors }}>
{children}
</ThemeContext.Provider>
);
}
export function useTheme() {
const context = useContext(ThemeContext);
if (!context) {

    throw new Error('useTheme debe usarse dentro de ThemeProvider');
}
return context;
}
