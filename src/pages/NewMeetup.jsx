import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const postNewMeetup = (payload) => {
    console.log(payload);
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm postNewMeetup={postNewMeetup} />
    </section>
  );
};

export default NewMeetup;
