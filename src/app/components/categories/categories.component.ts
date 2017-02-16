import controller from './categories.controller';
import './categories.scss';

const categoriesComponent = {
  template: require('./categories.html'),
  controller,
  controllerAs: 'categoriesListCtrl'
};

export default categoriesComponent;
