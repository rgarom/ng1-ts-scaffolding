class CategoriesModel {
  private static $inject = ['$q', '$rootScope'];

  private currentCategory: string;
  private categories: Array<{}>;

  constructor(private $q, private $rootScope) {
    this.currentCategory = null;
    this.categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Exercise"},
      {"id": 3, "name": "Humor"}
    ];
  }

  private getCategories() {
    return this.$q.when(this.categories);
  }

  private setCurrentCategory(category) {
    this.currentCategory = category;
    this.$rootScope.$broadcast('onCurrentCategoryUpdated');
  }

  private getCurrentCategory() {
    return this.currentCategory;
  }
}

export default CategoriesModel;
