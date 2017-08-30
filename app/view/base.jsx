import React from 'react';
import { render } from 'react-dom';

import Menu from './common/menu';

class Html extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu></Menu>
    );
  }
}

// 加载组件到 DOM 元素 mountNode
render(<Html />, document.getElementById('app'));
