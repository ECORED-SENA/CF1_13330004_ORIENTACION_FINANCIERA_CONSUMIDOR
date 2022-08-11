<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.colspan 1
      h1 Clientes
    .row.deg1
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(data-aos="fade-up")(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Son considerados el elemento más importante para una empresa, sin ellos es imposible la existencia de un negocio, por eso se deben satisfacer todas las necesidades y brindar una experiencia positiva en el proceso de adquisición de los servicios o productos, la forma como se nombran da cuenta de la acción de consumo o compra, por esto, se debe atender de una manera especial, reconociendo que son la base económica que alimentan financieramente las empresas. 
      
      .row.justify-content-center
        .col-lg-10
          p.text-center.mt-5 Es importante reconocer la diferencia entre consumidor, usuario y cliente en una organización, los cuales se presentan en el siguiente recurso de aprendizaje:
          .row.mb-5
            .col-sm-6.col-lg-4.mb-4.mb-lg-0.maqw

              .tarjeta--boton.color-primario.p-4.bor.sombra(data-aos="fade-down")
                .row.justify-content-center.mb-3
                  .col-9
                    figure
                      img(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')

                h4.text-center Consumidor
                p.mb-5.text-center Persona u organización que realiza una compra.
            .col-sm-6.col-lg-4.mb-4.mb-lg-0.maqw

              .tarjeta--boton.color-primario.p-4.bor.sombra(data-aos="fade-down")
                .row.justify-content-center.mb-3
                  .col-9
                    figure
                      img(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')

                h4.text-center.mt-4 Usuario
                p.mb-5.text-center Persona quien usa o disfruta de un servicio o producto.
                .row.mb-2
            .col-sm-6.col-lg-4.mb-4.mb-lg-0.maqw

              .tarjeta--boton.color-primario.p-4.bor.sombra(data-aos="fade-down")
                .row.justify-content-center.mb-3
                  .col-9
                    figure
                      img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')

                h4.text-center Cliente
                p.text-center Persona u organización que compra habitualmente en la misma empresa y es fiel a la marca o producto.
                .row.mb-3
    .row.justify-content-center
      .col-lg-10
        p Es importante reconocer estas diferencias, con el fin de enfocar las acciones para fidelizar los consumidores y usuarios, además, que de igual forma continuar mejorando como en funcionamiento normal de una actividad empresarial.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Definiciones
    .row
      .col-lg-9
        .row
          .col-lg-8
            p Generalmente, se inicia como usuario sin darse cuenta, luego de un tiempo se pasa a ser consumidor en un momento dado, claro está, si el producto o servicio cubre o satisface alguna necesidad y cumple con las expectativas de lo adquirido, con el tiempo y con la recurrencia de consumo puede convertirse en un cliente fiel y frecuentemente suele ser la misma persona la que pasa por los distintos roles según la fase de compra en la que se encuentre.
          .col-lg-4
            img(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')
        .row.color1.p-2.mt-2
          p.mb-0 Es importante analizar el comportamiento de la persona natural o jurídica que se convierte inicialmente en un comprador de productos o servicios, pues este reúne una serie de cualidades que lo hace más propenso a interesarse por una marca, producto, servicio o empresa determinada, por esto, reconocer las cualidades e intereses de los consumidores es primordial para la toma de decisiones y la generación de estrategias con el fin de conservarlo, pues de una u otra forma aporta a la oportunidad crecimiento económico de la empresa y el desarrollo a corto, mediano y largo plazo.
        p.mt-4 Los productos o servicios deben ser desarrollados con base en un problema o necesidad que requiera una alternativa de solución y el resarcimiento del inconveniente, por lo cual la persona natural o jurídica estaría dispuesta a invertir y contando con una solvencia económica, demostrar que puede pagar los precios ofertados, y si se lograr resolver el problema o suplir la necesidad este podría convertirse en cliente prontamente.    
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Tipos y características
    .row
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
      .col-lg-7.mt-2
        p Un buen vendedor debe conocer a la perfección los tipos de clientes que existen y sus características, lamentablemente la gran mayoría de vendedores se lanzan a la venta sin conocer, cualificar y adaptar su estrategia desconociendo las diferencias en los tipos de clientes a los que se dirige y puede caer en el error de perder el tiempo tratando de captar candidatos no cualificados.  
        p En el actual mundo empresarial y social, la mayoría de los procesos y actividades giran en torno al cliente, por lo cual es importante saberlos cualificar y tipificar, pues la gestión con cada tipo de cliente requiere de técnicas y estrategias específicas que no se pueden ignorar, se debe ser consciente de que se está asistiendo al desarrollo de un nuevo modelo de gestión.
    p.mt-5 A continuación, se presentan en el recurso de aprendizaje los diferentes tipos de clientes con sus definiciones:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="De acuerdo al estado con empresa")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen')
        .col-md-9
          ul.lista-ul.mt-4
            li 
              i.fas.fa-angle-right
              p <strong>Activos:</strong> son los que en la actualidad tienen algún tipo de vínculo comercial adquiriendo servicios o comprando productos.

            li 
              i.fas.fa-angle-right
              p <strong>Inactivos:</strong> son aquellos que realizaron su último servicio hace mucho tiempo, se puede decir que pasaron a la competencia, están satisfechos o que ya no necesitan los servicios o productos.
      
      .row(titulo="De acuerdo con la frecuencia comercial")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img9.png', alt='Texto que describa la imagen')
        .col-md-9
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              p <strong>Frecuentes:</strong>  son los que realizan compras repetitivas de manera constante por la necesidad de los servicios o productos. 
            li 
              i.fas.fa-angle-right
              p <strong>Habitual:</strong>  son los que realizan compras regularmente porque están satisfechos, se deben atender de manera especial para aumentar el nivel de satisfacción, para cumplir con el objetivo que se conviertan en clientes frecuentes.
            li 
              i.fas.fa-angle-right
              p <strong>Ocasional:</strong>   son aquellos que realizan compras de vez en cuando, realizado sus compras en periodos espaciados en el tiempo.
      .row(titulo="De acuerdo el volumen de compras")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img10.png', alt='Texto que describa la imagen')
        .col-md-9
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              p <strong> Alto volumen de compras:</strong>  son aquellos que compran por cantidad y de manera frecuente, estos potencializan las finanzas de la empresa.

            li 
              i.fas.fa-angle-right
              p <strong>Promedio volumen de compras:</strong>  son aquellos que compran y están dentro del promedio general y compran habitualmente, algunos también pueden realizar compras de grandes o pequeñas cantidades, pero ocasionalmente.

            li 
              i.fas.fa-angle-right
              p <strong>Bajo volumen de compras:</strong>   son aquellos que se encuentran por debajo del promedio general, casi siempre lo realizan en pequeñas cantidades y lo realizan de manera ocasional.
    p Cada persona es un mundo diverso, único e irrepetible, sin embargo, para que las organizaciones puedan caracterizar a sus clientes, se deben dividir en grupos, sectores o incluso por afinidades, con el fin de focalizar su estrategia, analizando las características según su comportamiento o receptividad, las cuales se presentan en el siguiente recurso de aprendizaje:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq
            h5.text-center.mt-2 Según su comportamiento

        .row.justify-content-center.mb-3
          .col-11.mt-5
            img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-5 Indeciso
        p.text-center Tiene muchas dudas y no sabe que comprar.
      
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq
            h5.text-center.mt-2  Según su comportamiento

        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
        .row.mt-1
        h5.text-center.mb-0.mt-4 Discutidor
        p.text-center.mb-4 Quién se cree más que el vendedor.
        .row.mb-4
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq
            h5.text-center.mt-2  Según su comportamiento

        .row.justify-content-center.mb-4
          .col-9.mt-4
            img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Ocupado
        p.text-center.mb-4 Realiza varias cosas mientras realiza la compra.
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq      
            h5.text-center.mt-2  Según su comportamiento

        .row.justify-content-center.mb-4
          .col-7.mt-4
            img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Amistoso
        p.text-center Quién normalmente se encuentra receptivo y pacifico.
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq      
            h5.text-center.mt-2  Según su comportamiento

        .row.justify-content-center.mb-4
          .col-9.mt-4
            img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Lamentable

        p.text-center Quién utiliza la lástima para dominar, siempre se lamenta.
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq      
            h5.text-center.mt-2   Según su comportamiento

        .row.justify-content-center.mb-4
          .col-11.mt-4
            img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Impaciente

        p.text-center Quién nunca tiene tiempo, todo es apurado.
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq      
            h5.text-center.mt-2   Según su comportamiento

        .row.justify-content-center.mb-4
          .col-9.mt-4
            img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Negociador

        p.text-center Quién necesita obtener algo, siempre quiere ganar.
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq      
            h5.text-center.mt-2   Según su receptividad

        .row.justify-content-center.mb-4
          .col-7.mt-4
            img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Visuales
        p.text-center Perciben sus necesidades a través de la vista.
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq
            h5.text-center.mt-2   Según su receptividad

        .row.justify-content-center.mb-4
          .col-12.mt-4
            img(src='@/assets/curso/tema1/img19.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Auditivos
        p.text-center Perciben sus necesidades a través del oído.
      .tarjeta.color-acento-contenido.p-4
        .col-lg-12
          .row.coloraq      
            h5.text-center.mt-2   Según su receptividad

        .row.justify-content-center.mb-4
          .col-9.mt-4
            img(src='@/assets/curso/tema1/img20.svg' alt='AvatarTop')
        h5.text-center.mb-0.mt-4 Kinestésicos
        p.text-center Perciben sus necesidades a través del tacto.
        .row.mb-3
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.tarjeta--azul
  background-color:#92BFB1
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F9F7EC
.tarjeta.color-acento-contenido
  background-color: #E1F8E3
.tarjeta.color-acento-contenido *
  color: #12263F
.tarjeta.color-acento-contenido.p-4
  padding-top: 0px!important
</style>
