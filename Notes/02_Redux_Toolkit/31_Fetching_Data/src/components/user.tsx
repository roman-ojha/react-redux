import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppState";
import { userAction } from "../lib/features/user/userSlice";

const User = (): React.JSX.Element => {
  const users = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userAction.fetchUsers());
  }, []);

  return (
    <div>
      <h1>List of Users:</h1>
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error ? <div>Error: {users.error}</div> : null}
      {!users.loading && users.users.length ? (
        <ul style={{ listStyle: "none" }}>
          {users.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default User;
