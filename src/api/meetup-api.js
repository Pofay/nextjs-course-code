const tee = (data) => {
  console.log(data);
  return data;
};

const constructRequest = (payload) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

const postNewMeetup = (payload) =>
  fetch('/meetups', constructRequest(payload))
    .then((res) => res.json())
    .then((res) => tee(res.data));

const getAllMeetups = () =>
  fetch('/meetups')
    .then((res) => res.json())
    .then((res) => res.data)

const MeetupAPI = {
  postNewMeetup,
  getAllMeetups,
};

export default MeetupAPI;
