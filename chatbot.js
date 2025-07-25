// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
const fs = require('fs'); // Adicione no topo do arquivo, se ainda não tiver
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        // Enviar a logo antes de qualquer mensagem
        const logoPath = './img/logo.png';
        if (fs.existsSync(logoPath)) {
            try {
                const media = await MessageMedia.fromFilePath(logoPath);
                await client.sendMessage(msg.from, media);
            } catch (err) {
                await client.sendMessage(msg.from, 'Erro ao enviar a logo. Verifique o formato da imagem PNG.');
            }
        } else {
            await client.sendMessage(msg.from, 'Logo não encontrada. Verifique se o arquivo ./img/logo.png existe.');
        }

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + 'ou o assistente virtual da Galz Games. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - conheça nosso site\n2 - proximo evento\n3 - atrações confirmadas 2025\n4 - duvidas frequentes\n5 - inscrições para torneios'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'conheca nosso evento\n\nnosso site tem tudo que voce precisa saber,https://galzgames.retrogamerday.com.br,\n\n retrogamerday e um evento anual de mostra de video games retro\n\nAlém disso, temos uma ampla variedades de atividades no evento,tais como torneios, board games e card games.\n\nVocê pode conferir todas as informações no nosso site.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'COMO FUNCIONA?\nÉ muito simples.\n\n1º acesse nosso site para mais informações.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link: https://galzgames.retrogamerday.com.br');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'os ingressos serao vendidos no dia 12 de outubro no local do evento.\n\nLocal: Rua Epitacio Pessoa, 53 - Centro, Santa Rita - PB, Horário: das 12h às 18h');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para mais informações: https://galzgames.retrogamerday.com.br');
        await client.sendMessage(msg.from, 'siga nosso instagram: https://www.instagram.com/galzgamesrgd/');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'atracoes confirmadas 2025: \n\n- Torneios de jogos retro \n- Faz de conta RPG com o professor NEEMIAS\n- Exposição de consoles clássicos\n- Área de free play\n\nFique ligado para mais novidades!');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'duvidas visite nosso site: https://galzgames.retrogamerday.com.br');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode nos seguir no instagram @galzgames ou visitar nosso site para mais informações.\n\nAlém disso, você pode entrar em contato conosco pelo WhatsApp para esclarecer suas dúvidas.');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link: https://galzgames.retrogamerday.com.br');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'as inscrições para torneios estão abertas no nosso site.\n\nVocê pode se inscrever para os torneios de jogos de celular com uma taxa de R$ 20,00 (vinte reais) por pessoa e participar de uma competição emocionante!\n\nPara mais informações, visite nosso site: https://galzgames.retrogamerday.com.br/inscrissoes.html');

        // Enviar a logo após a mensagem
        await delay(2000); // Pequeno delay opcional
        const logoPath = './img/logo.png'; // Caminho relativo para PNG
        if (fs.existsSync(logoPath)) {
            try {
                const media = await MessageMedia.fromFilePath(logoPath);
                await client.sendMessage(msg.from, media);
            } catch (err) {
                await client.sendMessage(msg.from, 'Erro ao enviar a logo. Verifique o formato da imagem PNG.');
            }
        } else {
            await client.sendMessage(msg.from, 'Logo não encontrada. Verifique se o arquivo ./img/logo.png existe.');
        }
        await delay(1000); //Delay de 1000 milisegundos mais conhecido como 1 segundo
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000);
        await client.sendMessage(msg.from, 'a Equipe Galz Games agradece seu contato\n até logo!');

    }








});