# Checkpoint – Bi Games (2026-03-09)

## Decisões e Estado Atual
- Direção visual escolhida: **Dark/Nova Era** – topo preto, menu branco.
- Protótipos criados em **React + Vite + Tailwind** (prévia de frontend).
- Arquitetura alvo para produção: **Next.js + Supabase (PostgreSQL)**.
- Páginas de pré-visualização: seleção de design e layout responsivo.

## Implementado
- Header preto + menu branco; dropdowns por plataforma (PlayStation, Xbox, Nintendo, Retrô, Informática).
- Filtro por família (PS5, PS4, Series X|S, Switch, etc.) com **grid dinâmico**.
- Carrossel de **lançamentos de jogos** (temas representativos, sem uso de IP de terceiros).
- Botão flutuante de WhatsApp e seção de serviços/contato.
- Logo: uso de `/bi-logo.png` com fallback para `/bi-logo.svg`/logo gerada.

## Documentos
- PRD: `.trae/documents/prd-bi-games-v1.md`
- Arquitetura: `.trae/documents/technical-architecture-bi-games-v1.md`

## Como rodar a prévia
```bash
npm install
npm run dev
# abrir http://localhost:3000 e escolher "Nova Era Style"
```

## Próximos Passos (planejados)
- Receber planilha/lista de produtos para cadastro (consoles/jogos/preços/imagens).
- Iniciar estrutura Next.js + Supabase (auth, catálogo, carrinho, pedidos).
- Definir política de imagens e criação de banners proprietários.

