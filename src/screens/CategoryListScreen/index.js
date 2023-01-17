import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {getAllCategories} from '../../Redux/Actions/otherActions';
import {useDispatch} from 'react-redux';
import OutfitSemiBoldText from '../../components/Text/OutfitSemiBoldText';
import CategoryCard from '../../components/CategoryCard';
import EmptyComponent from '../../components/EmptyComponent';

const CategoryListScreen = props => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(true);

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
    getData();
  };

  const getData = async () => {
    setRefreshing(true);
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
        response?.categoryList?.current_page < response?.categoryList?.last_page
      ) {
        setCurrentPage(response?.categoryList?.current_page + 1);
      }
    } catch (error) {
      setRefreshing(false);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderEmptyComponent = () => {
    if (refreshing) {
      return null;
    }
    return <EmptyComponent text="No Categories to show." />;
  };

  const renderHeader = (
    <View style={styles.headerContainer}>
      <OutfitSemiBoldText style={styles.headingTextStyle}>
        Categories
      </OutfitSemiBoldText>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <CategoryCard
        item={item}
        style={styles.categoryContainer}
        onPress={() => handleCategoryPress(item)}
      />
    );
  };
  // console.log('category screen', categories);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => String(item?.id)}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleOnRefresh}
        onEndReached={handleOnEndReached}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

export default CategoryListScreen;
