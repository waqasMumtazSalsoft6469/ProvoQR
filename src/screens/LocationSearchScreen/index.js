import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import SearchInput from '../../components/Input/SearchInput';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {addressPrediction, getLatlngByAddress} from '../../Utils/mapSearchHelperFunctions';
import {useDispatch} from 'react-redux';
import OutfitRegularText from '../../components/Text/OutfitRegularText';

const LocationSearchScreen = props => {
  const {} = props;

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
    console.log("item", item);
    try {
      const response = await dispatch(getLatlngByAddress(item?.place_id));
      console.log("latlng  res", response);
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
        onPress={() => handleItemPress(item)}>
        <OutfitRegularText style={styles.itemText}>
          {item?.description}
        </OutfitRegularText>
        <View style={styles.border} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 1000);
  }, []);

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
};

export default LocationSearchScreen;
