import React, { useState } from 'react';


const ColorFormApp = () => {
  const [colorGroups, setColorGroups] = useState([{ groupName: '', colors: ['', '', '', '', '', ''] }]);
  const [showColors, setShowColors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGroupNameChange = (groupIndex, value) => {
    const newGroups = [...colorGroups];
    newGroups[groupIndex].groupName = value;
    setColorGroups(newGroups);
  };

  const handleColorChange = (groupIndex, colorIndex, value) => {
    const newGroups = [...colorGroups];
    newGroups[groupIndex].colors[colorIndex] = value;
    setColorGroups(newGroups);
  };

  const handleAddGroup = () => {
    if (showColors) {
      setColorGroups([...colorGroups, { groupName: '', colors: ['', '', '', '', '', ''] }]);
      setShowColors(false);
      setErrorMessage('');
    } else {
      setErrorMessage('Please click "Show Colors" before adding a new group.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const isColorValid = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  };

  const handleShowColors = () => {
    if (colorGroups.every((group) => group.groupName !== '' && group.colors.every((color) => isColorValid(color)))) {
      setShowColors(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter valid color codes before showing colors.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <div className="color-form">
      <h1>Color Form</h1>
      {errorMessage && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <input
            type="text"
            placeholder={`Group Name ${groupIndex + 1}`}
            value={group.groupName}
            onChange={(e) => handleGroupNameChange(groupIndex, e.target.value)}
          />
          {group.colors.map((color, colorIndex) => (
            <input
              key={colorIndex}
              type="text"
              placeholder={`Color ${colorIndex + 1}`}
              value={color}
              onChange={(e) => handleColorChange(groupIndex, colorIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
      <button onClick={handleAddGroup}>Add Group</button>
      <button onClick={handleShowColors}>Show Colors</button>

      {showColors && (
        <div className="color-groups">
          {colorGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3>{group.groupName}</h3>
              <div className="color-boxes">
                {group.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className="color-box" style={{ backgroundColor: color }}>
                    {color}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorFormApp;
