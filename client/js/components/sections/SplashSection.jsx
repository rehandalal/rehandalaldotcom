import React from 'react';

import MailingListForm from '../forms/MailingListForm.jsx';
import Header from '../stateless/Header.jsx';


function SplashSection() {
  return (
    <section id="splash">
      <div className="background-image">
        <Header />
        <MailingListForm />
      </div>
    </section>
  );
}

export default SplashSection;
