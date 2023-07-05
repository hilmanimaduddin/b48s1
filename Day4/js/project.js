console.log("coba");

let dataBlog = [];

// const cobaAja = (coba) => {};

function addBlog(event) {
  event.preventDefault();

  let project = document.getElementById("input-project").value;
  let startDate = document.getElementById("input-startdate").value;
  let endDate = document.getElementById("input-enddate").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;

  image = URL.createObjectURL(image[0]);

  // checkbox
  let checkbox1 = document.getElementById("checkbox1").checked;
  let checkbox2 = document.getElementById("checkbox2").checked;
  let checkbox3 = document.getElementById("checkbox3").checked;
  let checkbox4 = document.getElementById("checkbox4").checked;

  if (checkbox1 === true) {
    checkbox1 = ` <i class="fa-brands fa-node-js fa-xl" style="color: #000000"></i
    >`;
  } else {
    checkbox1 = ``;
  }

  if (checkbox2 === true) {
    checkbox2 = `<i class="fa-brands fa-react fa-xl" style="color: #000000"></i
    >`;
  } else {
    checkbox2 = ``;
  }

  if (checkbox3 === true) {
    checkbox3 = `<i class="fa-brands fa-jsfiddle fa-xl" style="color: #000000"></i
    >`;
  } else {
    checkbox3 = ``;
  }

  if (checkbox4 === true) {
    checkbox4 = `<i class="fa-brands fa-java fa-xl" style="color: #000000"></i>`;
  } else {
    checkbox4 = ``;
  }

  let blog = {
    project,
    startDate,
    endDate,
    description,
    image,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("box-card").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("box-card").innerHTML += `
    <div class="card">
     <img
      src="${dataBlog[index].image}"
      alt="cat image"
    />
    <div class="title">
      <a href="detail.html">
        <h3>${dataBlog[index].project}</h3>
      </a>
      <p>durasi : 3 bulan</p>
    </div>
    <p>
    ${dataBlog[index].description}
    </p>
    <div class="icon">
      ${dataBlog[index].checkbox1}
      ${dataBlog[index].checkbox2}
      ${dataBlog[index].checkbox3}
      ${dataBlog[index].checkbox4}
    </div>
    <div class="buton">
      <button>edit</button>
      <button>delete</button>
    </div>
  </div>
    `;
  }
}
