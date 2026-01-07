<script setup>

</script>

<template>
  <section class="about">
    <div class="container">
      <h1 class="title">A propos</h1>
      <p>
        Fondé en 2025 par un passionné, Gentlemen’s Golf n'est pas seulement un club, c'est un cercle privé dédié à l'essence même du jeu. Nous réunissons des hommes de culture qui partagent une vision commune : celle d'un golf où l'étiquette, le code vestimentaire et le respect rigoureux des traditions sont sacrés.

        Bien plus qu'une pratique sportive, nous cultivons un art de vivre. Notre communauté sélective, fondée sur la bienveillance et l'élégance relationnelle, se retrouve lors d'événements privilégiés :

        Rencontres mensuelles sur les greens.

        Repas conviviaux pour prolonger l'échange.

        Un voyage annuel d'exception.
      </p>

      <h2 class="subtitle">Contact</h2>
      <ul class="dash-list">
        <li>
          Tél : +00 00 000 00 00
        </li>
        <li>
          Email : test@test.test
        </li>
        <li>
          Personne de contact : Bob
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 4rem 2rem;
  background-color: var(--secondary);
  color: var(--black);
  line-height: 2;
}

.container {
  max-width: 45ch;
  margin-inline: auto;
}

@media (min-width: 768px) {
  .container {
    max-width: 60ch;
  }
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin:0;
  padding-bottom: 2rem;
}

.subtitle {
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 600;
  margin:0;
  padding-top: 4rem;
  padding-bottom: 2rem;
  text-align: center;
}

p, li, ol{
  margin-top: 1em;
  font-size: 1.1rem;
}

.dash-list {
  list-style-type: "- ";
  padding-left: 1.5rem;
  margin:0;
}

</style>