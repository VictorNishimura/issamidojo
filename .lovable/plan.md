# Adicionar fotos do Shihan Adilson e do Sensei Victor

## O que será feito
1. Reduzir a resolução das duas fotos enviadas (atualmente 1278x1920 e 853x1280) para ~60% do tamanho original via Python/PIL, mantendo boa qualidade — elas serão exibidas bem menores que isso no site.
2. Publicar as fotos reduzidas como assets do site (CDN) com `lovable-assets`:
   - `Karate_-58.jpg.jpeg` → foto do Shihan Adilson
   - `img_victor.jpeg` → foto do Sensei Victor
3. Atualizar `src/data/siteData.ts`: preencher o campo `photo` de cada líder com a URL do asset correspondente (os arquivos de imagem não ficam no repositório).
4. O componente `Leadership.tsx` já exibe a foto automaticamente quando `photo` existe — nenhum componente precisa mudar.
5. Verificar no preview que as duas fotos aparecem nas seções "Quem está à frente".

## Não muda
- Textos, títulos e descrições dos dois perfis permanecem iguais.
- Galeria e demais seções não são alteradas.
