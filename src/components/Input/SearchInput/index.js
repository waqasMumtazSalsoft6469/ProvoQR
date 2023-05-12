import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {icons} from '../../../assets/images';
import ThemeColors from '../../../Utils/ThemeColors';
import styles from './styles';

const SearchInput = props => {
  return (
    <View style={[styles.searchbar, props?.style]}>
      <Image source={icons.search} style={styles.search} resizeMode="contain" />
      <TextInput
        ref={props?.ref}
        placeholder={props.placeholder}
        returnKeyType={'search'}
        placeholderTextColor="#999999"
        selectionColor={ThemeColors.primary}
        style={styles.input}
        value={props?.value}
        onChangeText={props?.onChangeText}
        onSubmitEditing={props?.onSubmitEditing}
        onFocus={props?.onFocus}
        onBlur={props?.onBlur}
      />
      {props?.clearBtn && (
        <TouchableOpacity
          style={styles.crossIconContainer}
          onPress={props?.onClear}
          activeOpacity={0.9}
          hitSlop={styles.hitSlop}>
          <Image source={icons.crossIcon} style={styles.crossIconStyle} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
