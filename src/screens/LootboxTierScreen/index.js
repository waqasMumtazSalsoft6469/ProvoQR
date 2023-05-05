import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {getAllCategories} from '../../Redux/Actions/otherActions';
import {useDispatch} from 'react-redux';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import CategoryCard from '../../components/CategoryCard';
import EmptyComponent from '../../components/EmptyComponent';
import MenuCard from '../../components/MenuCard';
import { vh } from '../../Utils/Units';

const LootboxTierScreen = props => {
  const lootBoxes = props?.route?.params?.lootBoxes;

  console.log("lootBoxes", lootBoxes);

  // const renderItem = ({item}) => {
  //   return <MenuCard item={item} onPressCard={() => {}} />;
  // };

  const renderMenuList = ({item, index}) => {
    return (
      <>
        <OutfitSemiBoldText style={styles.headingTextStyle}>{item?.name}</OutfitSemiBoldText>
        {/* <FlatList
          data={item?.menu}
          style={{marginTop: 2 * vh}}
          renderItem={renderItem}
        /> */}
        {/* {index < this.state.menu?.length - 1 && this.renderDash()} */}
      </>
    );
  };
  // console.log('category screen', categories);
  return (
    <View style={styles.container}>
      <FlatList
        data={lootBoxes}
        keyExtractor={item => String(item?.id)}
        renderItem={renderMenuList}
        // contentContainerStyle={styles.contentContainerStyle}
        // ListHeaderComponent={renderHeader}
        // showsVerticalScrollIndicator={false}
        // refreshing={refreshing}
        // onRefresh={handleOnRefresh}
        // onEndReached={handleOnEndReached}
        // ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

export default LootboxTierScreen;
