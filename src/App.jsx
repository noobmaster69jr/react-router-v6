/*
  Inside the User component you need to parse the query string from the 
  URL and then show the information about the selected user (which you can 
    get from the `users` object).

  If no user is selected, show "Select a user".
*/

import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link , useSearchParams} from "react-router-dom";

const users = {
  tylermcginnis: {
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatar:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis"
  },
  sarah_edo: {
    name: "Sarah Drasner",
    handle: "sarah_edo",
    avatar: "https://res.cloudinary.com/uidotdev/image/twitter_name/sarah_edo"
  },
  ralex1993: {
    name: "Alex Anderson",
    handle: "ralex1993",
    avatar: "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993"
  }
};

function User() { 
  const [q, setQ] = useSearchParams()
  
  const user = q.get("id")
 console.log(users[user])

 if(user == null){
  return <div>Select a user</div>
 }
return <div>
  <img src={`${users[user].avatar}`} />
  <h3>{users[user].name}</h3>
  <h2>{users[user].handle}</h2>
</div>
  
}

export default function App() {
  return (
    <Router>
      <div>
        <h1>Users</h1>
        <ul>
          <li>
            <Link to="/?id=tylermcginnis">Tyler</Link>
          </li>
          <li>
            <Link to="/?id=sarah_edo">Sarah</Link>
          </li>
          <li>
            <Link to="/?id=ralex1993">Alex</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}
