export const login = async ({ email, password }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users?email=${email}&password=${password}`,
    );
    const data = await response.json();
    return data[0];
  } catch (e) {
    throw new Error("User not found");
  }
};
