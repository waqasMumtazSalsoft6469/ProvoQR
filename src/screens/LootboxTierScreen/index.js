import React, {useEffect, useState} from 'react';
import {FlatList, View, Image} from 'react-native';
import styles from './styles';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import MenuCard from '../../components/MenuCard';
import {vh} from '../../Utils/Units';
import Dash from 'react-native-dash';
import Button from '../../components/Buttons/SimpleButton';
import {useDispatch, useSelector} from 'react-redux';
import {showToast} from '../../Api/HelperFunction';
import {getLootBoxes} from '../../Redux/Actions/otherActions';
import EmptyComponent from '../../components/EmptyComponent';
import {icons} from '../../assets/images';

const LootboxTierScreen = props => {
  const lootBoxes = props?.route?.params?.lootBoxes;
  // console.log('LootBoxes Data New ****>>>>>>>', JSON.stringify(lootBoxes));
  const lootbox_id = lootBoxes[0]?.lootbox_id;
  const id = props?.route?.params?.id;
  const provoCash = props?.route?.params?.provoCash;
  const lootBoxAmount = props?.route?.params?.lootBoxAmount;
  // alert(id);

  const dispatch = useDispatch();

  const token = useSelector(state => state.SessionReducer.token);

  const [response, setResponse] = useState([]);
  const [yOffset, setYOffset] = useState(0);
  const [frameHeight, setFrameHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const getLootBox = () => {
    const data = {
      restaurant_id: id,
    };
    dispatch(getLootBoxes(data)).then(res => {
      console.log('Responses Of LootBoxes >>>', res);
      setResponse(res);
    });
  };

  const getTintcolor = name => {
    if (name === 'Gold') {
      return '#F4CE0C';
    } else if (name === 'Silver') {
      return '#ADADAD';
    } else {
      return '#E9980F';
    }
  };

  useEffect(() => {
    getLootBox();
  }, []);

  const handleLootBoxPress = (data, detail_lootbox) => {
    if (token) {
      console.log('LootBox Data >>>', data);
      console.log('Detail of selected lootbox >>>', detail_lootbox);
      // return;
      const id = data?.organisation_id;
      const lootBoxAmount = data?.price;
      const lootbox_id = data?.id;
      // alert(lootbox_id);
      // return;
      props.navigation.navigate('LootBoxPaymentMethod', {
        id: id,
        provoCash,
        lootBoxAmount: lootBoxAmount,
        lootbox_id: lootbox_id,
        lootBoxDetails: detail_lootbox,
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

  const renderEmpty = () => {
    return <EmptyComponent text="No found lootbox to show" />;
  };

  const renderMenuList = ({item, index}) => {
    return (
      <View key={index}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <OutfitSemiBoldText style={styles.headingTextStyle}>
              {item?.lootbox?.name}
            </OutfitSemiBoldText>
          </View>
          <Button
            title={`$${item?.lootbox?.price} BUY`}
            onPress={() => handleLootBoxPress(item?.lootbox, item)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <OutfitSemiBoldText style={styles.headingTextStyle}>
            {item?.name}
          </OutfitSemiBoldText>
          <Image
            source={icons.box}
            style={[styles.cardimage, {tintColor: getTintcolor(item?.name)}]}
          />
        </View>
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
          title={`$${lootBoxAmount} LOOT BOX`}
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
        data={response}
        keyExtractor={(_, index) => index}
        renderItem={renderMenuList}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
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
