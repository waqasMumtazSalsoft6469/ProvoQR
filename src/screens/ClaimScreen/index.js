import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ClaimScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = ['Pasta', 'Burger', 'Family Meals'];

  const handleItemSelect = item => {
    setSelectedItem(item);
  };

  const handleClaimItem = () => {
    // Call your API to claim the selected item here
    if (selectedItem) {
      claimItemApi(selectedItem);
      // Add any additional logic or navigation after claiming the item
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Congratulations! You won a [tier(b, s, g)] Prize!!!!
      </Text>
      <Text style={styles.subHeading}>Please select an item</Text>

      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.item,
              selectedItem === item ? styles.selectedItem : null,
            ]}
            onPress={() => handleItemSelect(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.claimButton} onPress={handleClaimItem}>
        <Text style={styles.claimButtonText}>Claim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    marginBottom: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: 'lightblue',
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
});

export default ClaimScreen;
