import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {vh} from '../../Utils/Units';
import {sampleimage} from '../../assets/images';
import {imageUrl} from '../../Api/configs';
import {useNavigation} from '@react-navigation/native';

const MenuScreen = ({originalData}) => {
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
      {console.log('IDDDDDD Item >>>', item[index]?.id)}
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
              )}
              {item[1] && (
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
              )}
            </View>
            {item[2] && (
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
            )}
          </>
        ) : (
          <>
            {item[0] && (
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
            )}

            <View style={{width: '50%'}}>
              {item[1] && (
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
              )}
              {item[2] && (
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
        )}
        {item[4] && (
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
        )}
        {item[5] && (
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
        )}
      </View>
    </View>
  );
  return (
    <View>
      {originalData ? (
        <>
          <FlatList
            data={originalData}
            // data={dummyData}
            keyExtractor={(item, indx) => `item_${indx}`}
            // contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderItems}
            // refreshing={this.state.refreshing}
            // onRefresh={this.onRefresh}
            // ListEmptyComponent={
            //   !this.state.refreshing && this.renderEmptyComponent
            // }
            // ListFooterComponent={this.state.refreshing && this.renderFooter}
            // onEndReached={this.onEndReached}
          />
          {/* {originalData?.map((item, index) => {
            console.log('Render Loop Item >>', item[0].source);
            return (
              <>
                <View
                  key={index}
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    height: vh * 30,
                  }}>
                  {index % 2 == 0 ? (
                    <>
                      <View style={{width: '50%'}}>
                        {item[0] && (
                          <View style={styles.rowfirst}>
                            <Image
                              source={{uri: item[0]?.source}}
                              style={styles.imageStyle}
                            />
                          </View>
                        )}
                        {item[1] && (
                          <View style={styles.rowfirst}>
                            <Image
                              source={{uri: item[1]?.source}}
                              style={styles.imageStyle}
                            />
                          </View>
                        )}
                      </View>
                      {item[2] && (
                        <View style={styles.bigPic}>
                          <Image
                            source={{uri: item[2]?.source}}
                            style={styles.imageStyle}
                          />
                        </View>
                      )}
                    </>
                  ) : (
                    <>
                      {item[0] && (
                        <View style={styles.bigPic}>
                          
                          <Image
                            source={{uri: item[0]?.source}}
                            style={styles.imageStyle}
                          />
                        </View>
                      )}

                      <View style={{width: '50%'}}>
                        {item[1] && (
                          <View style={styles.rowfirst}>
                            <Image
                              source={{uri: item[1]?.source}}
                              style={styles.imageStyle}
                            />
                          </View>
                        )}
                        {item[2] && (
                          <View style={styles.rowfirst}>
                            <Image
                              source={{uri: item[2]?.source}}
                              style={styles.imageStyle}
                            />
                          </View>
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
                    <View style={styles.rowcenter}>
                      <Image
                        source={{uri: item[3]?.source}}
                        style={styles.imageStyle}
                      />
                    </View>
                  )}
                  {item[4] && (
                    <View style={styles.rowcenter}>
                      <Image
                        source={{uri: item[4]?.source}}
                        style={styles.imageStyle}
                      />

                    
                    </View>
                  )}
                  {item[5] && (
                    <View style={styles.rowcenter}>
                      <Image
                        source={{uri: item[5]?.source}}
                        style={styles.imageStyle}
                      />
                    </View>
                  )}
                </View>
              </>
            );
          })} */}
        </>
      ) : (
        <Text>No found prize library list</Text>
      )}
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
});
