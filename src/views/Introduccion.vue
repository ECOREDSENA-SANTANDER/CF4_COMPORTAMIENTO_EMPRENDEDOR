<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")  
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/intro/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La creación de una empresa requiere, como punto de partida, la elaboración de estudios previos que permitan evaluar con objetividad la viabilidad de la idea de negocio, este análisis se fundamenta tanto en el comportamiento del mercado como en los aspectos financieros, proporcionando al emprendedor una base sólida para la toma de decisiones estratégicas. #[br] #[br]
        p.mb-0 Una organización orientada al futuro debe ser capaz de adaptar su plan de acción a las dinámicas cambiantes del entorno comercial, con el fin de garantizar su sostenibilidad. En este contexto, el estudio de viabilidad se convierte en una herramienta clave, al permitir anticipar resultados y definir si un proyecto puede o no ser ejecutado con éxito.

    .bg1.p-4.mb-4(data-aos="fade-down")
      p.mb-0 Por ello, es fundamental que quien desea emprender adquiera conocimientos integrales en materia empresarial, dominando conceptos como el presupuesto de costos, los estados financieros y los principales indicadores económicos. Estos elementos son indispensables para estructurar, evaluar y poner en marcha una propuesta que responda de manera efectiva a las exigencias del mercado.

    .row.justify-content-center.align-items-center(data-aos="fade")     
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
