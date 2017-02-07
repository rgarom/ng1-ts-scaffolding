import controller from './bookmarks.controller';
import './bookmarks.styl';

const bookmarksComponent = {
  template: require('./bookmarks.html'),
  controller,
  controllerAs: 'bookmarksListCtrl'
};

export default bookmarksComponent;
