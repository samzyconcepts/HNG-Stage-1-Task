import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Link = () => {
  return (
    <div>
      <Header />
      <div className='links'>
        <a href='https://twitter.com/Cre8veSam' className='btn'>
          Twitter Link
        </a>
        <a href='https://training.zuri.team/' className='btn' id='books'>
          Zuri Team
        </a>
        <a href='https://books.zuri.team' className='btn' id='btn__zuri'>
          Zuri Books
        </a>
        <a
          href='https://books.zuri.team/python-for-beginners?ref_id=Samzy'
          className='btn'
          id='book__python'
        >
          Python Books
        </a>
        <a href='https://background.zuri.team' className='btn' id='pitch'>
          Background Check for Coders
        </a>
        <a
          href='https://books.zuri.team/design-rules'
          className='btn'
          id='book__design'
        >
          Design Books
        </a>

        <div className='social-media'>
          <img src='/assets/slack.svg' alt='slack icon' />
          <img src='/assets/github.svg' alt='slack icon' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Link;
