import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: (metrics.screenWidth - 50) / 2,
    marginTop: metrics.baseMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },

  image: {
    height: 180,
    resizeMode: 'contain',
  },

  info: {
    marginTop: metrics.baseMargin,
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
});

export default styles;
