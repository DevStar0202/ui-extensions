import {createRemoteComponent} from '@remote-ui/core';
import {AutoCapitalizationType} from '../types';

export type InputType =
  | 'text'
  | 'number'
  | 'percent'
  | 'boundlessPercent'
  | 'currency'
  | 'giftcard'
  | 'expiry'
  | 'date'
  | 'zip'
  | 'password'
  | 'email'
  | 'url'
  | 'phone';

export interface TextFieldProps {
  title?: string;
  initialValue?: string;
  hint?: string;
  errorMessage?: string;
  showError?: boolean;
  autoCapitalize?: AutoCapitalizationType;
  onUpdate?: (value: string) => void;
  customValidator?: (text: string) => boolean;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);