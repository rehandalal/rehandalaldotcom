import React, { PropTypes as pt } from 'react';

import contain from '../../containers/MailingListContainer';
import i18n from '../../i18n';
import bindValueToState from '../../utils/bindValueToState';


class DetailsForm extends React.Component {
  static propTypes = {
    data: pt.object.isRequired,
    onSubmit: pt.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { CITY, COUNTRY, FNAME, LNAME } = props.data.merge_fields;

    this.state = {
      city: CITY,
      country: COUNTRY,
      fname: FNAME,
      lname: LNAME,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{ i18n.gettext('Thanks for signing up!') }</h3>
        <h2>{ i18n.gettext('Update your settings') }</h2>

        <div>
          <input
            type="text"
            name="fname"
            placeholder={i18n.gettext('first name')}
            value={this.state.fname}
            onChange={bindValueToState(this, 'fname')}
          />

          <input
            type="text"
            name="lname"
            placeholder={i18n.gettext('last name')}
            value={this.state.lname}
            onChange={bindValueToState(this, 'lname')}
          />
        </div>

        <div>
          <input
            type="text"
            name="city"
            placeholder={i18n.gettext('city')}
            value={this.state.city}
            onChange={bindValueToState(this, 'city')}
          />

          <input
            type="text"
            name="country"
            placeholder={i18n.gettext('country')}
            value={this.state.country}
            onChange={bindValueToState(this, 'country')}
          />
        </div>

        <button type="submit" className="button">
          { i18n.gettext('Update') }
        </button>
      </form>
    );
  }
}


class SubscribeForm extends React.Component {
  static propTypes = {
    data: pt.object.isRequired,
    onSubmit: pt.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    return (
      <form className="subscribe-form" onSubmit={this.handleSubmit}>
        <h3>{ i18n.gettext('Sign up to receive') }</h3>
        <h2>{ i18n.gettext('News & Updates') }</h2>

        <div>
          <input
            type="email"
            name="email"
            placeholder={i18n.gettext('enter your email')}
            onChange={bindValueToState(this, 'email')}
            value={this.state.email}
          />
        </div>

        <button type="submit" className="button">
          { i18n.gettext('Subscribe') }
        </button>
      </form>
    );
  }
}


class MailingListForm extends React.Component {
  static propTypes = {
    newMember: pt.object,
    subscribeToMailingList: pt.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleDetailsSubmit = this.handleDetailsSubmit.bind(this);
    this.handleSubscribeSubmit = this.handleSubscribeSubmit.bind(this);
  }

  handleSubscribeSubmit(data) {
    const { subscribeToMailingList } = this.props;
    subscribeToMailingList(data.email);
  }

  handleDetailsSubmit(data) {

  }

  render() {
    const { newMember } = this.props;

    if (newMember.data) {
      return <DetailsForm data={newMember.data} onSubmit={this.handleDetailsSubmit} />;
    }

    return <SubscribeForm onSubmit={this.handleSubscribeSubmit} />;
  }
}

export default contain(MailingListForm);
