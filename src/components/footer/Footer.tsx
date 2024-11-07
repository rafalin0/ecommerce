import React from 'react';
import { 
  CopyrightContainer, 
  FooterContainer, 
  FooterIconLinkContainer, 
  FooterLinksContainer, 
  FooterTextLink, 
  FooterTextLinkContainer, 
  SocialIconLink, 
  SocialIconsContainer, 
} from './FooterStyled.tsx';
import { catalogItems, socialIcons } from '../../constants/constants.ts';

import HomeButton from "../home-button/HomeButton.tsx"

// Separate functions to render social icons and catalog items
const renderSocialIcons = () => 
  socialIcons.map(({ icon: Icon, url, label }, index) => (
    <SocialIconLink 
      key={index} 
      href={url} 
      aria-label={label} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Icon />
    </SocialIconLink>
  ));

const renderCatalogItems = () => 
  catalogItems.map(({ label, path }, index) => (
    <FooterTextLink key={index} to={path}>
      {label}
    </FooterTextLink>
  ));

const Footer = () => (
  <FooterContainer>
    <FooterLinksContainer>
      <FooterIconLinkContainer>
        <HomeButton />
        <SocialIconsContainer>
          {renderSocialIcons()}
        </SocialIconsContainer>
      </FooterIconLinkContainer>
      
      <FooterTextLinkContainer>
        <span>products</span>
        {renderCatalogItems()}
      </FooterTextLinkContainer>
    </FooterLinksContainer>

    <CopyrightContainer>
      <p>© Rafa Lin 2023. All rights reserved.</p>
    </CopyrightContainer>
  </FooterContainer>
);

export default Footer;
