export const Redirect = rs => {
  if (rs?.payload?.status >= 200) {
    return (window.location.href = '/');
  }

  return null;
};
