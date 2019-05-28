import nav from './nav';
import {top} from './footer';
import buttonMaker from './button';
import { makeColorStyle } from './button-styles';
import info from '../loader-test/info.me?no';
// import marks from './marks.me';

console.log(nav(),top,buttonMaker('WEBPACK'),makeColorStyle("green"));