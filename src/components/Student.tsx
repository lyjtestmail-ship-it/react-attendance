// C:\project\react\reducer\src\components\Student.tsx
// student 컴포넌트
import { memo, useState, type Dispatch } from 'react';
import { ACTION_TYPES } from '../constants/ActionTypes';
import type { StudentType, StudentAction } from '../types/Students';
import studentValidation from  "../utils/studentValidation";


// 학생들 정보에 dispatch , today 정보
interface StudentProps extends StudentType {
    dispatch: Dispatch<StudentAction>;
    today:string;
    students: StudentType[];
}


// 학생들 정보에 dispatch , today 정보
function Student({ id, name, attendance, dispatch , today, students}: StudentProps) {
    const isHere = attendance[today];

    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(name);

    const handleDelete = () => {
        dispatch({
            type: ACTION_TYPES.DELETE_STUDENT,
            payload: { id }
        });
    }

    const handleMarkAttendance = () => {
        dispatch({
            type: ACTION_TYPES.MARK_STUDENT,
            payload: { id ,  today }
        });
    }

    return (
        <div className="student-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <button
                        onClick={() => {

                            const trimEditName = studentValidation(editName)

                            if (typeof trimEditName !== 'string' )
                            {
                                alert('학생 이름을 입력해 주세요.');
                                return;
                            }

                            const isDuplicate = students.some(
                                student => 
                                    student.id !== id &&
                                    student.name.trim() === trimEditName
                            )

                            if (isDuplicate){
                                 alert('학생 이름이 중복 되었습니다')
                                return ;
                            }

                            dispatch({
                                type: ACTION_TYPES.UPDATE_STUDENT,
                                payload: {
                                    id,
                                    name: trimEditName
                                }
                            });

                            setIsEditing(false);
                        }}
                    >
                        수정
                    </button>
                    <button 
                        onClick={()=>{
                            setEditName(name);
                            setIsEditing(false);
                        }}                        
                    >
                        취소
                    </button>
                </>
            ) : (
                <>
                    <span className="student-name">{name}</span>

                    <button onClick={() => setIsEditing(true)}>
                        수정
                    </button>
                </>
            )}
               
            <div className="student-buttons">
                <button
                    className={isHere ? 'attendance-button' : 'absence-button'}
                    onClick = {handleMarkAttendance}
                >
                    {isHere ? '출석' : '결석'}
                </button>

                <button
                    className="delete-button"
                    onClick={handleDelete}
                >
                    삭제
                </button>
            </div>
        </div>
    );
}

export default memo(Student);
