import Api from "../API";

const rickMortyApi = new Api();

export const setEpisodesThunk = (pageUrl = null) => {
  let pageNumber = null;

  if (pageUrl) {
    const arr = pageUrl.split("=");
    pageNumber = arr[arr.length - 1];
 }

  return function (dispatch) {
     rickMortyApi
      .getEposode(pageNumber)
      .then(async (data) => {
        const responseEpisodesArr = data.results;
        const responseInfoObj = data.info;

        dispatch({
          type: "IS_EPISODES",
          payload: {
            responseEpisodesArr,
            paginator: {
              prevPageUrl: responseInfoObj.prev,
              nextPageUrl: responseInfoObj.next,
              pageCount: responseInfoObj.pages,
              currentPage: pageNumber || 1,
            },
          },
        });
      });
  };
};