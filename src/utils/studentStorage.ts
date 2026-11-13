// C:\project\react\reducer\src\utils\studentStorage.ts

import type {
    StudentState,
    StudentType,
} from '../types/Students';

interface OldStudentType {
    id: number;
    name: string;
    isHere: boolean;
}

function isOldStudentType(value: unknown) : value is OldStudentType {
    if (
        typeof value === 'object' &&
        value !== null && 
        'id' in value &&
        'name' in value &&
        'isHere' in value
    ) {
        if (
            typeof value.id !== 'number' ||
            typeof value.name !== 'string' ||
            typeof value.isHere !== 'boolean'
        )
        {
            return false;
        }
        
        return true;
    } 
    
    return false;
}

function isStudentType(value: unknown): value is StudentType {
    if (
        typeof value === 'object' &&  
        value !== null &&
        'id' in value &&
        'name' in value &&
        'attendance' in value
    ) {
        if (
            typeof value.id !=='number' ||
            typeof value.name !=='string' ||
            typeof value.attendance !== 'object' || 
            value.attendance === null
        ) {
            return false
        }

        const attendanceValues = Object.values(value.attendance);
        const isValidAttendance = attendanceValues.every(
            item => typeof item === 'boolean'
        )
                                  
        if (!isValidAttendance ){
            return false
        }
        return true;
    } 
    return false;
}


export function loadStudentData(today: string) : StudentState {
    console.log("studentReducer 실행됨")
    let savedData: string | null;

    try {
        savedData = localStorage.getItem('students');
    }
    catch (error){
        console.error('학생 데이터를 불러오지 못했습니다.', error);

        return {
            students: []
        };
    }

    if (savedData) {
        // const students: (StudentType | OldStudentType)[] =
            // JSON.parse(savedData);
        //const students : unknown = JSON.parse(savedData)
        
        let students: unknown;
        
        try {
            // JSON.parse(savedData)
            students = JSON.parse(savedData)
        } catch {
            // 오류 메시지 출력
            console.log('데이터를 불러오지 못했습니다.');
            return { 
                students:[]
            };
        }

        if (Array.isArray(students)) {
            
            const isValid = students.every(
                student =>
                    isStudentType(student) ||
                    isOldStudentType(student)
            );

            if (!isValid)
            {
                
                return {
                    students: [],
                };
            }

            return {
                students: students.map((student) => {
                    // if ('attendance' in student) {
                    //     return student;
                    // }
                    if (isOldStudentType(student)){
                        return {
                            id: student.id,
                            name: student.name,
                            attendance: {
                                [today]: student.isHere
                                //[getToday]: student.isHere
                            }
                        };
                    } else
                    {
                        return student;
                    }
                })
            };
                
        };
    }

    console.error('학생 데이터 형식이 올바르지 않습니다.');

    return {
        students: [],
    };
}

export function saveStudentData(students:StudentType[]) : void {
    try {
        localStorage.setItem('students', JSON.stringify(students));
    } catch (error){
        console.error('학생 데이터를 저장하지 못했습니다.', error);
    }
}

