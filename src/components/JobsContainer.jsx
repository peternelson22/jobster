import Wrapper from '../assets/wrappers/JobsContainer';
import {
  getAllJobs,
  useAllJobsSelector,
} from '../features/allJobs/allJobsSlice';
import { useDispatch } from 'react-redux';
import Job from '../components/Job';
import Loading from './Loading';
import { useEffect } from 'react';

const JobsContainer = () => {
  const { jobs, isLoading } = useAllJobsSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
