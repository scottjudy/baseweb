/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {FileUploader} from '../index.js';

export const name = 'file-uploader-spinner';

export const component = () => (
  <FileUploader progressMessage="Uploading... hang tight." />
);
