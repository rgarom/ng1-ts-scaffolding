class CategoriesController {
  private static $inject = ['CategoriesModel'];

  CategoriesModel;
  categories;

  constructor(CategoriesModel) {
    this.CategoriesModel = CategoriesModel;
  }

  $onInit() {
    this.CategoriesModel.getCategories()
      .then(result => this.categories = result);
  }

  onCategorySelected(category) {
    this.CategoriesModel.setCurrentCategory(category);
  }

  isCurrentCategory(category) {
    return this.CategoriesModel.getCurrentCategory() &&
      this.CategoriesModel.getCurrentCategory().id === category.id;
  }
}

export default CategoriesController;
