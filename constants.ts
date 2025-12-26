/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Course, PlaylistItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    name: 'WhatsApp Sem Medo',
    tagline: 'Fale com a família.',
    description: 'Aprenda a enviar áudios, fotos, fazer chamadas de vídeo e, o mais importante: como identificar golpes e usar o aplicativo com segurança total.',
    level: 'Iniciante',
    duration: '2 semanas',
    // Imagem: Celular com app de mensagem/social
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    modules: ['Configurando a foto de perfil', 'Enviando áudios e vídeos', 'Limpando a memória do celular', 'Bloqueando números desconhecidos', 'Chamadas de vídeo em grupo']
  },
  {
    id: 'c2',
    name: 'Banco Seguro no Celular',
    tagline: 'Pague contas sem fila.',
    description: 'Chega de ir na lotérica. Vamos ensinar passo a passo como usar o Pix, pagar boletos e verificar seu saldo sem sair de casa e sem riscos.',
    level: 'Intermediário',
    duration: '3 semanas',
    // Imagem: Pagamento móvel/Cartão
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000',
    modules: ['Instalando o aplicativo do banco', 'Criando senhas fortes e anotando', 'Como fazer um Pix seguro', 'Pagando boletos pelo código de barras', 'Identificando mensagens falsas de banco']
  },
  {
    id: 'c3',
    name: 'Mestre das Fotos',
    tagline: 'Guarde seus momentos.',
    description: 'Aprenda a tirar fotos focadas, iluminadas e bonitas dos netos e viagens. E também como enviar para a família ou postar no Facebook.',
    level: 'Iniciante',
    duration: '1 semana',
    // Imagem: Fotografia/Câmera
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
    modules: ['O que é a câmera frontal e traseira', 'Usando o flash corretamente', 'Apagando fotos ruins', 'Criando álbuns para organizar', 'Enviando várias fotos de uma vez']
  },
  {
    id: 'c4',
    name: 'Uber e 99 Fácil',
    tagline: 'Vá para onde quiser.',
    description: 'Tenha autonomia para ir ao médico, ao shopping ou visitar amigos sem depender de carona. Aprenda a pedir carros com segurança.',
    level: 'Intermediário',
    duration: '1 semana',
    // Imagem: Transporte/Carro
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000',
    modules: ['Baixando o aplicativo', 'Cadastrando cartão ou pagando em dinheiro', 'Conferindo a placa do carro', 'Compartilhando a viagem com filhos', 'Avaliadação do motorista']
  },
  {
    id: 'c5',
    name: 'Compras Online',
    tagline: 'Mercado e farmácia em casa.',
    description: 'Como fazer compras de supermercado, remédios ou presentes pela internet. Aprenda a verificar se o site é confiável antes de comprar.',
    level: 'Avançado',
    duration: '2 semanas',
    // Imagem: E-commerce/Compras
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000',
    modules: ['Identificando o cadeado de segurança', 'Comparando preços', 'Calculando o frete', 'Rastreando sua encomenda', 'Direitos do consumidor online']
  },
  {
    id: 'c6',
    name: 'Memória e Jogos',
    tagline: 'Ginástica para o cérebro.',
    description: 'Divirta-se e exercite a mente com jogos de palavras, paciência e memória. Descubra aplicativos que ajudam na saúde cognitiva.',
    level: 'Iniciante',
    duration: 'Livre',
    // Imagem: Jogos/Lazer
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    modules: ['Palavras Cruzadas Digitais', 'Sudoku para iniciantes', 'Jogos de colorir', 'Duolingo: aprendendo idiomas', 'Aplicativos de meditação']
  }
];

export const PLAYLIST_ITEMS: PlaylistItem[] = [
    {
        id: 1,
        title: "Passo a Passo do Celular",
        subtitle: "Áudio-aulas para ouvir lavando louça",
        type: "Podcast",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        id: 2,
        title: "Dona Maria Aprendeu!",
        subtitle: "Histórias reais de superação",
        type: "Depoimento",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        id: 3,
        title: "Músicas de Antigamente",
        subtitle: "Para relaxar enquanto estuda",
        type: "Música",
        image: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    }
];

export const BRAND_NAME = 'Geração Conectada';
