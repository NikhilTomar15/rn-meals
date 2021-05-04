import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTitle
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }} />;
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id} // No Need in new versions just for refference
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
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
        //     headerStyle: {
        //         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        //     },
        //     headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default CategoriesScreen;