// components/App.jsx
import Counter from "./Counter";
import UserProfile from "./UserProfile";

function AppUser() {
  return (
    <div>
      <h1>Zustand 상태 관리</h1>
      <Counter />
      <UserProfile />
    </div>
  );
}

export default AppUser;
