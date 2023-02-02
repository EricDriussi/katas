export class ColumnWidth {
	private constructor(private readonly width: number) {}
	static create(width: number) {
		if (width < 0) {
			throw new Error('Negative col num is not allowed');
		}
		return new ColumnWidth(width);
	}

	value(): number {
		return this.width;
	}
}
