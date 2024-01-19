/*
  Using the pre-made components, create the following 
  path -> Component mapping. Notice /people/:id is a 
  nested route (with a URL parameter).

  / -> Home
  /people -> People
    /people/:id -> Person

  Be sure to have all your Routes in one location
  and utilize the <Outlet /> component.
*/

import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getPeople, getPerson } from './api';

function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <p>
        Welcome to our collection of quotes. Head over to{' '}
        <Link to="/people">/people</Link> to see our catalog of quotes.
      </p>
    </React.Fragment>
  );
}

function People() {
  const people = getPeople();

  return (
    <div className="people">
      <ul>
        {people.map(({ id, name, bio }) => {
          return (
            <li key={id}>
              <Link to={id}>{name}</Link>
              <p>{bio}</p>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

function Person() {
  const { id } = useParams();
  const { quotes, name } = getPerson(id);

  return (
    <div className="person">
      <h1>{name}</h1>
      <ul>
        {quotes.map((quote) => {
          return (
            <li key={quote.id}>
              <p>"{quote.text}"</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/* Routes go here */}
        <Routes>
          <Route path="/people" element={<People />}>
            <Route path="" element={<h1>Select someone</h1>} />
            <Route path=":id" element={<Person />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
