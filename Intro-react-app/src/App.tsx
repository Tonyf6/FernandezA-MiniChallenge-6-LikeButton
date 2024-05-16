// App.tsx
import React from 'react';
import Like from './components/LikeButton/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hit That Like Button</h1>
      <Like />
    </div>
  );
};

export default App;
