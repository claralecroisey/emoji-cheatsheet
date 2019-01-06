import React from 'react';

import { IEmoji } from './EmojiList';

export interface IProps {
  emoji: IEmoji
}

class EmojiCard extends React.Component<IProps> {
  render() {
    const { name, url } = this.props.emoji;
    return (
      <div className="Emoji-list__Card">
        <img src={url} />
        <h4>:{name}:</h4>
      </div>
    )
  }
}

export default EmojiCard;