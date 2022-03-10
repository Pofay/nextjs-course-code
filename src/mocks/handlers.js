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

export const handlers = [
  rest.post('/meetups', (req, res, ctx) => {
    const { id, title, imageUrl, address, description } = req.body;

    const newMeetup = { id, title, imageUrl, address, description };

    dummyMeetups.concat(newMeetup);

    return res(ctx.status(201), ctx.json({ data: newMeetup }));
  }),
  rest.get('/meetups', (req, res, ctx) => {
    return res(ctx.json({ data: dummyMeetups }));
  }),
];
