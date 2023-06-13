class BaseService {
  constructor(protected baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private getHeaders() {
    // const user = window.localStorage.getItem('user') ?? null
    // const token = user ? JSON.parse(user)?.value?.token : null
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      //   Authorization: `Bearer ${token}`,
    }
  }

  protected async get<T>(url: string): Promise<T> {
    const { data } = await useFetch<T>(`${this.baseUrl}${url}`, {
      headers: this.getHeaders(),
    })
    return data.value as T
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    const { data: responseData } = await useFetch(`${this.baseUrl}${url}`, {
      method: 'post',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    })
    return responseData as T
  }

  protected async patch<T>(url: string, data: any): Promise<T> {
    const { data: responseData } = await useFetch(`${this.baseUrl}${url}`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    })
    return responseData as T
  }

  protected async delete<T>(url: string): Promise<T> {
    const { data: responseData } = await useFetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    })
    return responseData as T
  }
}

export default BaseService
