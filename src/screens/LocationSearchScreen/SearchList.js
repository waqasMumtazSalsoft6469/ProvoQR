import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import SearchInput from '../../components/Input/SearchInput';
import {
  addressPrediction,
  getLatlngByAddress,
} from '../../Utils/mapSearchHelperFunctions';
import {useDispatch} from 'react-redux';
import OutfitRegularText from '../../components/Text/OutfitRegularText';

const SearchList = forwardRef((props, ref) => {
  const {} = props;

  console.log('Props Detail >>>', props);

  const inputRef = useRef();

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [blur, setBlur] = useState(false);
  const [response, setResponse] = useState(null);

  const handleOnFocus = () => {
    console.log('blur', blur);
    setBlur(false);
  };
  const handleOnblur = () => {
    console.log('blur', blur);
    setBlur(true);
  };
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
      props?.props?.route.params.handleRoute(response?.results[0]);
      props?.props.navigation.goBack();
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

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current && inputRef.current.focus();
    },
    // ... other functions you want to expose ...
  }));

  return (
    <View style={styles.container}>
      <SearchInput
        ref={inputRef}
        placeholder="Search...."
        value={search}
        onChangeText={value => handleOnChangeText(value)}
        onSubmitEditing={handleOnSearch}
        onBlur={handleOnblur}
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
});

export default SearchList;
