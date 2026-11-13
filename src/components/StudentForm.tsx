// C:\project\react\reducer\src\components\StudentForm.tsx
import type { Dispatch }  from "react";
import { memo, useState , useCallback } from 'react';
import type { StudentType, StudentAction } from "../types/Students";
import { ACTION_TYPES } from "../constants/ActionTypes";
import studentValidation from  "../utils/studentValidation";

interface StudentFormProps {
    dispatch: Dispatch<StudentAction>;
    today:string;
    students: StudentType[];
}

function StudentForm ({
    dispatch,
    today,
    students
} : StudentFormProps) {

    const [name, setName] = useState('');

    const handleAddStudent = useCallback(() => {
        const trimmedName = studentValidation(name);
        if ( typeof trimmedName !== 'string' ) {
            alert('학생 이름을 입력해 주세요.');
            return;
        }

        const isDuplicate = students.some(
            student => student.name.trim() === trimmedName
        );

        if (isDuplicate) {
            alert('학생 이름이 중복 되었습니다')
            return ;
        } 

        dispatch({
            type: ACTION_TYPES.ADD_STUDENT,
            payload: { name: trimmedName, today: today },
        });

        setName('');
    //}, [name, today, dispatch]);
    }, [name, today, dispatch, students]); 

    return (
        
        <div className="input-area">

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddStudent();
                        }
                    }}
                    placeholder="학생 이름을 입력하세요"
                />

                <button
                    className="add-button"
                    onClick={handleAddStudent}
                >
                    추가
                </button>

            </div>
    )

}
export default memo(StudentForm)
