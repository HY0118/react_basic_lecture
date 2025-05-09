// components/UserProfile.jsx
import useUserStore from "../stores/useUserStore";

function UserProfile() {
    const { username, updateName } = useUserStore();

    return (
        <div>
            <h2>사용자 이름: {username}</h2>
            <button onClick={() => updateName("React Master")}>이름 변경</button>
        </div>
    );
}

export default UserProfile;
