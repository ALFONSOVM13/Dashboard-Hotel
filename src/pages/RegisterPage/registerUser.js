const { VITE_BACKEND_URL } = import.meta.env;

export default async function registerUser(data) {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${VITE_BACKEND_URL}/auth/register?role=employee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
}
