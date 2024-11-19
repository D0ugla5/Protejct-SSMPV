Here it needs to have all of the following things

\|||||||||||||||||||||||||||||||||||||||||||||||||||\

User creation (On NORMAL or ADM mode);

*Detail some of this above only the ADM can do it:
User can be edited;
User can be listed;
And Removed;

Users functionality:
They can login;
Suggestion posts creation;
Suggestion posts edited;
Suggestion posts voted (As good or not too good);
Suggestion posts can be marked as concluded by administrators;
Suggestion posts can be removed, (by ADM only? May be);

\||||||||||||||||||||||||||||||||||||||||||||||||||\

Things that i can add to it 

Chat on the suggestions.

|||||||||||||||||||||||||||||||||||||||||||||||||||||

\.I'm learning about auth, the form on doing verification and authentication in login forms./
Now i'm learning how to connect the back-end with the front in TS with JS >_<

Usuário tenta logar:

    O usuário insere suas credenciais (usuário e senha) em um formulário no frontend.
    O frontend envia uma requisição HTTP para o backend NestJS.

Backend NestJS recebe a requisição:

    O controlador NestJS recebe a requisição e valida as credenciais.
    O serviço NestJS acessa o MongoDB para buscar o usuário com as credenciais fornecidas.
    A senha fornecida é comparada com a hash da senha armazenada no banco de dados.

Autenticação:

    Se as credenciais forem válidas, o backend gera um token JWT (JSON Web Token), que contém informações sobre o usuário autenticado.
    O token JWT é enviado para o frontend.

Frontend armazena o token:

    O frontend armazena o token em local seguro (localStorage, sessionStorage ou em um cookie).

Requisições subsequentes:

    O frontend inclui o token JWT no cabeçalho de todas as requisições subsequentes.
    O backend valida o token para verificar se o usuário está autenticado.