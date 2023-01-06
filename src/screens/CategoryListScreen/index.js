import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {getAllCategories} from '../../Redux/Actions/otherActions';
import {useDispatch, useSelector} from 'react-redux';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import CategoryCard from '../../components/CategoryCard';

const CategoryListScreen = props => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.GeneralReducer.softLoading);

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryPress = item => {
    props.navigation.navigate('RestaurantListScreen', {
      id: item?.id,
      name: item?.name,
    });
  };

  const handleOnEndReached = () => {
    getData();
  };

  const handleOnRefresh = () => {
    setCurrentPage(1);
  };

  const getData = async () => {
    if (!isLoading && currentPage) {
      try {
        const data = {
          page: currentPage,
          per_page: 10,
        };
        const response = await dispatch(getAllCategories(data));
        if (response?.categoryList?.current_page === 1) {
          setCategories(response?.categoryList?.data);
        } else {
          setCategories(prev => prev.concat(response?.categoryList?.data));
        }
        if (
          response?.categoryList?.data?.length <
          response?.categoryList?.total
        ) {
          setCurrentPage(response?.categoryList?.current_page + 1);
        } else {
          setCurrentPage(null);
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      getData();
    }
  }, [currentPage]);

  useEffect(() => {
    getData();
  }, []);

  const renderHeader = categories.length ? (
    <View style={styles.headerContainer}>
      <OutfitSemiBoldText style={styles.headingTextStyle}>
        Categories
      </OutfitSemiBoldText>
    </View>
  ) : null;

  const renderItem = ({item}) => {
    return (
      <CategoryCard
        item={item}
        style={styles.categoryContainer}
        onPress={() => handleCategoryPress(item)}
      />
    );
  };
  console.log('category screen', categories);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        refreshing={isLoading}
        onRefresh={handleOnRefresh}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
};

export default CategoryListScreen;
