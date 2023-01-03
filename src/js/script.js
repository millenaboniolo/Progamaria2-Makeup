function carregarProdutos(){
    var maquiagens = {

        make01: {
            nome:"Skincare",
            imagem: "./src/images/skincare.jpg",
            subtitulo:"Preparação de pele",
            descricao: "Para a pele durar bem, o segredo é o cuidado. Lavar o rosto, hidratar bem e independente de qual tipo de pele seja a sua, a hidratação é fundamental.",
            saibamais:"Dicas de marcas: Sallve, Vichy, La Roche-Posay e Clinique."
            
        },

        make02: {
            nome:"Primer",
            subtitulo:" Pré Maquiagem",
            imagem: "./src/images/primer.jpg",
            descricao: "O primer é um grande aliado para não ter a maquiagem craquelada, pois o primer ajuda na oleosidade, cobrir poros, deixando a pele mais aveludada e uniforme.",
            saibamais:"Bruna Tavares (nacional), da Benefit, Revlon, MAC (gringas)."
        },

        make03: {
            nome:"Face - Base",
            subtitulo:" Líquida, Cremosa, Bastão, Cushion, etc.",
            imagem: "./src/images/base.jpg",
            descricao: "A base é utilizada para uniformizar o tom da pele, suavizar imperfeições e igualar o tom do rosto com o pescoço, além de segurar oleosidade.",
            saibamais:" Bruna Tavares e Natura (nacionais), Dior, Lancôme e MAC (gringas)."
        },

        make04: {
            nome:"Face - Corretivo",
            subtitulo:" Líquido, Cremoso, Bastão, etc.",
            imagem: "./src/images/corretivo.jpg",
            descricao: "O corretivo é usado para corrigir manchas, dar uma cobertura extra na pele, cobrir espinhas, disfarçar as olheiras, além de iluminar ou sombrear o rosto.",
            saibamais:" Bruna Tavares (nacional), MAC, Dior e NARS (gringas)."
        },

        make05: {
            nome:"Face - Pó",
            subtitulo:" Solto ou Compacto",
            imagem: "./src/images/pó.jpg",
            descricao: "O pó serve para selar a maquiagem, aumentando sua duração. O solto é utilizado muitas vezes para baking e o compacto para finalização. ",
            saibamais:" Bruna Tavares (nacional), Givenchy, Too Faced e Laura Mercier (gringas)."
        },

        make06: {
            nome:"Face - Blush",
            subtitulo:"Bronzer - Líquido, Compacto ou Cremoso.",
            imagem: "./src/images/blush.jpg",
            descricao: "O blush é usado para deixar a pele com o rubor natural, o famoso ar de saúde. No lugar do blush também pode-se usar o bronzer, ou ambos em conjunto.",
            saibamais:"Bruna Tavares (nacional), Benefit, MAC (gringas)."
        },

        make07: {
            nome:"Olhos - Sombras",
            subtitulo:" Delinador, Máscara de cílios. ",
            imagem: "./src/images/sombras.jpg",
            descricao: "Sombras podem ser líquidas ou compactas, são usadas para embelezar os olhos, geralmente na companhia do delineador e a máscara de cílios.",
            saibamais:"Bruna Tavares (nacional), Pat McGrath e Too Faced (gringas)."
        },

        make08: {
            nome:"Boca - Batom",
            subtitulo:" Líquido ou Bala - Gloss e Balm.",
            imagem: "./src/images/batom.jpg",
            descricao: "Batons líquidos ou em bala, balms apenas para hidratar ou um bom gloss são usados para trazer beleza aos lábios, existem diversas cores a gosto pessoal.",
            saibamais:"Bruna Tavares (nacional), MAC, Fenty Beauty (gringas)."
        },
    }

    var content = document.getElementById("content");

    
    for (var make in maquiagens){

        content.innerHTML += 
            '<div class="card_item">' 
                + '<div class="card_inner">' 
                    + '<img src="' + maquiagens[make].imagem + '"/>' 
                    + '<div class="role_topic">' + maquiagens[make].nome + '</div> '
                    + '<div class="role_subtopic">'+ maquiagens[make].subtitulo + '</div>' 
                    + '<div class="explanation">' + maquiagens[make].descricao + '</div>' 
                    + '<div class="more_info"> <details>' + maquiagens[make].saibamais +  '</details> </div>' 
                + '</div>' 
            + '</div>';
    }

    

}

carregarProdutos();