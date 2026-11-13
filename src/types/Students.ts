// C:\project\react\reducer\src\types\Students.ts
import { ACTION_TYPES } from "../constants/ActionTypes";

// id, name , 출석여부로 구성된 student 기초 정보
export interface StudentType {
    id: number;
    name: string;
    attendance: {
        [date : string] : boolean;
    };
}


// Mapped Type을 이용한 선택적 학생 정보
export type StudentOptional = {
    [K in keyof StudentType]? : StudentType[K];
}

// useState에서 관리 하는 학생들 정보
export interface StudentState {
    students: StudentType[];
}

// 학생 정보 수정용 타입
export type StudentUpdate = {
    id: number;
} & Partial<Omit<StudentType, "id">>;

// dispatch에서 action이 발생할때의 event 및 전달할 parameter의 구조
export type StudentAction =
    | {
        type: typeof ACTION_TYPES.ADD_STUDENT;
        payload: { 
            name: string,
            today: string;
         };
    }
    | {
        type: typeof ACTION_TYPES.DELETE_STUDENT;
        payload: { id: number };
    }
    | {
        type: typeof ACTION_TYPES.MARK_STUDENT;
        payload: { 
            id: number,
            today :string
        };
    }
    |
    {
        type: typeof ACTION_TYPES.UPDATE_STUDENT;
        payload: StudentUpdate;
        // payload: {
        //     id: number,
        //     name: string;
        // };

    };
