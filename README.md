# 🔥 FireWatch — App Mobile React Native

Aplicativo mobile desenvolvido para auxiliar comunidades em situações de risco ambiental, como incêndios e ondas de calor extremo. Permite o cadastro, visualização e monitoramento de ocorrências, além do acesso a dicas de segurança e endereços de abrigos temporários por cidade.

---

## 📌 Objetivo

Oferecer uma solução prática e acessível para moradores reportarem situações de emergência, consultarem orientações e encontrarem abrigos disponíveis. A proposta foi desenvolvida como parte da Global Solution, integrando as disciplinas de mobile, back-end e banco de dados.

---

## ⚙️ Tecnologias Utilizadas

*   React Native com Expo
    
*   TypeScript
    
*   React Navigation
    
*   Axios
    
*   Integração com API Java (Spring Boot)
    
*   Styled Components e StyleSheet
    
*   Mobile-first design

---

## 📱 Funcionalidades do App

*   Cadastro de ocorrências com envio para API
    
*   Visualização das ocorrências em tempo real
    
*   Lista de abrigos por cidade (dados mockados)
    
*   Dicas de segurança e evacuação
    
*   Tela sobre o aplicativo e orientações
    
*   Navegação fluida com identidade visual personalizada
    
---

## 🔄 Integração com API

O app consome uma API RESTful desenvolvida em Java Spring Boot para a entidade Ocorrência.

### Endpoints principais utilizados:

* GET /api/ocorrencias — Lista todas as ocorrências

* POST /api/ocorrencias — Cadastra nova ocorrência

* GET /api/cidades — Lista as cidades disponíveis

---

## 🧪 Como rodar localmente

Clone o repositório:

git clone [https://github.com/seu-usuario/firewatch-app.git](https://github.com/seu-usuario/firewatch-app.git)cd firewatch-app

Execute o projeto:

npx expo installnpx expo start

Será exibido um QR Code. Escaneie com o app Expo Go ou rode no seu emulador.

---

## 🗂️ Estrutura de Telas

*   HomeScreen: Tela inicial com botões de navegação
    
*   CadastroOcorrenciaScreen: Formulário para registrar ocorrências
    
*   ListaOcorrenciasScreen: Lista de ocorrências com dados da API
    
*   AbrigosScreen: Cidades com abrigos disponíveis (mockados)
    
*   DetalhesAbrigosScreen: Mostra abrigos da cidade selecionada
    
*   DicasScreen: Cartões com orientações e dicas de segurança
    
*   SobreNosScreen: Informações sobre o projeto e como usar
    
---

## 📸 Exemplo de JSON usado na API

Criar Ocorrência:

{  
&nbsp;&nbsp;"cidadeId": 1,  
&nbsp;&nbsp;"sensorId": 2,  
&nbsp;&nbsp;"equipamentoId": 1,  
&nbsp;&nbsp;"funcionarioId": 1,
&nbsp;&nbsp;"latitude": -23.5489,  
&nbsp;&nbsp;"longitude": -46.6388,    
&nbsp;&nbsp;"dataOcorrencia": "2025-06-06",  
}

---

## 🎬 Link do Vídeo Demonstrativo

[link:] (https://youtube.com/shorts/zH9TaHd4DSM?feature=share)

---

## 👥 Equipe

| Nome                                | RM       | GitHub                                |
|-------------------------------------|----------|----------------------------------------|
| Murilo Ribeiro Santos               | RM555109 | [@murilors27](https://github.com/murilors27) |
| Thiago Garcia Tonato                | RM99404  | [@thiago-tonato](https://github.com/thiago-tonato) |
| Ian Madeira Gonçalves da Silva      | RM555502 | [@IanMadeira](https://github.com/IanMadeira) |

**Curso**: Análise e Desenvolvimento de Sistemas  
**Instituição**: FIAP – Faculdade de Informática e Administração Paulista
