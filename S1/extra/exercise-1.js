// const users = [
//     {name: "Abel", years: 43},
//     {name: "Maria", years: 18},
//     {name: "Pedro", years: 14},
//     {name: "Samantha", years: 32},
//     {name: "Raquel", years: 16}
//   ];
  
//   console.log("Usuarios menores de edad:");
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].years < 18) {
//       console.log(users[i].name);
//     }
//   }
  
//   console.log("\nUsuarios mayores de edad:");
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].years >= 18) {
//       console.log(users[i].name);
//     }
//   }
  
  const users = [
    {name: "Abel", years: 43},
    {name: "Maria", years: 18},
    {name: "Pedro", years: 14},
    {name: "Samantha", years: 32},
    {name: "Raquel", years: 16}
  ];
  
  for (let i = 0; i < users.length; i++) {
    const msj = users[i].years < 18
      ? `Usuarios menores de edad: ${users[i].name}`
      : `Usuarios mayores de edad: ${users[i].name}`;
  
    console.log(msj);
  }
  