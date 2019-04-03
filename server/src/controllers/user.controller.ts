import { User } from '../entity/User';
import { IAuthUser, ICreateUserInput } from '../interfaces/interfaces';
import { createToken  } from '../services/auth.service';

export class UserController {
  static async createUser(userInput: ICreateUserInput): Promise<User> {
    const user = new User();

    user.firstName = userInput.input.firstName;
    user.lastName = userInput.input.lastName;
    user.email = userInput.input.email;
    user.password = userInput.input.password;

    await user.save();
    console.log("Saved a new user with email: " + user.email);

    const newUser = await this.findByEmail(user.email);

    return newUser;
  }

  static async createUserWithToken(user: ICreateUserInput): Promise<IAuthUser> {
    const userExists: User = await this.findByEmail(user.input.email);
    
    if (userExists) {
      return;
    }

    const newUser: User = await this.createUser(user);
    const token: string = await createToken({ id: newUser.id, email: newUser.email });

    const authUser: IAuthUser = {
      id: newUser.id,
      email: newUser.email,
      token: token
    }

    return authUser;
  }

  static async findByEmail(email: string): Promise<User> {
    return await User.findOne({ where: { email }});
  }
}