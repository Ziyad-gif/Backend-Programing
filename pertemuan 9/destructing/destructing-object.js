// Membuat object literal
const user = {
    name: "Abdul Fattah Ismail",
    age: 20,
    major: "Informatika",
  };
  
  /**
   * Object Destructing.
   * Destructing object berdasarkan key.
   */
  const { name, age, major } = user;
  
  console.log(name, age, major);