/*
 * This function converts a comma separated string to a list of unique, trimmed strings.
 */
export function convertStringToTags(entry: string): string[] {
	// split string into chunks
	const chunks = entry.split(/[ ,]+/);

	// check falsy and duplicates and trim string
	return chunks
		.filter((item, index) => Boolean(item) && chunks.indexOf(item) === index)
		.map((item) => item.trim());
}

export function createId(): number {
	return Date.now();
}
