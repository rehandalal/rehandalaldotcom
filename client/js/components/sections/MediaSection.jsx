import React from 'react';

import i18n from '../../i18n';


function MediaSection() {
  return (
    <section id="media">
      <div className="col-2">
        <h1>{ i18n.gettext('Music') }</h1>
        <iframe width="100%" height="300" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/7066473&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=true&amp;visual=true" />
      </div>
      <div className="col-2">
        <h1>{ i18n.gettext('Videos') }</h1>
        <div className="video-wrapper">
          <iframe src="https://www.youtube.com/embed/NMZcwXh7HDA?list=PLIVxjkW3OeUkxqlS6U5sLmFJyIMX6A8pS" allowFullScreen />
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
