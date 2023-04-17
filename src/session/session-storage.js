export const getSessionStorage = () => {
  let userSession = sessionStorage.getItem("user_token");
  userSession = userSession ? JSON.parse(userSession) : null;
  return userSession;
};

export const createSessionStorage = (data) => {
  if (data) {
    let userDetails = data ? JSON.stringify(data) : null;
    if (userDetails) sessionStorage.setItem("user_token", userDetails);
  }
};

export const updateSessionStorage = (data) => {
  removeSessionStorage();
  createSessionStorage(data);
};

export const removeSessionStorage = () => {
  sessionStorage.removeItem("user_token");
};
