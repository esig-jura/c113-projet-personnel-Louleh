<script setup>

</script>

<template>
  <section class="membership">
    <div class="container">
      <h1 class="title">Devenir membre</h1>
      <p>
        Rejoindre Gentlemen’s Golf, c’est intégrer un cercle privé où le golf se vit dans
        le respect des traditions et dans un esprit de convivialité raffinée. Notre club
        s’adresse aux amateurs passionnés qui souhaitent partager bien plus qu’un sport :
        une véritable expérience sociale et culturelle.
      </p>

      <h2 class="subtitle">Les avantages d’une adhésion</h2>
      <p>En devenant membre, vous accédez à :</p>
      <ul class="dash-list">
        <li>
          Un calendrier exclusif d’événements : rencontres mensuelles de golf, repas conviviaux et voyage annuel.
        </li>
        <li>
          Une communauté sélective d’hommes cultivés et bienveillants, partageant les mêmes valeurs de respect et
          d’élégance.
        </li>
        <li>
          Des formations personnalisées pour l’obtention de l’autorisation de parcours, en partenariat avec le Golf &
          Country Club de Neuchâtel.
        </li>
        <li>
          Un environnement où traditions, étiquette et codes vestimentaires sont respectés et valorisés.
        </li>
      </ul>

      <h2 class="subtitle">Conditions d’adhésion</h2>
      <ul class="dash-list">
        <li>
          L’accès au club se fait uniquement sur proposition et approbation des membres existants.
        </li>
        <li>
          La cotisation annuelle est fixée à CHF 250.-.
        </li>
        <li>
          L’adhésion est ouverte aux golfeurs confirmés comme aux futurs passionnés partageant nos valeurs.
        </li>
      </ul>

      <h2 class="subtitle">Comment rejoindre le Gentlemen’s Golf</h2>
      <ol>
        <li>
          Être recommandé par un membre du club.
        </li>
        <li>
          Présenter sa candidature pour approbation.
        </li>
        <li>
          Régler la cotisation annuelle après validation.
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.membership {
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