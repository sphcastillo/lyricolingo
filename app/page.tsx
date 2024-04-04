import SignOutButton from "@/components/SignOutButton";
import SignInButton from "@/components/SignInButton";


export default function Home() {
  return (
    <div>
      <div>
        <h1>Spotify Playlist Generator</h1>
        <p>Sign in to get started</p>
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  );
}
