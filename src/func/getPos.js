// Function to get current latitude and longitude of the user
navigator.geolocation.getCurrentPosition(getPosition);
export const getPosition = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  return {
    lat: latitude,
    lon: longitude,
  };
};
