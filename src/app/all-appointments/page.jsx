import AllAppointmentsClient from "./AllAppointmentsClient";

const AllAppointmentsPage = async () => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,
    {
      cache: "no-store",
    }
  );

  const allAppointmentsData = await res.json();

  return (
    <AllAppointmentsClient
      allAppointmentsData={allAppointmentsData}
    />
  );
};

export default AllAppointmentsPage;