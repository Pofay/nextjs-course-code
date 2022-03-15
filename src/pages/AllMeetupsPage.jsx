import { React, useEffect, useState } from 'react';
import MeetupAPI from '../api/meetup-api';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [meetUps, setMeetUps] = useState([]);

  useEffect(() => {
    MeetupAPI.getAllMeetups().then(setMeetUps)
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetUps} />
    </section>
  );
};

export default AllMeetupsPage;
