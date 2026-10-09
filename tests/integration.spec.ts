import { test, expect } from '@playwright/test';

test.describe('Flujo Integrado: API y UI', () => {

  test('Crear usuario via API y verificar en UI', async ({ request, page }) => {
    // 1. PETICIÓN API: Crear un recurso rápidamente sin pasar por la interfaz
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Mi prueba automatizada',
        body: 'Contenido creado desde la API',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.title).toBe('Mi prueba automatizada');

    // 2. PRUEBA UI: Navegar a la aplicación y validar un elemento en pantalla
   // await page.goto('https://example.com');
    
    // Playwright espera automáticamente a que el elemento esté listo
    //const pageTitle = page.getByRole('heading', { level: 1 });
    //await expect(pageTitle).toContainText('Example Domain');
  });

});