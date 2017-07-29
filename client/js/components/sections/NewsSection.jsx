import React from 'react';

import i18n from '../../i18n';


class NewsSection extends React.Component {
  componentDidMount() {
    if (window.twttr) {
      twttr.widgets.load();
    }
  }

  render() {
    return (
      <section id="news">
        <main>
          <h1>{ i18n.gettext('News') }</h1>
        </main>
        <aside>
          <h1>{ i18n.gettext('Twitter') }</h1>
          <span className="follow-button">
            <a href="https://twitter.com/rehandalal" className="twitter-follow-button" data-size="large" data-show-count="false">
              Follow @rehandalal
            </a>
          </span>
          <div className="feed">
            <a
              className="twitter-timeline"
              href="https://twitter.com/rehandalal"
              data-chrome="noheader nofooter"
            />
          </div>
        </aside>
      </section>
    );
  }
}

export default NewsSection;
