import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import OutfitRegularText from '../../components/Text/OutfitRegularText';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import {useDispatch} from 'react-redux';
import {lootBoxDraw} from '../../Redux/Actions/otherActions';

import ThemeColors from '../../Utils/ThemeColors';
import Button from '../../components/Buttons/SimpleButton';

const ClaimScreen = props => {
  const dispatch = useDispatch();
  const {lootBoxDetails, restaurant_id, _success} = props?.route?.params;
  // console.log('Claim Screen Props LootBoxDetails 11 >>>', lootBoxDetails);
  console.log('Resturant ID >>>>>', restaurant_id);
  const [selectedItem, setSelectedItem] = useState({});
  const [success, setSuccess] = useState(_success ? _success : 0);
  const [rewardDetail, setRewardDetail] = useState();

  const items = [
    'Pasta',
    // 'Burger',
    // 'Family Meals',
    // 'Test New One Claim item first',
    // 'Helloo',
    // 'Test Item',
    // 'Content',
  ];

  const handleItemSelect = item => {
    setSelectedItem(item);
  };

  const handleClaimItem = () => {
    // Call your API to claim the selected item here
    if (Object.keys(selectedItem).length != 0) {
      // claimItemApi(selectedItem);
      // Add any additional logic or navigation after claiming the item
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 7,
        }}>
        <OutfitSemiBoldText style={styles.heading}>
          Congratulations! You won a {lootBoxDetails?.name} Prize!!!!
        </OutfitSemiBoldText>
        <OutfitRegularText style={styles.sub_heading}>
          Please select an item
        </OutfitRegularText>
      </View>

      <View style={styles.itemsContainer}>
        {lootBoxDetails?.menu?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.item,
              selectedItem?.id === item?.id ? styles.selectedItem : null,
            ]}
            onPress={() => handleItemSelect(item)}>
            <OutfitRegularText style={{textAlign: 'center'}}>
              {item?.name}
            </OutfitRegularText>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          // flex: 1,
          marginTop: 30,
          // backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Claim"
          btnContainer={{marginTop: 5 * vh}}
          onPress={handleClaimItem}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  // heading: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
  },
  itemsContainer: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    // marginBottom: 20,
  },
  item: {
    margin: 5,
    width: '28%',
    height: 70,
    padding: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItem: {
    // backgroundColor: 'lightblue',
    borderColor: ThemeColors.primary,
    borderRadius: 5,
  },
  claimButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
  },
  claimButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  heading: {fontSize: vh * 3, textAlign: 'center'},
  sub_heading: {fontSize: vh * 2, marginTop: 3 * vh},
  selectedText: {color: ThemeColors.primary},
  unselectedText: {color: ThemeColors.grayText},
});

export default ClaimScreen;
