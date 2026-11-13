// C:\project\react\reducer\src\reducers\studentReducer.ts
import { ACTION_TYPES } from "../constants/ActionTypes";
import type {
    StudentAction,
    StudentState,
} from "../types/Students";



const studentReducer = (
    state: StudentState,
    action: StudentAction
): StudentState => {

    switch (action.type) {

        // 학생 추가
        case ACTION_TYPES.ADD_STUDENT: {

            return {
                students: [
                    ...state.students,
                    {
                        id: Date.now(),
                        name: action.payload.name,
                        attendance:  { [action.payload.today]: true }                        
                    },
                ],
            };

        }

        // 학생 삭제
        case ACTION_TYPES.DELETE_STUDENT: {
            const students = state.students.filter(
                student => student.id !== action.payload.id
            );

            return {
                students,
            };
        }

        // 학생 변경
        case ACTION_TYPES.UPDATE_STUDENT: 
            return {
                ...state,
                students: state.students.map(student => {
                    if (student.id === action.payload.id){
                        if (action.payload.name) {
                            return {
                                ...student,
                                name: action.payload.name
                            };
                        }
                    }
                return student;
            })
        };

        // 출석 상태 변경
        case ACTION_TYPES.MARK_STUDENT:
            return {
                students: state.students.map(student => {
                    if (student.id === action.payload.id) {
                        return {
                            ...student,
                            attendance: {
                                ...student.attendance,
                                [action.payload.today]: !student.attendance[action.payload.today],
                            }
                        };
                    }
                    return student;
                }),
            };

        default:
            return state;
    }
};

export default studentReducer;