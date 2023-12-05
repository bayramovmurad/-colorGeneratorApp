import { createContext, useContext,useState } from "react";


const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [colorGroups, setColorGroups] = useState([]);
    const [newColorName, setNewColorName] = useState('');
    const [newColorCode, setNewColorCode] = useState('');

    const isValidColorCode = (code) => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = code;
        return colorDiv.style.backgroundColor !== '';
    };

    const addColor = () => {
        if (newColorName && newColorCode) {
            const lastGroup = colorGroups[colorGroups.length - 1];

            if (!lastGroup || lastGroup.colors.length >= 6) {
                const newGroupName = prompt('Enter group name:');
                if (!newGroupName) {
                    return;
                }

                const newGroup = {
                    groupName: newGroupName,
                    colors: [{ name: newColorName, code: newColorCode }],
                };
                setColorGroups([...colorGroups, newGroup]);
                setNewColorName('');
                setNewColorCode('');
            } else {
                const updatedGroups = [...colorGroups];
                lastGroup.colors.push({ name: newColorName, code: newColorCode });
                setColorGroups(updatedGroups);
                setNewColorName('');
                setNewColorCode('');
            }
        }
    };

    const editItem = (groupIndex, colorIndex) => {
        const updatedGroups = [...colorGroups];
        const editedItem = updatedGroups[groupIndex].colors[colorIndex];

        const editedName = prompt('Enter new name:', editedItem.name);
        const editedCode = prompt('Enter new code:', editedItem.code);

        if (editedName !== null && editedCode !== null) {
            editedItem.name = editedName;
            editedItem.code = editedCode;
            setColorGroups(updatedGroups);
        }
    };

    const deleteGroup = (groupIndex) => {
        const updatedGroups = [...colorGroups];
        updatedGroups.splice(groupIndex, 1);
        setColorGroups(updatedGroups);
    };
    
    return(
        <AppContext.Provider value={{ colorGroups, newColorCode, newColorName, setColorGroups, setNewColorCode, setNewColorName, addColor, editItem, deleteGroup,  isValidColorCode, }}>
        {children}
       </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}