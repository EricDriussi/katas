export function validate(password: string): boolean {
	return (
		hasMinLen(password) &&
		containsNumber(password) &&
		containsLowerCase(password) &&
		containsUpperCase(password) &&
		containsUnderscore(password)
	);
}

function hasMinLen(pwd: string) {
	return pwd.length >= 6;
}

function containsNumber(pwd: string) {
	return /.*\d.*/.test(pwd);
}

function containsLowerCase(pwd: string) {
	return /.*[a-z].*/.test(pwd);
}

function containsUpperCase(pwd: string) {
	return /.*[A-Z].*/.test(pwd);
}

function containsUnderscore(pwd: string) {
	return pwd.includes('_');
}
