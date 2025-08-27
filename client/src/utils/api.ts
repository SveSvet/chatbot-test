const BASE_URL = 'http://localhost:8000/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const request = async <T>(
  url: string,
  method: HttpMethod,
  body?: unknown,
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const api = {
  get: <T>(url: string) => request<T>(url, 'GET'),
  post: <T>(url: string, body: unknown) => request<T>(url, 'POST', body),
  put: <T>(url: string, body?: unknown) => request<T>(url, 'PUT', body),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
};
