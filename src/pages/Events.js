import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // FIRST WAY
  // if(data.isError) {
  //   return <p>{data.message}</p>
  // }

  return (
    <>
      <EventsList events={events} />
      {/* we can use loader data direct in eventslist instead of the element / page where we defined it in App.js  */}
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // one way of handling errors - FIRST WAY
    // return { isError: true, message: 'Could not fetch events!' }

    //second way
    // throw new Error()
    // throw { message: "Could not fetch events!" };

    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    // by throwing error in Response we can get the status code in errors page when using it

    // alternatively we can use json() object form react-router-dom that returns a Response taht includes data in the json format

    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    //normal way of returning
    // const resData = await response.json();
    // return resData;

    // fetch returns a Response // this response here is Native browser event so we dont have to do data transition like this below instead we can use this syntex

    // const res = new Response('any data', {status: 201})
    // return res;

    // repsonse way of returing data
    return response;
  }
};
