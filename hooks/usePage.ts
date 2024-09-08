import { useEffect, useRef, useState } from 'react';
import PageContent from '../services/GrowiAPI/PageContent';
import useHistory from './useHistory';
import useApi from './useApi';

export default function usePage(path: string) {
	const promise = useRef<Promise<any>>();
	const { current, push, undo, redo, reset } = useHistory<PageContent>();
	const { api } = useApi();
	function update(content: string) {
		if (current) {
			push({ ...current, revision: { ...current.revision, body: content } });
		}
	}
	async function save() {
		if (!api || !current) { return; }
		const result = await api.savePageContent(current);
		const resultPage = { ...result.page, revision: result.revision };
		reset(resultPage);
	}
	return { page: current, update, save, undo, redo, reset };
}