import './category-item.scss';

const categoryItemComponent = {
  bindings: {
    category: '<',
    selected: '&'
  },
  template: require('./category-item.html'),
  controllerAs: 'categoryItemCtrl'
};

export default categoryItemComponent;
