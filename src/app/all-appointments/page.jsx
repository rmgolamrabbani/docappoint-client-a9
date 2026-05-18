import { getAppointments } from "@/lib/all-appointments/data";
import AllAppointmentsClient from "./AllAppointmentsClient";

const AllAppointmentsPage = async () => {

  const allAppointmentsData = await getAppointments();

  return (
    <AllAppointmentsClient
      allAppointmentsData={allAppointmentsData}
    />
  );
};

export default AllAppointmentsPage;