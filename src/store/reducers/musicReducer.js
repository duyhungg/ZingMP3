import actionTypes from "../actions/actionTypes";

const initState = {
  curSongId: null,
  curSongData: null,
  isPlaying: false,
  atAlbum: false,
  songs: null,
  curAlbumPid: null,
  recentSongs: [],
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.sid || null,
      };
    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };
    case actionTypes.SET_ALBUM:
      return {
        ...state,
        atAlbum: action.flag,
      };
    case actionTypes.PLAYLIST:
      return {
        ...state,
        songs: action.songs || null,
      };
    case actionTypes.SET_CUR_SONG_DATA:
      return {
        ...state,
        curSongData: action.data || null,
      };
    case actionTypes.SET_CUR_ALBUM_ID:
      return {
        ...state,
        curAlbumPid: action.pid || null,
      };
    case actionTypes.SET_RECENT:
      let song = state.recentSongs;
      if (action.data) {
        if (state.recentSongs?.some((i) => i.sid === action.data.sid)) {
          song = song.filter((i) => i !== action.data.sid);
        }
        if (song.length > 19) {
          song = song.filter((i, index, selt) => index !== selt.length - 1);
        }
        song = [action.data, ...song];
      }
      return {
        ...state,
        recentSongs: song,
      };
    // state.recentSongs.filter((i, index, selt) => index !== selt.length - 1);
    default:
      return state;
  }
};

export default musicReducer;
