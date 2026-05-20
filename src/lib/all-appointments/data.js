export const getAppointments = async () => {
  try {
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,
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