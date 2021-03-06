/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const ProgressBar = require('ProgressBarAndroid');
const React = require('React');
const createReactClass = require('create-react-class');
const RNTesterBlock = require('RNTesterBlock');
const RNTesterPage = require('RNTesterPage');

const MovingBar = createReactClass({
  displayName: 'MovingBar',
  _intervalID: (null: ?IntervalID),

  getInitialState: function() {
    return {
      progress: 0,
    };
  },

  componentDidMount: function() {
    this._intervalID = setInterval(() => {
      const progress = (this.state.progress + 0.02) % 1;
      this.setState({progress: progress});
    }, 50);
  },

  componentWillUnmount: function() {
    if (this._intervalID != null) {
      clearInterval(this._intervalID);
    }
  },

  render: function() {
    return <ProgressBar progress={this.state.progress} {...this.props} />;
  },
});

class ProgressBarAndroidExample extends React.Component<{}> {
  static title = '<ProgressBarAndroid>';
  static description = 'Horizontal bar to show the progress of some operation.';

  render() {
    return (
      <RNTesterPage title="ProgressBar Examples">
        <RNTesterBlock title="Horizontal Indeterminate ProgressBar">
          {/* $FlowFixMe(>=0.78.0 site=react_native_android_fb) This issue was
            * found when making Flow check .android.js files. */}
          <ProgressBar styleAttr="Horizontal" />
        </RNTesterBlock>

        <RNTesterBlock title="Horizontal ProgressBar">
          <MovingBar styleAttr="Horizontal" indeterminate={false} />
        </RNTesterBlock>

        <RNTesterBlock title="Horizontal Black Indeterminate ProgressBar">
          {/* $FlowFixMe(>=0.78.0 site=react_native_android_fb) This issue was
            * found when making Flow check .android.js files. */}
          <ProgressBar styleAttr="Horizontal" color="black" />
        </RNTesterBlock>

        <RNTesterBlock title="Horizontal Blue ProgressBar">
          <MovingBar
            styleAttr="Horizontal"
            indeterminate={false}
            color="blue"
          />
        </RNTesterBlock>
      </RNTesterPage>
    );
  }
}

module.exports = ProgressBarAndroidExample;
