// C:\project\react\reducer\src\components\StatCard.tsx
interface StatCardProps {
    // ① 제목
    // ② 숫자
    // ③ CSS 클래스 이름
    title : string;
    count : number;   
    className : string;
}

function StatCard({title, count, className}:StatCardProps){
    return(
        <div className={`stat-card ${className}`}>
            <span>{title}</span>
            <strong>{count}</strong>
        </div>
    )
}
export default StatCard