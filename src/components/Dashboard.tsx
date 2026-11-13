// C:\project\react\reducer\src\components\Dashboard.tsx
import StatCard from "./StatCard";

interface DashboardProps {
    totalCount: number;
    attendanceCount: number;
    absenceCount: number;
    unmarkedCount: number;
}

function Dashboard({
    totalCount,
    attendanceCount,
    absenceCount,
    unmarkedCount
}: DashboardProps) {
    return (
        <div className="dashboard">
            <StatCard
                title ="전체 학생"
                count ={totalCount}
                className = "total"
            />
            <StatCard
                title ="출석"
                count ={attendanceCount}
                className = "attendance"
            />
            <StatCard
                title ="결석"
                count ={absenceCount}
                className = "absence"
            />
            <StatCard
                title ="미확인"
                count ={unmarkedCount}
                className = "unmarked"
            />
        </div>
    );
}

export default Dashboard;