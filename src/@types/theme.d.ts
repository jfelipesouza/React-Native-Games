import 'styled-components';

import {light,dark} from '../styles/theme'

export type Theme = typeof light;
export type DarkTheme = typeof dark;

declare module'styled-components'{
  export interface DefaultTheme extends Theme{}
  export interface DarkDefaultTheme extends DarkTheme{}
}
