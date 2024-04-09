import SignOutButton from "@/components/SignOutButton";
import SignInButton from "@/components/SignInButton";
import createUser from "@/actions/createUser";
import { User } from "@/mongodb/models/User";
import getUrl from "@/lib/getUrl";
import DummyComponent from "@/components/DummyComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Hero from "@/components/Hero";
import exp from "constants";

// export default async function Home() {
  export default function Home() {
  // const session = await getServerSession(authOptions);
  // const url = getUrl('/users');

  // const response =  await fetch(url, {
  //   next: {
  //     tags: ['users']
  //   }
  // });

  // const users = await response.json() as User[];
  // console.log("users: ", users);
  return (
    <main>
      {/* <div className="text-white">
        <h1>Spotify Playlist Generator</h1>
        <p>Sign in to get started</p>
        {session ? 
        <SignOutButton /> :
        <SignInButton /> 
        }
      </div> */}
      {/* <DummyComponent /> */}
      {/* <div className="p-10">
        <h2>Hello user</h2>
        <form 
          action={createUser}
          className="flex flex-col space-y-3 border-2"
        >
          <input type="text" name="name" placeholder="Name"/>
          <input type="number" name="age" placeholder="Age"/>
          <input type="email" name="email" placeholder="Email Address" />
          <input type="text" name="languagePreference" placeholder="Language Preference"/>
          <button type='submit' className="text-white">Add User</button>
        </form>

        <ul className="space-y-2">
          {users.map((user) => (
            <li 
              key={user._id}
              className="p-10 border border-white text-white"
            >
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.email}</div>
              <div>{user.languagePreference}</div>
            </li>
          
          ))}
        </ul>
      </div> */}

      <Hero />
    </main>
  );
}
