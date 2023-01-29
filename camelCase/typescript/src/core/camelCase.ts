export function camelCase(text: string): string {
	const words = text.split(/[ _-]/);
	return words.map((word) => word.charAt(0).toUpperCase().concat(word.substring(1))).join('');
}
