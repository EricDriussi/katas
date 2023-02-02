import { ColumnWidth } from './VO/ColumnWidth';
import { WrappableText } from './VO/WrappableText';

export function wordWrap(input: string, colNum: number): string {
	const text = WrappableText.create(input);
	const colWidth = ColumnWidth.create(colNum);

	if (text.fitsIn(colWidth)) {
		return text.value();
	}

	const head = text.head(colWidth);
	const tail = text.tail(colWidth);

	const wrappedText = head.concat(wordWrap(tail, colWidth.value()));
	return wrappedText;
}
