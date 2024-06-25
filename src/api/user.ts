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

  return await response.json();
};


export const updateUser = async (userData: object) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userData.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );

  return await response.json();
};

export const getUsers = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users`,
  );

  return await response.json();
};
