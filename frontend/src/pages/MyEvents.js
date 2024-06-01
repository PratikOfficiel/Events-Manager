import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { getAuthToken } from "../util/auth";

import EventsList from "../components/EventsList";

function MyEvents(props) {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default MyEvents;

async function loadEvents() {
    const token = getAuthToken();
    const user = jwtDecode(token).email;
    const response = await fetch(`http://localhost:8080/events?user=${user}`);

    if(!response.ok) {
        return json(
            { message: 'Error loading my Events'},
            {
                status: 500,
            }
        )
    }

    const resData = await response.json();
    return resData.events;
}

export function loader() {
    return defer({
        events: loadEvents(),
    })
}