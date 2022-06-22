// Generate an api for all shop of paris

export const getShopData = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/shop`);
  const data = await response.json();
  return data;
};
