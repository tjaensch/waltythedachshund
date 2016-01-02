'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

import ImageGallery from '../src/ImageGallery.react';

const App = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState() {
    return {
      isPlaying: true,
      slideInterval: 4000,
      showThumbnails: true,
      showIndex: false,
      showNav: true,
      showBullets: true
    };
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval) {
      // refresh setInterval
      this._pauseSlider();
      this._playSlider();
    }
  },

  _pauseSlider() {
    if (this.refs.imageGallery) {
      this.refs.imageGallery.pause();
      this.setState({isPlaying: false});
    }
  },

  _playSlider() {
    if (this.refs.imageGallery) {
      this.refs.imageGallery.play();
      this.setState({isPlaying: true});
    }
  },

  render() {
    const images = [
      {
        original: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/11807732_10153571840903258_9113438440544578885_o.jpg',
        thumbnail: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/11807732_10153571840903258_9113438440544578885_o.jpg',
        description: 'Aloha Walty'
      },
      {
        original: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpl1/t31.0-8/12339106_10153857146348258_5796749155191330295_o.jpg',
        thumbnail: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpl1/t31.0-8/12339106_10153857146348258_5796749155191330295_o.jpg',
        description: 'Car Walty'
      },
      {
        original: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12314682_10153839986723258_2248271028193545375_o.jpg',
        thumbnail: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/12314682_10153839986723258_2248271028193545375_o.jpg',
        description: 'Pool Walty'
      },
      {
        original: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/12291311_10153838079078258_1177135467318299633_o.jpg',
        thumbnail: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/12291311_10153838079078258_1177135467318299633_o.jpg',
        description: 'Arizona Walty'
      },
      {
        original: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xal1/t31.0-8/12094744_10153732856163258_2774109922996675961_o.jpg',
        thumbnail: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xal1/t31.0-8/12094744_10153732856163258_2774109922996675961_o.jpg',
        description: 'Elegant Walty'
      },
      {
        original: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xat1/t31.0-8/11741144_10153648409533258_9067087971013808758_o.jpg',
        thumbnail: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xat1/t31.0-8/11741144_10153648409533258_9067087971013808758_o.jpg',
        description: 'Sunny Walty'
      },
      {
        original: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/11807553_10153555433553258_4030528453913558742_o.jpg',
        thumbnail: 'https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/11807553_10153555433553258_4030528453913558742_o.jpg',
        description: 'Sleepy Walty'
      }
    ];

    return (

      <section className='app'>

      <div className='app-sandbox'>
          <h1><a href="mailto:thomasjaensch@gmail.com?Subject=Walty" target="_top">Say Hi to Walty the Dachshund</a></h1>
      </div>

      <ImageGallery
          ref='imageGallery'
          items={images}
          lazyLoad={false}
          showBullets={this.state.showBullets}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          slideInterval={parseInt(this.state.slideInterval)}
          autoPlay={this.state.isPlaying}
        />

      <div className='app-sandbox'>
          <p><small>Thomas Jaensch 2016</small></p>
      </div>

      </section>
    );
  }

});


(function() {
  ReactDOM.render(<App/>, document.getElementById('container'));
})();
