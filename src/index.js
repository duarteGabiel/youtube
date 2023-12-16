import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuStore } from './contexts/menuContexts';
import { CategoryProvider } from './contexts/searchCategory';
import { SearchProvider } from './contexts/searchContexts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuStore>
      <CategoryProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CategoryProvider>
    </MenuStore>
  </React.StrictMode>
);


