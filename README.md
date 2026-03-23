

🍔 DevClub Burger - Conversor e Filtro de Cardápio
Este projeto é uma aplicação web interativa que simula o gerenciamento de um cardápio de hamburgueria. O foco principal foi o desenvolvimento de lógica de programação em JavaScript Vanilla, explorando a manipulação dinâmica do DOM e o uso estratégico de métodos de array para processar dados.

🛠️ Tecnologias e Ferramentas Utilizadas
1. HTML5 (Estruturação)
Tags Semânticas: Uso de  e  para listagem de produtos.

Interatividade: Criação de botões (button) com classes específicas para gatilhos de eventos.

External Fonts: Integração com Google Fonts utilizando as famílias Mochiy Pop P One, Montserrat, Oswald e Roboto.

2. CSS3 (Estilização e Layout)
CSS Grid Layout: Utilizado no ul para criar uma vitrine de produtos organizada em colunas (grid-template-columns).

Flexbox: Aplicado no .container-button para alinhar e centralizar os controles do menu.

Design Responsivo: Uso de max-width e unidades de medida para garantir que os cards dos hambúrgueres fiquem harmônicos.

Efeitos Visuais: Implementação de hover nos botões para melhorar a experiência do usuário (UX).

3. JavaScript ES6+ (Lógica de Negócio)
Este é o coração do projeto. Foram aplicados os quatro pilares de manipulação de dados:

forEach(): Utilizado na função showAll para iterar sobre o array de objetos e injetar o HTML dinamicamente na página.

map(): Empregado na função mapAllItems para criar um novo array com preços alterados (aplicação de 10% de desconto), sem modificar o array original.

filter(): Usado em filterAllItems para criar uma nova lista contendo apenas os produtos que possuem a propriedade vegan: true.

reduce(): Aplicado em sumAllItems para realizar o cálculo acumulativo de todos os preços, retornando um valor único (total do carrinho/menu).

Manipulação de DOM: Uso de document.querySelector e addEventListener para capturar as ações do usuário e atualizar a interface em tempo real.

4. Formatação de Dados
Intl.NumberFormat / toLocaleString: Implementação de uma função de formatação de moeda para converter valores numéricos simples em formato monetário brasileiro (R$ 00,00), garantindo um visual profissional aos preços.





Previa:


<img width="959" height="539" alt="image" src="https://github.com/user-attachments/assets/6f8a521c-bf63-48d4-af3f-00df850c4386" />



