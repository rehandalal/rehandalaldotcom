import React, { PropTypes as pt } from 'react';

import AboutSection from './sections/AboutSection.jsx';
import MediaSection from './sections/MediaSection.jsx';
import NewsSection from './sections/NewsSection.jsx';
import PressSection from './sections/PressSection.jsx';
import SplashSection from './sections/SplashSection.jsx';
import StoreSection from './sections/StoreSection.jsx';
import TourSection from './sections/TourSection.jsx';
import Footer from './stateless/Footer.jsx';
import Header from './stateless/Header.jsx';
import contain from '../containers/PageContainer';


class Page extends React.Component {
  static propTypes = {
    children: pt.any,
    focusedSection: pt.string,
    scrollTop: pt.number,
    scrollWindow: pt.func.isRequired,
  };

  componentDidMount() {
    const { scrollWindow } = this.props;

    window.addEventListener('scroll', () => {
      const scrollTop = document.body.scrollTop;
      const headerHeight = document.querySelector('header.main').offsetHeight;
      const sections = Array.from(document.getElementsByTagName('section'));
      let focusedSection = sections[0].id;

      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= headerHeight) {
          focusedSection = section.id;
        }
      });

      scrollWindow(scrollTop, focusedSection);
    });
  }

  render() {
    const { children, scrollTop, focusedSection } = this.props;
    const headerClasses = ['main'];
    const year = new Date().getFullYear();

    if (scrollTop < 100) {
      headerClasses.push('hidden');
    }

    return (
      <div>
        <Header className={headerClasses.join(' ')} focus={focusedSection} />
        <SplashSection />
        <NewsSection />
        <TourSection />
        <StoreSection />
        <MediaSection />
        <PressSection />
        <AboutSection />
        <Footer year={year} />
        {children}
      </div>
    );
  }
}

export default contain(Page);
