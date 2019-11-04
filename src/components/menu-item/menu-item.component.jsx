import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImgContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(match.url + linkUrl)}>
    <BackgroundImgContainer className="background-image" imageUrl={imageUrl}></BackgroundImgContainer>
    <ContentContainer>
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>{subtitle}</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer >
);

export default withRouter(MenuItem);