import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  A,
  Bullet,
  Bullets,
  Card,
  CopyButton,
  FadeUp,
  LinkPill,
  P,
  SectionHeading,
  WaveStrip,
} from "@/components/guia/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia do Calouro | CAPsi UnDF" },
      {
        name: "description",
        content:
          "Guia prático para calouros de Psicologia da UnDF: campus, passe estudantil, portal, frequência, auxílios e o CAPsi.",
      },
      { property: "og:title", content: "Guia do Calouro | CAPsi UnDF" },
      {
        property: "og:description",
        content:
          "Tudo o que a gente gostaria de saber no primeiro dia de Psicologia na UnDF, reunido pelo Centro Acadêmico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuiaDoCalouro,
});

type Section = {
  id: string;
  nav: string;
  title: string;
  keywords: string;
  content: ReactNode;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

/* ---------------------------- conteúdo ---------------------------- */

const sections: Section[] = [
  {
    id: "boas-vindas",
    nav: "Boas-vindas",
    title: "Boas-vindas",
    keywords: "boas vindas segunda turma vestibular novo curso construção primeiro dia",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            Se você está lendo isto, passou no vestibular e entra agora na segunda turma de
            Psicologia da UnDF. Bem-vindo!
          </P>
          <P>
            Ser de uma turma nova tem um lado desafiador e um lado muito bom. O desafiador: o curso
            ainda está sendo construído, e algumas coisas mudam pelo caminho. O muito bom: você
            participa dessa construção, e tem uma turma inteira antes de você disposta a dividir o
            que já aprendeu.
          </P>
          <P>Este guia é exatamente isso: o que a gente gostaria de ter recebido no primeiro dia.</P>
        </Card>
      </div>
    ),
  },
  {
    id: "curso",
    nav: "O curso",
    title: "Sobre o curso",
    keywords:
      "curso graduacao periodos grade uc hpp extensionalizacao pid matriz curricular projeto pedagogico sus suas visitas tecnicas",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            A graduação em Psicologia da UnDF tem 10 períodos (5 anos) e uma característica que
            aparece logo nos primeiros semestres: a grade foi pensada para aproximar você do
            cotidiano real do psicólogo desde o início, em vez de deixar toda a prática para o fim.
          </P>
          <P>
            Na prática, isso significa que já no primeiro ano você faz visitas técnicas a serviços
            públicos, conhece equipamentos do SUS e do SUAS e vê como a profissão acontece fora da
            sala de aula.
          </P>
        </Card>
        <Card tone="navy" title="Coisas que você vai ouvir muito">
          <Bullets>
            <Bullet>
              <strong>UC:</strong> Unidade Curricular. É como as disciplinas são chamadas.
            </Bullet>
            <Bullet>
              <strong>HPP:</strong> Habilidades Profissionais em Psicologia. São as UCs que levam a
              turma a campo. No 1º período, o eixo é Saúde e Saúde Mental; no 2º, SUAS e Justiça.
            </Bullet>
            <Bullet>
              <strong>Extensionalização:</strong> a extensão não é opcional nem extracurricular
              aqui, está dentro da grade, todo semestre, associada às UCs.
            </Bullet>
            <Bullet>
              <strong>PID:</strong> Plano Interdisciplinar Docente. Apresentado pelos professores no
              início do semestre, traz o cronograma, os conteúdos e os critérios de avaliação de
              cada UC. Guarde, é o seu mapa do semestre.
            </Bullet>
          </Bullets>
        </Card>
        <Card>
          <P>
            Vale guardar os dois documentos oficiais do curso, que respondem quase tudo sobre grade,
            carga horária e projeto pedagógico:
          </P>
          <div className="flex flex-wrap gap-3 pt-1">
            <LinkPill href="https://universidade.df.gov.br/documents/9295213/40058982/Matriz_Psicologia.pdf">
              Matriz Curricular (PDF)
            </LinkPill>
            <LinkPill href="https://universidade.df.gov.br/documents/9295213/40058982/PPC_Psicologia_2025_05_08.pdf">
              Projeto Pedagógico do Curso (PDF)
            </LinkPill>
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: "campus",
    nav: "Campus",
    title: "O campus",
    keywords:
      "campus ceilandia endereco como chegar terminal onibus iesb ucb carona estacionamento catraca cpf wifi wi-fi mapa qnn 31 subway",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            O curso de Psicologia funciona no Campus Ceilândia da UnDF. A página oficial com
            informações da unidade fica em{" "}
            <A href="https://universidade.df.gov.br/campus-ceil%C3%A2ndia-02">
              universidade.df.gov.br
            </A>
            .
          </P>
        </Card>
        <Card title="Endereço">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[1.02rem] font-medium">
              Ceilândia Norte, QNN 31, Brasília/DF, CEP 72225-315
            </span>
            <CopyButton
              value="Ceilândia Norte, QNN 31, Brasília/DF, CEP 72225-315"
              label="Copiar endereço do campus"
            />
          </div>
          <P>A entrada é por catracas: digite o seu CPF para liberar o acesso.</P>
        </Card>
        <Card title="Como chegar">
          <Bullets>
            <Bullet>O Terminal Ceilândia é o ponto de transporte público mais próximo.</Bullet>
            <Bullet>
              Todos os dias, às 19h, sai um transporte do IESB levando estudantes do Terminal
              Ceilândia até o campus. Não precisa comprovante nenhum, é só embarcar.
            </Bullet>
            <Bullet>
              Dá para ir a pé. Saindo do terminal, siga pela Via Oeste e entre à direita na via que
              corta os conjuntos, no sentido da QNM 31. Você passa por um Subway pouco antes: o
              campus fica logo em seguida.
            </Bullet>
            <Bullet>
              De carro, há estacionamento gratuito para estudantes, na parte de trás da entrada.
            </Bullet>
            <Bullet>
              Combinar carona com a turma funciona bem, muita gente mora nas redondezas.
            </Bullet>
          </Bullets>
          <p className="rounded-2xl bg-sand px-4 py-3 text-[0.98rem] font-medium">
            Dica: como as aulas são à noite, vale combinar de fazer o trajeto a pé acompanhado da
            turma.
          </p>
        </Card>
        <Card tone="red" title="Se ficar perdido no mapa">
          <P>
            O local também é conhecido como Campus IESB Ceilândia e fica logo depois da UCB.
            Procurando por esses nomes, você chega.
          </P>
        </Card>
        <Card>
          <P>
            A universidade tem wi-fi institucional, com manual próprio em{" "}
            <A href="https://portal.undf.edu.br/">portal.undf.edu.br</A> na área Manuais e Guias.
            Vale configurar antes do primeiro dia.
          </P>
        </Card>
      </div>
    ),
  },
  {
    id: "passe",
    nav: "Passe",
    title: "Passe estudantil",
    keywords:
      "passe livre estudantil brb mobilidade cartao declaracao onibus metro limites 54 extensao de acesso uso indevido",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            O passe é feito pelo BRB Mobilidade. O primeiro passo é no Portal Discente: solicite a
            declaração para passe livre em Solicitação de Documentos. É ela que comprova seu vínculo
            com a UnDF.
          </P>
        </Card>
        <Card tone="red" title="Passo a passo do cadastro">
          <Bullets>
            <Bullet>
              Acesse{" "}
              <A href="https://brbnovo.brb.com.br/mobilidade/">brbnovo.brb.com.br/mobilidade</A> e
              vá na guia Estudantil.
            </Bullet>
            <Bullet>
              Já tem cadastro? Clique em "Acompanhe o Cadastro" e atualize suas informações
              estudantis.
            </Bullet>
            <Bullet>
              É a primeira vez? Clique em "Cadastre-se", preencha os dados e anexe a declaração
              emitida no portal.
            </Bullet>
            <Bullet>
              Você recebe um e-mail confirmando que o cartão está pronto, com o local de retirada.
            </Bullet>
          </Bullets>
        </Card>
        <Card tone="navy" title="Todo início de semestre: passe o cartão duas vezes">
          <P>
            Na primeira passada no validador, o cartão atualiza as informações do benefício (como as
            datas do calendário acadêmico). Só na segunda a catraca libera. Não estranhe, é assim
            mesmo.
          </P>
        </Card>
        <Card title="Limites de uso">
          <P>
            São até 4 acessos por dia, limitados a 54 por mês. Precisando de mais, dá para pedir
            pelo serviço "Extensão de Acesso" na sua página do Passe Livre Estudantil, e a resposta
            chega por e-mail.
          </P>
          <P>
            O benefício vale só para o titular, em dias letivos, no trajeto de casa para a faculdade
            e de volta. Em caso de estágio obrigatório, o trajeto também pode incluir o local de
            estágio.
          </P>
        </Card>
        <Card tone="red" title="Uso indevido suspende o benefício">
          <P>
            Constatado o uso indevido, é aberto processo administrativo e o passe pode ser suspenso
            pelo semestre inteiro. Conta como uso indevido:
          </P>
          <Bullets>
            <Bullet>Emprestar o cartão para outra pessoa</Bullet>
            <Bullet>Vender o benefício</Bullet>
            <Bullet>Passar dos limites diários previstos em lei</Bullet>
            <Bullet>Usar para finalidade diferente da prevista</Bullet>
            <Bullet>Acumular benefícios de gratuidade</Bullet>
          </Bullets>
        </Card>
        <Card>
          <P>
            A manutenção do benefício também depende da instituição: a UnDF informa o período letivo
            a cada semestre e comprova mensalmente matrícula e frequência.
          </P>
          <div className="pt-1">
            <LinkPill href="https://brbnovo.brb.com.br/mobilidade/cartao-estudantil/">
              Mais sobre o Cartão Estudantil
            </LinkPill>
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: "portal",
    nav: "Portal",
    title: "Portal e sistemas",
    keywords:
      "portal discente academico login senha cpf esch moodle documentos identidade virtual biblioteca protocolos ouvidoria sistemas",
    content: (
      <div className="space-y-4">
        <Card>
          <P>O Portal Discente é onde você resolve praticamente toda a sua vida acadêmica.</P>
        </Card>
        <Card tone="navy" title="Endereço do portal">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[1.02rem] font-medium">academico.undf.edu.br</span>
            <CopyButton value="academico.undf.edu.br" label="Copiar endereço do portal" />
            <A href="https://academico.undf.edu.br/core/login">abrir</A>
          </div>
        </Card>
        <Card tone="red" title="Primeiro acesso">
          <P>
            Usuário e senha são o seu CPF. Depois de entrar, selecione a unidade ESCH, a Escola
            Superior de Ciências Humanas, que é onde fica a Psicologia.
          </P>
        </Card>
        <Card title="O que você faz por lá">
          <Bullets>
            <Bullet>
              <strong>Moodle:</strong> materiais de estudo, PID de cada UC, notas e mensagens com a
              turma. Cheque com frequência.
            </Bullet>
            <Bullet>
              <strong>Solicitação de documentos:</strong> atestado de matrícula, ementário, agenda
              das aulas e declaração para passe livre. É por aqui que sai quase toda a papelada de
              que você vai precisar.
            </Bullet>
            <Bullet>
              <strong>Identidade virtual:</strong> sua carteirinha de estudante, digital.
            </Bullet>
            <Bullet>
              <strong>Biblioteca:</strong> acervo e bases de pesquisa.
            </Bullet>
            <Bullet>
              <strong>Protocolos:</strong> o canal para tudo que não estiver na lista de documentos.
              Qualquer outra solicitação acadêmica se abre por aqui.
            </Bullet>
            <Bullet>Certificados, informações do aluno e ouvidoria.</Bullet>
          </Bullets>
        </Card>
        <Card>
          <P>
            Existe ainda o <A href="https://portal.undf.edu.br/">Portal de Serviços da UnDF</A>, que
            reúne todos os sistemas e os manuais de wi-fi, troca de senha e acesso às catracas.
          </P>
        </Card>
      </div>
    ),
  },
  {
    id: "aulas",
    nav: "Aulas",
    title: "Como são as aulas",
    keywords:
      "aulas noturno presencial 19h leitura previa debate circulo trabalho em grupo rotina deslocamento",
    content: (
      <div className="space-y-4">
        <Card>
          <P>As aulas de Psicologia são presenciais, no turno noturno, a partir das 19h.</P>
        </Card>
        <Card tone="navy" title="Prepare-se: aqui ninguém só assiste">
          <P>
            O formato costuma ser dialogado. Espera-se que você chegue com a leitura prévia feita e
            participe do debate, não que fique só ouvindo. Em muitos momentos a sala vira um
            círculo, justamente para facilitar a conversa.
          </P>
        </Card>
        <Card tone="red" title="Trabalho em grupo, muito trabalho em grupo">
          <P>
            Você vai fazer trabalhos em grupo em todas as unidades curriculares. A graduação aqui é
            bem mão na massa, então vale desde cedo trocar contato com a turma e aprender a se
            organizar coletivamente.
          </P>
        </Card>
        <Card>
          <P>
            Some tudo isso ao tempo de deslocamento até Ceilândia e você já tem uma boa noção de
            como planejar trabalho, estágio e rotina ao longo da semana.
          </P>
        </Card>
      </div>
    ),
  },
  {
    id: "frequencia",
    nav: "Frequência e notas",
    title: "Frequência e notas",
    keywords:
      "frequencia faltas 75% notas conceitos aa ana ca ia ane aprovado reprovado carga horaria",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            Para ser aprovado em qualquer UC, você precisa de 75% de frequência. Ou seja, pode
            faltar no máximo um quarto da carga horária.
          </P>
          <P>
            Atenção a um detalhe que pega muita gente: em UCs de carga horária menor, esses 25% são
            pouquíssimas aulas. Numa unidade de 40h, o limite aperta rápido. Acompanhe sua
            frequência pelo portal e não deixe acumular.
          </P>
          <P>As notas aparecem em forma de conceitos, e não como nota numérica final.</P>
        </Card>
        <Card>
          <ConceitosTable />
          <P>Resumindo: de 6,0 para cima você passa. AA, ANA e CA aprovam; IA e ANE reprovam.</P>
        </Card>
      </div>
    ),
  },
  {
    id: "auxilios",
    nav: "Auxílios",
    title: "Auxílios estudantis",
    keywords:
      "auxilio auxilios permanencia saude mental transporte creche cultura edital diae produni bolsa pesquisa extensao iniciacao cientifica dinheiro",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            A UnDF concede auxílios financeiros para apoiar a permanência de estudantes em situação
            de vulnerabilidade socioeconômica, pela Diretoria de Assistência Estudantil e
            Humanização (DIAE), vinculada à PRODUNI.
          </P>
        </Card>
        <Card>
          <AuxiliosTable />
          <p className="text-[1.02rem] leading-relaxed">
            <span className="mr-2 inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold tracking-wide text-cream uppercase">
              Edital nº 17/2026
            </span>
            Valores e vagas mudam a cada edição, e os prazos costumam ser curtos. Confira sempre o
            edital vigente.
          </p>
          <div className="pt-1">
            <LinkPill href="https://universidade.df.gov.br/w/edital-n-17/2026-de-selecao-unificada-para-concessao-de-auxilios-estudantis">
              Ver o edital de auxílios estudantis
            </LinkPill>
          </div>
        </Card>
        <Card tone="navy" title="E as bolsas de pesquisa e extensão?">
          <P>
            São outra coisa: não dependem de critério socioeconômico, e sim de seleção em projetos
            de professores (iniciação científica e extensão). Fique de olho nos editais divulgados
            pela universidade e pelos próprios docentes ao longo do semestre.
          </P>
        </Card>
      </div>
    ),
  },
  {
    id: "capsi",
    nav: "CAPsi",
    title: "O CAPsi é seu",
    keywords:
      "capsi centro academico representacao estudantil gestao processo seletivo instagram clinica escola participar",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            O Centro Acadêmico de Psicologia da UnDF é a representação estudantil do curso. É por
            ele que a turma se organiza, leva demandas à coordenação e à gestão da universidade, e
            constrói junto o que o curso ainda não tem.
          </P>
          <P>
            Num curso novo, isso pesa mais do que parece. Boa parte do que existe hoje, e do que
            ainda está sendo conquistado, veio de estudante que apareceu, perguntou e cobrou. A
            clínica-escola própria, por exemplo, é uma pauta que os alunos de Psicologia levantam e
            acompanham de perto.
          </P>
        </Card>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy p-6 text-cream sm:p-9">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-10 size-52 blob-a bg-sky opacity-15"
          />
          <h3 className="relative text-3xl text-sky sm:text-4xl">Aparece!</h3>
          <p className="relative mt-3 text-[1.05rem] leading-relaxed">
            Você não precisa de cargo, experiência ou período avançado para participar. Precisa
            aparecer, dizer o que está incomodando e topar construir junto. Curso novo é curso que
            ainda cabe a sua marca.
          </p>
          <p className="relative mt-4 text-[1.05rem] leading-relaxed">
            Siga a gente: <A href="https://instagram.com/capsiundf">@capsiundf</A>, é por lá que sai
            tudo primeiro.
          </p>
        </div>
        <Card tone="red" title="Quer entrar para a gestão?">
          <P>
            Nas próximas semanas divulgaremos as orientações do processo seletivo. Fique de olho no
            nosso Instagram para não perder o prazo.
          </P>
        </Card>
      </div>
    ),
  },
  {
    id: "conselhos",
    nav: "Conselhos",
    title: "Canais oficiais da profissão",
    keywords: "conselho crp cfp codigo de etica profissao resolucoes fiscalizacao links oficiais",
    content: (
      <div className="space-y-4">
        <Card>
          <P>
            Um conselho de psicologia é um órgão público que cuida da profissão. Ele orienta,
            fiscaliza e garante que os profissionais sigam as regras da ética, protegendo a saúde e
            os direitos de quem recebe atendimento.
          </P>
          <P>
            Acompanhar esses canais desde o primeiro semestre muda sua formação: é de lá que vêm as
            resoluções, as referências técnicas e as discussões que definem o que a Psicologia pode
            e não pode fazer.
          </P>
        </Card>
        <Card tone="navy" title="Guarde estes três links">
          <Bullets>
            <Bullet>
              <A href="https://www.crp-01.org.br/">CRP 01/DF</A>: Conselho Regional de Psicologia do
              Distrito Federal, o mais perto de você.
            </Bullet>
            <Bullet>
              <A href="https://site.cfp.org.br/">CFP</A>: Conselho Federal de Psicologia.
            </Bullet>
            <Bullet>
              <A href="https://site.cfp.org.br/publicacao/codigo-de-etica-profissional-dao-psicologao/">
                Código de Ética Profissional
              </A>
              : leia inteiro pelo menos uma vez ainda na graduação. Vale mais do que parece.
            </Bullet>
          </Bullets>
        </Card>
      </div>
    ),
  },
  {
    id: "dicas",
    nav: "Dicas",
    title: "Dicas de quem já vive isso",
    keywords:
      "dicas artigo cientifico abnt citacao referencia redes sociais futura psi terapia saude mental estudante",
    content: (
      <div className="space-y-4">
        <Card tone="navy" title="Aprenda a ler artigo científico cedo">
          <P>
            É a habilidade que mais separa quem sofre de quem flui na graduação. Comece pelos textos
            das UCs, leia o resumo e a conclusão primeiro, e vá fichando o que importa.
          </P>
        </Card>
        <Card tone="red" title="ABNT não é detalhe">
          <P>
            Você vai formatar trabalho desde o primeiro semestre e não vai parar até o TCC. Aprender
            citação e referência agora poupa muita dor de cabeça depois.
          </P>
        </Card>
        <Card title="Cuidado com como você se apresenta nas redes">
          <P>
            Enquanto estudante, evite se chamar de "futura psi", "psi" ou "psicóloga em formação",
            esses termos podem induzir alguém a achar que você já atende, o que esbarra em exercício
            ilegal da profissão. Use "estudante de Psicologia" ou "graduanda em Psicologia", e
            mantenha a conta como pessoal ou criador de conteúdo, nunca na categoria de psicólogo.
          </P>
        </Card>
        <Card tone="navy" title="Cuide de você também">
          <P>
            Psicologia mexe com coisa da sua própria história. Fazer terapia durante a graduação não
            é luxo nem contradição: é parte séria da formação, e existe o Auxílio Saúde Mental
            justamente porque isso é reconhecido.
          </P>
        </Card>
      </div>
    ),
  },
];

/* ---------------------------- tabelas ---------------------------- */

function ConceitosTable() {
  const rows = [
    ["Alcançando a Aprendizagem", "AA", "9,0 a 10,0", "Aprovado"],
    ["Avançando na Aprendizagem", "ANA", "7,0 a 8,9", "Aprovado"],
    ["Caminhando na Aprendizagem", "CA", "6,0 a 6,9", "Aprovado"],
    ["Iniciando a Aprendizagem", "IA", "0,1 a 5,9", "Reprovado"],
    ["Aprendizagem Não Evidenciada", "ANE", "0,0", "Reprovado"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-border no-scrollbar">
      <table className="w-full min-w-[520px] border-collapse text-left text-[0.95rem]">
        <thead>
          <tr className="bg-navy text-cream">
            <th className="px-4 py-3 font-semibold">Conceito</th>
            <th className="px-4 py-3 font-semibold">Sigla</th>
            <th className="px-4 py-3 font-semibold">Pontuação</th>
            <th className="px-4 py-3 font-semibold">Resultado</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([conceito, sigla, pontos, resultado]) => (
            <tr key={sigla} className="border-t border-border odd:bg-cream/60">
              <td className="px-4 py-3">{conceito}</td>
              <td className="px-4 py-3 font-semibold">{sigla}</td>
              <td className="px-4 py-3">{pontos}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    resultado === "Aprovado"
                      ? "bg-[oklch(0.62_0.15_150)] text-cream"
                      : "bg-red text-cream"
                  }`}
                >
                  {resultado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AuxiliosTable() {
  const rows = [
    ["Permanência", "R$ 690,00", "350"],
    ["Saúde Mental", "R$ 470,00", "60"],
    ["Transporte", "R$ 420,00", "70"],
    ["Creche", "R$ 505,00", "15"],
    ["Cultura", "R$ 150,00", "50"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-border no-scrollbar">
      <table className="w-full min-w-[380px] border-collapse text-left text-[0.95rem]">
        <thead>
          <tr className="bg-navy text-cream">
            <th className="px-4 py-3 font-semibold">Auxílio</th>
            <th className="px-4 py-3 font-semibold">Valor</th>
            <th className="px-4 py-3 font-semibold">Vagas</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([nome, valor, vagas]) => (
            <tr key={nome} className="border-t border-border odd:bg-cream/60">
              <td className="px-4 py-3 font-medium">{nome}</td>
              <td className="px-4 py-3">{valor}</td>
              <td className="px-4 py-3">{vagas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------------------- página ---------------------------- */

const chips = [
  { label: "Como chego lá?", target: "campus" },
  { label: "Passe livre", target: "passe" },
  { label: "Não entro no portal", target: "portal" },
  { label: "Quantas faltas posso ter?", target: "frequencia" },
  { label: "Tem auxílio?", target: "auxilios" },
  { label: "Quero participar", target: "capsi" },
];

function GuiaDoCalouro() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(sections[0].id);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const visibleSections = useMemo(() => {
    const q = normalize(query).trim();
    if (!q) return sections;
    const terms = q.split(/\s+/);
    return sections.filter((section) => {
      const haystack = normalize(`${section.title} ${section.nav} ${section.keywords}`);
      return terms.every((term) => haystack.includes(term));
    });
  }, [query]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0);
      setShowTop(doc.scrollTop > 500);

      let current = visibleSections[0]?.id ?? "";
      for (const section of visibleSections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 160) current = section.id;
      }
      if (current) setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visibleSections]);

  const scrollTo = (id: string) => {
    setQuery("");
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <WaveStrip />

      {/* HERO */}
      <header className="relative overflow-hidden bg-navy px-5 pt-14 pb-16 text-cream sm:px-8 sm:pt-20 sm:pb-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-20 size-72 blob-a bg-sky opacity-15"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 bottom-0 size-80 blob-c bg-red opacity-15"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 right-1/4 size-40 blob-b bg-cream opacity-5"
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-sky uppercase sm:text-xs">
            Centro Acadêmico de Psicologia · UnDF
          </p>
          <h1 className="mt-4 text-6xl leading-[0.95] sm:text-8xl">
            <span className="block text-cream">Guia do</span>
            <span className="block text-sky">Calouro</span>
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-cream/90">
            Chegou com dúvida? Pesquisa aqui. Reunimos o que a gente gostaria de saber no primeiro
            dia de Psicologia na UnDF.
          </p>

          <div className="mt-8">
            <label htmlFor="busca" className="sr-only">
              Buscar no guia
            </label>
            <div className="flex items-center gap-3 rounded-full bg-card px-5 py-3 shadow-[var(--shadow-lift)] sm:px-6 sm:py-4">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="size-5 shrink-0 text-navy"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
                <path
                  d="M20 20L16.5 16.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                id="busca"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex.: passe livre, faltas, portal, auxílio…"
                className="w-full bg-transparent text-[1rem] text-navy placeholder:text-muted-foreground focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  aria-label="Limpar busca"
                  onClick={() => setQuery("")}
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-red text-sm font-bold text-cream"
                >
                  ×
                </button>
              ) : null}
            </div>
            <p aria-live="polite" className="mt-3 min-h-6 text-sm font-medium text-sky">
              {query
                ? `${visibleSections.length} ${visibleSections.length === 1 ? "seção encontrada" : "seções encontradas"}`
                : ""}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <button
                key={chip.target}
                type="button"
                onClick={() => scrollTo(chip.target)}
                className="rounded-full border border-sky/40 bg-cream/10 px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-sky hover:text-navy"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* NAV STICKY */}
      <div
        ref={navRef}
        className="sticky top-0 z-40 border-b border-sand/70 bg-cream/85 backdrop-blur-md"
      >
        <nav aria-label="Seções do guia" className="mx-auto max-w-4xl">
          <ul className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  aria-current={activeId === section.id ? "true" : undefined}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeId === section.id
                      ? "bg-navy text-cream"
                      : "bg-card text-navy hover:bg-sand"
                  }`}
                >
                  {section.nav}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-1 w-full bg-sand">
          <div
            className="h-full bg-red transition-[width] duration-150"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* SEÇÕES */}
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        {visibleSections.length === 0 ? (
          <div className="card-soft p-8 text-center" style={{ boxShadow: "var(--shadow-soft)" }}>
            <span
              aria-hidden="true"
              className="mx-auto mb-4 block size-16 blob-a bg-sky opacity-70"
            />
            <h2 className="text-3xl text-navy">Nada por aqui</h2>
            <p className="mx-auto mt-2 max-w-sm text-[1rem] leading-relaxed text-muted-foreground">
              Tenta outra palavra, ou chama a gente no{" "}
              <A href="https://instagram.com/capsiundf">@capsiundf</A> que a gente responde.
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {visibleSections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <FadeUp>
                  <SectionHeading
                    index={sections.findIndex((item) => item.id === section.id)}
                    title={section.title}
                  />
                </FadeUp>
                <FadeUp delay={80} className="mt-6">
                  {section.content}
                </FadeUp>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* RODAPÉ */}
      <footer className="bg-navy px-5 py-14 text-cream sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-4xl text-cream">CAPsi UnDF</p>
          <p className="mt-2 text-[0.98rem] text-cream/85">
            Centro Acadêmico de Psicologia da Universidade do Distrito Federal
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-sky">
            <a
              href="https://instagram.com/capsiundf"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-75"
            >
              @capsiundf
            </a>
            <a
              href="https://academico.undf.edu.br/core/login"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-75"
            >
              Portal Discente
            </a>
            <a
              href="https://portal.undf.edu.br/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:opacity-75"
            >
              Portal de Serviços
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-md text-xs leading-relaxed text-cream/65">
            Guia feito por estudantes, para estudantes. Informações sujeitas a alteração: confira
            sempre os canais oficiais da universidade.
          </p>
        </div>
      </footer>

      {showTop ? (
        <button
          type="button"
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-5 z-50 grid size-12 place-items-center rounded-full bg-red text-cream shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-1"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
            <path
              d="M12 19V5M12 5l-6 6M12 5l6 6"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
