import React, { PureComponent } from 'react';
import styles from './index.less';

class GridContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contentWidth: 'Fluid',
    };
  }

  render() {
    const { children } = this.props;
    const { contentWidth } = this.state;

    let className = `${styles.main}`;
    if (contentWidth === 'Fixed') {
      className = `${styles.main} ${styles.wide}`;
    }

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

export default GridContent;
