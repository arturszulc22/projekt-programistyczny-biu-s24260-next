export const getUser = async (userData: object) => {
  const params = new URLSearchParams(userData);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users?${params}`,
  );

  const data = await response.json();
  return data[0];
};

export const createUser = async (userData: object) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};
