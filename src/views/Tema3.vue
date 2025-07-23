<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores financieros

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-down")  
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los indicadores financieros son herramientas clave para evaluar la viabilidad económica de un proyecto o emprendimiento. A través de su análisis, es posible interpretar si la iniciativa generará los recursos suficientes para cubrir sus costos, cumplir con las obligaciones financieras y alcanzar los niveles de rentabilidad esperados. Estos indicadores permiten transformar los datos contables en información útil para la toma de decisiones estratégicas. #[br] #[br]
        p.mb-0 Al momento de decidir si un proyecto debe ponerse en marcha, el uso de indicadores financieros facilita una evaluación objetiva, basada en cifras concretas. Con ellos, se puede identificar el nivel de riesgo, estimar la rentabilidad, calcular el tiempo de recuperación de la inversión y proyectar el valor que generará el negocio a lo largo del tiempo. En definitiva, estos instrumentos permiten anticipar si una idea empresarial es sostenible, rentable y financieramente viable.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Punto de equilibrio

    .bg2.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-5
          img(src='@/assets/curso/temas/t3/2.png' alt='')
        .col-lg-7
          .p-4.px-lg-5
            p El punto de equilibrio es un indicador financiero que permite determinar el nivel mínimo de ventas o producción que una empresa necesita alcanzar para cubrir la totalidad de sus costos. En este nivel, los ingresos son iguales a los egresos, por lo que no se generan ni pérdidas ni utilidades. Su análisis es clave para identificar el umbral de viabilidad económica del proyecto, especialmente en las etapas iniciales.
            p.mb-0 Este cálculo permite establecer las líneas mínimas de operación bajo las cuales un negocio puede mantenerse sin comprometer su sostenibilidad financiera. Cuanto más bajo sea el punto de equilibrio, mayor será la probabilidad de alcanzar utilidades y menor el riesgo de incurrir en pérdidas, lo que mejora la estabilidad del proyecto frente a variaciones en la demanda o en los costos.

    p.mb-4 Para calcular el punto de equilibrio, es necesario clasificar los costos totales en dos categorías:

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/temas/t3/tarj1-1.svg', alt='')
          .col-auto
            .subt3.text-white.mb-2
              h3.mb-0 Costos fijos
        p.mb-0 Permanecen constantes, independientemente del volumen de producción (ej. alquiler, sueldos administrativos, seguros).
      .col-md.tarjeta.bg2.p-5
        .row.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/temas/t3/tarj1-2.svg', alt='')
          .col-auto
            .subt3.text-white.mb-2
              h3.mb-0 Costos variables
        p.mb-0 Varían en proporción directa con el nivel de producción o ventas (ej. insumos, comisiones, mano de obra directa).

    p.mb-5 Es recomendable trabajar con datos anuales o mensuales, según la periodicidad de la evaluación financiera del proyecto.

    .subt2.mb-4(data-aos="fade-right")
      h3.mb-0 Fórmula del punto de equilibrio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/3.png' alt='')
      .col-lg-9(data-aos="fade-left")
        .bgi-1.tarjeta.p-4.p-lg-5.text-center
          .tarjeta.tarjeta--blanca.p-3.p-lg-4
            div.formula-container
              span.v2 PEQ (Unidades)
              span.equals = 
              .fraction
                .numerator
                  span.r Costos Fijos (CF)
                .denominator 
                  span.r Precio de Venta (PV) - Costo Variable Unitario (CVU)  

    p Esta fórmula permite calcular cuántas unidades se deben vender para cubrir todos los costos, sin generar pérdidas ni utilidades.
    p.mb-4 En términos gráficos, el punto de equilibrio puede representarse de la siguiente manera:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2.
      span Representación gráfica del punto de equilibrio
    .row.justify-content-center.mb-3(data-aos='fade')
      .col-lg-6
        img(src='@/assets/curso/temas/t3/fig2.svg', alt='Gráfico que muestra el punto de equilibrio donde los ingresos por ventas igualan los costos totales, indicando zonas de pérdida y ganancia.')
  

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Tasa Interna de Oportunidad (TIO)

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.pe-lg-0.d-none.d-lg-block
        .bg13.p-4.h-100
          img(src='@/assets/curso/temas/t3/4.svg' alt='')
      .col-lg-8.ps-lg-0
        .bg12.p-4.p-lg-5.h-100
          p El uso del dinero en el tiempo implica un costo, ya que no puede ser considerado gratuito. Cada vez que se presta, invierte o utiliza una suma de dinero, se renuncia a la posibilidad de emplearlo en otras alternativas rentables. Por esta razón, se debe reconocer un valor adicional como compensación por el riesgo asumido o por el uso del capital; a este valor se le conoce como interés.
          p.mb-0 Desde el punto de vista financiero, cuando una persona presta una cantidad de dinero (P) y luego de un tiempo determinado recibe una suma mayor (F), la diferencia entre ambas cantidades representa el interés generado (I). Esta variación se conoce como el valor del dinero en el tiempo y se expresa con la fórmula:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/5.png' alt='')
      .col-lg-9(data-aos="fade-left")
        .bgi-1.tarjeta.p-4.p-lg-5.text-center
          .tarjeta.tarjeta--blanca.p-3.p-lg-5
            p.mb-0 I = F − PI = F – PI = F − P 
    
    .bg10.tarjeta.p-4.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-6
          p La tasa de interés es la relación entre el interés obtenido y el capital inicial invertido, generalmente expresada en porcentaje para un período específico.
          p Tasa de interés (%) = (interés ganado ÷ capital inicial) × 100.
          p O en notación algebraica:
          ul.lista-ul--color.color-3.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0  i = (I / P) × 100. 
          p Donde: 
          ul.lista-ul--color.color-3.fa-lista.mb-0
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 i = Tasa de interés (en porcentaje)
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 I = Interés obtenido.
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 P = Capital o monto invertido/prestado.
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La Tasa Interna de Oportunidad (TIO) representa el rendimiento mínimo que un inversionista espera obtener de un proyecto, considerando el costo de oportunidad y el riesgo asumido. En otras palabras, es la rentabilidad que se sacrifica al no invertir el dinero en una alternativa financiera segura o ya conocida, como un CDT, fondos de inversión, u otros instrumentos.
        p La TIO sirve como referencia para evaluar si un proyecto es rentable. Si el retorno esperado del proyecto es mayor que la TIO, entonces el proyecto puede considerarse viable. Sin embargo, si es menor, se estaría perdiendo valor frente a otras alternativas de inversión.

    p Esta tasa debe cubrir:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/temas/t3/tarj2-1.svg', alt='')
          p.text-center La recuperación del capital inicial invertido.
      .col-lg-3.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/temas/t3/tarj2-2.svg', alt='')
          p.text-center Los costos operativos del proyecto.
      .col-lg-3.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/temas/t3/tarj2-3.svg', alt='')
          p.text-center Los intereses en caso de financiamiento con terceros.
      .col-lg-3.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-5.col-md-5
              img(src='@/assets/curso/temas/t3/tarj2-4.svg', alt='')
          p.text-center Las utilidades esperadas por los socios o accionistas.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Ejemplo TIO

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.col-md-5.col-7.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/8.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .bg4.tarjeta.p-4.px-lg-5
          .deco2.mb-3
          p Suponga que la señorita Laura Galindo acostumbra a realizar inversiones en CDT, en los cuales le pagan en promedio el 32 % efectivo anual de intereses. (La tasa de Interés de oportunidad para esta persona equivaldría a ese mismo 32 % efectivo anual en términos corrientes).
          p En términos constantes se asumiría la tasa real del inversionista, donde a la tasa de oportunidad se le descuenta la tasa de inflación.
          p Si la tasa de oportunidad es del 2,5 % mensual y la tasa de inflación es del 1,5 % mensual. ¿Cuál es la tasa real de oportunidad del inversionista?
          ul.lista-ul--color.color-3.fa-lista.mb-0
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 TR = TIO - inflación / 1 + inflación.
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 TR = (0,025 + 0,015) / (1 + 0,015)
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 TR = 0,99 %


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Valor Actual Neto (VAN) o Valor Presente Neto (VPN)

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")  
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/9.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El Valor Actual Neto (VAN) es uno de los indicadores financieros más utilizados para evaluar la viabilidad económica de un proyecto. Su propósito es estimar el valor presente de los flujos netos de efectivo que se generarán a lo largo de la vida útil del proyecto, descontados a una tasa de interés fija que representa el costo de oportunidad del capital. #[br] #[br]
        p.mb-0 En otras palabras, el VAN permite conocer si, al invertir en un proyecto, los ingresos futuros compensarán no solo la inversión inicial, sino también el valor del dinero en el tiempo. Esta herramienta considera que el uso del dinero tiene un costo, ya que al invertir una suma hoy, se renuncia a otras posibles alternativas de rentabilidad. A este costo se le conoce como interés, y se refleja en la tasa de descuento.

    .bg9.p-4.mb-4(data-aos="fade")
      p.mb-0 El VAN se calcula restando los egresos a los ingresos esperados para cada periodo, y luego actualizando esos valores al presente mediante un factor de actualización. Este factor se representa como:

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        .bg4.tarjeta.p-4.h-100
          .tarjeta.tarjeta--blanca.p-3.text-center.mb-3
            div.formula-container
              .fraction
                .numerator
                  span.r 1
                .denominator 
                  span.r (1 + 𝑖) #[sup 𝑛]
          p Donde:
          ul.lista-ul--color.color-3.fa-lista.mb-4
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 I = es la tasa de interés o tasa de descuento. 
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 N = es el número de periodos.
          p La fórmula general del VAN es la siguiente:
          .tarjeta.tarjeta--blanca.p-3.mb-3
            .math-formula.text-center
              .formula2
                span.operator2.font-italic VAN =
                span.summation2 ∑
                  span.subscript2 𝒕=0
                  span.superscript2 𝑛
                span.bracket2 [
                span.term2 ( IT #[sub 𝒕] 
                span.operator2 - ET #[sub 𝒕] )
                span.operator2 X
                span.fraction2
                  span.numerator2 1
                  span.denominator2 (1+𝑖) #[sup 𝒕]
                span.bracket2 ]
          p Donde:
          ul.lista-ul--color.color-3.fa-lista.mb-0
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 IT = Ingresos Totales (entradas de efectivo).
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 ET = Egresos Totales (salidas de efectivo).
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 I = Tasa de descuento.
            li.mb-0
              i.fas.fa-circle-check
              span.mb-0 N = Número de periodos del proyecto.
      .col-lg-7.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/10.png', alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Interpretación del VAN

    .row.justify-content-center.cursor-pointer.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
        .tarjeta.crd_hover_txt
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t3/tarj3-1.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 VAN > 0
            p.mb-0 El proyecto es rentable. Genera una rentabilidad superior al costo del capital. Se recomienda su aprobación.
      .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
        .tarjeta.crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t3/tarj3-2.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 VAN = 0
            p.mb-0 El proyecto genera una rentabilidad igual a la tasa de descuento. Es aceptable, pero no ofrece ganancia adicional.
      .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
        .tarjeta.crd_hover_txt
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t3/tarj3-3.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 VAN < 0
            p.mb-0 El proyecto no cubre el costo del capital. Debe descartarse, ya que generaría pérdidas.

    .bg1.p-4.mb-5(data-aos="fade")
      p.mb-0 El VAN permite comparar distintas alternativas de inversión y tomar decisiones basadas en criterios objetivos y financieros. Es ampliamente utilizado en análisis de proyectos, valoración de empresas y toma de decisiones estratégicas en contextos de incertidumbre financiera.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 2.
      span Valor actual neto
    .tabla-a.color-acento-contenido.mb-4(data-aos='fade-down')
      table(alt="Tabla de cálculo de VAN con flujos anuales y un resultado final positivo de $1.654,71indicando rentabilidad del proyecto.")
        thead
          tr
            th Año
            th Ingreso
            th Egreso
            th Flujo neto del periodo
            th Factor de actualización
            th Van
        tbody
          tr
            td 0
            td No aplica
            td No aplica
            td No aplica
            td No aplica
            td.text-danger - $12,845.40
          tr
            td 1
            td $5,322.10
            td $3,049.90
            td $2,272.20
            td $0.840
            td $1,909.41
          tr
            td 2
            td $6,386.40
            td $3,424.40
            td $2,962.00
            td $0.706
            td $2,091.66
          tr
            td 3
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.593
            td $2,205.85
          tr
            td 4
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.499
            td $1,853.65
          tr
            td 5
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.419
            td $1,557.69
          tr
            td 6
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.352
            td $1,308.98
          tr
            td 7
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.296
            td $1,099.99
          tr
            td 8
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.249
            td $924.36
          tr
            td 9
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.209
            td $776.77
          tr
            td 10
            td $7,451.00
            td $3,733.80
            td $3,717.20
            td $0.176
            td $652.75
          tr 
            td -
            td -
            td -
            td -
            td VAN
            td $1,535.71

    .bg4.p-4
      p.mb-0 Para el caso de la tabla anterior, con una tasa de descuento de aproximadamente 19 %, el resultado es un VAN positivo, por lo que se acepta la ejecución del proyecto. En el año cero (0) aparece la inversión inicial, y a partir del año 1 los flujos resultaron ser positivos, entonces la suma de todos los flujos se le resta a la inversión inicial de $12,845.4 por ser desembolso, lo que brinda un valor positivo final.

    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4  Tasa Interna de Retorno (TIR)

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")  
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/11.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La Tasa Interna de Retorno (TIR) es un indicador financiero que permite evaluar la rentabilidad real de un proyecto de inversión, con base en sus flujos de caja esperados. Representa la tasa de interés o descuento que iguala el valor actual de los ingresos proyectados con el valor actual de los egresos, es decir, el punto en el cual el Valor Actual Neto (VAN) es igual a cero. #[br] #[br]
        p.mb-0 La TIR se expresa como un porcentaje y refleja el rendimiento que generará el capital invertido en el proyecto. Para evaluar su conveniencia, se compara con el costo de capital, que representa el rendimiento mínimo exigido para considerar una inversión como aceptable.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 El costo de capital incluye
    
    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/temas/t3/tarj4-1.svg', alt='')
          .col-auto
            .subt3.text-white.mb-2
              h3.mb-0 Recursos propios
        p.mb-0 Aportes de los socios o accionistas, que esperan una rentabilidad mínima.
      .col-md.tarjeta.bg2.p-5
        .row.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/temas/t3/tarj4-2.svg', alt='')
          .col-auto
            .subt3.text-white.mb-2
              h3.mb-0 Recursos ajenos
        p.mb-0 Financiamiento externo, como créditos bancarios, que generan costos financieros (intereses).

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Criterios de decisión con la TIR

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-4.col-md-5
              img(src='@/assets/curso/temas/t3/tar5-1.svg', alt='')
          h4.text-center Si la TIR es mayor al costo de capital
          p.text-center El proyecto es rentable y se recomienda su aprobación, ya que genera un rendimiento superior al mínimo esperado por los inversionistas.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-4.col-md-5
              img(src='@/assets/curso/temas/t3/tar5-2.svg', alt='')
          h4.text-center Si la TIR es igual al costo de capital
          p.text-center El proyecto apenas cubre el costo de oportunidad del capital. Puede considerarse aceptable, pero sin generar valor adicional.
      .col-lg-4.col-md-6.mb-3
        .tarjeta-boton2.h-100.p-4
          .row.justify-content-center.mb-4
            .col-4.col-lg-4.col-md-5
              img(src='@/assets/curso/temas/t3/tar5-3.svg', alt='')
          h4.text-center Si la TIR es menor al costo de capital
          p.text-center El proyecto es financieramente inviable, pues no alcanza a compensar el costo de los recursos invertidos.

    .bg4.p-4.mb-4
      .deco2.mb-3
      p.mb-0 La TIR es útil no solo para evaluar un proyecto individual, sino también para comparar múltiples alternativas de inversión y seleccionar aquella con mayor retorno relativo. Sin embargo, debe analizarse en conjunto con otros indicadores como el VAN, especialmente cuando existen flujos de caja no uniformes o múltiples tasas internas.

    p.mb-4 En lo que respecta a la gráfica, el punto de equilibrio se puede representar de la siguiente forma:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 3.
      span Punto de equilibrio
    .tabla-a.color-acento-contenido.mb-4(data-aos='fade-down')
      table(alt="Tabla con flujo de caja a 24 periodos, donde se registra una inversión inicial de -120.000.000 y flujos netos constantes de 4.000.000 anuales, resultantes de ingresos de 5.000.000 y egresos de 1.000.000 por periodo.")
        thead
          tr
            th Periodo
            th Inversión inicial
            th Ingresos
            th Egresos
            th Flujo de caja
        tbody
          tr
            td 0
            td - $120.000.000
            td No aplica
            td No aplica
            td - $120.000.000
          tr
            td 1
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 2
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 3
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 4
            td No aplica
            td $5.000.000
            td $1.000.000 
            td 
          tr
            td 5
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 6
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 7
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 8
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 9
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 10
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 11
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 12
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 13
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 14
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 15
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 16
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 17
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 18
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 19
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 20
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 21
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 22
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 23
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 
          tr
            td 24
            td No aplica
            td $5.000.000
            td $1.000.000 
            td $4.000.000 

    .bloque-texto-g.bloque-texto-g--inverso.bg14.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/12.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 En un archivo de Excel, se ubica la opción fórmulas financieras y se escoge la opción TIR. Para poder obtener el porcentaje requerido se debe arrastrar desde el periodo 0 hasta el periodo 24. Es diferente del VPN, el cual se hace desde el periodo 1 hasta el 24.

    .subt2.mb-4  
      h4.mb-0 Se obtiene la siguiente fórmula en Excel

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/13.png' alt='')
      .col-lg-9(data-aos="fade-left")
        .bgi-1.tarjeta.p-4.p-lg-5.text-center
          .tarjeta.tarjeta--blanca.p-3.p-lg-5
            p.mb-0 TIR: de periodo 0 a 24 
            p.mb-0 El resultado de la TIR es: - 2 %    

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t1/subt.svg")
      h3.ps-3.pe-4.mb-0 Cálculo costo de capital

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.d-none.d-lg-block.pe-lg-0
        .bg7.p-4.px-lg-5.h-100
          img(src='@/assets/curso/temas/t3/14.svg' alt='')
      .col-lg-8.ps-lg-0
        .bg2.p-4.p-lg-5.h-100
          p El costo de capital se compone de las siguientes fuentes: patrimonio y bancos, de los $120.000.000 COP de inversión inicial, $70.000.000 hacen parte de la primera fuente y $50.000.000 forman parte de la segunda fuente.
          p.mb-0 Más adelante se realiza un ponderado que consiste en dividir cada una de las fuentes sobre el valor total. Por ejemplo: $70.000.000 / $120.000.000 dando como resultado un ponderado de 58,33 %.
    
    p.mb-4 Al realizar el ponderado de la fuente bancos se obtiene lo siguiente:

    .bg4.p-4.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/15.png', alt='')
        .col-lg-7
          ul.lista-ul--color.color-3.fa-lista
            li.mb-1
              i.fas.fa-circle-check
              span.mb-0 $50.000.000 / $120.000.000 = 41,67 % 
          p Luego se obtiene el valor del costo, para la fuente patrimonio este equivale a la TMRR, en este caso es 2,1791 % y para la fuente bancos, el costo equivale a la tasa de interés, en este caso sería de 1,70 %
          p.mb-0 La acción final para llegar a la obtención del costo de capital consiste en una multiplicación del valor ponderado y del costo de cada una de las fuentes. De esta manera, queda un costo de capital para la fuente patrimonio equivalente a 1,2711 % y para la fuente bancos queda un costo equivalente a 0,71 %. Del mismo modo, se suman los dos porcentajes de las dos fuentes respectivas obteniendo un resultado de 1,9795 %, el cual equivale al costo de capital.

    .bg1.p-4.mb-4
      p.mb-0 Para concluir, se comparan los dos porcentajes: la TIR y el costo de capital, en este caso serían - 2 % - 1,9795 %. Por lo tanto, el proyecto bajo el parámetro TIR no se acepta, debido a que el costo de capital es mayor que la tasa interna de retorno, lo cual genera pérdidas de 3,6926 % durante cada mes que se ejecute el proyecto.

    p.mb-4 Este cuadro describe el resumen para el cálculo del costo de capital.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos='fade-right')
      h5 Tabla 4.
      span Calculo costo capital
    .tabla-a.color-acento-contenido.mb-4(data-aos='fade-down')
      table(alt="Tabla con fuentes de financiación: patrimonio y bancos, sus valores, porcentajes ponderados, costos individuales y costo de capital total del 1.9795 %.")
        thead
          tr
            th Fuentes
            th Valor
            th Ponderado
            th Costo
            th Costo de capital
        tbody
          tr
            td Patrimonio
            td $70.000.000
            td 58.33 %
            td 2.1791 %
            td 1.2711 %
          tr
            td Bancos
            td $50.000.000
            td 41.67 %
            td 1.70 %
            td 0.71 %
          tr
            td Total
            td $120.000.000
            td No aplica
            td 1.9795 %
            td No aplica
          tr
            td
            td
            td
            td PER/GAN %
            td - 3.6926 %
    
    .bg4.p-4
      p.mb-0 Tanto el VPN como la TlR, deben ser positivos para aceptar el proyecto, con el fin de asegurar su viabilidad en el futuro, por eso se debe ser muy preciso y consciente en el manejo de cada uno de los datos, para que se obtengan resultados válidos que permitan guiar eficazmente un proyecto.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
