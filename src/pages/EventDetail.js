import { json, redirect, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const data = useLoaderData();

  // wehen we use id we use this hook instead of simple useLoaderData
  const data = useRouteLoaderData('event-detail')

  return (
    <>
      <EventItem event={data.event}/>
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  // this loader function returns 2 args 1 request and 2. params

  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
};

//delete action
export const action = async ({request, params}) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  } 
  return redirect('/events')
}