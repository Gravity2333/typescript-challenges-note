const a = "sdhguashdua";
const b: typeof a = a;

class User {
  public name: string = "";
  public age: number = 0;
  constructor() {}

  sayHello() {}
}

// const cobj: User = new User()
// const c = User

// function createUser(ctor:typeof User): User{
//     return new ctor()
// }

// const keyOfUser: keyof User = "sayHello";

// function printUserProperty(
//   user: User,
//   propertyName: keyof User
// ): User[keyof User] {
//   return user[propertyName];
// }

// const p = printUserProperty(new User(), "name");

type Obj = {
  [k in keyof User]: Obj[k];
};

