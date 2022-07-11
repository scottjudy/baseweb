/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { InputComponentsT, InputPropsT, StInputPropsDiffT } from '../input/types';
import type { OverrideT } from '../helpers/overrides';

export type PaymentCardComponentsT = {
  IconWrapper?: OverrideT;
} & InputComponentsT;

export type PaymentCardPropsT = {
  overrides: PaymentCardComponentsT;
} & InputPropsT;

export type StatefulPaymentCardPropsT = {
  overrides?: PaymentCardComponentsT;
} & StInputPropsDiffT;