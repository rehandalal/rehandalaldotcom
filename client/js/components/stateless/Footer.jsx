import React, { PropTypes as pt } from 'react';

import ReflexLogo from './ReflexLogo.jsx';
import i18n from '../../i18n';


function SocialIcon({ icon, link }) {
  return (
    <a className="social-icon" href={link} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${icon}`} aria-hidden="true" />
    </a>
  );
}

SocialIcon.propTypes = {
  icon: pt.string.isRequired,
  link: pt.string.isRequired,
};

function Footer({ year }) {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <SocialIcon
              icon="facebook-official"
              link="https://www.facebook.com/rehandalal"
            />
            <SocialIcon
              icon="twitter"
              link="https://www.twitter.com/rehandalal"
            />
            <SocialIcon
              icon="instagram"
              link="https://www.instagram.com/rehandalal"
            />
            <SocialIcon
              icon="youtube"
              link="https://www.youtube.com/user/rehandalal"
            />
            <SocialIcon
              icon="spotify"
              link="https://open.spotify.com/artist/1aBR69XI5JWwOs2RDt7Udb"
            />
            <SocialIcon
              icon="apple"
              link="https://itunes.apple.com/us/artist/rehan-dalal/id364503170"
            />
          </li>
          <li>
            <a href="#">{ i18n.gettext('Mailing List') }</a>
          </li>
          <li>
            <a href="#">{ i18n.gettext('Privacy Policy') }</a>
          </li>
          <li>
            <a href="#">{ i18n.gettext('Terms & Conditions') }</a>
          </li>
        </ul>
      </nav>
      <ReflexLogo className="reflex-logo" />
      <span className="copyright">
        { i18n.sprintf(i18n.gettext('© %(year)s Rehan Dalal. All rights reserved.'), { year }) }
      </span>
    </footer>
  );
}

Footer.propTypes = {
  year: pt.number.isRequired,
};

export default Footer;
