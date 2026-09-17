# Issami Dojo Official Site

# PROJETO: ISSAMI DOJO — WEBSITE OFICIAL

## 1. VISÃO GERAL

Crie do zero um website institucional moderno, profissional, responsivo e pronto para produção para o **Issami Dojo**, uma academia de Karatê de Contato — modalidade **Shinkyokushin**, localizada em Presidente Prudente, São Paulo, Brasil.

Este não deve parecer um template genérico de academia.

O objetivo é criar uma experiência visual forte, moderna e profissional, combinando a tradição e a disciplina das artes marciais japonesas com uma estética contemporânea de alto nível.

O site será publicado e utilizado como website oficial do Issami Dojo.

O principal objetivo do site é:

- Apresentar o Issami Dojo para novos alunos e visitantes.
- Explicar de forma simples o que é o Shinkyokushin.
- Apresentar a história e experiência do dojo.
- Apresentar o Shihan e o Sensei responsáveis.
- Mostrar que os treinamentos são destinados a pessoas de todas as idades.
- Exibir fotos reais dos treinamentos, atletas e dojo.
- Divulgar o Instagram oficial.
- Facilitar o contato através do WhatsApp.
- Informar localização e horários de treinamento.
- Criar uma presença digital profissional e confiável.

O site deve ser uma **Single Page / Landing Page institucional**, com navegação por âncoras e seções bem definidas.

---

# 2. IDENTIDADE DA MARCA

## Nome

**ISSAMI DOJO**

## Modalidade

**Karatê de Contato — Shinkyokushin**

## Localização

**Presidente Prudente — SP, Brasil**

## Endereço

**Rua Dona Militânia, 319 — Presidente Prudente, SP**

Referência:

**Próximo ao Parque do Povo**

## Responsáveis

**Shihan Adilson Issami Nishimura**

**Sensei Victor Ryu Nishimura**

## Experiência

O dojo possui uma trajetória construída através de **mais de 20 anos de experiência no Japão**.

## Público

O treinamento é destinado a:

- Crianças
- Jovens
- Adultos
- Pessoas iniciantes
- Praticantes experientes
- Atletas e competidores

## Instagram

**@issamidojo**

## WhatsApp

**(18) 99656-8231**

---

# 3. DIREÇÃO VISUAL

A identidade visual deve utilizar exclusivamente como base:

- Preto
- Branco
- Vermelho

A estética deve ser:

- Moderna
- Profissional
- Forte
- Minimalista
- Cinematográfica
- Elegante
- Inspirada no universo das artes marciais japonesas
- Com aparência premium

IMPORTANTE:

Não criar um visual excessivamente tradicional, antigo ou carregado de elementos japoneses.

A intenção é representar um dojo tradicional através de uma execução visual moderna.

Evite:

- Gradientes excessivos.
- Muitas cores.
- Excesso de elementos decorativos.
- Visual infantilizado.
- Excesso de símbolos japoneses.
- Efeitos neon.
- Design genérico de academia.
- Stock photos genéricas de pessoas treinando.
- Textos excessivamente longos.

O vermelho deve ser utilizado principalmente como **cor de destaque/CTA**, e não como cor dominante.

---

# 4. DESIGN SYSTEM

Utilize **shadcn/ui como design system principal**.

Sempre que fizer sentido, utilize componentes e padrões do shadcn/ui.

O design system deve ser consistente em todo o projeto.

Utilize:

- Buttons
- Cards
- Dialog
- Sheet
- Navigation
- Accordion quando necessário
- Separator
- Badge
- Tooltip quando necessário
- Toast
- Form components quando necessários

Não transforme o site em uma coleção de componentes padrão do shadcn sem personalidade.

Os componentes devem receber uma identidade visual própria baseada na marca Issami Dojo.

---

# 5. TECNOLOGIA

Construa o projeto utilizando uma stack moderna e adequada para produção.

Preferencialmente:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide Icons

Organize o projeto de forma componentizada e escalável.

Evite colocar todo o site em um único arquivo.

Estruture componentes reutilizáveis.

Exemplo de organização:

src/
+-- components/
¦   +-- Header
¦   +-- Hero
¦   +-- About
¦   +-- Shinkyokushin
¦   +-- Training
¦   +-- Leadership
¦   +-- Gallery
¦   +-- Instagram
¦   +-- Schedule
¦   +-- Location
¦   +-- Contact
¦   +-- Footer
¦
+-- components/ui/
¦
+-- assets/
¦
+-- data/
¦
+-- pages/
¦
+-- lib/
¦
+-- App.tsx

Utilize TypeScript corretamente.

Não utilizar `any` sem necessidade.

---

# 6. RESPONSIVIDADE

O site deve ser **mobile-first**.

Precisa funcionar perfeitamente em:

- Smartphones
- Tablets
- Notebooks
- Desktops
- Monitores grandes

Teste mentalmente os layouts em:

- 360px
- 390px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Não permita:

- Overflow horizontal
- Textos cortados
- Botões pequenos demais
- Imagens deformadas
- Seções quebradas
- Menus sobrepostos

No mobile, o menu principal deve se transformar em um menu compacto/hamburger utilizando shadcn/ui quando apropriado.

---

# 7. HEADER

Crie um header elegante e minimalista.

Desktop:

Logo/Nome:

**ISSAMI DOJO**

Menu:

- Início
- O Dojo
- Shinkyokushin
- Treinamentos
- Galeria
- Contato

Adicionar botão de destaque:

**FALE CONOSCO**

O header pode começar transparente sobre o Hero e, ao fazer scroll, assumir um fundo preto sólido ou semitransparente.

Utilize uma transição suave.

No mobile:

- Logo
- Menu hamburger
- Navegação em Sheet/Drawer

O header deve permanecer acessível durante a navegação.

---

# 8. HERO SECTION

Essa é a principal seção visual do website.

Criar uma hero section de alto impacto.

Utilizar uma fotografia grande relacionada ao Karatê de Contato/Shinkyokushin.

Preferencialmente utilizar imagens reais do Issami Dojo quando forem fornecidas.

Não utilizar imagens falsas como se fossem do dojo.

Se ainda não houver imagens reais disponíveis, criar uma estrutura de placeholder claramente preparada para receber as imagens reais posteriormente.

Visual:

- Tela cheia ou aproximadamente 90–100vh.
- Imagem em destaque.
- Overlay escuro para melhorar legibilidade.
- Pequenos detalhes em vermelho.
- Tipografia grande e forte.

Conteúdo:

**ISSAMI DOJO**

**KARATÊ DE CONTATO**

**SHINKYOKUSHIN**

Headline principal:

**DISCIPLINA. RESPEITO. SUPERAÇÃO.**

Texto curto:

"Mais de 20 anos de experiência no Japão formando praticantes através do Karatê de Contato Shinkyokushin."

CTAs:

**CONHEÇA O DOJO**

**FALE PELO WHATSAPP**

O botão de WhatsApp deve abrir uma conversa no número:

**5518996568231**

Utilizar link apropriado para WhatsApp.

Adicionar um pequeno indicador visual de scroll na parte inferior da Hero.

---

# 9. SEÇÃO "O DOJO"

Criar uma seção institucional elegante.

Título:

**MAIS DE 20 ANOS DE EXPERIÊNCIA**

Texto:

"O Issami Dojo carrega uma trajetória construída através da dedicação às artes marciais e de mais de 20 anos de experiência no Japão."

Complementar o texto sem inventar informações históricas que não foram fornecidas.

Não criar fatos fictícios sobre fundação, campeonatos, títulos, linhagem ou quantidade de alunos.

Adicionar uma composição visual com fotografia.

Criar pequenos indicadores:

**20+**
Anos de experiência no Japão

**SHINKYOKUSHIN**
Karatê de contato

**TODAS AS IDADES**
Do iniciante ao praticante experiente

Utilizar animações sutis de entrada ao fazer scroll.

---

# 10. LIDERANÇA

Criar uma seção apresentando os responsáveis pelo dojo.

Título:

**QUEM ESTÁ À FRENTE**

Criar dois cards ou uma composição editorial.

## SHIHAN ADILSON ISSAMI NISHIMURA

Descrição curta e profissional, sem inventar títulos, campeonatos ou informações não fornecidas.

## SENSEI VICTOR RYU NISHIMURA

Descrição curta e profissional, sem inventar informações não fornecidas.

Reservar espaço para fotografia de cada um.

As imagens devem possuir:

- Aspect ratio consistente.
- Border radius discreto.
- Boa qualidade.
- Tratamento visual elegante.

---

# 11. SEÇÃO SHINKYOKUSHIN

Criar uma seção educativa explicando a modalidade.

Título:

**SHINKYOKUSHIN**

Subtítulo:

**KARATÊ DE CONTATO**

Texto:

"O Shinkyokushin é uma modalidade de Karatê de Contato que valoriza disciplina, técnica, preparação física, respeito e espírito de superação."

Não exagerar nas explicações.

O visitante precisa entender rapidamente o que é a modalidade.

Criar cinco pilares visuais:

**DISCIPLINA**

**TÉCNICA**

**RESPEITO**

**RESISTÊNCIA**

**SUPERAÇÃO**

Utilizar números, tipografia ou pequenos elementos gráficos para criar impacto visual.

---

# 12. TREINAMENTO PARA TODAS AS IDADES

Título:

**UM DOJO. DIFERENTES CAMINHOS.**

Texto:

"Não importa sua idade ou experiência. O treinamento começa onde você está."

Criar cards:

### CRIANÇAS

Desenvolvimento de disciplina, coordenação, respeito e confiança.

### JOVENS

Desenvolvimento físico, técnico e marcial.

### ADULTOS

Condicionamento, técnica, disciplina e evolução pessoal.

### COMPETIDORES

Treinamento voltado ao desenvolvimento técnico e preparação para competição.

Não afirmar que existe uma turma específica de competição se isso não tiver sido confirmado. Apresente como possibilidade/segmento de treinamento apenas se compatível com o dojo.

---

# 13. GALERIA

Criar uma galeria de imagens com estética editorial.

A galeria deve ser visualmente forte.

Não utilizar uma simples grade genérica de cards.

Criar um grid assimétrico ou masonry-like quando apropriado.

Categorias possíveis:

- Treinos
- Atletas
- Dojo
- Competições
- Eventos

Não inventar fotos.

Criar estrutura preparada para inserir imagens reais posteriormente.

Ao clicar em uma imagem:

- Abrir Dialog/Lightbox.
- Mostrar imagem ampliada.
- Permitir fechar facilmente.
- Permitir navegação entre imagens se possível.

Adicionar animações suaves.

As imagens devem utilizar:

`object-fit: cover`

e lazy loading quando apropriado.

---

# 14. INSTAGRAM

Criar seção específica para Instagram.

Título:

**ACOMPANHE O ISSAMI DOJO**

Texto:

"Treinos, eventos, competições e momentos do nosso dojo."

Mostrar:

**@issamidojo**

Criar botão:

**VER NO INSTAGRAM**

O botão deve abrir o Instagram em nova aba.

Não criar posts fictícios.

Se não houver integração real com Instagram, não simular um feed real.

Pode ser criada uma composição de imagens do próprio site com indicação clara de que são imagens da galeria.

Deixar a arquitetura preparada para uma futura integração real com o Instagram.

---

# 15. HORÁRIOS

Criar seção:

**HORÁRIOS DE TREINAMENTO**

Os horários ainda serão definidos posteriormente.

Portanto, não invente horários.

Criar uma estrutura editável e organizada para receber:

- Dia
- Horário
- Turma
- Faixa etária

Utilizar dados centralizados em um arquivo/objeto separado para que os horários possam ser alterados facilmente sem modificar a estrutura visual.

Enquanto os horários reais não forem cadastrados, utilizar um estado visual apropriado como:

**HORÁRIOS EM ATUALIZAÇÃO**

ou placeholders claramente identificados.

Não exibir horários fictícios como se fossem reais.

---

# 16. LOCALIZAÇÃO

Criar uma seção de localização.

Título:

**VENHA CONHECER O ISSAMI DOJO**

Endereço:

**Rua Dona Militânia, 319**
**Presidente Prudente — SP**

Referência:

**Próximo ao Parque do Povo**

Adicionar botão:

**COMO CHEGAR**

O botão deve abrir uma pesquisa/rota no Google Maps.

Não inventar coordenadas.

Se possível, utilizar um mapa incorporado ou uma área visual preparada para integração com mapa.

---

# 17. CONTATO

Criar uma seção de contato com forte CTA.

Título:

**SEU PRIMEIRO PASSO COMEÇA AQUI.**

Texto:

"Entre em contato com o Issami Dojo e saiba mais sobre os treinamentos."

Criar dois CTAs principais:

### WHATSAPP

**(18) 99656-8231**

Link:

`https://wa.me/5518996568231`

### INSTAGRAM

**@issamidojo**

Link:

`https://www.instagram.com/issamidojo/`

Os links devem abrir corretamente.

WhatsApp pode abrir em nova aba.

Instagram deve abrir em nova aba.

---

# 18. BOTÃO FLUTUANTE DE WHATSAPP

Adicionar botão flutuante de WhatsApp.

Ele deve:

- Permanecer acessível durante a navegação.
- Utilizar ícone apropriado.
- Ter tamanho confortável no mobile.
- Possuir tooltip no desktop.
- Não bloquear conteúdo.
- Possuir acessibilidade adequada.

Link:

`https://wa.me/5518996568231`

---

# 19. FOOTER

Criar footer minimalista.

Conteúdo:

**ISSAMI DOJO**

**Karatê de Contato — Shinkyokushin**

Presidente Prudente — SP

Links:

- Instagram
- WhatsApp
- Localização

Adicionar:

**© 2026 Issami Dojo. Todos os direitos reservados.**

Não adicionar links fictícios.

---

# 20. ANIMAÇÕES

As animações devem ser elegantes e discretas.

Utilizar:

- Fade in
- Slide up
- Scale muito sutil
- Parallax apenas quando fizer sentido
- Hover states
- Transições suaves

Evitar:

- Animações exageradas.
- Elementos pulando.
- Efeitos chamativos.
- Animações que prejudiquem performance.
- Excessive scroll hijacking.

Respeitar:

`prefers-reduced-motion`

Usuários que preferem reduzir movimento devem receber uma experiência com animações minimizadas.

---

# 21. EXPERIÊNCIA DE NAVEGAÇÃO

Implementar:

- Smooth scrolling.
- Navegação por âncoras.
- Header sticky.
- Active section state no menu quando possível.
- Botões de CTA claros.
- Voltar ao topo quando necessário.

O usuário deve conseguir chegar rapidamente a:

- Sobre
- Treinamentos
- Galeria
- Instagram
- Contato

---

# 22. SEO

Implementar SEO básico e profissional.

Title:

**Issami Dojo | Karatê de Contato Shinkyokushin em Presidente Prudente**

Meta description:

**Conheça o Issami Dojo, academia de Karatê de Contato Shinkyokushin em Presidente Prudente. Mais de 20 anos de experiência no Japão. Treinamentos para todas as idades.**

Adicionar:

- Meta description
- Open Graph
- Favicon
- Semantic HTML
- H1 único
- H2 nas principais seções
- Alt text nas imagens
- URLs/âncoras amigáveis

Preparar estrutura para dados estruturados Schema.org de uma organização/local de treinamento, mas não inventar informações que não foram fornecidas.

---

# 23. ACESSIBILIDADE

Garantir:

- Contraste adequado.
- Navegação por teclado.
- Focus states visíveis.
- Labels adequados.
- Alt text.
- Botões semanticamente corretos.
- Links identificáveis.
- `aria-label` quando necessário.
- Respeito ao `prefers-reduced-motion`.

Não utilizar texto apenas em imagens.

Não utilizar vermelho como única forma de transmitir informação.

---

# 24. PERFORMANCE

O site deve ser rápido.

Implementar:

- Lazy loading de imagens.
- Imagens responsivas.
- Otimização de assets.
- Evitar JavaScript desnecessário.
- Evitar bibliotecas pesadas sem necessidade.
- Code splitting quando apropriado.
- Evitar vídeos pesados como background, a menos que sejam realmente necessários.

Priorizar boas métricas de:

- LCP
- CLS
- INP

---

# 25. IMAGENS

A fotografia é uma parte fundamental da identidade visual.

Sempre que possível, o site deverá utilizar **fotografias reais do Issami Dojo**.

Não apresentar imagens genéricas de outros dojos como se fossem do Issami Dojo.

Criar placeholders organizados para que posteriormente sejam substituídos facilmente por:

- Fotos do Shihan.
- Fotos do Sensei.
- Fotos dos alunos.
- Fotos dos treinamentos.
- Fotos de competições.
- Fotos do espaço físico.
- Fotos de eventos.

Preparar os componentes para receber imagens através de dados/props.

---

# 26. MICROCOPY

Utilizar textos curtos, fortes e profissionais.

A comunicação deve transmitir:

- Disciplina
- Respeito
- Superação
- Tradição
- Técnica
- Comunidade
- Evolução

Evitar frases motivacionais genéricas de academias.

Evitar linguagem exageradamente agressiva.

O site deve transmitir força sem parecer agressivo.

---

# 27. DESIGN DOS BOTÕES

Primary CTA:

Fundo vermelho.

Texto branco.

Hover com alteração sutil de luminosidade/contraste.

Secondary CTA:

Fundo transparente ou preto.

Border branco ou vermelho.

Texto branco.

Todos os botões devem possuir:

- Área clicável adequada.
- Estados hover.
- Focus.
- Active.
- Disabled quando aplicável.

---

# 28. ÍCONES

Utilizar **Lucide Icons**.

Não utilizar emojis como parte principal da interface.

Utilizar ícones para:

- WhatsApp
- Instagram
- Localização
- Menu
- Arrow
- External link
- Chevron
- Close

Manter consistência visual.

---

# 29. ESTRUTURA DE DADOS

Separar conteúdos editáveis da apresentação.

Criar, por exemplo:

`src/data/siteData.ts`

Centralizar informações como:

- Nome
- Instagram
- WhatsApp
- Endereço
- Responsáveis
- Horários
- Textos
- Imagens

Isso permitirá alterações futuras sem necessidade de modificar componentes.

Especialmente os horários devem ser facilmente editáveis.

---

# 30. SEGURANÇA E BOAS PRÁTICAS

Não colocar:

- API keys diretamente no frontend.
- Secrets.
- Tokens.
- Credenciais.

Não criar integrações externas que exijam credenciais sem necessidade.

Links externos devem utilizar boas práticas.

---

# 31. EXPERIÊNCIA FINAL

O site deve transmitir ao visitante a sensação:

"Este é um dojo sério, tradicional, experiente e profissional."

A primeira impressão precisa ser forte.

A experiência deve seguir aproximadamente esta narrativa:

**IMPACTO**
?
**QUEM SOMOS**
?
**O QUE É SHINKYOKUSHIN**
?
**PARA QUEM É**
?
**QUEM TREINA AQUI**
?
**GALERIA**
?
**INSTAGRAM**
?
**LOCALIZAÇÃO**
?
**CONTATO**

---

# 32. DIREÇÃO ARTÍSTICA

Imagine a experiência visual como um site profissional de uma escola/dojo de artes marciais de alto nível.

Utilizar:

- Grandes fotografias.
- Muito contraste.
- Espaçamento generoso.
- Tipografia forte.
- Preto como base.
- Branco para leitura.
- Vermelho para destaque.
- Linhas finas.
- Divisores discretos.
- Pequenos elementos gráficos inspirados na estética japonesa.

Não transformar o site em um "site temático japonês".

A inspiração japonesa deve ser sofisticada e discreta.

---

# 33. RESPONSIVIDADE DA GALERIA

Desktop:

Criar grid editorial com imagens de diferentes proporções.

Tablet:

Reduzir para 2 colunas quando necessário.

Mobile:

Uma ou duas colunas dependendo da largura.

As imagens nunca devem ficar espremidas.

---

# 34. COMPONENTIZAÇÃO

Criar componentes separados para cada seção principal.

Exemplo:

`Header.tsx`

`Hero.tsx`

`About.tsx`

`Leadership.tsx`

`Shinkyokushin.tsx`

`Training.tsx`

`Gallery.tsx`

`Instagram.tsx`

`Schedule.tsx`

`Location.tsx`

`Contact.tsx`

`Footer.tsx`

`WhatsAppButton.tsx`

Utilizar componentes reutilizáveis e manter responsabilidades bem separadas.

---

# 35. IMPORTANTE — NÃO INVENTAR INFORMAÇÕES

Use exclusivamente as informações fornecidas neste briefing.

Não invente:

- Quantidade de anos de existência do dojo.
- Títulos de campeonatos.
- Campeões.
- Federações.
- Graduações que não foram informadas.
- História específica do dojo.
- Horários.
- Preços.
- Telefones adicionais.
- E-mails.
- Depoimentos.
- Avaliações.
- Endereço diferente.
- Certificações.

Quando uma informação ainda não estiver disponível, crie uma estrutura preparada para receber essa informação futuramente.

---

# 36. PLACEHOLDERS

Para informações ainda não definidas, utilizar placeholders profissionais.

Exemplo:

Horários:

**HORÁRIOS EM ATUALIZAÇÃO**

Imagens:

Utilizar placeholders claramente identificados durante o desenvolvimento, mas estruturar o projeto para substituição fácil pelas fotos reais.

Não deixar conteúdo fictício visível no site final.

---

# 37. QUALIDADE DE CÓDIGO

O código deve ser:

- Limpo.
- Legível.
- Componentizado.
- Tipado.
- Responsivo.
- Manutenível.
- Sem duplicação desnecessária.
- Sem warnings no console.
- Sem erros no build.

Antes de considerar o projeto finalizado:

1. Verifique todos os links.
2. Verifique todos os botões.
3. Verifique a navegação.
4. Verifique o menu mobile.
5. Verifique a responsividade.
6. Verifique acessibilidade.
7. Verifique SEO.
8. Verifique imagens.
9. Verifique console.
10. Verifique build de produção.

---

# 38. RESULTADO ESPERADO

Entregar um website institucional completo para o **ISSAMI DOJO**, com aparência de produção real.

O resultado não deve parecer:

- Template pronto.
- Landing page genérica.
- Site de academia comum.
- Projeto escolar.
- Protótipo incompleto.

Deve parecer um website profissional oficial de um dojo de Karatê de Contato.

A prioridade é:

**1. Identidade visual**
**2. Fotografia**
**3. Experiência do usuário**
**4. Responsividade**
**5. Clareza das informações**
**6. Conversão para WhatsApp/Instagram**
**7. Performance**
**8. Acessibilidade**
**9. SEO**
**10. Manutenibilidade**

---

# 39. REGRA FINAL

Não tente colocar todas as informações possíveis na página.

Prefira:

**menos texto + mais impacto visual + informações claras + CTAs fortes.**

O visitante deve conseguir entender o Issami Dojo em poucos segundos e encontrar facilmente uma forma de entrar em contato.

Construa primeiro a estrutura completa e funcional.

Depois refine:

- Tipografia
- Espaçamentos
- Imagens
- Animações
- Responsividade
- Microinterações
- Acessibilidade
- SEO

O resultado final deve ser moderno, elegante, forte e profissional, mantendo a essência tradicional do Shinkyokushin.

**ISSAMI DOJO**

**KARATÊ DE CONTATO — SHINKYOKUSHIN**

**DISCIPLINA. RESPEITO. SUPERAÇÃO.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a5a1f7d2-d606-446c-b5ca-a97a47f9b4d1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
