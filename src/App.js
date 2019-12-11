import React from 'react';
import './App.css';
import Calendar from './Components/Calendar';
// Redux
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar />
      </div>
    </Provider>
  );
}

export default App;
