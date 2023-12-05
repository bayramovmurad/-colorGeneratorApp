import React from 'react';
import { useGlobalContext } from '../context/context';

const ColorBox = ({ color, groupIndex, colorIndex }) => {
    const {editItem} =useGlobalContext()
    return (
      <div className='flex flex-col'>
            <div className="flex items-center justify-center w-[100px] h-[100px]" style={{ backgroundColor: color.code }}>
                <p className='text-center text-white font-semibold'>{color.name}</p>
               
            </div>
            <button className='p-1 bg-red-500 focus:bg-red-400 rounded-md my-2 text-white font-semibold' onClick={() => editItem(groupIndex, colorIndex)}>Edit</button>
      </div>
    );
};

export default ColorBox;
