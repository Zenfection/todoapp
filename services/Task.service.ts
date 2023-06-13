import BaseService from './Base.service'
import { Tasks } from '~/utils/types'

export default class UserService extends BaseService {
  constructor() {
    super('/api/tasks')
  }

  public async getTasks(): Promise<Tasks[]> {
    return await this.get(``)
  }

  public async getTask(id: string): Promise<Tasks> {
    return await this.get(`/${id}`)
  }

  public updateTask(id: string, data: Tasks): Promise<any> {
    return this.patch(`/${id}`, data)
  }

  public async addTask(data: Tasks): Promise<any> {
    return await this.post(`/add`, data)
  }

  public async removeTask(id: string): Promise<any> {
    return await this.delete(`/${id}`)
  }
}
