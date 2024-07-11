document.addEventListener("DOMContentLoaded", function() {
const images = [
    
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300'
];
const gallery = document.getElementById('gallery');
  
images.forEach((src, index) => {

    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
  
    const img = document.createElement('img');
    img.src = src;
    img.className = 'img-fluid';
    img.setAttribute('data-toggle', 'modal');
    img.setAttribute('data-target', '#imageModal');
    img.setAttribute('data-src', src);
  
    col.appendChild(img);
    gallery.appendChild(col);
});
  
$('#imageModal').on('show.bs.modal', function (event) {

    const img = $(event.relatedTarget);
    const src = img.data('src');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    });
});
