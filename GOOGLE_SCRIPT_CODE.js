// Código para colar no Google Apps Script
// Acesse: https://script.google.com
// Crie um novo projeto e cole este código:

function doPost(e) {
  try {
    // Pegar a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Pegar os dados enviados
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar nova linha na planilha
    sheet.appendRow([
      data.name,           // Nome
      data.email,          // Email
      data.message,        // Mensagem
      data.timestamp,      // Data/Hora
      data.source          // Origem
    ]);
    
    // Enviar email de notificação
    sendNotificationEmail(data);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success', 
        message: 'Lead salvo com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error', 
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationEmail(data) {
  const emailBody = `
    Novo Lead - Galeria Exclusiva
    
    Nome: ${data.name}
    Email: ${data.email}
    Mensagem: ${data.message}
    Data: ${data.timestamp}
    Origem: ${data.source}
  `;
  
  // Enviar email para contact@shakirabr.com
  MailApp.sendEmail({
    to: 'contact@shakirabr.com',
    subject: 'Novo Lead - Galeria Exclusiva',
    body: emailBody
  });
}

// Função para testar (opcional)
function doGet() {
  return ContentService.createTextOutput('Google Apps Script funcionando!');
} 