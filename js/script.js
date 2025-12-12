window.addEventListener('scroll', atualizarNavbar);
window.addEventListener('resize', atualizarNavbar);
document.addEventListener('DOMContentLoaded', atualizarNavbar); // Garante que o estilo seja aplicado ao carregar a página

function atualizarNavbar() {
    var containerH = document.getElementById('menuNav');
    var containerH2 = document.getElementById('headerr');
    var containerH3 = document.getElementById('linha-header')
    var larguraTela = window.innerWidth;
    var scrolled = window.scrollY > 1;

    if (larguraTela <= 992) {
        // Para telas menores ou iguais a 992px, fundo sempre preto
        containerH.style.backgroundColor = "#235A7D";
    } else {
        // Para telas maiores que 992px, depende do scroll
        containerH.style.backgroundColor = scrolled ? "#235A7D" : "transparent";
    }

    // Mostrar ou esconder o headerr baseado no scroll (independente da largura)
    containerH2.style.display = scrolled ? 'none' : 'block';
    containerH3.style.display = scrolled ? 'none' : 'block';
}

//depoimentos
const swiper = new Swiper('.swiper-feedback', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-feedback .swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-feedback .swiper-button-next',
        prevEl: '.swiper-feedback .swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});


//case de sucesso

  const carousel = document.querySelector('#carouselExampleCaptions');
  const textoSlide = document.querySelector('#textoSlide');

  carousel.addEventListener('slide.bs.carousel', function (event) {
    const novoTexto = event.relatedTarget.getAttribute('data-text');
    textoSlide.textContent = novoTexto;
  });
