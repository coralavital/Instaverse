import * as api from '../api';

export const getStories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStories();
    const action = { type: 'FETCH_ALL_STORIES', payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err.message);
  }
};
export const createStory = (story) => async (dispatch) => {
  try {
    const { data } = await api.createStory(story);
    dispatch({ type: 'CREATE_STORY', payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
