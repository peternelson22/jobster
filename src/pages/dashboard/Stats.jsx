import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading';

import { useEffect } from 'react';
import {
  showStats,
  useAllJobsSelector,
} from '../../features/allJobs/allJobsSlice';
import StatsContainer from '../../components/StatsContainer';
import ChartsContainer from '../../components/ChartsContainer';

const Stats = () => {
  const dispatch = useDispatch();

  const { isLoading, monthlyApplications } = useAllJobsSelector();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 1 && <ChartsContainer />}
    </>
  );
};
export default Stats;
