import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.basePadding,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 60,
    resizeMode: 'contain',
  },

  info: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },

  name: {
    fontSize: 14,
    color: colors.darker,
    fontWeight: 'bold',
  },

  brand: {
    fontSize: 11,
    color: colors.gray,
    marginTop: 2,
  },

  price: {
    fontSize: 14,
    color: colors.green,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin / 2,
  },

  input: {
    width: 40,
    height: 27,
    paddingLeft: metrics.baseMargin,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: metrics.baseRadius,
    fontWeight: 'bold',
    color: colors.regular,
  },

  delete: {
    marginLeft: metrics.basePadding,
  },
});

export default styles;
