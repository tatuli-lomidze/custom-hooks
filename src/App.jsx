import { useRef } from 'react';
import './App.css';
import useClickboard from './hooks/useClickboard';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowSize';
import useDetectDevice from './hooks/useDetectDevice';

function App() {
  // useLocalStorage
  const [isDark, setIsDark] = useLocalStorage('tab', true)
  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  }

  // useClickboard
 const {copy, makeCopy} = useClickboard()
 const inputRef = useRef()

//  useDetectDevice

const device = useDetectDevice()
const isDesktop = useDetectDevice() === 'DESKTOP'

 

// useWindowResize for practice
//  const {width} = useWindowResize()

  return (

    <div className={`app-container ${isDark ? 'dark-mode' : 'light-mode'}`}>

       {/* useClickboard */}
       <div className={`clickboard-container ${isDesktop && isDark ? 'dark-mode' : 'light-mode'}`}>
        <input ref={inputRef} type="text" />
        <button onClick={() => makeCopy(inputRef.current.value)}>Copy</button>
        {copy && 'copied to clickboard'}
      </div>

      {/* useLocalStorage */}
      {/* <button onClick={toggleTheme}>Toggle Theme</button>
      {isDark ?  (<p>Dark Mode</p>) : (<p> Light Mode For Mobile</p>)} */}


{/* useLocalStorage and useDetectDevice Together */}
<button className='toggleBtn' onClick={toggleTheme}>Toggle Theme</button>
      {isDesktop ? (
        isDark ? <p className='paragraph'>Dark Mode</p> : <p className='paragraph'>Light Mode</p>
      ) : (
        <p className="light-mode-for-mobile">Light Mode For Mobile</p>
      )}

            {/* useWindowResize for practice */}
      {/* {width <600 && <h1>Light Mode</h1>}  */}
 </div>
  );
}

export default App;
