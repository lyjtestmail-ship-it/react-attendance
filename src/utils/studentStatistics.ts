// C:\project\react\reducer\src\utils\studentStatistics.ts
import type { StudentType } from '../types/Students';

interface StudentStatistics {
    totalCount: number;
    attendanceCount: number;
    absenceCount: number;
    unmarkedCount: number;
}

export function getStudentStatistics(students:StudentType[] , selectedDate: string) :StudentStatistics  {
    // 출석 통계
        const totalCount = students.length;
    
        const attendanceCount = students.filter(
            student => student.attendance[selectedDate] === true
        ).length;
    
        const absenceCount = students.filter(
            student => student.attendance[selectedDate] === false
        ).length;
    
        //const absenceCount = totalCount - attendanceCount;
    
        const unmarkedCount = students.filter(student => student.attendance[selectedDate] === undefined).length

        return {totalCount, attendanceCount,absenceCount, unmarkedCount}

}