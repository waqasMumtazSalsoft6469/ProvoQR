import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import {sampleimage, icons} from '../../assets/images';
import {imageUrl} from '../../Api/configs';
import {useNavigation} from '@react-navigation/native';

const MenuScreen = ({
  originalData,
  onRefresh,
  refreshing,
  renderEmptyComponent,
  renderFooter,
  onEndReached,
}) => {
  console.log('Original Data >>>', originalData);
  let navigation = useNavigation();

  const handleNavigation = item => {
    // console.log('Selected Item Data >>>>>>>>', item);
    navigation.navigate('RewardDetail', {
      category: 'Redeem',
      reward_id: item?.id,
      status: item?.status,
      restaurantName: item?.organisations?.name,
    });
  };

  const renderItems = ({item, index}) => (
    <View key={item[index]}>
      {console.log('Restuarant Image Logo >>>', item[0]?.organisations)}
      <View
        // key={item[index]?.id}
        style={{
          width: '100%',
          // backgroundColor: 'lightblue',
          flexDirection: 'row',
          height: vh * 30,
        }}>
        {index % 2 == 0 ? (
          <>
            <View style={{width: '50%'}}>
              {item[0] && (
                <>
                  <TouchableOpacity
                    style={styles.rowfirst}
                    onPress={() => handleNavigation(item[0])}
                    activeOpacity={0.6}>
                    <Image
                      source={{
                        uri: item[0]?.my_win_lootbox?.menu?.image
                          ? imageUrl + item[0]?.my_win_lootbox?.menu?.image
                          : sampleimage.noImage,
                      }}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  <Image
                    source={
                      item[0]?.organisations?.image
                        ? {uri: imageUrl + item[0]?.organisations?.logo}
                        : icons.restaurantDummyIcon
                    }
                    style={styles.resLogoStyle}
                  />
                </>
              )}
              {item[1] && (
                <>
                  <TouchableOpacity
                    style={styles.rowfirst}
                    onPress={() => handleNavigation(item[1])}
                    activeOpacity={0.6}>
                    <Image
                      source={{
                        uri: item[1]?.my_win_lootbox?.menu?.image
                          ? imageUrl + item[1]?.my_win_lootbox?.menu?.image
                          : sampleimage.noImage,
                      }}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  <Image
                    source={
                      item[1]?.organisations?.image
                        ? {uri: imageUrl + item[1]?.organisations?.logo}
                        : icons.restaurantDummyIcon
                    }
                    style={styles.resLogoStyle}
                  />
                </>
              )}
            </View>
            {item[2] && (
              <>
                <TouchableOpacity
                  style={styles.bigPic}
                  onPress={() => handleNavigation(item[2])}
                  activeOpacity={0.6}>
                  <Image
                    source={{
                      uri: item[2]?.my_win_lootbox?.menu?.image
                        ? imageUrl + item[2]?.my_win_lootbox?.menu?.image
                        : sampleimage.noImage,
                    }}
                    style={styles.imageStyle}
                  />
                </TouchableOpacity>
                <Image
                  source={
                    item[2]?.organisations?.image
                      ? {uri: imageUrl + item[2]?.organisations?.logo}
                      : icons.restaurantDummyIcon
                  }
                  style={styles.resLogoStyle}
                />
              </>
            )}
          </>
        ) : (
          <>
            {item[0] && (
              <>
                <TouchableOpacity
                  style={styles.bigPic}
                  onPress={() => handleNavigation(item[0])}
                  activeOpacity={0.6}>
                  <Image
                    source={{
                      uri: item[0]?.my_win_lootbox?.menu?.image
                        ? imageUrl + item[0]?.my_win_lootbox?.menu?.image
                        : sampleimage.noImage,
                    }}
                    style={styles.imageStyle}
                  />
                </TouchableOpacity>
                <Image
                  source={
                    item[0]?.organisations?.image
                      ? {uri: imageUrl + item[0]?.organisations?.logo}
                      : icons.restaurantDummyIcon
                  }
                  style={styles.resLogoStyle}
                />
              </>
            )}

            <View style={{width: '50%'}}>
              {item[1] && (
                <>
                  <TouchableOpacity
                    style={styles.rowfirst}
                    onPress={() => handleNavigation(item[1])}
                    activeOpacity={0.6}>
                    <Image
                      source={{
                        uri: item[1]?.my_win_lootbox?.menu?.image
                          ? imageUrl + item[1]?.my_win_lootbox?.menu?.image
                          : sampleimage.noImage,
                      }}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  <Image
                    source={
                      item[1]?.organisations?.image
                        ? {uri: imageUrl + item[1]?.organisations?.logo}
                        : icons.restaurantDummyIcon
                    }
                    style={styles.resLogoStyle}
                  />
                </>
              )}
              {item[2] && (
                <>
                  <TouchableOpacity
                    style={styles.rowfirst}
                    onPress={() => handleNavigation(item[2])}
                    activeOpacity={0.6}>
                    <Image
                      source={{
                        uri: item[2]?.my_win_lootbox?.menu?.image
                          ? imageUrl + item[2]?.my_win_lootbox?.menu?.image
                          : sampleimage.noImage,
                      }}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  <Image
                    source={
                      item[2]?.organisations?.image
                        ? {uri: imageUrl + item[2]?.organisations?.logo}
                        : icons.restaurantDummyIcon
                    }
                    style={styles.resLogoStyle}
                  />
                </>
              )}
            </View>
          </>
        )}
      </View>
      <View
        style={{
          width: '100%',
          height: vh * 15,
          flexDirection: 'row',
        }}>
        {item[3] && (
          <>
            <TouchableOpacity
              style={styles.rowcenter}
              onPress={() => handleNavigation(item[3])}
              activeOpacity={0.6}>
              <Image
                source={{
                  uri: item[3]?.my_win_lootbox?.menu?.image
                    ? imageUrl + item[3]?.my_win_lootbox?.menu?.image
                    : sampleimage.noImage,
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <Image
              source={
                item[3]?.organisations?.image
                  ? {uri: imageUrl + item[3]?.organisations?.logo}
                  : icons.restaurantDummyIcon
              }
              style={styles.resLogoStyle}
            />
          </>
        )}
        {item[4] && (
          <>
            <TouchableOpacity
              style={styles.rowcenter}
              onPress={() => handleNavigation(item[4])}
              activeOpacity={0.6}>
              <Image
                source={{
                  uri: item[4]?.my_win_lootbox?.menu?.image
                    ? imageUrl + item[4]?.my_win_lootbox?.menu?.image
                    : sampleimage.noImage,
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <Image
              source={
                item[4]?.organisations?.image
                  ? {uri: imageUrl + item[4]?.organisations?.logo}
                  : icons.restaurantDummyIcon
              }
              style={styles.resLogoStyle}
            />
          </>
        )}
        {item[5] && (
          <>
            <TouchableOpacity
              style={styles.rowcenter}
              onPress={() => handleNavigation(item[5])}
              activeOpacity={0.6}>
              <Image
                source={{
                  uri: item[5]?.my_win_lootbox?.menu?.image
                    ? imageUrl + item[5]?.my_win_lootbox?.menu?.image
                    : sampleimage.noImage,
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <Image
              source={
                item[5]?.organisations?.image
                  ? {uri: imageUrl + item[5]?.organisations?.logo}
                  : icons.restaurantDummyIcon
              }
              style={styles.resLogoStyle}
            />
          </>
        )}
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={originalData}
        // data={dummyData}
        keyExtractor={(item, indx) => `item_${indx}`}
        renderItem={renderItems}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={!refreshing && renderEmptyComponent}
        ListFooterComponent={refreshing && renderFooter}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  bigPic: {
    width: '50%',
    justifyContent: 'center',
    // borderWidth: vh * 0.1,
    alignItems: 'center',
    // backgroundColor: 'lightpink',
    height: '100%',
  },
  rowfirst: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    // borderWidth: vh * 0.1,
    justifyContent: 'center',
    // backgroundColor: 'cyan',
  },
  rowcenter: {
    flex: 1,
    // borderWidth: vh * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightblue',
  },
  picContainer: {
    // backgroundColor: 'lightgreen',
  },
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',

    height: vh * 100,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  resLogoStyle: {
    // position: 'absolute',
    bottom: vw * 8,
    // right: vw * 5,
    left: vw * 37,
    height: vw * 6,
    width: vw * 6,
    resizeMode: 'contain',
  },
});
