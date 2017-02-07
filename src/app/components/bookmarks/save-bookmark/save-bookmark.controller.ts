class SaveController {
  editedBookmark;
  bookmark;

  $onChanges() {
    this.editedBookmark = Object.assign({}, this.bookmark);
  }
}

export default SaveController;
