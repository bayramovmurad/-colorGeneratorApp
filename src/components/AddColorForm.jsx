import React from 'react';
import { useGlobalContext } from '../context/context';

const AddColorForm = () => {
    const { newColorCode, newColorName, setNewColorCode, setNewColorName, addColor, isValidColorCode } = useGlobalContext();
    const handleAddColor = () => {
        if (isValidColorCode(newColorCode)) {
            addColor();
        } else {
            alert('Invalid color code. Please enter a valid color code.');
        }
    };
    return (
        <div className="flex gap-x-4 items-center">
            <input
                className="border p-2 rounded-md text-2xl font-semibold outline-none"
                type="text"
                placeholder="Color Name"
                value={newColorName}
                onChange={(e) => setNewColorName(e.target.value)}
            />
            <input
                className='border p-2 rounded-md text-2xl font-semibold outline-none'
                type="text"
                placeholder="Color Code" 
                value={newColorCode}
                onChange={(e) => setNewColorCode(e.target.value)}
            />
            <button className='p-3 bg-red-500 text-white text-bold rounded-md focus:bg-red-400' onClick={handleAddColor}>Add Color</button>
        </div>
    );
};

export default AddColorForm;
