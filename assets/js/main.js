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

    // 4. Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const email = document.getElementById('form-email');
        const reply = document.getElementById('replyto');
        const status = document.getElementById('form-status');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : '';

        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (email && reply) {
                reply.value = email.value || '';
            }

            if (status) {
                status.textContent = 'Enviando...';
                status.style.color = '#d7e3dd';
            }

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';
            }

            try {
                const formData = new FormData(contactForm);
                const payload = Object.fromEntries(formData.entries());
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                const result = await response.json();

                if (response.ok) {
                    contactForm.reset();
                    if (status) {
                        status.textContent = 'Mensagem enviada com sucesso. Em breve entraremos em contato.';
                        status.style.color = '#6ee7b7';
                    }
                } else if (status) {
                    status.textContent = result.message || 'Nao foi possivel enviar agora. Tente novamente.';
                    status.style.color = '#fca5a5';
                }
            } catch (error) {
                if (status) {
                    status.textContent = 'Nao foi possivel enviar agora. Verifique sua conexao e tente novamente.';
                    status.style.color = '#fca5a5';
                }
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
            }
        });
    }
});
