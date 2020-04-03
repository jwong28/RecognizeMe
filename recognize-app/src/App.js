import React from 'react';
import Piano from './Piano';

const App = () => {
  return (
    <div>
      <form method="POST" action="api/array">
        <input type="file" />
      </form>
      <Piano />
    </div>
  );
}

export default App;