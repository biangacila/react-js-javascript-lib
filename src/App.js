import logo from './logo.svg';
import './App.css';

import WoodChippingLoadBarInfoWrapper from "./components/BizMinder/Cmis/InvoiceMinder/WoodChippingLoadBarInfoWrapper.jsx";
import WoodChippingLoadBarInfo from "./components/BizMinder/Cmis/InvoiceMinder/WoodChippingLoadBarInfo"
import WoodChippingCardHeader from "./components/BizMinder/Cmis/InvoiceMinder/WoodChippingCardHeader.jsx"
import WoodChippingCardContent from "./components/BizMinder/Cmis/InvoiceMinder/WoodChippingCardContent.js"
import {useEffect, useRef, useState} from "react";
import {Colors} from "./constants/color";

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
    <div className="App">
      <header className="App-header">
        <img src={logo||""} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

export {
  WoodChippingLoadBarInfoWrapper,
  WoodChippingLoadBarInfo,
  WoodChippingCardHeader,
  WoodChippingCardContent,
}

