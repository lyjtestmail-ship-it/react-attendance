// C:\project\react\reducer\src\components\StudentList.tsx
import type { Dispatch } from "react";

import type {
    StudentAction,
    StudentType,
} from "../types/Students";

import Student from "./Student";

interface StudentListProps {
    students: StudentType[];
    dispatch: Dispatch<StudentAction>;
    today: string;
    totalCount: number;
}

function StudentList({
        students,
        dispatch,
        today,
        totalCount
    }: StudentListProps) {
        return (
            <div className="student-list">
                {students.length > 0 ? (
                    students.map((student) => (
                        <Student
                            key={student.id}
                            id={student.id}
                            name={student.name}
                            attendance={student.attendance}
                            dispatch={dispatch}
                            //today = {today}
                            today={today}
                            students={students}
                        />
                    ))

                ) : (

                    <p className="empty-message">
                        {totalCount === 0
                            ? '등록된 학생이 없습니다.'
                            : '검색 결과가 없습니다.'}
                    </p>

                )}
            </div>
        )
    }
export default StudentList;    

