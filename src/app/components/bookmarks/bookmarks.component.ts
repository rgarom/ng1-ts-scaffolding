import controller from './bookmarks.controller';
import './bookmarks.scss';

const bookmarksComponent = {
  template: require('./bookmarks.html'),
  controller,
  controllerAs: 'bookmarksListCtrl'
};

export default bookmarksComponent;
