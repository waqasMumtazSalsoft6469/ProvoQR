import React from 'react';
import {Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {icons} from '../../../assets/images';
import ThemeColors from '../../../Utils/ThemeColors';
import {vw} from '../../../Utils/Units';
import TouchableHOC from '../TouchableHOC';
import styles from './styles';

const IconButton = props => {
  return (
    <TouchableHOC
      {...props}
      style={[{alignItem: 'center', justifyContent: 'center'}, props.style]}>
      <Image
        source={props.icon ? props.icon : icons.back}
        style={[styles.icon, props.iconStyle]}
      />
    </TouchableHOC>
  );
};
export default IconButton;
