import React, { useRef, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WoodChippingLoadBarInfoWrapper from "./BizMinder/Cmis/InvoiceMinder/WoodChippingLoadBarInfoWrapper.jsx";
import WoodChippingLoadBarInfo from "./BizMinder/Cmis/InvoiceMinder/WoodChippingLoadBarInfo"
import WoodChippingCardHeader from "./BizMinder/Cmis/InvoiceMinder/WoodChippingCardHeader.jsx"
import WoodChippingCardContent from "./BizMinder/Cmis/InvoiceMinder/WoodChippingCardContent.jsx"
import {Colors} from "./constants/color.js";

function App() {
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);

    useEffect(() => {
        if (parentRef.current) {
            setParentWidth(parentRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (parentRef.current) {
                setParentWidth(parentRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: Colors.brand.tripper,
            padding: '10px',
        }}>
            <WoodChippingLoadBarInfoWrapper />
        </div>

    )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

export {
    WoodChippingLoadBarInfoWrapper,
    WoodChippingLoadBarInfo,
    WoodChippingCardHeader,
    WoodChippingCardContent,
}
