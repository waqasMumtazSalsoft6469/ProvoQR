import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {icons} from '../../../assets/images';
import ThemeColors from '../../../Utils/ThemeColors';
import styles from './styles';

const SearchInput = (props) => {
  return (
    <View style={styles.searchbar}>
      <Image source={icons.search} style={styles.search} resizeMode="contain" />
      <TextInput
        placeholder={props.placeholder}
        returnKeyType={'search'}
        placeholderTextColor="#999999"
        selectionColor={ThemeColors.primary}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;
