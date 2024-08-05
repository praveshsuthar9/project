const sliderContainer = document.querySelector(".swiper-wrapper");
const title = document.getElementById("title");

const modalImg = document.querySelector(".modal-img");

const fechData = async () => {
  const data = await fetch(
    `https://repo-tech2edge.github.io/tasks/sample.json`
  );
  const responce = await data.json();
  console.log(responce);

  // responce.series
  const bannerImg = document.getElementsByClassName("hero-banner")[0];
  bannerImg.src = `${responce.series.img}`;

  title.innerText = responce.series.title;

  responce.episodes.forEach((element) => {
    console.log(element);
    let slider = document.createElement("div");
    sliderContainer.appendChild(slider);
    slider.classList.add("swiper-slide");
    slider.innerHTML = `<img src = '${element.img}' alt='${element.img} '  data-bs-toggle="modal"  data-bs-target="#exampleModal" class="img" />
    <div class="play-icon"><i class="fa-regular fa-circle-play"   ></i></div>
    <div class="slider-content" >
    <h6>Episode ${element.id}</h6>
    </div>

    
    
    `;
  });

  const modal = document.querySelectorAll(".img");
  modal.forEach((item) => {
    item.addEventListener("click", () => {
      modalImg.src = item.src;
    });
  });
};

fechData();
