🌙 Pijamoon

Pijamoon é uma loja online de pijamas desenvolvida como projeto de integração entre back-end em Java (Spring Boot) e front-end em HTML, CSS e JavaScript.
O objetivo é criar uma aplicação web simples, mas completa, que exibe e gerencia produtos conectados a uma API REST.

🚀 Tecnologias utilizadas
🧠 Back-end

Java 17+

Spring Boot

Spring Web

Spring Data JPA

Banco de dados H2 (em memória)

Maven

Lombok

🎨 Front-end

HTML5

CSS3

JavaScript (consumo de API via fetch())

🗂 Estrutura do projeto
/pijamoon-backend
   ├── controller/
   ├── model/
   ├── repository/
   ├── resources/
   └── pom.xml

/pijamoon-frontend
   ├── index.html
   ├── css/
   └── js/
✨ Funcionalidades

✅ Listagem de produtos (pijamas)
✅ Cadastro de novos produtos via API
✅ Comunicação entre front-end e back-end
✅ Interface simples e responsiva
✅ Banco de dados H2 com console para testes

⚙ Como executar o projeto
⿡ Clonar o repositório
git clone https://github.com/seuusuario/pijamoon.git
⿢ Rodar o back-end

Entre na pasta do projeto Spring Boot:

cd pijamoon-backend
mvn spring-boot:run

A API estará disponível em:
👉 http://localhost:8080/api/pijamas

⿣ Rodar o front-end

Abra o arquivo index.html da pasta pijamoon-frontend direto no navegador
ou use uma extensão como Live Server no VS Code.

🧪 Teste rápido

Com o back-end rodando, acesse:

http://localhost:8080/h2-console

Use o JDBC URL:

jdbc:h2:mem:testdb

Adicione alguns produtos manualmente e veja o front-end exibir os pijamas cadastrados automaticamente.

💡 Próximos passos

🛒 Implementar carrinho de compras

👤 Criar autenticação de usuários

🗄 Integrar com banco de dados real (MySQL/PostgreSQL)

☁ Hospedar back-end (Render/AWS) e front-end (Vercel/Netlify)

📱 Tornar o site totalmente responsivo

👨‍💻 Autores

Gabriel Amaral – Back-end (Spring Boot)

Riquelme Teixeira – Front-end (HTML, CSS, JS)

Projeto criado com fins educacionais e demonstrativos para a loja Pijamoon 🌙✨
