import React from 'react';
import Ripple from 'react-native-material-ripple';
import ThemeColors from '../../../Utils/ThemeColors';

const TouchableHOC = props => {
  return (
    <Ripple rippleColor={ThemeColors.primary} {...props} key={props?.index}>
      {props.children}
    </Ripple>
  );
};
export default TouchableHOC;
