<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.colori
          i.fas.fa-info
      h1 Introducción
    p En este componente de formación se abordarán los conceptos básicos que permitirán identificar la evaluación del cliente, técnicas de venta, gestión de la información, normas de seguridad y salud en el trabajo.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Kuv4oG2BcN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
