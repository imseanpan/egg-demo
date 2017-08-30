import React from 'react';
import { render } from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import Menu from '../common/menu';
import App from './components/app';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const app = (<App />);

    return (
      <CookiesProvider>
        <Menu app={app}></Menu>
      </CookiesProvider>
    );
  }
}

// 加载组件到 DOM 元素 mountNode
render(<Index />, document.getElementById('app'));
