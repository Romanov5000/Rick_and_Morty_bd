import Api from "../API";

const rickMortyApi = new Api();

export const setEpisodesThunk = () => {
  let pageNumber = null;

//   if (pageUrl) {
//     const arr = pageUrl.split("=");
//     pageNumber = arr[arr.length - 1];
 // }
  return function (dispatch) {
     rickMortyApi
      .getEposode()
      .then(async (data) => {
        const episodes = [];
        const responseEpisodesArr = data.results;
        const responseInfoObj = data.info;

        // for (let i = 0; i < responseEpisodesArr.length; i++) {
        //   const firstEpisodeNameUrl = responseEpisodesArr[i].episode[0];
        //   const firstEpisodeName = await rickMortyApi.getEpisodeName(
        //     firstEpisodeNameUrl
        //   );
        //   const newObject = { ...responseEpisodesArr[i], firstEpisodeName };

        //   episodes.push(newObject);
        // }

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