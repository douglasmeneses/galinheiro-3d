# Projeto para 12 poedeiras — os dois canis + solário fechado

Feito em 17/11/2026 a partir de `CONTEXTO-E-DECISOES.md`, `PROJETO-V1-E-V2.md`, `GUIA-CRIACAO-E-GALINHEIRO.md`, `PESQUISA-YOUTUBE-POEDEIRAS-BAIXO-CUSTO.md` e das 4 fotos dos canis (16/11, noite).
Substitui a `v1-a` (4–6 aves, só Canil 1). Aproveita a ideia da `v2`: 3,00 m de largura e mureta.
**Revisão de 18/11:** solário em L — terra com 2–3 m de profundidade e um braço de 1 m à direita dos canis, do muro do fundo até a frente.
Modelo 3D: `galinheiro-12.html` (`python3 -m http.server 8765` nesta pasta → `http://localhost:8765/galinheiro-12.html`). O botão "Noite" põe as 12 aves nos poleiros. O 3D já mostra o L; os botões "Terra 2 m" e "Terra 3 m" trocam a profundidade.

---

## 1. O que as fotos mostram

| Foto | O que se vê | O que muda no projeto |
|---|---|---|
| Interior de um canil (cantos) | Manchas verdes descendo do teto pelas paredes; viga de madeira escura e com aspecto podre segurando o fibrocimento | Antes de tudo: achar a infiltração no encontro telha/muro, vedar e trocar a madeira podre. Depois escovar com água sanitária e passar cal |
| Canil com a grade aberta | Piso cimentado, degrau na soleira, pé-direito baixo | Piso já atende (cimento, acima do patamar). Galinha sobe o degrau sozinha |
| Patamar em frente à grade | Grade com vãos largos entre as barras; bolinhas escuras espalhadas no piso | A grade sozinha não segura rato. **Não dá para saber pela foto se as bolinhas são fezes de rato ou sementes**: se forem fezes, desratizar antes das aves chegarem |
| Vista geral | Canil 1 vazio, Canil 2 cheio de baldes de tinta e ferramentas; canos, cordas e tralha em cima do telhado; bananeira à esquerda, árvore à direita; muita folha seca no chão | Esvaziar o Canil 2 e o telhado (a tralha vira esconderijo de rato e escorpião). A folha seca do quintal vira cama de graça no solário |

---

## 2. Dimensionamento para 12 aves

| Item | Regra (fonte) | Para 12 aves | No projeto |
|---|---|---|---|
| Abrigo (dormir/botar) | 5–7 aves/m² quando passam o dia fora (`Recanto do Bambu, MGjqDaKYQ1U`, min. 6) | 1,7–2,4 m² | **2 canis = 2,6 m²** ✔ (1 canil = 1,3 m² abriga no máximo 9) |
| Área de dia | 1 ave para cada 4 m² de piquete (`MGjqDaKYQ1U`, min. 6) | 48 m² (ideal) | **solário em L: 13 m² (terra 2 m) a 17 m² (terra 3 m)** — abaixo do ideal, 2–2,5× o projeto anterior (6,6 m²) |
| Poleiro | 15 cm por ave (`MGjqDaKYQ1U`) | 1,80 m | **2 × 1,30 m = 2,60 m** ✔ |
| Ninho | 1 para cada 3–4 (`MGjqDaKYQ1U`) / 4–5 (`GUIA`) | 3–4 | **3 ninhos** |
| Ração | ~120 g/ave/dia (`E7paYev-HyA`) | 1,44 kg/dia ≈ **43 kg/mês** | comedouro de ~1 semana |
| Água | ~2× o peso da ração (`GUIA`) | ≈ 3 L/dia | 2 bebedouros de 5 L ou copinhos |

Aumentar o solário **não libera o Canil 2**: o limite das 12 aves é o abrigo coberto da noite, não a área de dia. O L serve para elas terem mais espaço de dia (menos bicagem, cama menos suja).

---

## 3. Planta (terra de 3 m; com 2 m, tudo à frente encurta 1 m)

```
                     MURO DO FUNDO
   ┌───────────────┬──┬───────────────┬──┬──────────┐
   │ CANIL 1       │p │ CANIL 2       │p │ BRAÇO DO │
   │ dormitório    │a │ 3 ninhos +    │a │ L  1,00 m│  canis: 1,00 m
   │ 2 poleiros    │r │ comedouro +   │r │ (terra)  │
   ├──[grade+tela]─┴──┴─[grade+tela]──┴──┤          │
 M │ PATAMAR CIMENTADO  3,00 × 1,00 m    │          │  patamar: 1,00 m
 U │ banho de terra                      │          │
 R │ - - - - - - - - - - - - - - - - - - │          │
 O │                                               │
   │ TERRA 3,00 m de profundidade (4,00 m de largura│  terra: 2–3 m
 V │ somando o braço), cama de folha seca          │
 I │ sombrite 50% em ~1/3                     PORTA │
 Z └═══════════ MURETA 35 cm + TELA 1,50 m ════════┘
          3,00 m (canis + patamar)    + 1,00 m (braço)
```

Teto de tela a 1,85 m sobre tudo o que não está sob o telhado atual.

- **Canil 1 = dormitório.** Todas dormem aqui. Sem ninho e sem comida.
- **Canil 2 = ninhos + comedouro + água.** É escuro (bom para ninho) e coberto, então a ração não molha. Sem poleiro, para elas não dormirem nos ninhos.
- **Solário = onde passam o dia**, fechado dos lados e por cima: separa dos coelhos, gatos, timbus e gaviões.

---

## 4. Construção

### Fase 0 — limpeza e reparos (antes de comprar ave)
1. Tirar a tralha do Canil 2 e de cima do telhado.
2. Achar por onde a água escorre (as manchas verdes começam no topo da parede, perto da viga): vedar o encontro telha/muro e trocar a madeira podre.
3. **Telha:** não verifiquei se o fibrocimento é antigo, com amianto (a marcação está na face de baixo, foto 1). Enquanto não souber, não furar, serrar nem lixar a telha.
4. Escovar paredes e piso dos dois canis com água sanitária e enxaguar. Depois de seco, **2 demãos de cal** e esperar ~24 h antes de pôr ave (`CONTEXTO`, regra da cal).
5. Bolinhas escuras no piso: se forem de rato, desratizar e só soltar as aves depois de recolher a isca. Tirar a vasilha de comida de pet que fica no patamar.

### Fase 1 — solário em L (é a fase mais cara)
| Item | Terra de 2 m | Terra de 3 m | Observação |
|---|---|---|---|
| Área do solário (patamar + terra + braço) | 13 m² | 17 m² | |
| Mureta de tijolo 35 cm (frente 4,00 m + lateral do braço) | 8 m | 9 m | 2 fiadas de tijolo de 19 cm, ~10 tijolos/m → **80–90 tijolos**; dreno PVC 40 mm no ponto mais baixo |
| Estacas de eucalipto tratado 2,50 m (a cada ~1,5 m) | 9 | 11 | chumbadas na mureta, 1,50 m livres acima; inclui 2–3 no lado esquerdo, junto ao muro do vizinho (1,25 m não segura o teto) |
| Tela hexagonal 1" × 1,50 m (laterais + teto + faixas sob o beiral) | ~20 m | ~25 m | conta minha, com ~10% de sobra |
| Fios de arame liso para segurar o teto (a cada ~0,75 m) | ~20 m | ~25 m | com 4 m de vão, sarrafo envergaria; o arame vai das estacas do lado esquerdo até as da direita, esticado com catraca (o muro do vizinho tem só 1,25 m, não dá para prender o teto nele) (como no `EDafp7ixnjU`) |

1. **Mureta** na frente (4,00 m) e na lateral externa do braço. A lateral esquerda é o muro do vizinho; o fundo são os canis e o muro do fundo. *Não verifiquei se o muro do fundo continua atrás do braço do L*: se não continuar, o braço precisa de mureta e tela também no fundo.
2. **Estacas** a cada ~1,5 m na frente e na lateral do braço, mais uma no batente da porta.
3. **Tela** de 1,50 m sobre a mureta e no teto, apoiada nos fios de arame. Fechar com tela as duas frestas entre o telhado atual e o teto novo: a faixa da frente do beiral (3 m) e a lateral do Canil 2 virada para o braço (~1,35 m).
4. **Porta de 0,80 m** na lateral do braço, perto da frente, sobre a mureta, com ferrolho e cadeado ou mola (`GUIA`: timbu abre gancho simples).
5. **Sombrite 50%** sobre ~1/3 da terra. Não dá para cobrir o patamar com telha nova: o beiral está a ~1,45–1,50 m e um telhado na frente escorreria a água para dentro dos canis.

### Fase 2 — interior
**Canil 1 (dormitório):**
- 2 poleiros de 1,30 m, na mesma altura (**45 cm**), a 30 cm e a 65 cm da parede do fundo. Madeira de 4–5 cm com canto arredondado, ou bambu lixado (`MGjqDaKYQ1U`). Apoiados em suportes de madeira fixos nas paredes laterais, **soltos para tirar e limpar**.
- Cama de maravalha grossa de 5–10 cm.
- Tela de **malha 1/2"** cobrindo a grade (rato passa entre as barras) e lona na metade de baixo, contra o vento leste/sudeste (decisão já tomada na `v1-a`). A metade de cima fica aberta para sair o ar quente: o fibrocimento esquenta (`MGjqDaKYQ1U`).
- A grade é fechada à noite e aberta de manhã.

**Canil 2 (ninhos e comida):**
- **3 ninhos de 35 × 35 × 35 cm** lado a lado no fundo (ocupam 1,05 m dos 1,30 m), a ~30 cm do chão, com teto inclinado para não virar poleiro e borda frontal de 10 cm (`Granja Mascarenhas, 2qv0i4zp6o8`). Dá para fazer com as tábuas boas do telhado (`CONTEXTO` §4). Ovo falso em cada um.
- Comedouro de **galão de 20 L + cano de 100 mm** com "X" de arame (`Recanto do Bambu, dy-z9g4l6wk`), sobre tijolo. Pela minha conta, ~12 kg de ração por enchida dura uma semana.
- **2 bebedouros de 5 L** sobre tijolo, longe dos ninhos. Depois, se quiser, trocar pelo sistema de copinho com balde de 20 L pendurado por fora do canil (`dy-z9g4l6wk`).
- A mesma tela de 1/2" na grade. Esta grade fica aberta de dia e fechada à noite.

**Solário:**
- Caixa de banho de terra com areia e cinza, no patamar (`GUIA`, contra piolho e ácaro).
- Folha seca do quintal sobre a terra, como cama profunda (`Justin Rhodes`, `Ben Strong`), revirada toda semana.
- Pote de calcário calcítico ou farinha de ostra à vontade (`GUIA`).

### Fase 3 — luz (opcional)
João Pessoa fica a ~7° de latitude, então o dia tem cerca de 12 h o ano todo, abaixo das 14–16 h que os vídeos e o `GUIA` pedem para a postura. Se a postura ficar baixa, um LED fraco com timer no Canil 1, de madrugada, completa as horas. Precisa de ponto de luz no local (não verifiquei se existe).

---

## 5. As aves

| Opção | Prós | Contras |
|---|---|---|
| **Franga de ~30 dias** (R$ 12–15 cada, preço do `PROJETO-V1-E-V2`) | Barata; acostuma com o lugar | ~3,5 meses comendo antes de botar: 7 kg de ração por ave (`E7paYev-HyA`) = **84 kg**; confirmar com o vendedor quais vacinas já tomou |
| **Franga de ~16 semanas, vacinada** (`GUIA`) | Bota em poucas semanas; vacinas feitas | Mais cara (não cotei) |

- Linhagem poedeira comercial (Lohmann, Isa Brown) ou Embrapa 051 (`GUIA`); a caipira comum bota menos e come mais (`FITk6bBQbVI`).
- **Só fêmeas.** Sem galo, menos barulho, e o ovo sai igual (`GUIA`).
- Chegada: as 12 juntas, ração do vendedor por 7 dias com transição para a nova (`Cida Zootecnista, e3gPcUIfkxI`). Nas primeiras noites, conferir se todas acharam o poleiro do Canil 1.

---

## 6. Custos que dá para estimar

| Item | Conta | Valor | Fonte do preço |
|---|---|---|---|
| 12 frangas de 30 dias | 12 × R$ 12–15 | R$ 144–180 | `PROJETO-V1-E-V2` |
| Ração até a postura (franga de 30 dias) | 84 kg × R$ 2,50–3,00 | R$ 210–252 | `FITk6bBQbVI` |
| Ração em postura | 43 kg × R$ 2,50 | **~R$ 108/mês** | `FITk6bBQbVI` |
| Bebedouros de 5 L | 2 × R$ 15 | R$ 30 | `CupdVumDkew` |
| Ninhos | madeira reaproveitada | ~R$ 6 | `2qv0i4zp6o8` |
| Ovos esperados | 12 × 80% × 30 | **~288 ovos/mês (24 dúzias)** | taxa usada em `FITk6bBQbVI` |

**Ainda não cotado (lista para levar à loja, terra de 2–3 m):** 80–90 tijolos e cimento/areia da mureta, 9–11 estacas de eucalipto tratado de 2,50 m, 1 rolo de tela hexagonal galvanizada de 1" × 1,50 × 50 m, 1 kg de arame liso galvanizado 14 BWG (~37 m) + 1 catraca por fio, 2 m de tela malha 1/2" para as grades, sarrafos para a porta, 1 tubo de PVC 40 mm, sombrite 50% de ~4 × 1,5 m, galão de 20 L e cano de 100 mm, dobradiças, ferrolho, cadeado, cal (10 kg), maravalha.
A tela costuma ser o item mais caro: no `29XHiHFYiP0` saiu a ~R$ 8/m (só referência), o que daria R$ 160–200 para 20–25 m.

**24 dúzias por mês é mais do que uma casa consome.** Vale decidir antes o que fazer com a sobra (dar, vender, trocar). Isso pode pagar a ração.

---

## 7. Rotina com 12 aves
- **Todo dia:** abrir as grades de manhã e fechar ao anoitecer; água nova; recolher os ovos 1–2 vezes.
- **Postura é de dia**, concentrada nas primeiras horas da manhã; o ciclo de cada ovo passa um pouco de 24 h, então quando o horário cairia no fim da tarde a galinha pula um dia. Trancar todas no Canil 1 à noite, com o Canil 2 dos ninhos fechado, não atrapalha. Recolher no fim da manhã e à tarde. (Conhecimento geral de avicultura, não veio dos vídeos.)
- **Toda semana:** encher o comedouro; lavar os bebedouros; revirar a folha do solário; tirar a cama úmida do Canil 1 (embaixo dos poleiros) e completar.
- **Todo mês:** trocar a forração dos ninhos; olhar penas e pés (piolho, ácaro); conferir mureta, tela e trinco.

---

## 8. Pendente
- **Decidido (18/11): 12 aves, os dois canis.** Os troços do Canil 2 vão para outro lugar (ainda a definir).
- Profundidade final da terra: 2 ou 3 m.
- Muro do fundo continua atrás do braço do L (confirmado em 18/11: é a mesma parede do fundo dos canis).
- Se o muro do vizinho (lado esquerdo) vai até a nova frente do solário. O 3D supõe que sim; se não for, esse lado também precisa de mureta e tela.
- **Muro do vizinho tem só 1,20–1,30 m** (informado em 18/11; foto 03 de `fotos-18-11/` confirma; o 3D já usa 1,25 m desde 18/11). Acima dele entra uma faixa de tela de ~0,60 m até o teto, em todo o comprimento do solário desse lado, senão gato entra por cima do muro.
- **Opção nova: crescer para a direita em vez de para a frente.** Nada depois da calçada dos canis; o solário vira patamar + área à direita dos canis, do muro do fundo até a linha da frente do patamar (2 m de profundidade). Ele manda fotos do espaço da direita. Muro do fundo tem ~3 m ou mais (informado em 18/11): serve de lateral sem tela e de apoio para o teto — os fios ou sarrafos do teto vão do muro do fundo até as estacas da frente, vão de só ~2 m. Falta: quantos metros livres há para a direita (fotos).
- **Tela vem em rolo de 50 m** (anúncio de 1,50 × 50 m, malha 1", fio 22: R$ 888 no Pix / R$ 1.136, Magalu, busca de 18/11). Um rolo cobre qualquer das opções até ~17 m², então 2 m ou 3 m de terra custa quase o mesmo; a diferença fica em tijolo, estaca e arame.

---

## 9. Opção "para a direita" (18/11, a decidir pelo comprimento)

Solário = patamar (3,00 × 1,00 m) + área à direita dos canis com 2,00 m de profundidade (do muro do fundo, ~3 m de altura, até a linha da frente do patamar) e comprimento **L** (há pelo menos 10 m livres). Mureta na frente (3 + L m) e na ponta da direita (2 m); fundo = muro; lado esquerdo do patamar = muro do vizinho de 1,25 m + faixa de tela de 0,60 m. Teto de tela em faixas de ~2,1 m atravessadas (do muro do fundo até a frente), apoiadas em sarrafos de 2,1 m a cada ~0,75 m, presos no muro do fundo e na viga da frente.

| | L = 5 m | L = 7 m | L = 10 m |
|---|---|---|---|
| Área de dia | 13 m² | 17 m² | 23 m² |
| Mureta 35 cm | 10 m (~100 tijolos) | 12 m (~120) | 15 m (~150) |
| Estacas | ~7 | ~9 | ~11 |
| Tela 1,50 m (rolo de 50 m) | ~21 m | ~26 m | ~33 m |
| Sarrafos do teto (2,1 m) | ~7 | ~10 | ~14 |

Conta minha: tela ≈ 9,4 m fixos (frente e teto do patamar, faixa do beiral, ponta) + 2,33 m por metro de L. Cada metro a mais de L custa ~10 tijolos, ~0,7 estaca e ~1,3 sarrafo; a tela sai do mesmo rolo. A foto 4 mostra uma árvore à direita dos canis: ver nas fotos se fica dentro da área (sombra boa, mas atrapalha o teto).

---

## 10. Orçamento — L para a frente, terra de 3 m (18/11)

Preços de anúncios online e referências SINAPI/SICRO/Procon, achados por busca em 18/11; nenhum é cotação de loja de João Pessoa (só o tijolo é pesquisa local, de 2025). Quantidades de cimento, areia e brita são estimativa minha (baldrame 15 × 20 cm, assentamento, reboco e 11 estacas chumbadas).

| Item | Qtd | Preço unitário | Subtotal |
|---|---|---|---|
| Tela hexagonal 1" fio 22, rolo 1,50 × 50 m | 1 | R$ 888–1.136 | R$ 888–1.136 |
| Tijolo 8 furos (com 10% de quebra) | 100 | R$ 0,90–1,20 | R$ 90–120 |
| Cimento 50 kg | 4 sacos | R$ 30–50 | R$ 120–200 |
| Areia média | 0,5 m³ | R$ 173–193/m³ (2023) | R$ 87–97 |
| Brita 1 | 0,3 m³ | R$ 87–160/m³ | R$ 26–48 |
| Estaca eucalipto tratado (ref. de 2,20 m) | 11 | R$ 7–24 | R$ 77–264 |
| Arame liso galvanizado 14 BWG | 1 kg (~37 m) | R$ 24–42 | R$ 24–42 |
| Catraca para arame liso | 7 | R$ 10–23 | R$ 70–161 |
| Sarrafo pinus 5 × 2,5 × 3 m (topo do perímetro, porta, poleiros) | 8 | R$ 6–26 | R$ 48–208 |
| Sombrite 50% | 4 m² | R$ 2,50–8,40/m² | R$ 10–34 |
| **Subtotal do solário** | | | **R$ 1.440–2.310** |
| Tela 1/2" para as 2 grades (se vendida por metro; o rolo de 50 m custa R$ 494–640) | 3 m | R$ 10–13/m | R$ 30–39 |
| Cal hidratada 20 kg | 1 | R$ 13–34 | R$ 13–34 |
| Maravalha (fardo) | 3 | R$ 18–26 | R$ 54–78 |
| Cano esgoto 100 mm para o comedouro (~1 m; a barra de 6 m custa R$ 166–210) | 1 m | ~R$ 28–35/m se cortarem | R$ 28–210 |
| Bebedouro 5 L | 2 | R$ 15 (vídeo `CupdVumDkew`) | R$ 30 |
| Ninhos (madeira reaproveitada) | 3 | ~R$ 6 o lote (vídeo `2qv0i4zp6o8`) | R$ 6 |
| **Subtotal do interior** | | | **R$ 161–397** |
| **Total da obra** | | | **R$ 1.600–2.710** |

Fora do total (não cotados): dreno PVC 40 mm, tampão 100 mm, dobradiças, ferrolho, cadeado, grampos, pregos e parafusos, lona, galão de 20 L, reparo do telhado e da madeira podre (Fase 0).

**Para começar a criação (à parte):** 12 frangas de 30 dias R$ 144–180 (preço do `PROJETO-V1-E-V2`, não conferido) + ração até a postura 84 kg × R$ 2,50–3,00 = R$ 210–252, depois ~R$ 108/mês.

A tela é ~55% da obra. Se uma loja local vender tela por metro, 25 m podem sair mais baratos que o rolo; vale perguntar.

**Tela alternativa (18/11):** anúncio no Mercado Livre (Rural Arames, vendedor CASAEAGRO), tela hexagonal galvanizada **malha 2" (~5 cm), fio 23 (~0,64 mm), 1,50 × 50 m, R$ 268,52 à vista** (6× R$ 44,75); frete não informado sem CEP. Dados lidos pelo Gandalf na página. Com ela, a obra cai para **~R$ 980–1.840**. Malha 2" segura galinha, gato adulto, cachorro e gavião; passa rato, cobra e filhote de timbu — aceitável porque à noite as aves ficam nos canis com tela 1/2" nas grades. Fio 23 é fino: cachorro grande insistindo pode rasgar.

---

## 11. Decisões de 18/11: mureta baixa e onde comprar eucalipto

**Mureta de 1 fiada (~20 cm)** em vez de 35 cm: ~55 tijolos, ~2 sacos de cimento, ~0,15 m³ de areia, ~0,1 m³ de brita (baldrame 10 × 15 cm; estacas socadas na terra, sem concreto) → **R$ 140–205** (era R$ 323–465). Segura enxurrada e chuva comum; alagamento de 30 cm passa por cima — nesses dias, aves trancadas nos canis. Altura final: 20 cm + tela 1,50 m = **1,70 m**, o que casa com a **estaca padrão de 2,20 m** (50 cm enterrados + 1,70 m livres).

**Versão econômica com essa mureta: ~R$ 630–1.015** (tela 2" de 50 m, estacas socadas, sem catraca, comedouro sem cano, madeira reaproveitada, sem sombrite, folha seca no solário).

**Eucalipto tratado na Grande João Pessoa** (achados pelo Gandalf no Google Maps/sites em 18/11; telefone e endereço copiados da tela, não liguei):
| Loja | Onde | Contato | Evidência de que vende |
|---|---|---|---|
| Casa do Pinus - PB | Av. Liberdade, 1232, Galpão D, São Bento, Bayeux | (83) 98223-7015 | site: "Eucalipto tratado — 2,20 m até 9 m, Ø 4 a 22 cm"; Maps 5,0 (146) |
| Tapajós Madeiras | BR-230, Cristo Redentor, JP | (83) 98881-7208 | site/Instagram: "Eucalipto Tratado"; Maps 4,5 (159) |
| Fibra Eucalipto Imunizado | R. Empresário Manoel de Brito, 483, Cidade dos Colibris, JP | (83) 98155-7870 | avaliação: "muitos eucaliptos tratados"; Maps 5,0 (5) |
| AMARU-PB Eucalipto Tratado | BR-230, 1822, Oitizeiro, JP | (83) 99113-8878 | só o nome; Maps 5,0 (2) |

Pedir: 11 estacas de 2,20 m, Ø 8–10 cm, tratadas em autoclave; perguntar se é CCA ou CCB e o preço por unidade.


Fotos do quintal de 18/11 (14): `fotos-18-11/`, descritas em `fotos-18-11/LEIA.md`.

### Eucalipto tratado: o que é e cuidados
- Tratado em **autoclave**: vácuo e pressão empurram o preservativo contra cupim e fungo para dentro da madeira. Mourão de eucalipto bem tratado dura 10–15 anos enterrado ([Embrapa, comtec97](https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/287281/1/comtec97.pdf)); sem tratamento apodrece bem antes em terra úmida.
- **CCA** (cobre, cromo, arsênio; madeira esverdeada) ou **CCB** (cobre, cromo, boro; sem arsênio). Se houver, preferir CCB: a galinha cisca e bica perto das estacas.
- Não queimar sobras; luva e máscara para serrar; **nunca** usar madeira tratada em poleiro, ninho ou comedouro (esses vão de madeira comum).

## 12. Desenho atualizado (18/11) e o que falta medir

`galinheiro-12.html` passou para a versão econômica (gerado pelo Gandalf; versão anterior em `galinheiro-12.antes-18-11.html`):
- mureta de 1 fiada (`MURETA = 0.20`, topo 1,70 m) sobre baldrame de 10 × 15 cm;
- estacas socadas, 0,50 m enterradas, sem concreto;
- muro do vizinho com 1,25 m da linha do canil até a frente, faixa de tela até 1,70 m, estacas novas em x 0,06 e sarrafo de topo; os fios do teto saem desse sarrafo; junto ao Canil 1 a parede segue alta;
- sem sombrite (checkbox virou "Telas") e comedouro só com o galão sobre tijolo, sem cano;
- alagamento: uma lâmina única de 30 cm, dentro e fora, com o aviso de que passa a mureta.

Conferência visual (subagente, 18/11): sem erro de página; só um 404 de recurso, provavelmente o favicon (não confirmado). Defeitos menores, não corrigidos: uma haste clara solta perto dos bebedouros na vista "Canis por dentro"; faixas diagonais claras nos cantos com o alagamento ligado; rótulos se sobrepõem um pouco na perspectiva.

Controles reais do 3D: vistas `persp`, `frente`, `dentro`, `planta`; checkboxes `#cNoite`, `#cTelhado`, `#cTela`, `#cRotulos`, `#cCotas`, `#cSub`. O `shot.mjs` está desatualizado (usa `front/side/top`, `#tUnder`, `#tFlood`).

**Falta medir / responder:**
- Altura do piso dos canis em relação à terra (o desenho supõe ~25 cm, estimativa). Se for menor que 30 cm, alagamento de 30 cm entra nos canis. Nas fotos: patamar ~10 cm acima da terra, mais um degrau até o piso do canil (a olho).
- Com que frequência o quintal alaga até 30 cm.
- Da lateral direita do Canil 2 até: a tampa de concreto com alças, a árvore nova e o toco (fotos 06 e 09). Se a tampa for de fossa ou caixa de esgoto, ela precisa de acesso dentro do braço do L.
- Da frente do patamar até o caminho de pedra elevado (fotos 03 e 04).
- Coelhos cavando (buracos na foto 03): a linha do solário precisa de baldrame ou tela enterrada.
