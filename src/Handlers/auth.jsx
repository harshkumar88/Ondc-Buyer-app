const get_access_token = () => {
  const access_token = localStorage.getItem("access-token");
  return access_token;
};

export { get_access_token };
