import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FlatList, View} from 'react-native';
import {
  HORIZONTAL_PADDING_APP,
  HORIZONTAL_SPACE_16,
} from '../../../styles/spacing';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Category} from '../../../types/categoryType';
import CategoryChip from '../../molecules/categoryChip';
import styles from './styles';

type CategoryListProps = {
  data: Array<Category> | undefined | null;
};

const CategoryList: React.FC<CategoryListProps> = ({
  data,
}: CategoryListProps) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginHorizontal: -HORIZONTAL_PADDING_APP}}
      contentContainerStyle={{marginLeft: HORIZONTAL_SPACE_16}}
      renderItem={({item}) => (
        <View style={styles.container}>
          <CategoryChip
            size={70}
            text={item.description}
            source={{uri: item.imageUrl}}
          />
        </View>
      )}
    />
  );
};

export default CategoryList;
