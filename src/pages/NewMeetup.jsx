import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const tee = (data) => {
  console.log(data);
  return data;
};

const NewMeetup = () => {
  const postNewMeetup = (payload) =>
    fetch('/meetups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => tee(res.data));

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm postNewMeetup={postNewMeetup} />
    </section>
  );
};

export default NewMeetup;
