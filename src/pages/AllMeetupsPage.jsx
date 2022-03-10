import { React, useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [meetUps, setMeetUps] = useState([]);

  useEffect(() => {
    fetch('/meetups')
      .then((res) => res.json())
      .then((res) => setMeetUps(res.data));
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetUps} />
    </section>
  );
};

export default AllMeetupsPage;
