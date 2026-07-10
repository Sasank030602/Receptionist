export const PATIENTS = [
    {
        name: "John Anderson",
        id: "PAT001",
        bg: "O+",
        phone: "+1-555-0101",
        email: "john.anderson@email.com",
        age: "45 / Male",
        visit: "2025-12-28",
    },
    {
        name: "Sarah Williams",
        id: "PAT002",
        bg: "A+",
        phone: "+1-555-0201",
        email: "sarah.williams@email.com",
        age: "32 / Female",
        visit: "2026-01-02",
    },
    {
        name: "Michael Chen",
        id: "PAT003",
        bg: "B+",
        phone: "+1-555-0301",
        email: "michael.chen@email.com",
        age: "28 / Male",
        visit: "2026-01-03",
    },
    {
        name: "Emily Davis",
        id: "PAT004",
        bg: "AB+",
        phone: "+1-555-0401",
        email: "emily.davis@email.com",
        age: "55 / Female",
        visit: "2025-12-30",
    },
    {
        name: "Robert Taylor",
        id: "PAT005",
        bg: "O-",
        phone: "+1-555-0501",
        email: "robert.taylor@email.com",
        age: "67 / Male",
        visit: "2026-01-01",
    },
];

export const APPOINTMENTS = [
    { id: 1, token: "# 3", name: "John Anderson", pid: "PAT001", doctor: "Dr. James Wilson", time: "09:00", type: "Follow-Up", status: "Waiting" },
    { id: 2, token: "# 1", name: "Sarah Williams", pid: "PAT002", doctor: "Dr. Lisa Brown", time: "10:30", type: "Consultation", status: "Scheduled" },
    { id: 3, token: "# 5", name: "Michael Chen", pid: "PAT003", doctor: "Dr. James Wilson", time: "11:00", type: "Consultation", status: "Scheduled" },
    { id: 4, token: "# -", name: "Emily Davis", pid: "PAT004", doctor: "Dr. Amanda Rodriguez", time: "14:00", type: "Follow-Up", status: "Scheduled" },
    { id: 5, token: "# -", name: "Robert Taylor", pid: "PAT005", doctor: "Dr. Emily Chen", time: "15:30", type: "Consultation", status: "Scheduled" }
];