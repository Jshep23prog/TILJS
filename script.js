const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
//selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector('.fact-form')
const factsList = document.querySelector('.facts-list')

//Create Dom elements: Render facts in list
factsList.innerHTML = "";

loadFacts();
//load data from Supabase
async function loadFacts() {
  const res = await fetch('https://srolirbulcwloryayndk.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:

        ,
        authorization:

      },
    }
  );
  const data = await res.json();
  console.log(data)
  // const filteredData = data.filter((fact) => fact.category === "technology");
  createFactsList(data)
}


// createFactsList(res);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
    <a
    class="source"
    href="${fact.source}"
    target="_blank"
    >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color
      }">${fact.category}</span>
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html)
}

//add event listener for Share a fact button toggle form visibility
btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close'
  }
  else {
    form.classList.add('hidden');
    btn.textContent = 'Share a Fact'
  }
})