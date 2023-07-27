const a: number = 1 + 2
const b: number = a + 3
const c: { apple: number; banana: number } = {
  apple: a,
  banana: b,
}
const d: number = c.apple * 4

console.log(d)

const multiply = (a: number, b: number): number => {
  return a * b
}

multiply(a, b)

const ab: unknown = 30
const cc = ab + 10

if (typeof ab === 'number') {
  const d = ab + 10
  console.log(d)
}

// eslint-disable-next-line prefer-const
let ars = true
const sars = true
// for the next line ts-eslint says: Expected a `const` assertion instead of a literal type annotation. That's because the rule insists in such cases to let TS infer the type
// const eel: true = true

console.log(ars)
console.log(sars)

let testObject: {
  firstName: string
  lastName: string
} = {
  firstName: 'John',
  lastName: 'Barrowman',
}

class Person {
  constructor(
    public firstName: string, // public is shorthand for this.firstName = firstName
    public lastName: string,
  ) {}
}

testObject = new Person('John', 'Smith')

console.log(testObject)

const aObject: {
  b: number
  c?: string
  [key: number]: boolean
} = { b: 1, c: 'stringy', 10: true, 20: false }

console.log(aObject)

type SeatingAssignments = {
  [seatNumber: string]: string
}

const airplaneSeatings: SeatingAssignments = {
  '34D': 'Boris Cherny',
  '34E': 'Bill Gates',
}

console.log(airplaneSeatings)

const user: {
  readonly firstName: string
} = {
  firstName: 'Abby',
}

user.firstName = 'abbey'

console.log(user)

// no bueno:
let danger: {}
danger = {}
danger = { x: 1 }
danger = []
danger = 2
console.log(danger)
const dangeeer: Object = {}
console.log(dangeeer)
