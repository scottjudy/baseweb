/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import {useStyletron} from '../styles/index.js';
import {mergeOverride, toObjectOverride} from '../helpers/overrides.js';

import Icon from './icon.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';
import type {IconPropsT} from './types.js';

function ChevronDown(props: IconPropsT, ref) {
  const [, theme] = useStyletron();
  const {overrides = {}, ...restProps} = props;
  const SvgOverride = mergeOverride(
    // Icons from theme really targets the SVG override in the underlying Icon component, but
    // have props typed with IconPropsT. Provided the missing props inline below here.
    // $FlowFixMe
    {
      component:
        theme.icons && theme.icons.ChevronDown ? theme.icons.ChevronDown : null,
      props: {
        title: 'Chevron Down',
        viewBox: '0 0 24 24',
        ...omitDollarPrefixedKeys(restProps),
      },
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {},
  );
  return (
    <Icon
      title="Chevron Down"
      viewBox="0 0 24 24"
      ref={ref}
      overrides={{Svg: SvgOverride}}
      {...restProps}
    >
      <path
        transform="rotate(270, 12, 12)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
      />
    </Icon>
  );
}

export default React.forwardRef<IconPropsT, mixed>(ChevronDown);
