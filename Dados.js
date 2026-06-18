// ==========================================
// LINK GLOBAL DO SEU GRUPO DO WHATSAPP
// ==========================================
const LINK_DO_WHATSAPP = "https://chat.whatsapp.com/DR2bfyELyTk1eAcHficjag";

// ==========================================
// 1. LISTA DE PRODUTOS (SEUS 6 PRODUTOS REAIS)
// ==========================================
const LISTA_DE_PRODUTOS = [
    { 
        nome: "Lion Hair (Cabelo, Pele e Unha)", 
        desc: "-Produto exclusiva que nutre, fortalece e acena o crescimento dos cabelos e unhas, além de melhorar a saúde da pele e fortalecer o sistema imunológico. Eficaz, potente e com muitos benefícios para a saúde e beleza!", 
        img: "https://i.ibb.co/2YjDxHhF/IMG-8496-Blog.png",
        linkCompra: "https://app.monetizze.com.br/r/seu-link-aqui-1",
        fraseGrupo: "Antes > R$ 197,00 | Agora : 130,00 "
    },
    { 
        nome: "Lion Sleep*", 
        desc: "*Uma boa noite de sono é o primeiro passo para ter dias com mais energia, foco e bom humor. O Suplemento ideal para relaxamento, sono de qualidade e um bem estar revigorado para o dia seguinte.", 
        img: "https://i.ibb.co/9HXW24qf/Produto-Lion-Sleep-Blog.png",
        linkCompra: "https://app.monetizze.com.br/r/seu-link-aqui-2",
        fraseGrupo: "Antes R$ 157,00 | Agora : R$ 97,00 "
    },
    { 
        nome: "Lion Fit Black", 
        desc: "Seu mais novo aliado fitness. Descubra o power de uma fórmula avançada, criada por aqueles que não aceitam limites. O Lion Fit Black é the aliado perfeito para acelerar o seu processo de queima de gordura, potencializar a sua energia, e redefinir o seu desempenho.", 
        img: "https://i.ibb.co/3yTr0Vkd/IMG-3971-2.png",
        linkCompra: "https://app.monetizze.com.br/r/seu-link-aqui-3",
        fraseGrupo: "Antes R$ 307,00 | Agora R$ 217,00 "
    },
    {
        nome: "Kit Creme Nutritivo e Body Splash Tododia Ameixa e Flor de Baunilha", 
        desc: "Pele mais firme, ultramacia e perfumada com fragância autêntica e atraente. Nutrição Prebiótica que se adapta ao que sua pele precisa a cada dia. Acelera renovação celular para uma pele saudável e iluminada", 
        img: "https://i.ibb.co/1GsgD3N3/Kit-creme-2-prod-Photoroom.png",
        linkCompra: "https://www.minhaloja.natura.com/p/kit-creme-nutritivo-e-body-splash-tododia-ameixa-e-flor-de-baunilha-2-produtos/NATBRA-106019?position=6&listTitle=category+page+list+showcase+-+promocoes&consultoria=vitrinivip&marca=natura",
        fraseGrupo: "Antes R$ 172,80 | Agora R$ 93,80 (-46%)"
    },
    { 
        nome: "Kit Refil Desodorante Corporal Sr. N. (2 unidades)", 
        desc: "Proteçâo e sensaçâo de frescor para o corpo todo. Protege contra os odores da transpiraçâo e mantém a hidrataçâo natural da pele. Produto sem sal de alumínio e embalagem refil mais economica e sustentável. Fragancia cítrica moderada.", 
        img: "https://i.ibb.co/FT6PS11/Whats-App-Image-2026-06-17-at-11-43-52-Photoroom.png",
        linkCompra: "https://www.minhaloja.natura.com/p/kit-refil-desodorante-corporal-sr-n-2-unidades/NATBRA-216462?position=24&listTitle=category+page+list+showcase+-+promocoes&consultoria=vitrinivip",
        fraseGrupo: "Antes R$ 89,80 | Agora R$ 44,90"
    },
    { 
        nome: "Kaiak Aero Masculino 100ml",  
        desc: "Sinta o arrepio do vento do mar. Kaiak Aero  traz o encontro do vento com a água do mar, uma fragância moderna que revela a explosção refrescante das nota tônicas com as potências das notas verdes, como zimbro e ruibarbo, proporciona fresco e bem estar.", 
        img: "https://i.ibb.co/wN0Q008x/Whats-App-Image-2026-06-17-at-14-02-41-Photoroom.png",
        linkCompra: "https://www.minhaloja.natura.com/p/desodorante-colonia-kaiak-aero-masculino-100-ml/NATBRA-108404?position=12&listTitle=category+page+list+showcase+-+promocoes&marca=natura&consultoria=vitrinivip",
        fraseGrupo: "Antes R$ 221,00 | Agora R$ 189,90  *Frete Grátis*"
    }
];

// ==========================================
// 2. MATÉRIAS DE BELEZA (TEXTOS LONGOS RESTAURADOS)
// ==========================================
const MATERIAS_BELEZA = [
    { 
        titulo: "Os Segredos do Cronograma Capilar Eficiente", 
        desc: "Manter os cabelos saudáveis, brilhosos e com crescimento acelerado exige mais do que apenas usar um bom shampoo. O segredo dos grandes salões está no Cronograma Capilar, uma rotina estruturada que intercala três cuidados essenciais: Hidratação, Nutrição e Reconstrução.\n\nCada etapa cumpre um papel vital para a saúde do fio:\n\n1. Hidratação: Devolve a água perdida no dia a dia. É ideal para cabelos ressecados e sem movimento.\n2. Nutrição: Repõe os lipídios e óleos naturais. Se o seu cabelo está com muito frizz, desalinhado e sem brilho, a nutrição com óleos vegetais (como o de argan ou coco) é a salvação.\n3. Reconstrução: Repõe a massa e a queratina. Essencial para cabelos quebradiços, finos ou que passaram por químicas agressivas.\n\nIdentificar a porosidade e a real necessidade do seu fio é o primeiro passo para criar o cronograma perfeito e devolver a vida máxima aos seus cabelos.",
        img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500",
        imgInicio: "",
        imgFim: ""
    },
    { 
        titulo: "Cuidados Noturnos: Transforme sua Pele Enquanto Dorme", 
        desc: "Você sabia que é durante a noite que a nossa pele trabalha dobrado? Enquanto dormimos, o corpo entra em um estado de reparação celular intensa, aumentando a produção de colágeno e a renovação dos tecidos. Por isso, a rotina de skincare noturna é a mais importante para manter o rosto jovem e radiante.\n\nPara aproveitar ao máximo esse momento de ouro, siga estes passos indispensáveis:\n\n• Higienização Profunda: Nunca durma de maquiagem. Acumular resíduos obstrui os poros, causa cravos e acelera o envelhecimento precoce.\n• Tratamento Ativo: O momento é ideal para aplicar séruns potentes, como o Ácido Hialurônico para hidratação profunda ou Vitamina C.\n• Selagem e Nutrição: Finalize com um creme hidratante facial mais denso para criar uma barreira protetora que impede a perda de água durante o sono.\n\nAcordar com uma pele descansada, firme e luminosa é o resultado de pequenos hábitos praticados todas as noites antes de deitar.", 
        img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500",
        imgInicio: "",
        imgFim: ""
    }
];

// ==========================================
// 3. MATÉRIAS DE SAÚDE (TEXTOS LONGOS RESTAURADOS)
// ==========================================
const MATERIAS_SAUDE = [
    { 
        titulo: "Os Benefícios dos Chás Funcionais no Dia a Dia", 
        desc: "O uso de plantas e ervas medicinais em forma de infusão é uma das práticas mais antigas e eficientes do mundo para promover o bem-estar. Os chás funcionais trazem propriedades antioxidantes poderosas que agem diretamente no equilíbrio do nosso organismo.\n\nInserir o chá certo nos momentos estratégicos do seu dia pode mudar completamente a sua disposição:\n\n• Pela Manhã: Chás termogênicos e estimulantes, como o chá verde ou de casca de abacaxi com gengibre, ajudam a acelerar o metabolismo e dão foco.\n• Após as Refeições: Infusões de hortelã ou erva-doce auxiliam na digestão e reduzem aquele desconforto ou inchaço abdominal.\n• À Noite: Ervas relaxantes como o Mulungu, a Camomila e a Erva-Cidreira atuam diretamente no sistema nervoso, diminuindo os níveis de estresse e preparando a mente para um sono profundo.\n\nCuidar da saúde de forma natural, sem depender unicamente de compostos químicos industriais, limpa o organismo e blinda a sua longevidade.", 
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
        imgInicio: "",
        imgFim: ""
    },
    { 
        titulo: "Higiene do Sono: O Melhor Tratamento de Saúde e Beleza", 
        desc: "Dormir bem não é apenas uma necessidade de descanso, é o tratamento estético e de saúde mais barato e eficiente que existe. É durante as fases profundas do sono que o nosso cérebro limpa toxinas e o corpo regula hormônios essenciais, como o cortisol (hormônio do estresse).\n\nSe você acorda cansado ou com a pele sem viço, criar uma rotina de Higiene do Sono vai restabelecer a sua qualidade de vida:\n\n1. Desconecte-se: Desligue as telas do celular e da televisão pelo menos 30 minutos antes de deitar. A luz azul confunde o cérebro e impede a produção da melatonina (o hormônio do sono).\n2. Ambiente Adequado: Mantenha o quarto totalmente escuro, silencioso e com uma temperatura agradável.\n3. Ritual de Relaxamento: Troque as redes sociais por uma leitura leve ou uma música suave. Associar a cama com um ambiente de paz desliga o estado de alerta da mente.\n\nPriorizar o seu descanso noturno se reflete diretamente no seu bom humor, na sua energia diária e na beleza natural da sua pele.", 
        img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500",
        imgInicio: "",
        imgFim: ""
    }
];