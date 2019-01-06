import React from 'react';
import axios from 'axios';

import EmojiCard from './EmojiCard';
import './Emoji-list.css';

export interface IEmoji {
  name: string,
  url: string
}

export interface IEmojis {
  [key: string]: IEmoji
}

export interface IState {
  emojis: IEmojis
}

class EmojiList extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      emojis: {}
    };

    this.renderEmoji = this.renderEmoji.bind(this);
  }

  componentDidMount() {
    axios.get('https://api.github.com/emojis')
      .then(({ data }) => {
        // transform data { 'name': 'url' } to { 'name': { name: 'name', url: 'url' } }
        const transformedData = {} as IEmojis;
        for (let key in data) {
          transformedData[key] = {
            name: key,
            url: data[key]
          };
        }

        this.setState({
          emojis: transformedData
        });
      });
  }

  renderEmoji(emoji: IEmoji, index: number) {
    return <EmojiCard emoji={emoji} key={index} />;
  }

  render() {
    if (Object.keys(this.state.emojis).length === 0) {
      return <p>Loading Emojis...</p>;
    }
    return (
      <div className="Emoji-list">
        { Object.keys(this.state.emojis)
            .map((emojiName, index) => this.renderEmoji(this.state.emojis[emojiName], index)) }
      </div>
    );
  }
}

export default EmojiList;