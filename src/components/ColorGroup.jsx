import React from 'react';
import ColorBox from './ColorBox';
import { useGlobalContext } from '../context/context';

const ColorGroup = ({ group, groupIndex  }) => {
    const { editItem, deleteGroup } = useGlobalContext()
    return (
        <div className='flex items-center flex-col gap-x-10 my-5'>
            <div className='my-10 flex'>
                <h2 className='text-3xl text-red-500 font-semibold mx-4'><span className='text-3xl text-red-500 font-bold mx-4'>Group Name:</span> {group.groupName}</h2>
                <button className='border p-1 rounded-md bg-red-500 focus:bg-red-400 text-white font-semibold' onClick={() => deleteGroup(groupIndex)}>Delete Group</button>
            </div>
            <div className='flex gap-x-4'>

                {group.colors.map((color, colorIndex) => (
                    <div>
                        <ColorBox

                            key={colorIndex}
                            color={color}
                            groupIndex={groupIndex}
                            colorIndex={colorIndex}
                            editItem={editItem}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ColorGroup;
