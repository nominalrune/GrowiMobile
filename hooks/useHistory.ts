import { useMemo, useRef, useState } from 'react';

export default function useHistory<T>(initialState?: T) {
	const [history, setHistory] = useState<T[]>(initialState !== undefined ? [initialState] : []);
	const [index, setIndex] = useState(-1);
	const current = useMemo(() => history.at(index), [history, index]);
	function push(item: T) {
		if (index === -1) {
			return setHistory((history) => ([...history, item]));
		}
		return setHistory((history) => [...history.toSpliced(history.length + index, Math.abs(index)), item]);
	}
	function undo() {
		setIndex(i => Math.abs(i) < history.length ? i - 1 : i);
	}
	function redo() {
		setIndex(i => i < -1 ? i + 1 : i);
	}
	function reset(initialState?: T) {
		setHistory(initialState !== undefined ? [initialState] : []);
	}
	return { current, push, undo, redo, reset };
}