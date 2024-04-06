async function onFormSubmit(event) {
  event.preventDefault();
  page = 1;
  refs.gallery.innerHTML = '';
  showLoader();
  hiddenLoadMoreBtn();
  const form = event.currentTarget;
  searchQuery = form.elements.search.value;

  try {
    const data = await fetchImg(searchQuery);

    if (!data.total) {
      const error =
        'Sorry, there are no images matching your search query. Please try again!';
      onFetchError(error);
    } else {
      renderGallery(data);
      showLoadMoreBtn();
      page += 1;
      totalPage = data.totalHits / perPage;
    }
  } catch (e) {
    onFetchError(e.message);
  } finally {
    hiddenLoader();
  }

  refs.form.reset();
}
