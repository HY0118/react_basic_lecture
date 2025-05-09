// Home.jsx
import { Link } from "react-router-dom";
import { profiles } from "./profiles";

function Home() {
    return (
        <div>
            <h1>프로필 목록</h1>
            <ul>
                {profiles.map((profile) => (
                    <li key={profile.id}>
                        <Link to={`/profile/${profile.id}`}>{profile.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
