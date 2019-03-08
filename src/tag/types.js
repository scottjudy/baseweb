/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import type {OverrideT} from '../helpers/overrides.js';
import {KIND, VARIANT} from './constants.js';

export const TagKind = Object.freeze(KIND);
export const TagVariant = Object.freeze(VARIANT);

export type TagKindT = $Keys<typeof TagKind>;
export type TagVariantT = $Values<typeof TagVariant>;

export type OverridesT = {
  Root?: OverrideT<*>,
  Action?: OverrideT<*>,
  ActionIcon?: OverrideT<*>,
};

export type PropsT = {
  overrides?: OverridesT,
  /** Include or exclude the "x" button and click action. */
  closeable?: boolean,
  /** Disable control from being changed. */
  disabled?: boolean,
  isFocused?: boolean,
  isHovered?: boolean,
  /** Defines tags look by purpose. Set it to one of KIND[key] values. Defaults to KIND.primary */
  kind?: TagKindT,
  /** Defines tags look. Set it to one of VARIANT[key] values. Defaults to VARIANT.light */
  variant?: TagVariantT,
  /** Component or String value for label of tag. Default is empty string. */
  children?: React$Node,
  /** The color theme to be applied to a Tag. Default is `KIND.primary`. */
  color?: string,
  /** onClick handler for the action button element. */
  onActionClick: (e: Event, children?: React$Node) => void,
  /** keydown handler for the action button element. */
  onActionKeyDown: (e: Event, children?: React$Node) => void,
  /** onClick handler for the tag. Passing an onClick handler also makes the tag clickable. */
  onClick?: null | ((event: Event) => mixed),
  /** onkeydown handler for the tag. */
  onKeyDown?: null | ((event: Event) => mixed),
  $theme?: *,
};

export type SharedPropsArgT = {
  $clickable?: boolean,
  $closeable?: boolean,
  $color?: string,
  $disabled?: boolean,
  $isActive?: boolean,
  $isFocused?: boolean,
  $isHovered?: boolean,
  $kind?: string,
  $variant?: string,
};

export type SharedPropsT = SharedPropsArgT & {
  $theme: *,
};
