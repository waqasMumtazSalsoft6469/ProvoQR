// LocationSearchModal.js

import React, {useState} from 'react';
import {
  Modal,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import SearchInput from '../../components/Input/SearchInput';
import {
  addressPrediction,
  getLatlngByAddress,
} from '../../Utils/mapSearchHelperFunctions';
import {useDispatch} from 'react-redux';
import {icons} from '../../assets/images';
import {vh, vw} from '../../Utils/Units';
import ThemeColors from '../../Utils/ThemeColors';
import {fonts} from '../../assets/fonts';

const LocationSearchModal = ({visible, onClose, handleRoute, navigation}) => {
  const dispatch = useDispatch();

  const [blur, setBlur] = useState(false);
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState(null);

  const handleOnFocus = () => {
    console.log('blur', blur);
    setBlur(false);
  };

  const handleOnblurFunc = () => {
    console.log('blur', blur);
    setBlur(true);
  };

  // Comment Code Start

  const handleOnSearch = async () => {
    console.log('search', search);
    try {
      const response = await dispatch(addressPrediction(search));
      //   console.log('add res', response);
      setResponse(response);
    } catch (e) {
      // console.log(e);
    }
  };
  const handleOnChangeText = async value => {
    setSearch(value);
    try {
      const response = await dispatch(addressPrediction(search));
      //   console.log("prediction res", response);
      setResponse(response);
    } catch (e) {
      // console.log(e);
    }
  };
  const handleItemPress = async item => {
    try {
      const response = await dispatch(getLatlngByAddress(item?.place_id));
      console.log('latlng  res', response);
      //   props.route.params.handleRoute(response?.results[0]);
      handleRoute(response?.results[0]);
      onClose();
      //   props.navigation.goBack();
    } catch (e) {
      // console.log(e);
    }
  };

  //   const renderEmpty = () =>
  //     blur && (
  //       <EmptyComponent
  //         image={lottieImages.search2}
  //         style={styles.emptyContainer}
  //       />
  //     );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContaienr}
        activeOpacity={0.9}
        onPress={() => handleItemPress(item)}
        hitSlop={styles.hitslop}>
        <Text style={styles.itemText}>{item?.description}</Text>
        {/* <OutfitRegularText style={styles.itemText}>
          {item?.description}
        </OutfitRegularText> */}
        <View style={styles.border} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => onClose()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton} onPress={() => onClose()}>
            <Image source={icons.backarrow} style={styles.backArrowIcon} />
          </TouchableOpacity>
          <SearchInput
            placeholder="Search...."
            value={search}
            onChangeText={value => handleOnChangeText(value)}
            onSubmitEditing={handleOnSearch}
            onBlur={handleOnblurFunc}
            onFocus={handleOnFocus}
            autoFocus={true}
          />
        </View>
        {search !== '' && (
          <FlatList
            data={response?.predictions}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
          />
        )}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0, // Adjust for iOS status bar
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    margin: 10,
  },
  backArrowIcon: {
    resizeMode: 'contain',
    height: vh * 3,
    width: vw * 4,
  },
  itemContaienr: {
    // width: vw * 85,
    marginHorizontal: vw * 10,
    marginVertical: vh * 0.2,
    paddingVertical: vh * 1,
    // justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  hitslop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  itemText: {
    color: ThemeColors.fontBlack,
    fontSize: vh * 1.7,
    fontFamily: fonts.Outfit.regular,
    // backgroundColor: 'red',
  },
  contentContainerStyle: {
    paddingTop: vh * 2,
  },
});

export default LocationSearchModal;
