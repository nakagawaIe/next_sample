export const fetcher = (url: string) => fetch(url).then(r => {
  console.log(`fetched ${url}`);
  return r.json();
});

/** 第一型引数はresponseの型 第二型引数はrequestの型 */
export async function post<T, U>(url: string, body?: U) {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data: T = await response.json();
  return data;
}
