import { ThemeVariables } from '../../@types/theme';

export default function ({ }: ThemeVariables) {
  return {
    logo1: require('./assets/images/logo.png'),
    bottomTabIcon: {
      collectionIcon: require('./assets/images/collection.png'),
      storeIcon: require('./assets/images/store.png'),
      feedIcon: require('./assets/images/feed.png'),
      marketIcon: require('./assets/images/market.png'),
      profileIcon: require('./assets/images/profile.png'),
    },
    searchIcon: require('./assets/images/search.png'),
    bellIcon: require('./assets/images/bell.png'),
    gemIcon: require('./assets/images/gem.png'),
    storeIcon: require('./assets/images/store.png'),
    heartIcon: require('./assets/images/heart.png'),
    commentIcon: require('./assets/images/comment.png'),
    saveIcon: require('./assets/images/save.png'),
    shareIcon: require('./assets/images/share.png'),
    tom_dark: require('./assets/images/tom_dark.png'),
    sparkles: {
      topLeft: require('./assets/images/sparkles-top-left.png'),
      top: require('./assets/images/sparkles-top.png'),
      topRight: require('./assets/images/sparkles-top-right.png'),
      right: require('./assets/images/sparkles-right.png'),
      bottomRight: require('./assets/images/sparkles-bottom-right.png'),
      bottom: require('./assets/images/sparkles-bottom.png'),
      bottomLeft: require('./assets/images/sparkles-bottom-left.png'),
    },
    icons: {
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),
    },
  };
}
