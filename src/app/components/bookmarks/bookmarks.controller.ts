class BookmarksController {
  private static $inject = ['$scope', 'CategoriesModel', 'BookmarksModel'];

  bookmarks;
  getCurrentCategory;
  deleteBookmark;
  currentBookmark;

  constructor(private $scope, private CategoriesModel, private BookmarksModel) {
  }

  $onInit() {
    this.BookmarksModel.getBookmarks()
      .then(result => this.bookmarks = result);

    this.$scope.$on('onCurrentCategoryUpdated', this.reset.bind(this));
    this.getCurrentCategory = this.CategoriesModel.getCurrentCategory.bind(this.CategoriesModel);
    this.deleteBookmark = this.BookmarksModel.deleteBookmark;

    this.reset();
  }

  createBookmark() {
    this.currentBookmark = this.initNewBookmark();
  }

  editBookmark(bookmark) {
    this.currentBookmark = bookmark;
  }

  initNewBookmark() {
    return {
      id: null,
      title: '',
      url: '',
      category: this.CategoriesModel.getCurrentCategory().name
    }
  }

  saveBookmark(bookmark) {
    if (bookmark.id) {
      this.BookmarksModel.updateBookmark(bookmark);
    } else {
      this.BookmarksModel.createBookmark(bookmark);
    }
  }

  onSave(bookmark) {
    this.saveBookmark(bookmark);
    this.reset();
  }

  reset() {
    this.currentBookmark = null;
  }
}

export default BookmarksController;
