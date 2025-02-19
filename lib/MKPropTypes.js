//
// Common PropTypes definition
//
// Created by ywu on 15/7/16.
//
import PropTypes from "prop-types";
import { TextPropTypes } from "deprecated-react-native-prop-types";

// -----------
// ## Data types

// <section id="dimen">Dimension</section>
const dimen = PropTypes.shape({
  width: PropTypes.number,
  height: PropTypes.number,
});

// <section id="font">Font</section>
const font = PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: TextPropTypes.style.fontWeight,
  fontStyle: TextPropTypes.style.fontStyle,
  fontFamily: PropTypes.string,
});

// <section id="rippleLocation">Ripple hot-spot location</section>
const rippleLocation = PropTypes.oneOf([
  "tapLocation",
  "center",
  // 'left',
  // 'right',
]);

// ## Public interface
exports.dimen = dimen;
exports.font = font;
exports.rippleLocation = rippleLocation;
