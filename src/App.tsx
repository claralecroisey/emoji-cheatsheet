import React, { Component } from 'react';
import EmojiList from './EmojiList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Github Emojis Cheatsheet</h1>
        </header>
        <main className="App__main">
          <EmojiList />
        </main>
      </div>
    );
  }
}

export default App;
