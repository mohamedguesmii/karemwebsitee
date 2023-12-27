import React from 'react';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';

function MediaIcon({ IconName }) {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'twitter':
        return <IoLogoTwitter className="media-icon" />;
      case 'facebook':
        return <IoLogoFacebook className="media-icon" />;
      case 'instagram':
        return <IoLogoInstagram className="media-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="media-icon-container">
      {getIconComponent(IconName)}
    </div>
  );
}

export default MediaIcon;
