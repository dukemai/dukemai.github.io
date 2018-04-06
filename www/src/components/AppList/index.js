import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import { apps } from '../../data';

const propTypes = {
};
const defaultProps = {
};

const AppList = ({ }) => (
  <div>
    {
      apps.map(app => (
        <Item {...app} key={app.id} />
      ))
    }
  </div>  
);

AppList.propTypes = propTypes;
AppList.defaultProps = defaultProps;
export default AppList;
