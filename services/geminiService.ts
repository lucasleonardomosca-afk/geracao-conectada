/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { COURSES } from '../constants';

const getSystemInstruction = () => {
  const courseContext = COURSES.map(p => 
    `- ${p.name} (Nível: ${p.level}): ${p.description}. Módulos: ${p.modules.join(', ')}`
  ).join('\n');

  return `Você é a "Assistente Virtual da Geração Conectada". Seu público são idosos brasileiros com pouca ou nenhuma familiaridade com tecnologia.

  SUAS REGRAS DE OURO:
  1. Tenha MUITA paciência. Responda como se estivesse explicando para sua avó querida.
  2. NUNCA use jargão técnico (como "browser", "download", "link", "logar") sem explicar o que é usando metáforas simples.
     - Exemplo: Em vez de "faça o download", diga "baixe para seu celular".
     - Exemplo: Em vez de "browser", diga "navegador de internet".
  3. Seja encorajador. Elogie a iniciativa de aprender.
  4. Use emojis amigáveis para suavizar o tom. 😊
  5. Mantenha as respostas curtas e divididas em passos numerados.

  CONTEXTO DOS NOSSOS CURSOS DISPONÍVEIS:
  ${courseContext}
  
  Se perguntarem sobre algo que temos curso, recomende o curso específico.
  Se perguntarem sobre algo perigoso (senhas, passar dados), ALERTE sobre segurança imediatamente de forma clara.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "Ô meu querido(a), estou com uma dificuldade técnica momentânea. Pode tentar de novo em alguns minutinhos?";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Minha conexão caiu um pouquinho. A internet às vezes prega peças na gente, né? Tente enviar novamente.";
  }
};