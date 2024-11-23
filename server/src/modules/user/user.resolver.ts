import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './models/user.model'
import { UserService } from './user.service'
import { EditUserInput } from './dto/editUser.input'

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  user(@Args('id', { type: () => Int }) userId: number): User | null {
    return this.userService.getById(userId)
  }

  @Mutation(() => User, { nullable: true })
  editUser(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('newData') newData: EditUserInput,
  ): User | null {
    return this.userService.edit(userId, newData)
  }
}
