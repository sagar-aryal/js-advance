// create custom hook for auth
const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return false;
  }

  return user;
};

export default useAuth;
