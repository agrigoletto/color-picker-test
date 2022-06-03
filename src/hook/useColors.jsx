import { createContext, useContext, useState, useEffect } from 'react'
import { getStorageItem, setStorageItem } from '../utils/localStorage';

const PRESET_COLORS_KEY = 'preset-colors';
const SELECTED_COLOR_KEY = 'selectes-color';

export const ColorContextDefaultValues = {
  presetColors: Array.from({ length: 16 }).map(() => ''),
  selectedColor: '',
  color: '',
  setColor: (color) => null,
  addToPreset: () => null,
  selectColor: () => null,
}

export const ColorContext = createContext(ColorContextDefaultValues);

const ColorProvider = ({ children }) => {
  const [presetColors, setPresetColors] = useState(() => {
    let storedPreset = getStorageItem(PRESET_COLORS_KEY);

    if(!storedPreset) {
      storedPreset = Array.from({ length: 16 }).map(() => '');
      setStorageItem(PRESET_COLORS_KEY, storedPreset);
    }
    
    return storedPreset;
  });
  const [selectedColor, setSelectedColor] = useState(() => {
    const storedSelect = getStorageItem(SELECTED_COLOR_KEY);

    return storedSelect || '';
  });
  const [color, setColor] = useState('#1F6CD1');

  const addToPreset = (color) => {
    const newColors = [color, ...presetColors.slice(0,-1)];

    setPresetColors(newColors);
    setStorageItem(PRESET_COLORS_KEY, newColors);
  }

  const selectColor = (color) => {
    setSelectedColor(color);
    setStorageItem(SELECTED_COLOR_KEY, color);
  };

  return (
    <ColorContext.Provider
      value={{
        presetColors,
        selectedColor,
        color,
        setColor,
        addToPreset,
        selectColor
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

const useColors = () => useContext(ColorContext);

export { ColorProvider, useColors }