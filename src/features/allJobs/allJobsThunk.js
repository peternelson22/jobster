import customFetch, { unauthorizedAccess } from '../../utils/axios';

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, search, sort, searchType, searchStatus } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;

  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    return unauthorizedAccess(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.get('/jobs/stats');
    console.log(res.data);
    return res.data;
  } catch (error) {
    return unauthorizedAccess(error, thunkAPI);
  }
};
