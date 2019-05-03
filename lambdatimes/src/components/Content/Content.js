import React, { Component } from 'react';
import data from '../../data';
import Tabs from './Tabs';
import Cards from './Cards';


import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState ({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({ selected: tab})
  };

  filterCards = () => {
    const cards = this.state.cards.filter(card => {
      if (this.state.selected === 'all') {
        return true;
      } else if (card.tab === this.state.selected) {
          return true;
      } else {
          return false;
      }
    });
    return cards
};

  render() {
    return (
      <div className="content-container">
        <Tabs 
          selectedTab={this.state.selected} 
          selectTabHandler={this.changeSelected} 
          tabs={this.state.tabs} 
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
