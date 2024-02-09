import React, { createContext, usestate } from 'react';

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
    
    const [classes, setClasses] = useState([]);
    
    const addClass = (classData) => {
        setClasses([...classes, {...classData, id: Date.now() }]);
    };
    
    const deleteClass = (id) => {
        setClasses(classes.filter((classItem) => classItem.id !== id));
    };
    
    return (
        <ClassContext.Provider value={{ classes, addClass, deleteClass }}>
        {children}
        </ClassContext.Provider>
        );
};
