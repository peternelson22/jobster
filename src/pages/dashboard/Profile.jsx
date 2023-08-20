import { useDispatch } from 'react-redux';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { updateUser, useUserSelector } from '../../features/user/userSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';
import FormRow from '../../components/FormRow';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useUserSelector();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error('please fill out all fields');
      return;
    }
    dispatch(updateUser({ name, email, lastName, location }));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
