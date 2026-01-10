export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    author: string
    readingTime: string
    category: string
    image: string
    content: string
}

export const blogPosts: BlogPost[] = [
    {
        slug: "por-que-tu-pyme-necesita-un-chatbot",
        title: "Por qué tu PYME necesita un chatbot en 2026",
        description: "Descubre cómo un chatbot puede transformar la atención al cliente de tu negocio, reducir costes y aumentar las ventas. Guía completa para PYMES.",
        date: "2026-01-10",
        author: "I4PYMES",
        readingTime: "8 min",
        category: "Automatización",
        image: "/blog/chatbot-pyme.png",
        content: `
## Mira, te voy a ser sincero

El otro día estaba hablando con un cliente que tiene una tienda de ropa online. Me contaba que perdía ventas porque la gente le escribía a las 10 de la noche preguntando tallas, y claro, él estaba cenando con su familia. Normal, ¿no?

Pero aquí viene lo interesante: esas ventas se iban a la competencia. Así de simple.

Y no es un caso aislado. Hemos visto esto decenas de veces. La gente quiere respuestas YA. No mañana, no en 2 horas. Ahora.

---

## Vale, pero ¿qué es un chatbot exactamente?

Seguramente te imaginas esos bots horribles de hace años que solo sabían decir "No he entendido tu consulta, por favor reformula". Qué desastre, ¿verdad?

Bueno, eso ha cambiado bastante. Los chatbots actuales con IA son otra historia:

- Pillan el contexto de lo que les dices (si preguntas por un producto y luego dices "¿y en azul?", entienden que sigues hablando del mismo producto)
- Van aprendiendo con el tiempo
- Responden como una persona normal, no como un robot

Lo mejor es que se pueden conectar con tu inventario, tu CRM, tu sistema de reservas... Lo que tengas.

---

## ¿Por qué debería importarme esto?

Mira, no te voy a soltar el rollo típico de "la transformación digital es fundamental para tu negocio". Eso ya lo has oído mil veces.

Te cuento casos reales que hemos visto:

### Están ahí cuando tú no puedes estar

Un cliente nuestro con una clínica dental nos dijo que el 40% de las citas se pedían fuera de horario. Antes las perdía. Ahora el chatbot las gestiona solito y él se levanta con la agenda llena.

### La gente odia esperar

Esto es así. Si alguien tiene que esperar más de 5 minutos para una respuesta, muchos se van. Con un chatbot, la respuesta es instantánea. Aunque sea un "Ahora mismo te paso con alguien del equipo", al menos sienten que les están atendiendo.

### Te filtra el ruido

¿Cuántas veces te escriben para preguntarte el horario? ¿O dónde estáis? ¿O si aceptáis tarjeta? El chatbot responde eso automáticamente y solo te pasa las consultas que de verdad necesitan tu atención.

---

## ¿Esto sirve para mi tipo de negocio?

Depende, pero en general funciona bien para:

| Si tienes... | El chatbot puede... |
|--------------|---------------------|
| Una tienda online | Ayudar con pedidos, recomendar productos, gestionar devoluciones |
| Una clínica o consulta | Agendar citas, responder dudas frecuentes |
| Una inmobiliaria | Filtrar qué busca cada cliente y agendar visitas |
| Un restaurante | Tomar reservas, mostrar el menú, dar indicaciones |

Básicamente, si recibes las mismas preguntas una y otra vez, un chatbot te va a quitar mucho trabajo de encima.

---

## ¿Y cuánto cuesta esto?

Buena pregunta. Y te voy a dar una respuesta sincera: depende de lo que necesites.

Hay chatbots gratuitos que vienen con algunas plataformas, pero son bastante limitados. Sirven para cosas muy básicas.

Un chatbot personalizado, entrenado específicamente para tu negocio, con tu tono, tu información y tus productos... eso ya es otro nivel. Y sí, cuesta más, pero los resultados son muy diferentes.

Si te interesa saber qué encajaría mejor en tu caso, podemos hacer una videollamada rápida (sin compromiso, eh) y te cuento opciones concretas.

---

## En resumen

No te voy a decir que un chatbot te va a cambiar la vida. Pero sí te puede quitar un montón de trabajo repetitivo, atender a tus clientes cuando tú no puedes, y evitar que se te escape gente por no responder a tiempo.

¿Que si merece la pena? Pues depende de tu situación. Pero si recibes consultas fuera de horario, o si tu equipo pierde tiempo respondiendo lo mismo todo el rato, probablemente sí.

---

## ¿Te pica la curiosidad?

Si quieres ver cómo funcionaría esto en tu negocio específico, escríbenos. No mordemos y tampoco somos de esos que te van a llamar 47 veces después.

**[Reserva una llamada rápida](https://calendly.com/ia4pymes/30min)** y lo hablamos sin ñoñerías.
    `.trim(),
    },
    {
        slug: "automatizar-tareas-repetitivas-guia-pymes",
        title: "Automatizar tareas repetitivas: guía práctica para PYMES",
        description: "Descubre qué tareas de tu negocio puedes automatizar hoy mismo, cuánto tiempo puedes ahorrar y por dónde empezar sin liarte.",
        date: "2026-01-10",
        author: "I4PYMES",
        readingTime: "7 min",
        category: "Automatización",
        image: "/blog/automatizacion-tareas.png",
        content: `
## Vamos al grano

¿Cuántas horas a la semana pierdes haciendo cosas que podrían hacerse solas? No me refiero a cosas complicadas. Hablo de copiar datos de un sitio a otro, enviar el mismo email 50 veces, o actualizar el stock manualmente.

La mayoría de PYMES con las que hablamos pierden entre 10 y 20 horas semanales en tareas repetitivas. Eso son más de 40 horas al mes. Un empleado a tiempo parcial, básicamente.

Y lo peor: muchas de estas tareas se pueden automatizar en cuestión de días.

---

## ¿Qué se puede automatizar exactamente?

Te pongo ejemplos concretos que hemos implementado en negocios reales:

### Emails automáticos (pero que no parezcan robots)

Un cliente nuestro con una academia de formación mandaba emails de confirmación a mano. Cada vez que alguien se apuntaba a un curso, tocaba escribir el email, adjuntar el PDF con la info, y darle a enviar.

Ahora eso va solo. El alumno se apunta, recibe el email con toda la info personalizada (su nombre, el curso, las fechas, el link de acceso), y el dueño ni se entera hasta que revisa los informes.

### Actualización de inventario

Si vendes en varios canales (web + tienda física, o web + Amazon), sabes el follón que es mantener el stock actualizado. Vendes algo en la tienda y tienes que correr a quitarlo de la web.

Hay formas de que eso se sincronice automáticamente. Sin errores humanos, sin "ups, lo vendí dos veces".

### Respuestas a preguntas frecuentes

Esto conecta con el tema de los chatbots, pero va más allá. Puedes montar sistemas que detecten preguntas tipo en tus emails y sugieran (o envíen directamente) respuestas predefinidas.

### Generación de facturas y albaranes

Si todavía estás haciendo facturas a mano en Word o Excel... bueno, no te voy a juzgar, pero hay vida más allá. Sistemas que generan la factura automáticamente cuando se cierra una venta, la envían al cliente y la guardan organizada.

### Recordatorios y seguimientos

Ese cliente que te pidió presupuesto hace dos semanas y no contestó. ¿Le has escrito? Probablemente no, porque se te olvidó.

Un sistema automatizado puede enviar un recordatorio amable a los X días, y otro a los X+7, sin que tengas que acordarte de nada.

---

## "Vale, suena bien, pero ¿cuánto tiempo ahorro realmente?"

Depende de tu negocio, obviamente. Pero te doy referencias reales:

| Tarea | Tiempo manual | Tiempo automatizado | Ahorro |
|-------|---------------|---------------------|--------|
| Emails de confirmación (100/mes) | ~8 horas | 0 horas | 8h/mes |
| Actualización de stock | ~5 horas/semana | ~30 min revisión | 18h/mes |
| Responder FAQs | ~10 horas/semana | ~2 horas | 32h/mes |
| Generación de facturas | ~4 horas/semana | 0 horas | 16h/mes |

¿Ves por dónde voy? Estamos hablando de recuperar días enteros cada mes. Días que puedes dedicar a vender, a pensar estrategia, o simplemente a no quemarte.

---

## Por dónde empezar (sin volverte loco)

El error típico es querer automatizarlo todo de golpe. No hagas eso. Empieza por lo que más duele:

1. **Identifica la tarea que más odias** (o la que más tiempo te quita)
2. **Pregúntate: ¿esto sigue un patrón?** Si siempre haces los mismos pasos, probablemente se puede automatizar
3. **Empieza pequeño** - Una sola automatización bien hecha vale más que 10 a medias

Y un consejo: no necesitas ser técnico para esto. Hay herramientas que conectan cosas sin tocar código, y para lo más específico, ahí entramos nosotros.

---

## Lo que no te cuentan

Automatizar no es magia. Hay cosas importantes que debes saber:

- **Requiere configuración inicial**: No es "click y ya funciona". Hay que pensar bien qué quieres que haga y cómo.
- **A veces falla**: Como todo. Pero un buen sistema te avisa cuando algo no va bien.
- **No sustituye el criterio humano**: Automatizas lo repetitivo, no las decisiones importantes.

Dicho esto, una vez que lo tienes montado, funciona. Y funciona mientras tú duermes, mientras estás de vacaciones, mientras cenas con tu familia.

---

## ¿Te suena esto?

Si has llegado hasta aquí, probablemente estés pensando "sí, yo pierdo tiempo en esto". Normal. Le pasa al 90% de las PYMES que conocemos.

La diferencia está en quién decide hacer algo al respecto.

Si quieres que echemos un vistazo a tu caso concreto y te digamos qué podrías automatizar (y qué no merece la pena), escríbenos. Es gratis y sin compromiso.

**[Hablamos cuando quieras](https://calendly.com/ia4pymes/30min)** - Prometemos no intentar venderte cosas que no necesitas.
    `.trim(),
    },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
