import React from 'react';
import MeetupAPI from '../api/meetup-api';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm postNewMeetup={MeetupAPI.postNewMeetup} />
    </section>
  );
};

export default NewMeetup;
