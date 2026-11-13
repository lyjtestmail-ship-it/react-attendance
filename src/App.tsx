// C:\project\react\reducer\src\App.tsx
import { useReducer, useState, useEffect, useMemo } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { loadStudentData, saveStudentData } from "./utils/studentStorage"
import { getStudentStatistics } from "./utils/studentStatistics"
import { getToday } from "./utils/date";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import studentReducer from "./reducers/studentReducer";

// App 컴포넌트
function App() {
    const today = useMemo(() => getToday(), []);

    const [search, setSearch] = useState('');

    const [studentInfo, dispatch] = useReducer(
        studentReducer,
        today,
        loadStudentData
    );

    const [selectedDate, setSelectedDate] = useState(today);
  
    useEffect(()=>{
        saveStudentData(studentInfo.students);
    },[studentInfo]);

    
    const {
        totalCount,
        attendanceCount,
        absenceCount,
        unmarkedCount
    } = getStudentStatistics(
        studentInfo.students,
        selectedDate
    );

  
    const filteredStudents = useMemo(() => {
        return studentInfo.students.filter(
            student => student.name.toLowerCase().includes(
                search.trim().toLowerCase()
            )
        );
    }, [studentInfo.students, search]);

    
    return (
        <div className="app">

            <h2>학생 출석부</h2>
            <input 
                type ="date"
                value ={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
            
            <p className="subtitle">
                우리 반 출석 현황을 관리해 보세요.
            </p>

            {/* 출석 통계 */}
            <Dashboard
                totalCount={totalCount}
                attendanceCount={attendanceCount}
                absenceCount={absenceCount}
                unmarkedCount={unmarkedCount}
            />

            {/* 학생 추가 */}
            <StudentForm
                dispatch={dispatch}
                today = {selectedDate}
                students = {studentInfo.students}
            />

            {/* 학생 검색 */}
            <div className="search-area">

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="학생 이름 검색"
                />

            </div>

            {/* 학생 목록 */}
            <StudentList
                students ={filteredStudents}
                dispatch={dispatch}
                today = {selectedDate}
                totalCount = {totalCount}
            />
        </div>
    );
}

// Git 변경 감지 테스트
// 두 번째 변경 테스트
export default App;
