import controller from './save-bookmark.controller';
import './save-bookmark.scss';

const saveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  template: require('./save-bookmark.html'),
  controller,
  controllerAs: 'saveBookmarkCtrl'
};

export default saveBookmarkComponent;
