# Guia do Calouro UnDF

Crie uma landing page de página única chamada "Guia do Calouro" do CAPsi (Centro Acadêmico de Psicologia da UnDF). É um guia prático para calouros de Psicologia da Universidade do Distrito Federal. Todo o conteúdo em português do Brasil.

IMPORTANTE SOBRE O TEXTO: nunca use travessão (—) nem traço médio (–) em nenhum texto. Use vírgula, dois-pontos ou "a" (em intervalos). Isso é obrigatório.

IDENTIDADE VISUAL (seguir exatamente):
- Cores: navy #0D2B52, vermelho #e2171c, azul claro #5BAEE6, creme de fundo #F4E9D6, areia #E4D5B7
- Fonte de títulos: "Chewy" (Google Fonts), usada só em títulos e no logo
- Fonte de corpo: "Poppins" (Google Fonts), pesos 400/500/600/700
- Estética: formas orgânicas arredondadas, blobs, ondas. Nada de cantos retos.

ESTRUTURA DA PÁGINA:

1) Faixa decorativa no topo: uma onda contínua horizontal (SVG que se repete sem emenda), com uma linha navy em cima e uma azul clara paralela embaixo, e pequenos círculos vermelhos. Fundo branco. Altura ~44px.

2) HERO com fundo navy, texto creme:
- Sobrelinha em azul claro, maiúsculas, espaçada: "CENTRO ACADÊMICO DE PSICOLOGIA · UNDF"
- Título gigante em Chewy: "Guia do" (creme) e "Calouro" (azul claro) em duas linhas
- Subtítulo: "Chegou com dúvida? Pesquisa aqui. Reunimos o que a gente gostaria de saber no primeiro dia de Psicologia na UnDF."
- CAMPO DE BUSCA grande, arredondado (pill), branco, com ícone de lupa, placeholder "Ex.: passe livre, faltas, portal, auxílio…". A busca filtra as seções ao vivo, ignorando acentuação e maiúsculas. Mostra contador "N seções encontradas" em azul claro. Botão de limpar quando há texto. Se nada for encontrado, mostra estado vazio com título "Nada por aqui" e texto sugerindo tentar outra palavra ou chamar no @capsiundf.
- Blobs SVG decorativos de fundo com baixa opacidade
- Chips de atalho (botões arredondados) que rolam até a seção: "Como chego lá?" (campus), "Passe livre" (passe), "Não entro no portal" (portal), "Quantas faltas posso ter?" (frequencia), "Tem auxílio?" (auxilios), "Quero participar" (capsi)

3) NAVEGAÇÃO STICKY logo abaixo do hero: pills em rolagem horizontal com fundo creme translúcido e blur. Itens: Boas-vindas, O curso, Campus, Passe, Portal, Aulas, Frequência e notas, Auxílios, CAPsi, Conselhos, Dicas. O item da seção visível fica destacado (fundo navy, texto creme) via scrollspy. Barra de progresso de leitura vermelha na base da nav.

4) SEÇÕES. Cada uma tem um número dentro de um blob orgânico (border-radius irregular) alternando as cores navy, vermelho e azul, ao lado de um título em Chewy. Cards brancos arredondados com borda superior colorida de 6px e sombra suave. Animação sutil de fade-up ao entrar na tela.

SEÇÃO 1, id "boas-vindas", título "Boas-vindas":
Parágrafo 1: Se você está lendo isto, passou no vestibular e entra agora na segunda turma de Psicologia da UnDF. Bem-vindo!
Parágrafo 2: Ser de uma turma nova tem um lado desafiador e um lado muito bom. O desafiador: o curso ainda está sendo construído, e algumas coisas mudam pelo caminho. O muito bom: você participa dessa construção, e tem uma turma inteira antes de você disposta a dividir o que já aprendeu.
Parágrafo 3: Este guia é exatamente isso: o que a gente gostaria de ter recebido no primeiro dia.

SEÇÃO 2, id "curso", título "Sobre o curso":
Parágrafo: A graduação em Psicologia da UnDF tem 10 períodos (5 anos) e uma característica que aparece logo nos primeiros semestres: a grade foi pensada para aproximar você do cotidiano real do psicólogo desde o início, em vez de deixar toda a prática para o fim.
Parágrafo: Na prática, isso significa que já no primeiro ano você faz visitas técnicas a serviços públicos, conhece equipamentos do SUS e do SUAS e vê como a profissão acontece fora da sala de aula.
Card "Coisas que você vai ouvir muito" com lista:
- UC: Unidade Curricular. É como as disciplinas são chamadas.
- HPP: Habilidades Profissionais em Psicologia. São as UCs que levam a turma a campo. No 1º período, o eixo é Saúde e Saúde Mental; no 2º, SUAS e Justiça.
- Extensionalização: a extensão não é opcional nem extracurricular aqui, está dentro da grade, todo semestre, associada às UCs.
- PID: Plano Interdisciplinar Docente. Apresentado pelos professores no início do semestre, traz o cronograma, os conteúdos e os critérios de avaliação de cada UC. Guarde, é o seu mapa do semestre.
Depois: "Vale guardar os dois documentos oficiais do curso, que respondem quase tudo sobre grade, carga horária e projeto pedagógico:" com dois links:
Matriz Curricular (PDF): https://universidade.df.gov.br/documents/9295213/40058982/Matriz_Psicologia.pdf
Projeto Pedagógico do Curso (PDF): https://universidade.df.gov.br/documents/9295213/40058982/PPC_Psicologia_2025_05_08.pdf

SEÇÃO 3, id "campus", título "O campus":
Parágrafo: O curso de Psicologia funciona no Campus Ceilândia da UnDF. A página oficial com informações da unidade fica em universidade.df.gov.br (link: https://universidade.df.gov.br/campus-ceil%C3%A2ndia-02).
Card "Endereço" com o texto "Ceilândia Norte, QNN 31, Brasília/DF, CEP 72225-315" e um botão pequeno "copiar" que copia o endereço para a área de transferência e mostra "copiado!" por 1,6s.
Parágrafo: A entrada é por catracas: digite o seu CPF para liberar o acesso.
Card "Como chegar" com lista:
- O Terminal Ceilândia é o ponto de transporte público mais próximo.
- Todos os dias, às 19h, sai um transporte do IESB levando estudantes do Terminal Ceilândia até o campus. Não precisa comprovante nenhum, é só embarcar.
- Dá para ir a pé. Saindo do terminal, siga pela Via Oeste e entre à direita na via que corta os conjuntos, no sentido da QNM 31. Você passa por um Subway pouco antes: o campus fica logo em seguida.
- De carro, há estacionamento gratuito para estudantes, na parte de trás da entrada.
- Combinar carona com a turma funciona bem, muita gente mora nas redondezas.
E no fim do card: "Dica: como as aulas são à noite, vale combinar de fazer o trajeto a pé acompanhado da turma."
Card vermelho "Se ficar perdido no mapa": O local também é conhecido como Campus IESB Ceilândia e fica logo depois da UCB. Procurando por esses nomes, você chega.
Parágrafo final: A universidade tem wi-fi institucional, com manual próprio em portal.undf.edu.br (link https://portal.undf.edu.br/) na área Manuais e Guias. Vale configurar antes do primeiro dia.

SEÇÃO 4, id "passe", título "Passe estudantil":
Parágrafo: O passe é feito pelo BRB Mobilidade. O primeiro passo é no Portal Discente: solicite a declaração para passe livre em Solicitação de Documentos. É ela que comprova seu vínculo com a UnDF.
Card vermelho "Passo a passo do cadastro" com lista:
- Acesse brbnovo.brb.com.br/mobilidade (link https://brbnovo.brb.com.br/mobilidade/) e vá na guia Estudantil.
- Já tem cadastro? Clique em "Acompanhe o Cadastro" e atualize suas informações estudantis.
- É a primeira vez? Clique em "Cadastre-se", preencha os dados e anexe a declaração emitida no portal.
- Você recebe um e-mail confirmando que o cartão está pronto, com o local de retirada.
Card navy "Todo início de semestre: passe o cartão duas vezes": Na primeira passada no validador, o cartão atualiza as informações do benefício (como as datas do calendário acadêmico). Só na segunda a catraca libera. Não estranhe, é assim mesmo.
Card "Limites de uso": São até 4 acessos por dia, limitados a 54 por mês. Precisando de mais, dá para pedir pelo serviço "Extensão de Acesso" na sua página do Passe Livre Estudantil, e a resposta chega por e-mail. Segundo parágrafo: O benefício vale só para o titular, em dias letivos, no trajeto de casa para a faculdade e de volta. Em caso de estágio obrigatório, o trajeto também pode incluir o local de estágio.
Card vermelho "Uso indevido suspende o benefício": Constatado o uso indevido, é aberto processo administrativo e o passe pode ser suspenso pelo semestre inteiro. Conta como uso indevido: lista com Emprestar o cartão para outra pessoa / Vender o benefício / Passar dos limites diários previstos em lei / Usar para finalidade diferente da prevista / Acumular benefícios de gratuidade.
Parágrafo: A manutenção do benefício também depende da instituição: a UnDF informa o período letivo a cada semestre e comprova mensalmente matrícula e frequência.
Link: Mais sobre o Cartão Estudantil (https://brbnovo.brb.com.br/mobilidade/cartao-estudantil/)

SEÇÃO 5, id "portal", título "Portal e sistemas":
Parágrafo: O Portal Discente é onde você resolve praticamente toda a sua vida acadêmica.
Card navy "Endereço do portal": texto "academico.undf.edu.br" com botão "copiar" e um link "abrir" para https://academico.undf.edu.br/core/login
Card vermelho "Primeiro acesso": Usuário e senha são o seu CPF. Depois de entrar, selecione a unidade ESCH, a Escola Superior de Ciências Humanas, que é onde fica a Psicologia.
Card "O que você faz por lá" com lista:
- Moodle: materiais de estudo, PID de cada UC, notas e mensagens com a turma. Cheque com frequência.
- Solicitação de documentos: atestado de matrícula, ementário, agenda das aulas e declaração para passe livre. É por aqui que sai quase toda a papelada de que você vai precisar.
- Identidade virtual: sua carteirinha de estudante, digital.
- Biblioteca: acervo e bases de pesquisa.
- Protocolos: o canal para tudo que não estiver na lista de documentos. Qualquer outra solicitação acadêmica se abre por aqui.
- Certificados, informações do aluno e ouvidoria.
Parágrafo final: Existe ainda o Portal de Serviços da UnDF (link https://portal.undf.edu.br/), que reúne todos os sistemas e os manuais de wi-fi, troca de senha e acesso às catracas.

SEÇÃO 6, id "aulas", título "Como são as aulas":
Parágrafo: As aulas de Psicologia são presenciais, no turno noturno, a partir das 19h.
Card "Prepare-se: aqui ninguém só assiste": O formato costuma ser dialogado. Espera-se que você chegue com a leitura prévia feita e participe do debate, não que fique só ouvindo. Em muitos momentos a sala vira um círculo, justamente para facilitar a conversa.
Card vermelho "Trabalho em grupo, muito trabalho em grupo": Você vai fazer trabalhos em grupo em todas as unidades curriculares. A graduação aqui é bem mão na massa, então vale desde cedo trocar contato com a turma e aprender a se organizar coletivamente.
Parágrafo: Some tudo isso ao tempo de deslocamento até Ceilândia e você já tem uma boa noção de como planejar trabalho, estágio e rotina ao longo da semana.

SEÇÃO 7, id "frequencia", título "Frequência e notas":
Parágrafo: Para ser aprovado em qualquer UC, você precisa de 75% de frequência. Ou seja, pode faltar no máximo um quarto da carga horária.
Parágrafo: Atenção a um detalhe que pega muita gente: em UCs de carga horária menor, esses 25% são pouquíssimas aulas. Numa unidade de 40h, o limite aperta rápido. Acompanhe sua frequência pelo portal e não deixe acumular.
Parágrafo: As notas aparecem em forma de conceitos, e não como nota numérica final.
Tabela com cabeçalho navy e colunas Conceito, Sigla, Pontuação, Resultado:
Alcançando a Aprendizagem | AA | 9,0 a 10,0 | Aprovado (verde)
Avançando na Aprendizagem | ANA | 7,0 a 8,9 | Aprovado (verde)
Caminhando na Aprendizagem | CA | 6,0 a 6,9 | Aprovado (verde)
Iniciando a Aprendizagem | IA | 0,1 a 5,9 | Reprovado (vermelho)
Aprendizagem Não Evidenciada | ANE | 0,0 | Reprovado (vermelho)
Parágrafo final: Resumindo: de 6,0 para cima você passa. AA, ANA e CA aprovam; IA e ANE reprovam.

SEÇÃO 8, id "auxilios", título "Auxílios estudantis":
Parágrafo: A UnDF concede auxílios financeiros para apoiar a permanência de estudantes em situação de vulnerabilidade socioeconômica, pela Diretoria de Assistência Estudantil e Humanização (DIAE), vinculada à PRODUNI.
Tabela com colunas Auxílio, Valor, Vagas:
Permanência | R$ 690,00 | 350
Saúde Mental | R$ 470,00 | 60
Transporte | R$ 420,00 | 70
Creche | R$ 505,00 | 15
Cultura | R$ 150,00 | 50
Parágrafo com uma tag/badge "Edital nº 17/2026" seguida de: Valores e vagas mudam a cada edição, e os prazos costumam ser curtos. Confira sempre o edital vigente.
Link: Ver o edital de auxílios estudantis (https://universidade.df.gov.br/w/edital-n-17/2026-de-selecao-unificada-para-concessao-de-auxilios-estudantis)
Card "E as bolsas de pesquisa e extensão?": São outra coisa: não dependem de critério socioeconômico, e sim de seleção em projetos de professores (iniciação científica e extensão). Fique de olho nos editais divulgados pela universidade e pelos próprios docentes ao longo do semestre.

SEÇÃO 9, id "capsi", título "O CAPsi é seu":
Parágrafo: O Centro Acadêmico de Psicologia da UnDF é a representação estudantil do curso. É por ele que a turma se organiza, leva demandas à coordenação e à gestão da universidade, e constrói junto o que o curso ainda não tem.
Parágrafo: Num curso novo, isso pesa mais do que parece. Boa parte do que existe hoje, e do que ainda está sendo conquistado, veio de estudante que apareceu, perguntou e cobrou. A clínica-escola própria, por exemplo, é uma pauta que os alunos de Psicologia levantam e acompanham de perto.
Bloco destacado com fundo navy, título em Chewy azul claro "Aparece!": Você não precisa de cargo, experiência ou período avançado para participar. Precisa aparecer, dizer o que está incomodando e topar construir junto. Curso novo é curso que ainda cabe a sua marca. Depois: Siga a gente: @capsiundf (link https://instagram.com/capsiundf), é por lá que sai tudo primeiro.
Card vermelho "Quer entrar para a gestão?": Nas próximas semanas divulgaremos as orientações do processo seletivo. Fique de olho no nosso Instagram para não perder o prazo.

SEÇÃO 10, id "conselhos", título "Canais oficiais da profissão":
Parágrafo: Um conselho de psicologia é um órgão público que cuida da profissão. Ele orienta, fiscaliza e garante que os profissionais sigam as regras da ética, protegendo a saúde e os direitos de quem recebe atendimento.
Parágrafo: Acompanhar esses canais desde o primeiro semestre muda sua formação: é de lá que vêm as resoluções, as referências técnicas e as discussões que definem o que a Psicologia pode e não pode fazer.
Card navy "Guarde estes três links" com lista:
- CRP 01/DF (https://www.crp-01.org.br/): Conselho Regional de Psicologia do Distrito Federal, o mais perto de você.
- CFP (https://site.cfp.org.br/): Conselho Federal de Psicologia.
- Código de Ética Profissional (https://site.cfp.org.br/publicacao/codigo-de-etica-profissional-dao-psicologao/): leia inteiro pelo menos uma vez ainda na graduação. Vale mais do que parece.

SEÇÃO 11, id "dicas", título "Dicas de quem já vive isso":
Card navy "Aprenda a ler artigo científico cedo": É a habilidade que mais separa quem sofre de quem flui na graduação. Comece pelos textos das UCs, leia o resumo e a conclusão primeiro, e vá fichando o que importa.
Card vermelho "ABNT não é detalhe": Você vai formatar trabalho desde o primeiro semestre e não vai parar até o TCC. Aprender citação e referência agora poupa muita dor de cabeça depois.
Card "Cuidado com como você se apresenta nas redes": Enquanto estudante, evite se chamar de "futura psi", "psi" ou "psicóloga em formação", esses termos podem induzir alguém a achar que você já atende, o que esbarra em exercício ilegal da profissão. Use "estudante de Psicologia" ou "graduanda em Psicologia", e mantenha a conta como pessoal ou criador de conteúdo, nunca na categoria de psicólogo.
Card navy "Cuide de você também": Psicologia mexe com coisa da sua própria história. Fazer terapia durante a graduação não é luxo nem contradição: é parte séria da formação, e existe o Auxílio Saúde Mental justamente porque isso é reconhecido.

5) RODAPÉ com fundo navy: logo "CAPsi UnDF" em Chewy creme, abaixo "Centro Acadêmico de Psicologia da Universidade do Distrito Federal", linha de links em azul claro (@capsiundf, Portal Discente, Portal de Serviços) e nota final menor: "Guia feito por estudantes, para estudantes. Informações sujeitas a alteração: confira sempre os canais oficiais da universidade."

6) Botão flutuante circular vermelho no canto inferior direito para voltar ao topo, que só aparece após rolar 500px.

REQUISITOS TÉCNICOS: totalmente responsivo, mobile first (a maioria vai acessar pelo celular). Respeitar prefers-reduced-motion. Foco visível no teclado. Acessível (aria-labels nos botões de ícone, aria-live no contador da busca). Não usar backend nem banco de dados, é uma página estática.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://calouro-psicologia-undf.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8b3c66fc-0b07-460b-80c4-075b2cf3eb65).

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
