import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

// Create a context for theme with an initial undefined value
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

// ThemeProvider component to provide theme context to its children.
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    //State to store the current theme, defaults to 'light'
    const [theme, setTheme] = useState<Theme>('light');

    //Effect to load the theme from localStorage when the component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Function to toggle the theme between 'light' and 'dark' and updates the theme state and saves the new theme to localStorage.
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Effect to update the body's class based on the current theme
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        // Provide the current theme and toggleTheme function to the context
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context.
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('Something went wrong');
    }
    return context;
};
