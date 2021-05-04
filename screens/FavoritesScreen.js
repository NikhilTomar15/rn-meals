import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const FavouriesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some...</DefaultText>
            </View>
        );
    }
    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};

FavouriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => (
            <HeaderButtons
                HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu"
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}>
                </Item>
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouriesScreen;