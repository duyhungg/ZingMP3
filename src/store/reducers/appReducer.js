import actionTypes from "../actions/actionTypes";

const initState = {
  banner: [],
  focus: {},
  chill: {},
  artis: {},
  top100: {},
  newMusic: {},
  isLoading: false,
  newRelease: {},
  weekchart: [],
  chart: {},
  rank: [],
  radio: {},
  singer: {},
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionId === "hSlider")
            ?.items || null,
        focus:
          action.homeData?.find((item) => item.sectionId === "hEditorTheme2") ||
          {},
        chill:
          action.homeData?.find((item) => item.sectionId === "hEditorTheme") ||
          {},
        artis:
          action.homeData?.find((item) => item.sectionId === "hArtistTheme") ||
          {},
        top100:
          action.homeData?.find((item) => item.sectionId === "h100") || {},
        newMusic:
          action.homeData?.find((item) => item.sectionId === "hAlbum") || {},
        newRelease:
          action.homeData?.find((item) => item.sectionType === "new-release") ||
          {},
        weekChart:
          action.homeData?.find((item) => item.sectionType === "weekChart")
            ?.items || [],
        chart:
          action.homeData?.find((item) => item.sectionId === "hZC")?.chart ||
          {},
        rank:
          action.homeData?.find((item) => item.sectionId === "hZC")?.items ||
          [],
        radio:
          action.homeData?.find((item) => item.sectionId === "hLiveRadio") ||
          {},
        singer:
          action.homeData?.find(
            (item) => item.sectionId === "artistSpotlight"
          ) || {},
      };
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: action.flag,
      };
    default:
      return state;
  }
};

export default appReducer;
