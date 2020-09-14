import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Person = ({ img, name, job, children }) => {
  //   console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className='person'>
      <img src={url} alt='image person' />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className='person-list'>
      <Person img='34' name='Alexander' job='Developer' />
      <Person img='34' name='Gerard' job='Developer' />
      <Person img='6' name='Isaias' job='Dentist' />
      <Person img='42' name='Jelsy' job='Developer' />
      <Person img='5' name='Joel' job='Designer' />
      <Person img='20' name='Joshua' job='Mechanic' />
      <Person img='38' name='Waner' job='Business Administrator' />
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById('root'));
