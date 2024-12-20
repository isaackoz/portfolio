import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
	return {
		pathname: url.pathname
	};
};
