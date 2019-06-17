import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = props => (
  <Aux>
    <div>
      Toolbar, SideDrawer, Backdrop
      <main className={classes.Content}>{props.children}</main>
    </div>
  </Aux>
);

export default layout;
