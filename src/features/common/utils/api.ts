import useSWR from 'swr';

class APIUtilClass {
  /** 型引数はresponseの型 */
  public get<T>(url?: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSWR<T>(url);
  }

  /** 第一型引数はresponseの型 第二型引数はrequestの型 */
  public async post<T, U>(url: string, body?: U) {
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
}

export const APIUtil = new APIUtilClass;
