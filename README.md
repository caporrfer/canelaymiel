# Canela y Miel La Monacilla

Web estática, visual y mobile-first para Canela y Miel La Monacilla. El proyecto se ha creado desde cero con Astro, TypeScript y CSS propio.

## Desarrollo

```bash
npm install
npm run dev
```

Validación completa:

```bash
npm test
```

## Actualizar contenidos

- Los datos del negocio, la carta, los menús semanales y las reseñas están en `src/data/site.ts`.
- Las fotografías oficiales están en `src/assets/photos/` y Astro genera tamaños optimizados al compilar.
- Cada menú semanal incluye `start` y `end` en formato `YYYY-MM-DD`. La página determina su vigencia con la fecha de Madrid en el navegador.
- Los productos marcados con un precio que empieza por `+` se muestran como suplementos.

## Fuentes consultadas

- Perfil oficial: https://www.instagram.com/canelaymiel.lamonacilla/
- Anuncio de comidas y horario ampliado: https://www.instagram.com/canelaymiel.lamonacilla/p/Dc-4Z5KMRT_/
- Ficha del local y carta fotografiada: https://maps.app.goo.gl/Yxa3BbrGTRFca2QS6
- Las fotografías promocionales proceden de publicaciones del perfil oficial del negocio.
- Las reseñas conservan la atribución y enlazan a su publicación en Google Maps.

## Confirmaciones pendientes antes de publicar

- Confirmar que todos los precios de la carta fotografiada en agosto de 2026 siguen vigentes.
- Confirmar la transcripción de los platos de cada menú semanal.
- Completar información oficial sobre alérgenos e ingredientes cuando el local la facilite.
- Añadir aviso legal y política de privacidad cuando se conozcan los datos del titular y el alojamiento final.
- Sustituir la marca tipográfica por un archivo de logotipo oficial si se facilita uno de calidad suficiente.
