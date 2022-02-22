import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <h2>here you can change your password quickly</h2>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
