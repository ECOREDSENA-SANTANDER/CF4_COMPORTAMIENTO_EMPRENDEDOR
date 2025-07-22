<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estados financieros


    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")  
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los estados financieros son informes contables que reflejan la situación económica y los resultados operativos de una empresa en un periodo determinado, su función principal es proporcionar información clara, estructurada y verificable sobre el desempeño financiero del negocio, facilitando la toma de decisiones estratégicas por parte de directivos, inversionistas y entidades financieras. #[br] #[br]
        p.mb-0 En el contexto de un proyecto de emprendimiento, los estados financieros cumplen un papel clave, ya que permiten proyectar el comportamiento económico de la empresa durante su vida útil estimada. Estas proyecciones ayudan a anticipar cómo evolucionarán las necesidades de financiamiento, los costos y gastos operativos, los ingresos esperados, y las utilidades generadas a lo largo del tiempo.

    p.mb-4 Además, permiten identificar:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.color-2.fa-lista
          li
            i.fas.fa-circle-check
            span.mb-0 La cantidad de fondos que se requerirán para ejecutar y sostener el proyecto.
          li
            i.fas.fa-circle-check
            span.mb-0 El impacto que tendrán los costos financieros derivados del uso de créditos o capital externo.
          li
            i.fas.fa-circle-check
            span.mb-0 La estabilidad del modelo de ingresos y su capacidad para cubrir compromisos adquiridos.
          li
            i.fas.fa-circle-check
            span.mb-0 La generación de excedentes que puedan ser utilizados para reinversión o distribución de beneficios.
          li
            i.fas.fa-circle-check
            span.mb-0 La evolución de la rentabilidad y el comportamiento del patrimonio empresarial.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/2.png', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-5.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/3.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg1.tarjeta.p-4.p-lg-5
          .deco.mb-3
          p.mb-0 Los estados financieros son también fundamentales para calcular los indicadores financieros, como la rentabilidad, el margen de utilidad, el endeudamiento y la eficiencia operativa, los cuales son herramientas clave durante la evaluación financiera del proyecto. A través de estos análisis, es posible determinar si el negocio es viable, necesita ajustes o no resulta financieramente sostenible, los estados financieros también permiten visualizar de manera anticipada el desempeño futuro del proyecto, ayudando a minimizar riesgos, optimizar recursos y planificar estratégicamente el crecimiento de la empresa.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Balance inicial

    .bg2.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t2/4.png' alt='')
        .col-lg-7
          .p-4.px-lg-5
            p El balance inicial es un estado financiero que refleja la situación económica y patrimonial de una empresa en el momento previo al inicio de sus operaciones, es un documento fundamental para establecer la base contable del negocio, ya que muestra detalladamente los activos, pasivos y patrimonio con los que cuenta la organización al comenzar su actividad.
            p.mb-0 Su función principal es evidenciar los recursos disponibles (activos), las obligaciones que se deben cubrir (pasivos) y la participación de los socios o propietarios (patrimonio), permitiendo así una visión clara de la estructura financiera inicial del proyecto.

    p.mb-4 El balance inicial es clave para:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.color-2.fa-lista
          li
            i.fas.fa-circle-check
            span.mb-0 Identificar el capital disponible para operar.
          li
            i.fas.fa-circle-check
            span.mb-0 Evaluar la solidez financiera del emprendimiento desde su punto de partida.
          li
            i.fas.fa-circle-check
            span.mb-0 Servir como base para proyectar otros estados financieros, como el flujo de efectivo y el estado de resultados.
          li
            i.fas.fa-circle-check
            span.mb-0 Cumplir con requerimientos contables, tributarios y legales.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/5.png', alt='')

    p.mb-4 Un balance inicial está compuesto por:

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-4.col-md-5
              img(src='@/assets/curso/temas/t2/tarj1-1.svg', alt='')
          h4.text-center Activos
          p.text-center Bienes y derechos que posee la empresa (dinero en efectivo, cuentas por cobrar, inventarios, maquinaria, equipos, entre otros).
      .col-lg-4.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-4.col-md-5
              img(src='@/assets/curso/temas/t2/tarj1-2.svg', alt='')
          h4.text-center Pasivos
          p.text-center Deudas y obligaciones pendientes de pago (préstamos, cuentas por pagar, servicios por cancelar, etc.).
      .col-lg-4.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-4.col-md-5
              img(src='@/assets/curso/temas/t2/tarj1-3.svg', alt='')
          h4.text-center Patrimonio
          p.text-center Aportes de los socios o capital propio, resultado de la diferencia entre activos y pasivos.

    .bg3.p-3.mb-5
      h5.mb-0.texto-blanco.text-center La ecuación básica del balance es: activo = pasivo + patrimonio.

    p.mb-4 Este estado debe ser elaborado con precisión y con base en información real, ya que será el punto de partida para evaluar el desempeño financiero de la empresa a lo largo del tiempo.

    .tarjeta.bgg-1.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/cta.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2.tc-ac Balance inicial 
              p.mb-0 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video: 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=maVbxjCWgKQ')" target="_blank")
                span Ir al sitio
                i.fas.fa-play


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Flujo de caja o efectivo

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/6.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Toda empresa ofrece productos o servicios orientados a satisfacer las necesidades de un cliente específico. A cambio, recibe una compensación económica que constituye sus ingresos. Estos ingresos son fundamentales para garantizar la continuidad del negocio, mantener la estabilidad financiera y asegurar la rentabilidad esperada por los socios, así como el bienestar de los colaboradores. #[br] #[br]
        p.mb-0 Sin embargo, tener ingresos elevados no es suficiente para garantizar la sostenibilidad. Si los egresos, es decir, los costos y gastos operativos, superan los ingresos, la empresa podría enfrentar dificultades financieras que comprometan su permanencia en el mercado. Los egresos incluyen pagos por materias primas, salarios, servicios, suministros, mantenimiento y todos aquellos elementos necesarios para el funcionamiento diario del negocio.

    .bg1.p-4.mb-4(data-aos="fade")
      p.mb-0 En este contexto, el flujo de caja (también conocido como flujo de efectivo o flujo de tesorería) se convierte en una herramienta clave de análisis. Representa la relación entre los ingresos y egresos de dinero dentro de un periodo determinado, proporcionando una visión clara de la liquidez operativa de la empresa. Es decir, permite saber si la empresa cuenta con el efectivo suficiente para cubrir sus compromisos a corto y largo plazo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg4.tarjeta.p-4.p-lg-5
          .deco2.mb-3
          p.mb-0 El flujo de caja puede elaborarse tanto para periodos pasados como para periodos futuros. En el primer caso, se habla de un flujo de efectivo histórico, útil para el análisis contable y la revisión de resultados. En el segundo, se construye un flujo de efectivo proyectado o presupuestado, utilizado en la planificación financiera y la formulación de proyectos, ya que anticipa el comportamiento del efectivo en función de variables como ventas, costos, inversiones, gastos operacionales y necesidades de financiación.
    
    .bg5.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-8
          p Este estado financiero es especialmente valioso para:
          ul.lista-ul--color.color-2.fa-lista.mb-4
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Evaluar la capacidad de pago de la empresa.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Determinar la necesidad de financiamiento externo.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Analizar propuestas de crédito y evaluar la solvencia.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Valorar la capacidad del proyecto para generar efectivo.
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 Proyectar escenarios de inversión y sostenibilidad.
          p El flujo de caja se interpreta como un indicador dinámico, ya que expresa el movimiento real del dinero. Generalmente, los ingresos se representan con el signo (+) y los egresos con el signo (-). Su análisis permite identificar excedentes o déficits de liquidez y tomar decisiones oportunas en cuanto a financiamiento, inversión o ajustes operativos.
        .col-lg-4.col-md-7.col-10
          img(src='@/assets/curso/temas/t2/8.png', alt='')

    p.mb-5 Hoy en día, el valor de una empresa o proyecto se entiende en gran medida como su capacidad de generar efectivo en el tiempo. De ahí que el flujo de caja sea base para calcular indicadores como el Valor Presente Neto (VPN) o el Costo Anual Equivalente (CAE), herramientas clave en la evaluación financiera.

    p.mb-4 Para estructurar adecuadamente un flujo de efectivo proyectado, se deben incluir los siguientes elementos:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.color-2.fa-lista
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Saldo inicial de efectivo:] monto disponible al comienzo del periodo.
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Entradas de efectivo:] todas las fuentes de ingresos esperadas (ventas, inversiones, aportes, etc.).
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Salidas de efectivo:] todos los egresos proyectados (costos operacionales, pagos financieros, inversiones, etc.).
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Flujo neto del periodo:] diferencia entre entradas y salidas de efectivo.
          li
            i.fas.fa-circle-check
            span.mb-0 #[b Saldo final de efectivo:] resultado de sumar el saldo inicial más el flujo neto del periodo.
      .col-lg-4.col-md-7.col-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/9.png', alt='')

    .bg1.p-4.mb-4(data-aos="fade-down")
      p.mb-0 La construcción del flujo proyectado debe estar alineada con otras variables determinadas en los estudios de mercado, técnicos y financieros del proyecto, como el nivel de producción, precios, inversiones estimadas y estructura de costos.

    p Para elaborar un flujo de efectivo proyectado de manera rigurosa, se requiere:

    .row.bgc-1.align-items-center.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/10.png', alt='')
            .col-lg-9  
              SlyderF.circl-arrow(columnas="col-lg-6 col-md-6")
                .tarjeta.bg6.p-4.py-lg-5
                  .row.justify-content-center.mb-3
                    .col-5.col-md-6.col-lg-4
                      img(src='@/assets/curso/temas/t2/tarj2-1.svg' alt='')
                  p.text-center Balance general del periodo anterior (o uno inicial si no existe historial).
                .tarjeta.bg6.p-4.py-lg-5
                  .row.justify-content-center.mb-3
                    .col-5.col-md-6.col-lg-4
                      img(src='@/assets/curso/temas/t2/tarj2-2.svg' alt='')
                  p.text-center Estado de resultados proyectado, con base en presupuestos de ventas, costos, gastos y proyecciones financieras.
                .tarjeta.bg6.p-4.py-lg-5
                  .row.justify-content-center.mb-3
                    .col-5.col-md-6.col-lg-4
                      img(src='@/assets/curso/temas/t2/tarj2-3.svg' alt='')
                  p.text-center Políticas internas de operación, financiamiento e inversión, que puedan incidir en el comportamiento del efectivo.
                .tarjeta.bg6.p-4.py-lg-5
                  .row.justify-content-center.mb-3
                    .col-5.col-md-6.col-lg-4
                      img(src='@/assets/curso/temas/t2/tarj2-4.svg' alt='')
                  p.text-center Estimaciones realistas sobre ventas, tiempos de cobro y pago, condiciones del mercado y variaciones en los costos.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        .tarjeta.bg2.h-100.p-4.px-lg-5
          p Un flujo de caja bien estructurado no solo guía la toma de decisiones, sino que también fortalece la capacidad de negociación con inversionistas, entidades financieras y aliados estratégicos.
          p.mb-0 Formas de presentar el flujo de efectivo proyectado: el estado de efectivo se puede presentar de manera simplificada, el cual no se organiza con una estructura compleja las entradas y salidas de efectivo, la formula se expresa de la siguiente manera:
      .col-lg-4.d-none.d-lg-block
        .bg6.h-100.px-lg-3
          img(src='@/assets/curso/temas/t2/11.svg', alt='')

    .bg3.p-3.mb-4
      p.mb-0.texto-blanco.text-center Saldo final de caja = saldo inicial de caja + (entradas de efectivo – salidas de efectivo).


</template>

<script>
export default {
  name: 'Tema2',
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
