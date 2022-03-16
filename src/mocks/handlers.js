import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';

const dummyMeetups = [
  {
    id: uuidv4(),
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: uuidv4(),
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'Second Meetup, Have lots of fun!',
  },
];

window.localStorage.setItem('meetups', JSON.stringify(dummyMeetups))

export const handlers = [
  rest.post('/meetups', (req, res, ctx) => {
    const { id, title, imageUrl, address, description } = req.body;

    const newMeetup = { id, title, imageUrl, address, description };

    const prevMeetups = JSON.parse(window.localStorage.getItem('meetups'))
    const updatedMeetups = prevMeetups.concat(newMeetup);
    window.localStorage.setItem('meetups', JSON.stringify(updatedMeetups))

    return res(ctx.status(201), ctx.json({ data: newMeetup }));
  }),
  rest.get('/meetups', (req, res, ctx) => {
    const meetups = JSON.parse(window.localStorage.getItem('meetups'))

    return res(ctx.json({ data: meetups}));
  }),
];

