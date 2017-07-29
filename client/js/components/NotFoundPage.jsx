import React, { PropTypes as pt } from 'react';


function Page({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: pt.any,
};

export default Page;
