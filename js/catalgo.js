const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentImgs = [];
let currentIndex = 0;

document.querySelectorAll('.card button').forEach(button => {
  button.addEventListener('click', () => {
    currentImgs = JSON.parse(button.dataset.imgs);
    currentIndex = 0;
    modal.style.display = 'block';
    modalTitle.textContent = button.dataset.title;
    modalDesc.textContent = button.dataset.desc;
    modalImg.src = currentImgs[currentIndex];
    modalImg.alt = button.dataset.title;
  });
});

closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target == modal) modal.style.display = 'none'; });

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImgs.length) % currentImgs.length;
  modalImg.src = currentImgs[currentIndex];
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImgs.length;
  modalImg.src = currentImgs[currentIndex];
});
