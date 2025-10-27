# Sistema Gerador de Senhas Seguras

Sistema web que gera senhas aleatórias customizáveis com controle de tamanho (6-64 caracteres) e tipos de caracteres (minúsculas, maiúsculas, números, especiais). Inclui análise de força em tempo real com pontuação de 0-100, detecta padrões fracos e oferece ações rápidas como copiar e regenerar.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   └── Home/             # Página inicial
├── core/                  # Componentes e utilitários globais
│   ├── components/       # Componentes reutilizáveis
│   ├── lib/              # Configurações de bibliotecas
│   ├── utils/            # Funções utilitárias
│   └── constants/        # Constantes globais
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Iniciar servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Funcionalidades

- ✅ Geração de senhas aleatórias customizáveis
- ✅ Controle de tamanho (6-64 caracteres)
- ✅ Seleção de tipos de caracteres
- ✅ Análise de força em tempo real (0-100)
- ✅ Detecção de padrões fracos
- ✅ Cópia rápida para área de transferência
- ✅ Regeneração instantânea

## Licença

MIT