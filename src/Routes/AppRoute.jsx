import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import PatientRegistration from "../components/PatientRegistration/PatientRegistration";
import Appointments from "../components/Appointments/Appointments";
import QueueManagement from "../components/QueueManagement/QueueManagement";
import Billing from "../components/Billing/Billing";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/registration" element={<PatientRegistration />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/queue" element={<QueueManagement />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="*" element={
                <div className="bg-white border rounded p-4">
                    <h5 className="text-muted">This page is under construction.</h5>
                </div>
            } />
        </Routes>
    );
};

export default AppRoute;
