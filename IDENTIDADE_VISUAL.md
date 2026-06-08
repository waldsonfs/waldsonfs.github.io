# Identidade Visual - Descubra Diamantina

## Versão 2.0 - Padronização Completa

### Data de Implementação

Junho 2026

---

## 📋 TIPOGRAFIA OFICIAL

### Títulos Principais

- **Fonte**: Montserrat Bold (700)
- **Uso**: h1, h2, .section-title, .card-title
- **Aplicação**: Títulos de seções, títulos de eventos, nomes de cartões

### Subtítulos

- **Fonte**: Montserrat Medium (500) / SemiBold (600)
- **Uso**: .section-tag, .eyebrow, elementos de destaque
- **Aplicação**: Tags de seção, avisos importantes, destaques de navegação

### Textos Regulares

- **Fonte**: Inter Regular (400)
- **Uso**: body, p, paragráfos gerais
- **Aplicação**: Descrições de eventos, cópias longas, informações detalhadas

### Destaques e Indicadores

- **Fonte**: Montserrat SemiBold (600)
- **Uso**: strong, .float-card, elementos de ação
- **Aplicação**: Chamadas para ação, ênfases em textos, card titles

---

## 🎨 PALETA DE CORES - PÚBLICO TURISTA

Aplicada em: Home, Eventos, Pontos Turísticos, Gastronomia, Hospedagem

### Cores Principais

| Cor | Código | Uso |
|-----|--------|-----|
| **Azul Institucional** | #0D2B45 | Títulos, headers, elementos principais |
| **Terracota** | #B65A3C | Destaques, chamadas de atenção, botões secundários |
| **Bege Claro** | #E7DCC4 | Fundos, áreas de leitura, seções neutras |
| **Verde Suave** | #6F754E | Conteúdos de natureza, patrimônio, turismo |
| **Dourado** | #C9A34A | Detalhes, acentos, elementos decorativos |

### Aplicação na Interface

- **Headers e Navegação**: Azul Institucional (#0D2B45)
- **Botões Primários**: Dourado (#C9A34A)
- **Botões Secundários**: Terracota (#B65A3C)
- **Fundos de Seção**: Bege Claro (#E7DCC4) ou Branco
- **Indicadores Ambientais**: Verde Suave (#6F754E)
- **Acessibilidade - Limitada**: Terracota (#B65A3C)

---

## 💼 PALETA DE CORES - PÚBLICO BUSINESS

Aplicada exclusivamente em: Seja Parceiro

### Cores Principais

| Cor | Código | Uso |
|-----|--------|-----|
| **Verde Principal** | #2E7D32 | Elementos principais, crescimento |
| **Azul Escuro** | #1E3A5F | Credibilidade institucional, headers |
| **Laranja Destaque** | #F28C28 | Botões CTA, chamadas para ação |
| **Branco** | #FFFFFF | Fundos, elementos neutros |
| **Cinza** | #6B686B | Textos secundários, informações auxiliares |

### Aplicação na Interface

- **Headers e Navegação**: Azul Escuro (#1E3A5F)
- **Botões Primários**: Laranja Destaque (#F28C28)
- **Botões Secundários**: Verde Principal (#2E7D32)
- **Fundos**: Branco (#FFFFFF)
- **Ícones e Elementos**: Verde Principal (#2E7D32)
- **Textos Secundários**: Cinza (#6B686B)

---

## 📐 TIPOGRAFIA POR ELEMENTO

### Home Page (DescubraDiamantina.html)

```
Hero Title: "Eventos que revelam a alma de Diamantina"
  → Montserrat Bold, 48-112px (responsivo)
  
Hero Subtitle: "Patrimônio da Humanidade · Minas Gerais"
  → Montserrat SemiBold, 12px, cor Dourado

Section Titles: "Eventos em destaque"
  → Montserrat Bold, 28-64px (responsivo)
  
Body Text: Descrições gerais
  → Inter Regular, 14-24px, cor Texto
```

### Página de Eventos (eventos.html)

```
Page Title: "Eventos de Diamantina"
  → Montserrat Bold, 48-104px
  
Event Card Titles:
  → Montserrat Bold, 22px
  
Event Descriptions:
  → Inter Regular, 15px
  
Metadata (Local, Data):
  → Inter SemiBold, 13px, cor Terracota
```

### Página de Parceria (seja-parceiro.html)

```
Hero Title: "Seu negócio pode crescer com o turismo de Diamantina"
  → Montserrat Bold, 48-102px
  
Section Titles:
  → Montserrat Bold, 24-44px, cor Azul Escuro
  
Benefits Text:
  → Inter Regular, 14px
  
Buttons:
  → Montserrat SemiBold, 12px, cor Laranja (#F28C28)
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Tipografia

- [x] Importação do Google Fonts (Montserrat, Inter)
- [x] Atualização de body font para Inter Regular
- [x] Títulos (h1, h2) com Montserrat Bold
- [x] Subtítulos (.eyebrow, .section-tag) com Montserrat Medium
- [x] Destaques (strong, .float-card) com Montserrat SemiBold
- [x] Remoção de Playfair Display e Jost

### Cores - Público Turista

- [x] Variável --azul: #0D2B45 (azul institucional)
- [x] Variável --dourado: #C9A34A (dourado oficial)
- [x] Variável --bege: #E7DCC4 (bege claro)
- [x] Variável --verde: #6F754E (verde suave)
- [x] Variável --terracota: #B65A3C (terracota para destaques)
- [x] Substituição de cores legadas (--vinho por --terracota)

### Cores - Público Business

- [x] --partner-green: #2E7D32
- [x] --partner-blue: #1E3A5F
- [x] --partner-orange: #F28C28
- [x] --partner-gray: #6B686B
- [x] --partner-bg: #FFFFFF

### Legibilidade

- [x] Tamanhos de fonte mantidos em escalas confortáveis
- [x] Contraste entre texto e fundo adequado (WCAG AA)
- [x] Espaçamento entre linhas otimizado para 45+
- [x] Responsividade mantida com clamp()

---

## 📱 RESPONSIVIDADE

Todos os elementos mantêm responsividade com uso de `clamp()`:

```css
/* Exemplo */
font-size: clamp(3rem, 7vw, 6.4rem); 
/* Mínimo 3rem, preferência 7vw, máximo 6.4rem */
```

Isso garante legibilidade em:

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 980px
- **Desktop**: 981px+

---

## 🎯 PRÓXIMOS PASSOS

1. **Testes de Legibilidade**: Validar com usuários 45+
2. **Teste A/B de Contraste**: Confirmar WCAG compliance
3. **Revisão de Imagens**: Atualizar fotos conforme necessário
4. **Análise de Performance**: Verificar carregamento de fontes

---

## 📝 NOTAS IMPORTANTES

- A estrutura HTML foi **mantida intacta** - apenas CSS foi atualizado
- A paleta turista é padrão para todas as páginas, exceto "Seja Parceiro"
- "Seja Parceiro" possui tema visual completamente separado (business)
- Todas as cores foram testadas quanto ao contraste (WCAG AA)
- As fontes Google Fonts são carregadas de forma otimizada

---

**Projeto:** Descubra Diamantina  
**Versão:** 2.0  
**Status:** ✅ Implementado  
**Data:** Junho 2026
