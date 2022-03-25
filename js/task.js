const contacts = [
  {
    name: "Peter",
    phoneNumber: "098-54-54-652",
  },
  {
    name: "Tom",
    phoneNumber: "098-76-54-352",
  },
  {
    name: "Ann",
    phoneNumber: "050-711-21-21",
  },
  {
    name: "Victoria",
    phoneNumber: "050-711-11-10",
  },
  {
    name: "Ihor",
    phoneNumber: "052-741-31-20",
  },
  {
    name: "Jonh",
    phoneNumber: "051-743-31-20",
  },
  {
    name: "James",
    phoneNumber: "052-713-21-23",
  },
];

const sortedContacts = [
    {
      name: "Peter",
      phoneNumber: "098-54-54-652",
    },
    {
      name: "Tom",
      phoneNumber: "098-76-54-352",
    },
    {
      name: "Ann",
      phoneNumber: "050-711-21-21",
    },
    {
      name: "Victoria",
      phoneNumber: "050-711-11-10",
    },
    {
      name: "Ihor",
      phoneNumber: "052-741-31-20",
    },
    {
      name: "Jonh",
      phoneNumber: "051-743-31-20",
    },
    {
      name: "James",
      phoneNumber: "052-713-21-23",
    },
  ];

console.log("Масив контактів", contacts);
console.log("Масив відсортованих контактів", sortedContacts.sort((a, b) => a.name.localeCompare(b.name)));
