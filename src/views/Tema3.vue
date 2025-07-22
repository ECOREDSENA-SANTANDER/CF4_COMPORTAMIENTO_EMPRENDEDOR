<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores financieros

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Punto de equilibrio



    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Tasa Interna de Oportunidad (TIO)



    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Valor Actual Neto (VAN) o Valor Presente Neto (VPN)



    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4  Tasa Interna de Retorno (TIR)


      

</template>

<script>
export default {
  name: 'Tema3',
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
