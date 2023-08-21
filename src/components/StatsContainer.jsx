import Wrapper from '../assets/wrappers/StatsContainer';
import { useAllJobsSelector } from '../features/allJobs/allJobsSlice';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import StatItem from './StatItem';

const StatsContainer = () => {
  const { stats } = useAllJobsSelector();

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => (
        <StatItem key={index} {...item} />
      ))}
    </Wrapper>
  );
};
export default StatsContainer;
