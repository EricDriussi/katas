import { ColumnWidth } from './ColumnWidth';

export class WrappableText {
	private readonly firstSpace = this.value().indexOf(' ');
	private constructor(private readonly text: string) {}

	static create(text: string) {
		return new WrappableText(text);
	}

	fitsIn(colWidth: ColumnWidth) {
		return this.value().length <= colWidth.value();
	}

	head(colWidth: ColumnWidth) {
		return this.value().substring(0, this.breakPoint(colWidth)).concat('\n');
	}

	tail(colWidth: ColumnWidth) {
		const breakPoint = this.breakPoint(colWidth);
		if (this.canBreakBySpace(colWidth)) {
			return this.value().substring(breakPoint + 1);
		} else {
			return this.value().substring(breakPoint);
		}
	}

	private breakPoint(colWidth: ColumnWidth) {
		return this.canBreakBySpace(colWidth) ? this.firstSpace : colWidth.value();
	}

	private canBreakBySpace(colWidth: ColumnWidth) {
		const hasSpace = this.firstSpace > -1;
		const spaceBeforeColNum = this.firstSpace < colWidth.value();
		return hasSpace && spaceBeforeColNum;
	}

	value(): string {
		return this.text;
	}
}
