<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Presupuesto de costos
        
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El presupuesto de costos es una herramienta financiera que permite estimar, organizar y controlar los recursos económicos necesarios para ejecutar un proyecto o mantener en funcionamiento una empresa. A través de este instrumento, se anticipan los ingresos y egresos relacionados con las actividades operativas, lo que facilita la toma de decisiones estratégicas y el uso eficiente del capital disponible.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Presupuesto de costos
    .row.justify-content-center.mb-5(data-aos='fade')
      .col-lg-8
        img(src='@/assets/curso/temas/t1/fig1.png', alt='Persona revisando facturas y usando calculadora para elaborar presupuesto de costos.')
    
    .bg2.mb-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t1/2.png' alt='')
        .col-lg-7
          .p-4.px-lg-5
            p Una vez definidas las inversiones iniciales y las fuentes de financiamiento necesarias para poner en marcha un proyecto productivo, es fundamental diseñar un presupuesto que contemple tanto los ingresos esperados como los gastos asociados. Esta planificación financiera permite estimar el valor total del proyecto, identificar necesidades adicionales de recursos y organizar de manera estratégica las fuentes de financiación disponibles.
            p.mb-0 Además, se debe estructurar un programa de desembolsos que esté alineado con el cronograma de actividades del proyecto, lo cual facilita una ejecución ordenada y eficiente. Esta coordinación permite anticipar los requerimientos económicos en cada fase, optimizando el uso de los recursos disponibles y reduciendo el riesgo financiero.

    .bg7.p-4(data-aos="fade-down")
      p.mb-0 Durante el funcionamiento de una empresa, es natural que se generen ingresos por sus operaciones y, al mismo tiempo, egresos relacionados con su sostenimiento y crecimiento. Por ello, resulta esencial identificar, clasificar y organizar los distintos componentes del presupuesto, lo que permitirá proyectar resultados, controlar el flujo de dinero y tomar decisiones informadas que garanticen la estabilidad económica y el cumplimiento de los objetivos organizacionales.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Costos de producción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg8.tarjeta.p-4.p-lg-5
          .deco3.mb-3
          p.mb-0 Durante el proceso de producción de un bien, una empresa incurre en diversos gastos operativos, conocidos como costos de producción. Estos representan los recursos necesarios para mantener en funcionamiento un proyecto, una línea de procesamiento o un equipo de trabajo. Se clasifican en varios tipos, según su naturaleza y su relación con el producto final.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Costos y gastos de fabricación

    p.mb-4 Incluyen todos los elementos involucrados directamente o indirectamente en el proceso productivo. Entre los más comunes se encuentran:

    TabsA.color-acento-botones.mb-4(data-aos="fade-down")
      .tarjeta.bg7(titulo="Materia prima o materiales directos")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .p-4.p-lg-5
              p Son insumos que, aunque necesarios en la elaboración, no se incorporan físicamente al producto terminado. Un ejemplo sería el pegante utilizado para ensamblar una silla.
          .col-lg-7
            img(src="@/assets/curso/temas/t1/linea1-1.png")
      .tarjeta.bg7(titulo="Materiales indirectos")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .p-4.p-lg-5
              p Son aquellos insumos que forman parte del producto final y representan uno de los principales costos del proceso. Por ejemplo, la madera utilizada para fabricar sillas.
          .col-lg-7
            img(src="@/assets/curso/temas/t1/linea1-2.png")
      .tarjeta.bg7(titulo="Mano de obra directa")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .p-4.p-lg-5
              p Corresponde al trabajo del personal que participa activamente en la transformación de los materiales en el producto final. Por ejemplo, cortar, ensamblar y pintar la madera para fabricar una silla.
          .col-lg-7
            img(src="@/assets/curso/temas/t1/linea1-3.png")
      .tarjeta.bg7(titulo="Mano de obra indirecta")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .p-4.p-lg-5
              p Se refiere al personal que no participa directamente en la fabricación, pero cuya labor es esencial para apoyar el proceso productivo. Incluye cargos como supervisores, asistentes administrativos, personal de mantenimiento, vigilantes, entre otros.
          .col-lg-7
            img(src="@/assets/curso/temas/t1/linea1-4.png")
      .tarjeta.bg7(titulo="Otros gastos de fabricación")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .p-4.px-lg-5
              p Comprenden diversos costos asociados al funcionamiento general del área productiva, como útiles de aseo, papelería, combustibles, lubricantes, repuestos, accesorios, servicios públicos (agua, energía), alquileres, seguros, impuestos, depreciaciones, mantenimiento y otros gastos indirectos necesarios para la operación.
          .col-lg-7
            img(src="@/assets/curso/temas/t1/linea1-5.png")

    .bg4.p-4.mb-5(data-aos="fade")
      p.mb-0 Además de los gastos directamente vinculados al proceso productivo, las empresas deben considerar otros egresos esenciales para su funcionamiento integral. Estos corresponden a distintas áreas de gestión y operación, y se describen a continuación para ofrecer una visión completa de los costos que intervienen en la estructura financiera de la organización.

    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo='b')
              .row.justify-content-around.align-items-center
                .col-md-6
                  h4 Gastos de venta
                  p Son los gastos que se generan al realizar actividades relacionadas con la comercialización de productos o servicios, así como con su promoción. Incluyen todas las erogaciones necesarias para llevar los productos al cliente final y estimular su compra.
                  p #[b Ejemplos:] salarios y comisiones del personal de ventas, campañas publicitarias, material promocional, transporte y entrega de mercancías, viáticos, y otros costos asociados a la fuerza comercial.
                .col-md-6.col-lg-4
                  img(src='@/assets/curso/temas/t1/slider1-1.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6
                  h4 Gastos de administración
                  p Corresponden a los gastos asociados a las funciones administrativas de la empresa, es decir, aquellos que permiten su organización y gestión, pero que no están directamente relacionados con el proceso productivo.
                  p #[b Ejemplos:] sueldos del personal administrativo, honorarios profesionales, servicios públicos, alquiler de oficinas, papelería, artículos de escritorio, seguros, impuestos, mantenimiento y depreciación de equipos de oficina.
                .col-md-6.col-lg-4
                  img(src='@/assets/curso/temas/t1/slider1-2.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6
                  h4 Gastos financieros
                  p Estos gastos surgen del uso de recursos provenientes de financiamiento externo, como préstamos bancarios o créditos con terceros. Se reflejan principalmente en los intereses generados por las deudas adquiridas, pero también incluyen otros costos relacionados con operaciones financieras.
                  p #[b Ejemplos:] intereses por préstamos, comisiones bancarias, cargos por servicios financieros, y costos por formalización de créditos.
                .col-md-6.col-lg-4
                  img(src='@/assets/curso/temas/t1/slider1-3.png', alt='')


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Costo unitario

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")  
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/4.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez se han estimado los costos totales necesarios para desarrollar las actividades operativas de la empresa durante un ciclo determinado generalmente de un año, se hace imprescindible calcular el costo unitario del producto o servicio. Este indicador permite conocer cuánto cuesta producir una sola unidad y es clave para establecer precios de venta competitivos, calcular márgenes de ganancia, y proyectar rentabilidad. #[br] #[br]
        p.mb-0 El costo unitario se obtiene al dividir el costo total estimado entre el número de unidades que se espera producir en ese mismo periodo, sin embargo, para que este cálculo sea preciso, es fundamental identificar y clasificar correctamente todos los egresos asociados al proceso productivo, diferenciando entre gastos fijos y gastos variables.

    .bg9.p-4.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-7
          .subt3.mb-3
            h4.mb-0 Gastos fijos
          p.mb-4 Son aquellos costos que la empresa debe asumir de manera permanente, sin importar el nivel de producción o ventas. Se mantienen constantes en el corto plazo y son indispensables para la operación continua del negocio. Su presencia es inevitable incluso cuando no se genera producción, ya que están relacionados con la infraestructura, el personal base y otros compromisos contractuales.
          h5 Ejemplos:
          ul.lista-ul--color.color-2.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Salarios del personal administrativo y directivo.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Alquileres de oficinas o plantas.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Servicios públicos básicos (luz, agua, internet, seguridad).
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Seguros empresariales.
            li.mb-0 
              i.fas.fa-circle-check
              span.mb-0 Licencias de funcionamiento o #[em software].
          p Los gastos fijos son útiles para calcular el punto de equilibrio y analizar la capacidad operativa mínima necesaria para cubrir los costos sin pérdidas.
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.png', alt='')

    .bg4.p-4.mb-5(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/6.png', alt='')
        .col-lg-7
          .subt4.mb-3
            h4.mb-0 Gastos variables
          p.mb-4 A diferencia de los anteriores, los gastos variables están directamente relacionados con el nivel de actividad de la empresa. A mayor volumen de producción o ventas, mayores serán estos costos, y viceversa. Esta variabilidad permite cierto grado de control y ajuste, ya que se adaptan a la demanda y la capacidad operativa del negocio.
          h5 Ejemplos:
          ul.lista-ul--color.color-3.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Materias primas e insumos directos.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Mano de obra directa (en muchos casos sujeta a productividad o producción por demanda).
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Comisiones por ventas.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Costos de embalaje, distribución y transporte.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Gastos de envío y logística.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 Contratación de personal temporal o de medio tiempo.
            li.mb-0 
              i.fas.fa-circle-check
              span.mb-0 Bonificaciones por productividad.
          p Una correcta diferenciación entre estos tipos de gastos facilita el diseño de estrategias financieras, la elaboración de presupuestos flexibles y el análisis de rentabilidad por línea de producto o servicio.

    p.mb-4 El siguiente cuadro, sirve de ejemplo para clasificar los costos fijos y variables:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 1.
      span Costos fijos y variables (en miles de pesos)
    .tabla-a.color-acento-contenido.mb-5(data-aos='fade-down')
      table(alt="Tabla de costos fijos y variables con categorías de gastos y columnas vacías para registrar valores en miles de pesos.")
        thead
          tr
            th Descripción
            th Costos fijos
            th Costos variables
        tbody
          tr
            td Gastos de fabricación
            td No aplica
            td No aplica
          tr
            td Gastos de administración
            td No aplica
            td No aplica
          tr
            td Gastos de venta
            td No aplica
            td No aplica
          tr
            td Gastos financieros
            td No aplica
            td No aplica
          tr
            td TOTAL
            td No aplica
            td No aplica

    .bg10.tarjeta.p-4.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-5
          p Cuando se ha determinado el total de los costos fijos y costos variables, se puede establecer los costos totales de producción, usando la siguiente fórmula:
          ul.lista-ul--color.color-3.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 CT = CF + CV, en dónde:
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 CT = Costo total.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 CF = Costos fijos.
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 CV = Costos variables.
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/7.png', alt='')

    .bg11.tarjeta.p-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/8.png', alt='')
        .col-lg-5
          p Teniendo el dato del costo total, el fabricante, puede determinar cuánto le cuesta producir una unidad, es decir el costo unitario, aplicando la siguiente fórmula.
          ul.lista-ul--color.color-3.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 CU = CT / n, en dónde
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 CU = Costo unitario.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 CT = Costo total de producción. 
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 n = número total de unidades producidas.         


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Precio de venta

    .bloque-texto-g.bg3.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")  
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/9.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez se ha establecido el costo unitario de producción, el siguiente paso es definir el margen de utilidad deseado, es decir, el porcentaje o monto adicional que se espera obtener como ganancia por cada unidad vendida. Este margen es determinado generalmente por la gerencia, el área contable o financiera, y forma parte esencial del proceso de fijación del precio de venta. #[br] #[br]
        p.mb-0 El precio de venta no debe fijarse únicamente con base en el costo, sino también considerando múltiples variables internas y externas que influyen en la capacidad del producto para competir en el mercado y generar valor. Una decisión errada en la determinación del precio puede afectar gravemente tanto la rentabilidad como la sostenibilidad del negocio.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Factores clave al definir el precio de venta

    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo='b')
              .row.justify-content-around.align-items-center
                .col-md-6.col-lg-5
                  h4 Precios de productos similares
                  p Es importante conocer cuánto están cobrando otras empresas por bienes similares para mantener la competitividad sin comprometer la utilidad.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t1/slider2-1.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6.col-lg-5
                  h4 Precios de productos sustitutos
                  p Algunos productos pueden cumplir la misma función que el nuestro. Analizar estos precios ayuda a posicionar la oferta dentro de un rango aceptable para el consumidor.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t1/slider2-2.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6.col-lg-5
                  h4 Nivel de demanda del producto
                  p Si el producto es altamente demandado y tiene pocas alternativas, puede justificar un precio más alto.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t1/slider2-3.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6.col-lg-5
                  h4 Percepción de valor y calidad
                  p El precio debe reflejar el valor que el cliente percibe. Un producto con atributos diferenciadores puede tener un precio superior si está bien posicionado.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t1/slider2-4.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6.col-lg-5
                  h4 Objetivos financieros de la empresa
                  p Las metas de rentabilidad, cobertura de costos fijos y variables, así como la recuperación de la inversión, son elementos que influyen directamente en el precio.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t1/slider2-5.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6.col-lg-5
                  h4 Ciclo de vida del producto
                  p En etapas iniciales (introducción o desarrollo), puede utilizarse un precio promocional; mientras que en etapas de madurez, se puede ajustar en función de la demanda y competencia.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t1/slider2-6.png', alt='')
              .row.justify-content-around.align-items-center
                .col-md-6.col-lg-5
                  h4 Condiciones del mercado y economía
                  p Factores como inflación, poder adquisitivo, costos de insumos y cambios regulatorios también deben considerarse.
                .col-md-6.col-lg-5
                  img(src='@/assets/curso/temas/t1/slider2-7.png', alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Fórmula básica para determinar el precio de venta

    .bg8.tarjeta.p-4.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-6
          ul.lista-ul--color.color-2.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 PV = CT + MU.
          p Donde:
          ul.lista-ul--color.color-2.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 PV = Precio de venta.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 CT = Costo total (suma de costos fijos y variables).
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 MU = Margen de utilidad (monto o porcentaje que se desea ganar por unidad).
          p #[b Ejemplo ilustrativo:] si producir un artículo cuesta $50.000 (CT) y se desea obtener un margen de utilidad de $20.000 (MU), el precio de venta será:
          ul.lista-ul--color.color-2.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 PV = $50.000 + $20.000 = $70.000
          p Este valor deberá analizarse frente al mercado para garantizar que sea competitivo y atractivo para el consumidor.
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/10.png', alt='')


  </template>

<script>
export default {
  name: 'Tema1',
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
