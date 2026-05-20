export const getAppointments = async () => {
  try {
    const response = await fetch(
      "https://docappoint-server-a9.vercel.app/appointments",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch appointments");
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error("Error fetching appointments:", error);

    return [];
  }
};