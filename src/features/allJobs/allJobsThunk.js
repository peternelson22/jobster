import customFetch from '../../utils/axios';

export const allJobsThunk = async (thunkAPI) => {
  let url = `/jobs`;

  try {
    const res = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
