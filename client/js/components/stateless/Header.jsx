import React, { PropTypes as pt } from 'react';
import { Link } from 'react-router';

import Logo from './Logo.jsx';
import i18n from '../../i18n';


function MenuItem({ focused, text, to }) {
  return (
    <li className={(focused) ? 'active' : ''}>
      <Link to={to}>{ text }</Link>
    </li>
  );
}

MenuItem.propTypes = {
  focused: pt.bool,
  text: pt.string.isRequired,
  to: pt.string.isRequired,
};


function Header({ className, focus }) {
  return (
    <header className={className}>
      <Link to="/"><Logo /></Link>
      <nav>
        <ul>
          <MenuItem text={i18n.gettext('News')} to="/news/" focused={focus === 'news'} />
          <MenuItem text={i18n.gettext('Tour')} to="/tour/" focused={focus === 'tour'} />
          <MenuItem text={i18n.gettext('Store')} to="/store/" focused={focus === 'store'} />
          <MenuItem text={i18n.gettext('Media')} to="/media/" focused={focus === 'media'} />
          <MenuItem text={i18n.gettext('Press')} to="/press/" focused={focus === 'press'} />
          <MenuItem text={i18n.gettext('About')} to="/about/" focused={focus === 'about'} />
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  className: pt.string,
  focus: pt.string
};

export default Header;
