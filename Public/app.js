let container = document.getElementById("container");

const fetchData = async () => {
  const res = await fetch("/api/v2/tasks");
  const data = await res.json();
  const { products } = data;

  console.log(products);

  const mappedData = products
    .map((product) => {
      return `
      <div>
        <h3>${product.company}</h3>
        <h3>${product.name}</h3>
        <h3>${product.rating}</h3>

      </div>
      
      `;
    })
    .join("");

  container.innerHTML = mappedData;
};

fetchData();
