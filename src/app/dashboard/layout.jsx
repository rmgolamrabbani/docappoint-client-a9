import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }) {

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <DashboardSidebar />

      {/* PAGE CONTENT */}
      <div className="flex-1 bg-slate-50 p-6">
        {children}
      </div>
    </div>
  );
}

