import React, { useState, useEffect } from 'react';

function App() {
  const [activeTabTitle, setActiveTabTitle] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs.length > 0) {
        setActiveTabTitle(tabs[0].title);
      }
    });
  }, []);

  return (
    <div>
      <h1>Popup</h1>
      <p>Active Tab: {activeTabTitle}</p>
    </div>
  );
}

export default App;