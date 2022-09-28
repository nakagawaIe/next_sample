export const addQuery = (key: string, value: string) => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  params.append(key, value);
  replaceQuery(params);
};

export const deleteQuery = (key: string) => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  params.delete(key);
  replaceQuery(params);
};

const replaceQuery = (params: URLSearchParams) => {
  const { pathname } = window.location;
  const query = params.toString();
  window.history.replaceState(null, '', `${pathname}${query ? '?' : ''}${query}`);
};
