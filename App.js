import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>ToggleTheme</button>
        <ClassContextComponent />
        {
          //<FunctionContextComponent />
        }
      </ThemeContext.Provider>
    </>
  );
}

export default App;
