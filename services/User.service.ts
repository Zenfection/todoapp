import BaseService from './Base.service'
import { Users } from '~/utils/types'

interface LoginData {
  email: string
  password: string
}

export default class UserService extends BaseService {
  constructor() {
    super('/api/users')
  }

  public async getUsers(): Promise<Users[]> {
    return await this.get(``)
  }

  public async getUser(id: string): Promise<Users> {
    return await this.get(`/${id}`)
  }

  public async login(data: LoginData): Promise<any> {
    return await this.post(`/login`, data)
  }

  public async updateUser(id: string, data: Users): Promise<any> {
    return await this.patch(`/${id}`, data)
  }
}
