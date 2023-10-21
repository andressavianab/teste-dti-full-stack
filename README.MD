# PET APP 🐶

Essa é uma solução para o teste full stack da [dti digital](https://www.dtidigital.com.br/).

## Índice

- [Visão geral](#visão-geral)
- [O teste](#o-teste)
- [Como rodar](#como-rodar)
- [Premissas assumidas](#premissas-assumidas)
- [Decisões de projeto](#decisões-de-projeto)
- [Outras informações importantes](#outras-informações-importantes)
- [Author](#author)

## Visão geral

### O teste

Senhor Eduardo é proprietário de um canil em Belo Horizonte, ele trabalha com
diversas raças, pequenas e grandes. Eduardo gosta que seus cães estejam sempre
arrumados, felizes e cheirosos.
No bairro do canil, para realizar o banho nos animais, existem três petshops: Meu
Canino Feliz, Vai Rex, e ChowChawgas. Cada um deles cobra preços diferentes para
banho em cães pequenos e grandes e o preço pode variar de acordo com o dia da
semana.
- Meu Canino Feliz: Está distante 2km do canil. Em dias de semana o banho para
cães pequenos custa R$20,00 e o banho em cães grandes custa R$40,00.
Durante os finais de semana o preço dos banhos é aumentado em 20%.
- Vai Rex: Está localizado na mesma avenida do canil, a 1,7km. O preço do banho
para dias úteis em cães pequenos é R$15,00 e em cães grandes é R$50,00.
Durante os finais de semana o preço para cães pequenos é R$ 20,00 e para os
grandes é R$ 55,00.
- ChowChawgas: Fica a 800m do canil. O preço do banho é o mesmo em todos os
dias da semana. Para cães pequenos custa R$30 e para cães grandes R$45,00.
Apesar de se importar muito com seus cãezinhos, Eduardo quer gastar o mínimo
possível. Desenvolva uma solução para encontrar o melhor petshop para levar os cães.
O melhor petshop será o que oferecer menores preços, em caso de empate o melhor é
o mais próximo do canil.

Entrada:
data, quantidade de cães pequenos e quantidade de cães grandes

Saída:
Nome do melhor canil e preço total dos banhos.

### Como rodar

Clone o repositório e instale as dependências:

Back-end 🖥️

```bash
cd teste-full-stack/backend
npm install
cp .env.example .env # ajuste os valores de acordo com o seu ambiente
npm run start
```

Front-end 🖌️

```bash
cd teste-full-stack/frontend
npm install
cp .env.example .env.local # ajuste os valores de acordo com o seu ambiente e a porta definida no arquivo .env do backend
npm run dev
```

### Premissas Assumidas:

- Os usuários terão uma conexão de internet estável.
- O sistema assume que o banco de dados usado seja o mysql e um banco seja criado com o mesmo nome definido na variável de ambiente, no arquivo .env.
- O sistema é projetado para funcionar em navegadores modernos, como Chrome, Firefox e Edge.

### Decisões de Projeto:

- Escolhi o framework React para o desenvolvimento da interface do usuário devido à sua flexibilidade e popularidade, enquanto utilizei o ambiente de tempo de execução Node.js no lado do servidor. O Node.js permite que o aplicativo seja executado no servidor, tornando-o altamente escalável e eficiente em termos de recursos.
- Optei por armazenar os dados no banco de dados MySQL devido à sua escalabilidade e capacidade de manipulação de grandes conjuntos de dados. Essa escolha foi feita com a consideração de que, caso o aplicativo precise que mais dados sejam armazenados, o MySQL oferece a capacidade de dimensionar verticalmente e acomodar volumes crescentes de informações de forma eficiente.
- Adotei padrão MVC (Model-View-Controller) para a organização do código-fonte, visando uma estrutura mais modular e fácil de manter.

### Outras Informações Importantes:

- Certifique-se de configurar corretamente o arquivo de ambiente (.env) com as variáveis de configuração necessárias.
- Além da rota principal do calculo do melhor custo beneficio de petshop (/calc), adicionei rotas do tipo post, put, delete e get, visando possíveis mudanças nos preços, localidade ou até mesmo adição de algum novo petshop.

1. Rota POST "/petshop/save":

Esta rota permite adicionar um novo petshop ao banco de dados. Ela espera receber os dados do petshop no corpo da solicitação (name, location, small_week_price, big_week_price, small_weekend_price, big_weekend_price). Antes de criar o registro, a rota verifica se os campos obrigatórios foram fornecidos e se são valores numéricos válidos. Se tudo estiver correto, ela cria um novo registro no banco de dados e retorna uma mensagem de sucesso com o código de status 201.

2. Rota GET "/petshops":

Esta rota permite buscar todos os petshops no banco de dados e retorná-los como uma lista JSON no corpo da resposta. Os petshops são recuperados do banco de dados e enviados como resposta com um código de status 200.

3. Rota DELETE "/petshop/:id":

Esta rota permite excluir um petshop com base no ID fornecido como parâmetro na URL. Primeiro, ela verifica se o ID fornecido é um número válido. Em seguida, tenta encontrar o petshop correspondente no banco de dados. Se o petshop existir, ele é excluído e uma mensagem de sucesso é retornada com o código de status 200.

4. Rota PUT "/petshop/:id":

Esta rota permite atualizar os dados de um petshop com base no ID fornecido como parâmetro na URL. Ela verifica se o ID fornecido é válido e procura o petshop correspondente no banco de dados. Em seguida, permite a atualização dos campos (name, location, small_week_price, big_week_price, small_weekend_price, big_weekend_price) com base nos dados fornecidos no corpo da solicitação. Após a atualização, ela retorna uma mensagem de sucesso com o código de status 200.

## Author 🖋️

- linkedin - [Andressa Viana](https://www.linkedin.com/in/andressavbatista/)
- github - [Andressa Viana](https://github.com/andressavianab)
