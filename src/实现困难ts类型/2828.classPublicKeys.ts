export {}
// Implement the generic ClassPublicKeys<T> which returns all public keys of a class.

// For example:

// class A {
//   public str: string
//   protected num: number
//   private bool: boolean
//   getNum() {
//     return Math.random()
//   }
// }

// type publicKeys = ClassPublicKeys<A> // 'str' | 'getNum'

class A {
  public str: string
  protected num: number
  private bool: boolean
  getNum() {
    return Math.random()
  }
}
type ClassPublicKeys<T extends object> = keyof T

type t = ClassPublicKeys<A>

