import controller from './categories.controller';
import './categories.styl';

const categoriesComponent = {
  template: require('./categories.html'),
  controller,
  controllerAs: 'categoriesListCtrl'
};

export default categoriesComponent;
