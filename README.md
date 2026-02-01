🚀 Collabora Platform
Marketplace de Talentos Digitais

Operado por Tech Labs (Admin Master)

📌 Visão Geral

Collabora é uma plataforma digital de intermediação de serviços que conecta:

*   Profissionais digitais (freelancers, criadores, desenvolvedores)
*   Empresas clientes (startups, agências, estúdios)

Sob governança da Tech Labs, empresa dona e operadora do sistema.

A plataforma foi projetada para ser:

*   Escalável
*   Multi-tenant
*   Segura
*   Orientada a produto (SaaS)
*   Com separação clara de papéis e permissões

---

🧠 **Conceito Central**

*   Login único
*   Dashboards distintos
*   Rotas segregadas
*   Controle por papéis (roles)

O usuário faz login uma vez.
O sistema decide qual dashboard carregar com base no papel do usuário.

---

🧩 **Papéis do Sistema (Roles)**

`SUPER_ADMIN`     → Tech Labs (dona da plataforma)
`COMPANY`         → Empresa cliente (contrata serviços)
`PROFESSIONAL`    → Profissional / Freelancer (oferece serviços)

---

🔐 **Autenticação**

*   **Login único:** `/login`
*   Email + senha
*   OAuth opcional (Google, LinkedIn, etc.)
*   **Sem cartão de crédito no cadastro**
*   Plano Free por padrão

Após autenticação:
`Login` → `Verificação de role` → `Redirect automático`

---

🧭 **Rotas Oficiais**

| Papel               | Rota             | Descrição                           |
| ------------------- | ---------------- | ----------------------------------- |
| **Tech Labs (Admin)** | `/admin`         | Painel de controle do sistema       |
| **Empresa Cliente**   | `/company`       | Gestão de projetos e talentos       |
| **Profissional**    | `/dashboard`     | Busca e oferta de serviços          |
| **Perfil público**  | `/@username`     | Portfólio do profissional           |

---

🟥 **DASHBOARD — TECH LABS (ADMIN MASTER)**

*   **Função**: Governar, operar e escalar a plataforma Collabora.
*   **Acesso**: Exclusivo, não público, não comercial. Não contrata freelancers.

**Funcionalidades principais**:

*   Gestão global de empresas
*   Gestão global de profissionais
*   Moderação de projetos
*   Controle de planos e pagamentos
*   Métricas e estatísticas
*   Segurança e bloqueios
*   Configurações do sistema

---

🟦 **DASHBOARD — EMPRESA CLIENTE**

*   **Função**: Contratar profissionais e gerenciar projetos.
*   **Acesso**: Privado, não público, associado a uma empresa.

**Funcionalidades**:

*   Criar e gerenciar projetos
*   Receber candidaturas
*   Convidar profissionais
*   Conversar via chat
*   Gerenciar plano
*   Visualizar histórico

**Plano**: Começa em Free com limite de projetos. Upgrade opcional.

---

🟩 **DASHBOARD — PROFISSIONAL**

*   **Função**: Oferecer serviços e encontrar oportunidades.
*   **Acesso**: Privado, com um portfólio público separado.

**Funcionalidades**:

*   Criar perfil profissional
*   Publicar portfólio
*   Buscar projetos
*   Candidatar-se
*   Receber convites
*   Conversar com empresas
*   Gerenciar plano

**Perfil público (`/@username`)**: Indexável, compartilhável e visível para empresas.

---

💳 **Planos e Monetização**

*   Cadastro gratuito.
*   Plano Free funcional, sem cartão no cadastro.
*   Upgrade apenas quando necessário.

**Estratégia**:

*   Valor antes de cobrança.
*   Limites por volume.
*   Conversão natural.

---

🔐 **Segurança e Permissões**

*   Controle por role.
*   Middleware de rota para proteger o acesso.
*   Bloqueio de acesso direto por URL.
*   Logs administrativos.
*   Moderação ativa.

**Exemplo de lógica de acesso**:

```javascript
if (user.role === 'SUPER_ADMIN') redirect('/admin');
if (user.role === 'COMPANY') redirect('/company');
if (user.role === 'PROFESSIONAL') redirect('/dashboard');
```

---

🏗️ **Arquitetura (Resumo)**

*   **Frontend**: Next.js (App Router), React, Tailwind CSS, ShadCN.
*   **Backend**: API central, autenticação (e.g., JWT), controle de permissões.
*   **Banco de Dados (conceito)**: `Users`, `Roles`, `Companies`, `ProfessionalProfiles`, `Projects`, `Applications`, `Messages`, `Plans`, `Subscriptions`, `Logs`.

---

📦 **Princípios de Produto**

*   Clareza de papéis.
*   Zero fricção inicial.
*   Escalabilidade desde o MVP.
*   UX orientada à conversão.
*   Segurança por padrão.

---

🧭 **Status do Projeto**

*   Arquitetura definida.
*   Fluxos mapeados.
*   Dashboards segregados.
*   Pronto para implementação.

---

🏁 **Conclusão**

A Collabora é um marketplace profissional, com:

*   Governança central (Tech Labs)
*   Operação segura
*   Separação real de responsabilidades
*   Base sólida para crescimento

Este README representa a fonte oficial de verdade do sistema.