import React, {useState, useContext } from 'react';
import { ClassContext } from '.../services/ClassService';

function ClassForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { addclass } = useContext(ClassContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addClass({ name, description });
        setName('');
        setDescription('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Class Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        
        <button type ="submit"> Add Class</button>
        </form>
        );
}
export default ClassForm;
