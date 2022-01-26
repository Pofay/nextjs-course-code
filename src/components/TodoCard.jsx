const TodoCard = ({ id, title, description, handleOnSelect}) => (
  <div className='card'>
    <h2>{title}</h2>
    <span>
        {description}
    </span>
    <div className='actions'>
      <button className='btn' onClick={(event) => handleOnSelect(event, id)}>Delete</button>
    </div>
  </div>
);

export default TodoCard
