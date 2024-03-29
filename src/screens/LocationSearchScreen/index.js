import React, {useState, useEffect, useRef} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import SearchInput from '../../components/Input/SearchInput';
import {
  addressPrediction,
  getLatlngByAddress,
} from '../../Utils/mapSearchHelperFunctions';
import {useDispatch} from 'react-redux';

const LocationSearchScreen = props => {
  // const {} = props;

  // const inputRef = useRef();

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [blur, setBlur] = useState(false);
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
      props.route.params.handleRoute(response?.results[0]);
      props.navigation.goBack();
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

  // useEffect(() => {
  //   inputRef.current && inputRef?.current.;
  //   // setTimeout(() => {
  //   //   inputRef?.current?.focus();
  //   // }, 1000);
  // }, []);

  return (
    <View style={styles.container}>
      <SearchInput
        // ref={inputRef}
        placeholder="Search...."
        value={search}
        onChangeText={value => handleOnChangeText(value)}
        onSubmitEditing={handleOnSearch}
        onBlur={handleOnblurFunc}
        onFocus={handleOnFocus}
        autoFocus={true}
        // clearBtn={this.state?.searchString?.length > 0}
        // onClear={this.handleClear}
      />
      {search !== '' && (
        <FlatList
          data={response?.predictions}
          renderItem={renderItem}
          //   ListEmptyComponent={blur && renderEmpty}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
};

export default LocationSearchScreen;
