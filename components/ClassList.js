import React, {useContext } from 'react';
import { ClassContext } from '.../services/ClassService';

function ClassList() {
    const { classes, deleteClass } = useContext(ClassContent);
    
    return (
        <div>
        <h2>Classes</h2>
        <u1>
        {classes.map((classItem) =>   (
        <li key={classItem.id}>
        {classItem.name} - {classItem.description}
        <button onClick={()= deleteClass(classItem.id)}>Delete</button>
        </li>
        ))}
        
        </ul>
        </div>
        );
}

export default ClassList;
