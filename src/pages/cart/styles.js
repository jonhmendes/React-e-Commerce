import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  message: {
    marginTop: metrics.baseMargin,
    textAlign: 'center',
    color: colors.regular,
  },

  cartList: {
    paddingTop: metrics.baseMargin,
    paddingBottom: metrics.basePadding,
  },

  subtotal: {
    height: 100,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtotalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gray,
  },

  subtotalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.green,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
