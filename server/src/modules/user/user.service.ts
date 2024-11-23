import { Injectable } from '@nestjs/common'
import { User } from './models/user.model'
import { EditUserInput } from './dto/editUser.input'
import data from '../../data/users'

@Injectable()
export class UserService {
  getAll(): User[] {
    return data.users
  }

  getById(userId: User['id']): User | null {
    return data.users.find((user) => user.id === userId) || null
  }

  edit(userId: User['id'], newData: EditUserInput): User | null {
    const userIndex = data.users.findIndex((user) => userId === user.id)
    if (userIndex === -1) return null
    data.users[userIndex] = { ...data.users[userIndex], ...newData }
    return data.users[userIndex]
  }
}
