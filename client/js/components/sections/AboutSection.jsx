import React from 'react';

import i18n from '../../i18n';


function AboutSection() {
  return (
    <section id="about">
      <h1>{ i18n.gettext('About') }</h1>
    </section>
  );
}

export default AboutSection;
