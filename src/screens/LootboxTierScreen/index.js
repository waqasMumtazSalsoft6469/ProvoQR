import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import MenuCard from '../../components/MenuCard';
import {vh} from '../../Utils/Units';
import Dash from 'react-native-dash';
import Button from '../../components/Buttons/SimpleButton';
import {useSelector} from 'react-redux';
import {showToast} from '../../Api/HelperFunction';

const LootboxTierScreen = props => {
  const lootBoxes = props?.route?.params?.lootBoxes;
  const id = props?.route?.params?.id;
  const provoCash = props?.route?.params?.provoCash;
  const lootBoxAmount = props?.route?.params?.lootBoxAmount;
  console.log('lootBoxes', lootBoxes);

  const token = useSelector(state => state.SessionReducer.token);

  const [yOffset, setYOffset] = useState(0);
  const [frameHeight, setFrameHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const handleLootBoxPress = () => {
    if (token) {
      props.navigation.navigate('LootBoxPaymentMethod', {
        id,
        provoCash,
        lootBoxAmount,
      });
    } else {
      showToast('Please Login First');
    }
  };

  const renderDash = () => {
    return (
      <Dash
        style={styles.dashContainerStyle}
        dashColor="#BBBBBB"
        dashLength={0}
        dashGap={1 * vh}
        dashStyle={styles.dashStyle}
      />
    );
  };

  const renderItem = ({item}) => {
    return <MenuCard key={item?.id} item={item} />;
  };

  const renderMenuList = ({item, index}) => {
    return (
      <View key={index}>
        <OutfitSemiBoldText style={styles.headingTextStyle}>
          {item?.name}
        </OutfitSemiBoldText>
        <FlatList
          data={item?.menu}
          // data={item?.menu}
          style={styles.menuListContainer}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        {index < lootBoxes?.length - 1 && renderDash()}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.footerContainer}>
        <Button
          title="LOOT BOX"
          onPress={handleLootBoxPress}
          // onPress={() => {
          //   if (this?.props?.token) {
          //     this.props.navigation.navigate('LootBoxPaymentMethod', {
          //       id: this.state.details?.id,
          //       provoCash: this.state.details?.provo_cash_price,
          //       lootBoxAmount: this.state?.details?.lootbox_amount,
          //     });
          //   } else {
          //     showToast('Please Login First');
          //   }
          // }}
        />
      </View>
    );
  };

  const renderFooter = () => {
    if (contentHeight > frameHeight && yOffset == 0) {
      console.log('contentHeight, frameHeight', contentHeight, frameHeight);
      return (
        <View style={{alignItems: 'center', marginVertical: vh * 4}}>
          <Button
            title="LOOT BOX"
            // onPress={this.handleLootBoxPress}
            // onPress={() => {
            //   if (this?.props?.token) {
            //     this.props.navigation.navigate('LootBoxPaymentMethod', {
            //       id: this.state.details?.id,
            //       provoCash: this.state.details?.provo_cash_price,
            //       lootBoxAmount: this.state?.details?.lootbox_amount,
            //     });
            //   } else {
            //     showToast('Please Login First');
            //   }
            // }}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lootBoxes}
        keyExtractor={(_, index) => index}
        renderItem={renderMenuList}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        scrollEventThrottle={160}
        onScroll={event => {
          // console.log('yOffset', event.nativeEvent.contentOffset.y);
          setYOffset(event.nativeEvent.contentOffset.y);
        }}
        onLayout={event => {
          // console.log('onLayout', event.nativeEvent.layout.height);
          setFrameHeight(event.nativeEvent.layout.height);
        }}
        onContentSizeChange={(contentWidth, contentHeight) => {
          // console.log('onContentSizeChange', contentHeight);
          setContentHeight(contentHeight);
        }}
      />
    </View>
  );
};

export default LootboxTierScreen;
