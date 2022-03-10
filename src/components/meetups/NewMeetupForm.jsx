import { useState } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = ({ postNewMeetup }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (event, setterFn) => {
    const value = event.target.value;
    setterFn(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const payload = {
      title,
      imageUrl,
      address,
      description,
    };

    postNewMeetup(payload);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            required
            id='title'
            value={title}
            onChange={(event) => handleChange(event, setTitle)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image URL</label>
          <input
            type='url'
            required
            id='image'
            value={imageUrl}
            onChange={(event) => handleChange(event, setImageUrl)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            required
            id='address'
            value={address}
            onChange={(event) => handleChange(event, setAddress)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            value={description}
            onChange={(event) => handleChange(event, setDescription)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
