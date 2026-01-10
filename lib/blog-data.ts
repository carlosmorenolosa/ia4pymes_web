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
]

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
