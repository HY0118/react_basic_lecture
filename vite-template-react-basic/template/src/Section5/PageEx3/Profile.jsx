// Profile.jsx
import { useParams } from "react-router-dom";
import { profiles } from "./profiles";

function Profile() {
    const { id } = useParams();
    const profile = profiles.find((p) => p.id === parseInt(id));

    if (!profile) {
        return <h1>프로필을 찾을 수 없습니다.</h1>;
    }

    return (
        <div>
            <h1>이름: {profile.name}</h1>
            <p>직업: {profile.job}</p>
        </div>
    );
}

export default Profile;
