// 1. Находим нужные элементы на странице
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
const photos = document.querySelectorAll('.gallery img');

// 2. Для каждого фото: по клику открываем окно
photos.forEach(function (photo) {
  photo.addEventListener('click', function () {
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.alt;
    lightbox.classList.add('active');
  });
});

// 3. Функция закрытия окна
function closeLightbox() {
  lightbox.classList.remove('active');
}

// 4. Закрываем по крестику
closeBtn.addEventListener('click', closeLightbox);

// 5. Закрываем по клику на тёмный фон (но не на само фото)
lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// 6. Закрываем клавишей Esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});
