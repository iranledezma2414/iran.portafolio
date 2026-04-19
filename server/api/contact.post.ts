export default defineEventHandler(async (event) => {
  // Leemos los datos que vienen del formulario
  const body = await readBody(event);
  
  // AQUÍ pegas la URL que copiaste de Google
  const GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbxW4P3oktMZ4TthAFzfCTx22c7W86lX7QONuejBNbrWC4ou3I2oWJrnM4ykLrtChU4A/exec';

  try {
    const response = await $fetch(GOOGLE_URL, {
      method: 'POST',
      body: body
    });
    return response;
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error al enviar a Google Sheets'
    });
  }
});