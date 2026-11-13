// C:\project\react\reducer\src\utils\studentValidation.ts
function studentValidation (value: string) : string | null {
	const trimvalue = value.trim();
	
    if (trimvalue === '') return null;

	return trimvalue

}
export default studentValidation