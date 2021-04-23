/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StatefulTabs, Tab} from '../index.js';

export default function Scenario() {
  return (
    <StatefulTabs>
      <Tab title="Tab Link 1">Tab 1 content</Tab>
    </StatefulTabs>
  );
}
