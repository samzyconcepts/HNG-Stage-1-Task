import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='profile-container'>
        <div className='profile-imgContainer'>
          <img
            src='/assets/profile__img.png'
            alt='profile_img'
            id='profile_img'
          />
          <span className='camera-overlay-bg'>
            <img src='/assets/camera.svg' className='camera' alt='camera' />
          </span>
        </div>
        <p id='twitter'>Cre8veSam</p>
        <p id='slack'>Samzy</p>
      </div>
      <span className='share-tooltip'>
        <img src='/assets/share-icon.svg' alt='share' className='share' />
        <img src='/assets/menu-icon.svg' alt='menu' className='menu' />
        <p className='tiptext'>Share Link</p>
      </span>
    </div>
  );
};

export default Header;
