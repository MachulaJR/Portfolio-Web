// JavaScript para funcionalidade do modal de certificados
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificado-modal');
    const modalClose = document.getElementById('modal-close-btn');
    const certificadoCards = document.querySelectorAll('.certificado-card');
    
    // Elementos do modal que serão atualizados
    const modalTitulo = document.getElementById('modal-titulo');
    const modalInstituicaoNome = document.getElementById('modal-instituicao-nome');
    const modalDescricaoTexto = document.getElementById('modal-descricao-texto');
    const modalCompetencias = document.getElementById('modal-competencias');
    const modalCertificadoImg = document.getElementById('modal-certificado-img');

    // Dados dos certificados (baseados no HTML fornecido)
    const certificadosData = {
        'ia-pratica': {
            titulo: 'IA na Prática',
            instituicao: 'Daxus',
            descricao: 'Curso completo sobre aplicação prática de Inteligência Artificial em projetos reais. Abordagem hands-on com ferramentas modernas de IA, machine learning e desenvolvimento de soluções inteligentes.',
            competencias: ['Machine Learning', 'Python', 'TensorFlow', 'Análise de Dados', 'IA Aplicada'],
            imagemUrl: 'assets/img/certificados/ia-pratica.jpg', // Substitua pela URL real
            verificacaoUrl: '#'
        },
        'cfc-2025': {
            titulo: 'CFC 2025.1',
            instituicao: 'Exame de Suficiência',
            descricao: 'Certificação em Contabilidade e Finanças Corporativas através do Exame de Suficiência do Conselho Federal de Contabilidade. Comprovação de conhecimentos técnicos e práticos na área contábil.',
            competencias: ['Contabilidade Geral', 'Finanças Corporativas', 'Auditoria', 'Legislação Fiscal', 'Perícia Contábil'],
            imagemUrl: 'assets/img/certificados/cfc-2025.jpg', // Substitua pela URL real
            verificacaoUrl: '#'
        },

        'imersao-dados': {
            titulo: 'Imerão Dados Alura',
            instituicao: 'Alura',
            descricao: 'Participação na Imersão Dados com Python promovida pela Alura, com foco em análise de dados, visualização gráfica e manipulação de conjuntos de dados utilizando bibliotecas como Pandas, Matplotlib e Seaborn.',
            competencias: ['Análise de Dados', 'Programação em Python', 'Visualização Gráfica', 'Tratamento de Dados'],
            imagemUrl: 'assets/img/certificados/imersao-dados.jpg', // Substitua pela URL real
            verificacaoUrl: '#'
        },
        'jornada-python': {
            titulo: 'Jornada Python HashtagTreinamentos',
            instituicao: 'HashtagTreinamentos',
            descricao: 'Participação na Jornada Python promovida pela Hashtag Treinamentos, curso intensivo de 4 dias com foco em projetos práticos de Python, abordando automação, análise de dados, machine learning e aplicações web.',
            competencias: ['Análise de Dados', 'Programação em Python', 'Visualização Gráfica', 'Machine Learning'],
            imagemUrl: 'assets/img/certificados/jornada-python.jpg', // Substitua pela URL real
            verificacaoUrl: '#'            
        },
        'intensivao-bi': {
            titulo: 'Intensivão Power BI HashtagTreinamentos',
            instituicao: 'HashtagTreinamentos',
            descricao: 'Participação no Intensivão de Power BI promovido pela Hashtag Treinamentos, curso intensivo de 4 dias com foco na construção prática de dashboards completos em diferentes áreas (Vendas, Produção, Recursos Humanos e Financeiro), abordando transformação de dados com Power Query, criação de fórmulas DAX e aplicação de recursos visuais avançados.',
            competencias: ['Análise de Dados', 'Power Query', 'DAX', 'Modelagem de Dados', 'Visualização Gráfica', 'Construção de Dashboards'],
            imagemUrl: 'assets/img/certificados/intensivao-bi.jpg', // Substitua pela URL real
            verificacaoUrl: '#'            
        },
        'mapeamento-processos': {
            titulo: 'Mapeamento e Análise de Processos',
            instituicao: 'PUCRS',
            descricao: 'Curso de extensão voltado à gestão por processos, com foco em mapeamento, análise e melhoria contínua de fluxos administrativos e produtivos. Formação pela PUCRS, abordando práticas Lean e ferramentas visuais para otimização de processos e aumento de eficiência organizacional.',
            competencias: ['Gestão por Processos', 'Melhoria de Processos', 'Mapeamento de Fluxo de Valor', 'Análise de Processos'],
            imagemUrl: 'assets/img/certificados/mapeamento-processos.jpg', // Substitua pela URL real
            verificacaoUrl: '#'            
        }         
    };

    // Função para abrir o modal
    function openModal(certificadoId) {
        const data = certificadosData[certificadoId];
        
        if (!data) {
            console.error('Dados do certificado não encontrados:', certificadoId);
            return;
        }

        // Atualizar conteúdo do modal
        if (modalTitulo) modalTitulo.textContent = data.titulo;
        if (modalInstituicaoNome) modalInstituicaoNome.textContent = data.instituicao;
        if (modalDescricaoTexto) modalDescricaoTexto.textContent = data.descricao;

        // Atualizar competências
        if (modalCompetencias) {
            modalCompetencias.innerHTML = '';
            data.competencias.forEach(competencia => {
                const li = document.createElement('li');
                li.textContent = competencia;
                modalCompetencias.appendChild(li);
            });
        }

        // Atualizar imagem do certificado
        if (modalCertificadoImg) {
            modalCertificadoImg.src = data.imagemUrl;
            modalCertificadoImg.alt = `Certificado ${data.titulo}`;
            
            // Mostrar loading
            showImageLoading();
        }

        // Mostrar modal
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevenir scroll da página
            
            // Adicionar classe de animação
            setTimeout(() => {
                modal.style.animation = 'modalFadeIn 0.4s ease-out';
            }, 10);
        }
    }

    // Função para fechar o modal
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaurar scroll da página
        }
    }

    // Função para mostrar loading da imagem
    function showImageLoading() {
        const loadingElement = document.querySelector('.certificado-loading');
        const imgElement = modalCertificadoImg;
        
        if (loadingElement && imgElement) {
            loadingElement.style.display = 'flex';
            loadingElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Carregando certificado...</span>';
            
            // Ocultar imagem temporariamente
            imgElement.style.display = 'none';
        }
    }

    // Função para ocultar loading da imagem
    function hideImageLoading() {
        const loadingElement = document.querySelector('.certificado-loading');
        const imgElement = modalCertificadoImg;
        
        if (loadingElement && imgElement) {
            loadingElement.style.display = 'none';
            imgElement.style.display = 'block';
        }
    }

    // Event listeners para os cards de certificados
    certificadoCards.forEach(card => {
        card.addEventListener('click', function() {
            const certificadoId = this.getAttribute('data-certificado');
            if (certificadoId) {
                openModal(certificadoId);
            }
        });

        // Adicionar efeito de hover personalizado
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        // Efeito de click
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-10px) scale(0.98)';
        });

        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
    });

    // Event listener para fechar o modal
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    // Fechar modal ao clicar no overlay
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Event listeners para carregamento de imagem
    if (modalCertificadoImg) {
        modalCertificadoImg.addEventListener('load', function() {
            hideImageLoading();
        });

        modalCertificadoImg.addEventListener('error', function() {
            const loadingElement = document.querySelector('.certificado-loading');
            if (loadingElement) {
                loadingElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Erro ao carregar certificado</span>';
                loadingElement.style.color = '#ff4757';
            }
        });
    }

    // Animação de entrada dos cards com Intersection Observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.animation = `fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
                }, index * 100); // Delay escalonado
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar observer aos cards
    certificadoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Efeito de partículas no fundo (opcional)
    function createParticles() {
        const section = document.querySelector('.section');
        if (!section) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--primary-color);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.2};
                animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
                z-index: 0;
            `;
            section.appendChild(particle);
        }
    }

    // Adicionar estilo de animação para partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(120deg); }
            66% { transform: translateY(5px) rotate(240deg); }
        }
    `;
    document.head.appendChild(style);

    // Criar partículas
    setTimeout(createParticles, 1000);

    // Smooth scroll para seção (se navegação existir)
    const navLinks = document.querySelectorAll('a[href="#certificacoes"]');

    // Clique nos cards de projeto → abre GitHub
    const projetoCards = document.querySelectorAll('.projeto-card[data-github]');

    projetoCards.forEach(card => {
        card.style.cursor = 'pointer';

        card.addEventListener('click', function () {
            const url = this.getAttribute('data-github');
            if (url && url !== '#') {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    });
});