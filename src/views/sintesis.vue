<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 Los fundamentos financieros para emprender se estructuran en tres áreas clave: el presupuesto de costos, que permite estimar los costos totales, calcular el costo unitario y definir el precio de venta; los estados financieros, que proporcionan información sobre la situación económica inicial y los movimientos de efectivo a través del balance y el flujo de caja; y los indicadores financieros, que permiten evaluar la viabilidad del proyecto mediante herramientas como el punto de equilibrio, la Tasa Interna de Oportunidad (TIO), el Valor Actual Neto (VAN o VPN) y la Tasa Interna de Retorno (TIR). Estos elementos son fundamentales para tomar decisiones informadas sobre la rentabilidad y sostenibilidad del emprendimiento.
    
    .tarjeta.tarjeta--gris.p-4.mb-4
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Esquema de los fundamentos financieros para emprender, organizados en tres categorías: presupuesto de costos, estados financieros e indicadores financieros.")
    
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
