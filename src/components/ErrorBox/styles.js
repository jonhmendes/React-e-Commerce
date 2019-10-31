import { StyleSheet, Platform } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth - metrics.basePadding,
    position: 'absolute',
    top: Platform.OS === 'android' ? metrics.baseMargin / 2 : metrics.baseMargin + 20,
    left: metrics.baseMargin,
    paddingVertical: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.danger,
    fontSize: 14,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  message: {
    flex: 1,
    color: colors.white,
  },
});

export default styles;
