/**
 * Nortex Digital - Main JavaScript
 * Interações e efeitos de scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Fechar menu mobile se estiver aberto
                const navbarCollapse = document.getElementById('navbarContent');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // 3. Simple Reveal Animation on Scroll
    const revealElements = document.querySelectorAll('.service-card, .section-padding h2, .section-padding p');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            }
        });
    };

    // Inicializar estilos para animação
    revealElements.forEach(el => {
        if (!el.classList.contains('fade-in-up')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        }
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executar uma vez no load

    // 4. Form Submission Mockup
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviando...';
            btn.disabled = true;

            // Simular envio
            setTimeout(() => {
                btn.innerText = 'Mensagem Enviada!';
                btn.classList.replace('btn-primary-green', 'btn-success');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.replace('btn-success', 'btn-primary-green');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
