import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.primary,
  },

  box: {
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
  },

  image: {
    height: 285,
    resizeMode: 'contain',
  },

  info: {
    marginTop: metrics.baseMargin + 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  detail: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    color: colors.darker,
    fontWeight: 'bold',
  },

  brand: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },

  price: {
    fontSize: 24,
    color: colors.green,
    fontWeight: 'bold',
  },

  button: {
    height: 45,
    marginTop: metrics.basePadding,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
