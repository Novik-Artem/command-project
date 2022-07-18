fetch("http://localhost:7000/api/characters")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
