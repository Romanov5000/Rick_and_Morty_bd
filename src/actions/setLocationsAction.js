import Api from "../API";

const rickMortyApi = new Api();

export const setLocationThunk = (pageUrl = null) => {
  let pageNumber = null;

  if (pageUrl) {
    const arr = pageUrl.split("=");
    pageNumber = arr[arr.length - 1];
 }

  return function (dispatch) {
     rickMortyApi
      .getLocationInfoByPage(pageNumber)
      .then(async (data) => {
        const responseLocationArr = data.results;
        const responseInfoObj = data.info;

        dispatch({
          type: "IS_LOCATION",
          payload: {
            responseLocationArr,
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