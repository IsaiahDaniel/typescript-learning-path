// String
let firstName: string = "stella";

// Number
let age: number = 10;

// Boolean
let isProgrammer: boolean = true;

// Array of strings
let hobbbies: string[] = ["coding", "movies", "reading"];

// Mixed Array
let mixed: (string | number)[] = ["coding", "movies", "reading", 34, 33];

// Object type - Object

// const person: Object = {
//     name: "stella",
//     age: 30,
//     isProgrammer: true,
//     hobbies: ["coding", "movies", "reading"]
// }

// Object type - Interface (custom Type)

// interface PersonType {
//     name: string;
//     age: number;
//     isProgrammer: boolean;
//     hobbies: string[]
// }

// const person: PersonType = {
//     name: "stella",
//     age: 30,
//     isProgrammer: true,
//     hobbies: ["coding", "movies", "reading"]
// }

// Array of objects

interface CommentType {
    _id: number;
    userId: string;
    comment: string;
}

interface BlogType {
    _id: number,
    title: string;
    description: string;
    comments: CommentType[]
}

const blogs: BlogType[] = [
  {
    _id: 1,
    title: "Stellas Blog",
    description: "lorem ipsum",
    comments: [
      { _id: 1, userId: "123874", comment: "Nice Post" },
      { _id: 2, userId: "156832", comment: "WoW" },
      { _id: 3, userId: "123344", comment: "Amazing Post" },
    ],
  },
  {
    _id: 3,
    title: "Stellas Blog 2",
    description: "lorem ipsum",
    comments: [
      { _id: 1, userId: "123874", comment: "Nice Post" },
      { _id: 2, userId: "156832", comment: "WoW" },
      { _id: 3, userId: "123344", comment: "Amazing Post" },
    ],
  },
  {
    _id: 3,
    title: "Stellas Blog 3",
    description: "lorem ipsum",
    comments: [
      { _id: 1, userId: "123874", comment: "Nice Post" },
      { _id: 2, userId: "156832", comment: "WoW" },
      { _id: 3, userId: "123344", comment: "Amazing Post" },
    ],
  },
];

// Object type - Type (custom Type)

type PersonType = {
  name: string;
  age: number;
  isProgrammer: boolean;
  hobbies: string[];
}

const person: PersonType = {
  name: "stella",
  age: 30,
  isProgrammer: true,
  hobbies: ["coding", "movies", "reading"],
};

console.log(person.hobbies);
