import { useState } from 'react';

//Custom hook for managing local storage
function useLocalStorage<T>(key: string, initialValue: T) {
    // State to store the value, initialized from localStorage or initialValue
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            // Retrieve the item from localStorage
            const item = localStorage.getItem(key);
            // Parse and return the item if found, otherwise use initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Function to update the stored value both in state and localStorage.
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Determine the value to store, supporting function updates
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Update the state with the new value
            setStoredValue(valueToStore);
            // Store the new value in localStorage
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };
    // Return the stored value and the setter function
    return [storedValue, setValue] as const;
}

export default useLocalStorage;
