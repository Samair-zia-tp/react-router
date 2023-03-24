import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  // we can trigger the action programattically by using this hook

  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you aure?");

    if (proceed) {
      //first argument is the form data that we can get through formData() but here we don't need that as its deletion so we pass null
      submit(null, { method: "delete" }); // we can send action parameter if the action is on different path than it's own component
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
