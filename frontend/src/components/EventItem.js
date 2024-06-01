import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from './EventItem.module.css';
import {jwtDecode} from 'jwt-decode';

function EventItem({ event }) {
  const submit = useSubmit();

  const token = useRouteLoaderData('root');
  // console.log("eventItem: ", typeof token, token);
  const user = token?jwtDecode(token).email:"";

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token && user===event.author && (<menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>)}
    </article>
  );
}

export default EventItem;
