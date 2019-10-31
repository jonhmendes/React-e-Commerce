import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  categoryBar: {
    height: 54,
    backgroundColor: colors.secondary,
  },

  categoryList: {
    paddingHorizontal: metrics.basePadding,
  },

  category: {
    marginRight: 30,
    justifyContent: 'center',
  },

  categoryText: {
    opacity: 0.6,
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  activeCategory: {
    paddingTop: 5,
    borderBottomWidth: 5,
    borderColor: colors.white,
  },

  activeCategoryText: {
    opacity: 1,
  },

  loading: {
    marginTop: metrics.basePadding,
  },

  productList: {
    paddingTop: metrics.baseMargin,
    paddingBottom: metrics.basePadding,
  },

  columnContainer: {
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
  },
});

export default styles;
