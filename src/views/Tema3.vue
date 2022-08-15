<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.colspan 3
      h1 Gestión de la información
    .row.bg99
      p La información se usa para responder a las necesidades de una empresa u organización o para aportar a la toma de decisiones, en cuanto a los procesos establecidos o también en los grupos de interés.
      .row.justify-content-center
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(data-aos="fade-up")(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Para apoyar a estas decisiones, que se basan en la información que se trae de las fuentes habilitadas, es primordial fomentar el desarrollo de la capacidad de análisis en las personas que definen las políticas, mecanismos y estrategias de seguimiento, evaluación y control. Aparte, se debe contar con herramientas que orienten el seguimiento, análisis,  presentación y publicación de información según sus ciclos de vida.
          p.mt-4 Este proceso es complejo ya que tiene diferentes dimensiones ligadas a la extracción de información porque todas las empresas no procesan de la misma manera, no compran de la misma manera, no fabrican de la misma manera y no venden de la misma manera. La información puede aportar a la planeación estratégica en cuanto a que la comparación con los competidores influye en cómo se mueven los mercados y las empresas.
        separador
        #t_3_1.titulo-segundo.color-acento-contenido
          h2 3.1  Tipos de información
        .row
          .col-lg-5
            img(data-aos="fade-right")(src='@/assets/curso/tema3/img2.png', alt='Texto que describa la imagen')
          .col-lg-7.mt-2
            p La información es un recurso que se recopila mediante códigos y datos de una situación específica, es ordenada en cierto tiempo y espacio con un propósito determinado, ayuda al aumento del conocimiento y disminuyen la incertidumbre, a través del tiempo la manera de acceder y almacenar la información ha cambiado, en la edad media la información se encontraba en las bibliotecas de los monasterios y para la edad moderna tras el invento de la imprenta se encontraba en libros y periódicos, sin embargo, en el siglo XX avanza y se recopila en los medios de comunicación como la radio, televisión y herramientas digitales que llevaron al desarrollo de la internet.
            p La información es utilizada para alcanzar los siguientes objetivos:
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right.colorspan
                p.mb-0 Aumentar o mejorar la calidad del conocimiento en la persona.
              li 
                i.fas.fa-angle-right.colorspan
                p.mb-0 Reducir la incertidumbre ante diversas opciones en una situación.
              li 
                i.fas.fa-angle-right.colorspan
                p.mb-0 Ser una herramienta fundamental en el proceso de toma de decisiones.
              li 
                i.fas.fa-angle-right.colorspan
                p.mb-0 Ser regla de evaluación y decisiones para establecer control.
      p.mt-4 Además, es importante reconocer las características que le dan valor a esta:
      .row.justify-content-center.mt-5
        .col-lg-4.color4
          h4.text-center.mt-1 Características de la información    
    img(data-aos="zoom-in")(src='@/assets/curso/tema3/img3.svg', alt='Texto que describa la imagen')
    h5.text-center.mt-5 La información se mueve en dos tipos de entornos:
    .row.justify-content-center
      .col-lg-10
          .row.mb-5
            .col-sm-6.col-lg-6.mb-4.mb-lg-0

              .tarjeta--boton.color-primario.p-4(data-aos="fade-down")
                .row.justify-content-center.mb-3
                  .col-6
                    figure
                      img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen')

                h5 El entorno inmediato

                p.mb-2.mt-4 Son aquellos entes con los que la empresa se relaciona continuamente, como lo son los clientes, proveedores, distribuidores, compradores, entre otros.
            .col-sm-6.col-lg-6.mb-4.mb-lg-0

              .tarjeta--boton.color-primario.p-4(data-aos="fade-down")
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/img5.svg', alt='Texto que describa la imagen')

                h5.mt-4 El entorno remoto

                p.mb-2.mt-4 Es aquel que la empresa tiene en cuenta para desarrollarse como lo son la información política, la sociedad, los cambios tecnológicos y la evolución económica.
    p La información es un conjunto de datos que pueden presentarse en diferentes tipos, y puede utilizarse para diversas finalidades, sin embargo, su característica principal es transmitir un mensaje, por lo cual se puede clasificar en los siguientes tipos:
    .row
      .col-lg-3
        img(data-aos="fade-right")(src='@/assets/curso/tema3/img6.png', alt='Texto que describa la imagen')
      .col-lg-9.mt-2
        TabsA.color-secundario.mb-5

          .tarjeta.color-secundario.p-5(titulo="La información externa")
            h4 La información externa
            p Entrega el conocimiento necesario a los empresarios para conocer otras formas de competir en su entorno, ya no solo con precios sino con nuevas tecnologías y habilidades. 
          .tarjeta.color-secundario.p-5(titulo="La información tecnológica y competitiva")
            h4 La información tecnológica y competitiva
            p Es la que refiere acerca de los productos, el proceso de producción y las tecnologías, además de estrategias de mercado, con las cuales las empresas generan valor y competitividad.
          .tarjeta.color-secundario.p-5(titulo="La información técnica y económica")
            h4 La información técnica y económica
            p Soporta la información relacionada con la facturación, las cuotas de mercado y otros procesos con relación con clientes, proveedores y competidores.
          .tarjeta.color-secundario.p-5(titulo="Información jurídica y reglamentaria")
            h4 Información jurídica y reglamentaria
            p Da cuenta de la normatividad proveniente de la legislación nacional e internacional.
          .tarjeta.color-secundario.p-5(titulo="Información cualitativa y general")
            h4 Información cualitativa y general
            p Es aquella relacionada con el entorno social, la cual permite mejorar la gestión en la empresa.
          .tarjeta.color-secundario.p-5(titulo="Información del entorno y de seguridad")
            h4 Información del entorno y de seguridad
            p Se aplica a las empresas donde su razón social interviene con el bienestar del medio ambiente.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Métodos de recolección
    .row
      .col-lg-9
        .row
          .col-lg-9
            p La recolección de información requiere la utilización de varios métodos e instrumentos, con el fin de obtener la información acorde a la finalidad, objetivo o interés. En toda búsqueda de información, se debe responder a incógnitas esenciales, que de alguna forma permitan evaluar los resultados y, lo más importante, que con los datos obtenidos previamente, pueda adelantarse a futuros problemas o inconvenientes, anticipando las probabilidades. Estos métodos son de gran utilidad para que la empresa pueda avanzar y mejorar su funcionamiento con la nueva información obtenida.
          .col-lg-3
            img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
        p.mt-2 De modo que la recopilación y recepción de datos hace posible que la empresa u organización tenga una visión mucho más precisa y detallada sobre cualquier información que esté buscando para la operación y utilización de esta. Hay muchas maneras de conseguir información, pero los métodos de recolección de información que utilice la empresa dependen de elementos como la estrategia, el tipo de información que quiera conseguir y dónde puede buscarla. 

      .col-lg-3
        img(data-aos="fade-left")(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')
    p.mt-4 A continuación, se detallan los métodos más tradicionales para la recolección de información: 
    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5.colort
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.mt-4
            h4 La observación
            p.mb-0.mt-4 Es el método que se utiliza visualmente mediante un sistema para captar alguna situación determinada.
          .col-md-6.mt-4
            figure
              img(src='@/assets/curso/tema3/img9.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.mt-4
            h4 La entrevista
            p.mb-0.mt-4 Es la información captada mediante un encuentro entre dos o más participantes, la cual al finalizar se recopila por medio de un informe o resumen. 
          .col-md-6.mt-4
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')  
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.mt-4
            h4 La encuesta
            p.mb-0.mt-4 Es un instrumento mediante el cual se pretende recopilar información por medio de preguntas abiertas, cerradas o mixtas que va enfocada a un determinado grupo de personas, esta puede ser por medio presencial o virtual. 
          .col-md-6.mt-4
            figure
              img(src='@/assets/curso/tema3/img11.png', alt='Texto que describa la imagen')  
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.mt-4
            h4 La recopilación de datos
            p.mb-0.mt-4 Este se basa en recopilar información en material ya existente, o estudios realizados, por ejemplo, biografías, tesis, libros, entre otros.
          .col-md-6.mt-4
            figure
              img(src='@/assets/curso/tema3/img12.png', alt='Texto que describa la imagen')  
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Bases de datos  
    p Contar con una buena base de datos ayuda mucho en la gestión de la información en las organizaciones, por lo que cada día toman relevancia en las empresas, ya que la recopilación de datos informativos dentro de estas, son las que apoyan la eficacia en la toma de decisiones y permiten definir de manera más precisa las estrategias que se deben seguir.
    .row
      .col-lg-4.mt-3
        img(data-aos="fade-right")(src='@/assets/curso/tema3/img13.png', alt='Texto que describa la imagen')  
      .col-lg-8.mt-2
        p Existen bases de datos de empresas que contienen información de los clientes y posibles prospectos con su teléfono (fijo o móvil), nombre y apellido, preferencias, perfil en redes sociales, correo electrónico, y ubicación, también se pueden almacenar datos especiales, facturación y cuantificación de trabajadores, permitiendo usar estos datos como fuente inicial para la realización de campañas de <i>marketing</i> y caracterizar los clientes, con el fin de dar a conocer los productos o servicios, mensajería masiva, informar las promociones u ofertas del negocio, establecer una lista preferencial según características que tengan beneficios con añadidura, brindar muestras gratis de un nuevo producto o servicio, invitar y convocar a eventos, reuniones y/o talleres, generar información que aumente valor en la audiencia. Actualmente en el mundo empresarial y comercial, todo tiene que estar registrado y organizado, para poder mantenerse en el ritmo competitivo.        
    .row
      .col-lg-8.bora.p-3
        p Las bases de datos no solo generan grandes facilidades, rapidez, oportunidades y actualización en la información, sino que aparte permiten una cantidad de funciones y mecanismos con un alto nivel de ventajas a favor, como por ejemplo, permitir el almacenamiento y la recuperación de la información necesaria en cualquier momento con base a tareas propuestas. En el contexto organizacional las bases de datos también aportan al monitoreo de los procesos de compra de clientes, a mantener el contacto con el comprador potencial, estableciendo una comunicación personalizada que le genere confianza al cliente y aplicar estrategias de <i>marketing</i> con mayor impacto.
      .col-lg-4.mt-5
        img(data-aos="fade-left")(src='@/assets/curso/tema3/img14.png', alt='Texto que describa la imagen')  
    p.mt-5 Tener informatizada la base de datos tiene varias ventajas para las empresas, a continuación, se mencionan algunas de ellas:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Ley de Protección de Datos")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema3/img16.png', alt='Texto que describa la imagen')
        .col-md-9
          p.mb-0 Esta ley exige el tratamiento de los datos de una manera adecuada y estipula cuáles se pueden recopilar y cuáles no. 
          p Para esto, las empresas tienen que contar con equipos, controles o mecanismos que entreguen garantías de seguridad de los datos personales. Cuando se cuenta con bases de datos se pueden implementar controles informáticos y segregación de roles que porten a la protección  y custodia de la información.
      .row(titulo="Control de ventas")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema3/img17.png', alt='Texto que describa la imagen')
        .col-md-9
          p Con las bases de datos se puede obtener y clasificar la información como método de control en las ventas. Con lo que se obtenga en las bases de datos se podrá saber cuáles son los productos más vendidos, cuáles son los que no gustan o satisfacen necesidades, los más consultados y los más vendidos dependiendo algún periodo determinado del año.
      .row(titulo="Control de ventas")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema3/img18.png', alt='Texto que describa la imagen')
        .col-md-9
          p.mb-0 Cuando se tiene la base de datos informatizada es poca la posibilidad de errores y es difícil que se traspapelen pedidos, ni que se mezclen con otros, o que se pierda la información, aportando a la satisfacción de los clientes y reducción del número de quejas.
          p Con las bases de datos, es posible  detectar errores, inconsistencias, duplicidades en los datos y brindar soluciones más oportunas.
      .row(titulo="Campañas de <i>marketing</i>")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema3/img19.png', alt='Texto que describa la imagen')
        .col-md-9
          p Las bases de datos aportan a la estrategia de mercadeo de las empresas, pues en estas reposa la información con la que puede generar campañas, analizar los datos, y de esta forma directamente se conseguirá un incremento en las ventas y un buen funcionamiento para que así la campaña obtenga mayores beneficios.
      .row(titulo="Ventajas respecto al personal")
        .col-md-3.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema3/img20.png', alt='Texto que describa la imagen')
        .col-md-9
          p Las bases de datos sirven para mejorar y facilitar las labores de los trabajadores, pues una vez que los mismos sincronicen y estén familiarizados con la base de datos el trabajo será más rápido, sencillo y fácil.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4  Ciclo vital de los documentos         
    p Consiste en las diversas fases por las que debe atravesar la documentación interna o externa de una empresa desde su producción, recepción, conservación, protección hasta su eliminación total del archivo.
    p A continuación, se definen las tres fases de archivo, dependiendo de su característica o tipo:

    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-10.mt-4
                  img(src='@/assets/curso/fondos/1.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-8
                  h4.mt-3.text-center Archivo de gestión
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.text-center.mt-5 Archivo de gestión
              p.text-center.mb-5 Es el archivo de la oficina productora que reúne su documentación en trámite o que se encuentra en proceso, la que se somete a continuo uso y la que se consulta administrativamente.
              <br><br>
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-7.mt-4
                  img.tam2(src='@/assets/curso/fondos/2.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-8
                  h4.mt-3.text-center Archivo central
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.text-center.mt-5 Archivo central
              p.text-center.mb-5 Unidad administrativa que cumple con la coordinación y control en el funcionamiento de los archivos de gestión, la cual concentra los documentos transferidos por los mismos una vez finaliza el trámite y cuando su consulta no es constante.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-8.mt-4
                  img.tam2(src='@/assets/curso/fondos/3.svg', alt='Texto que describa la imagen')
              .row.justify-content-center
                .col-lg-8
                  h4.mt-3.text-center Archivo histórico
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.text-center.mt-5 Archivo histórico
              p.text-center.mb-5 Es el archivo en el cual se transfiere del archivo central o también del archivo de gestión los documentos que por su funcionalidad se deben conservar permanentemente dado su valor histórico.
    p Es necesario resaltar que los documentos atraviesan diferentes etapas sucesivas por momentos, de acuerdo con diferentes características que va adquiriendo o perdiendo con el tiempo, no es necesario e indispensable que sean llevados a lugares específicos para que atraviesen su ciclo vital.
    .row
      .col-lg-3
        img(src='@/assets/curso/tema3/img24.png', alt='Texto que describa la imagen')

      .col-lg-9.mt-2
        p Es muy importante que se tenga presente que el ciclo vital del documento es uno de los principios y finalidades en los que se sustenta y soporta la gestión documental, se debe tener presente que el documento puede pasar por un periodo determinado sin ser trasladado por cada uno de los archivos, esto depende del tipo de documento, hay documentos que deben conservarse por toda la vida jurídica de la empresa. Cuando el documento es digitalizado se puede gestionar de una manera más ágil en todo su ciclo vital, el cual se representa a continuación:
    .row.justify-content-center
      .col-lg-8
        img(data-aos="zoom-in")(src='@/assets/curso/fondos/4.svg', alt='Texto que describa la imagen')
    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5  Recepción y procesamiento       
    .row
      .col-lg-3
        img.tam(data-aos="fade-right")(src='@/assets/curso/tema3/img26.png', alt='Texto que describa la imagen')
      .col-lg-9
        .row
          .col-lg-4.mt-2
            img(src='@/assets/curso/tema3/img27.png', alt='Texto que describa la imagen')
          .col-lg-8.mt-2
            p Uno de los casos donde una empresa pierde tiempo es buscando documentos, esto perjudica la productividad de la empresa y puede transmitir una mala impresión, reflejar improvisación y falta de organización de cara al cliente o comprador, la situación se agrava en el peor de los casos, cuando los archivos se pierden o extravían, dando cuenta de la falta de implementación de protocolos de recepción al momento de organizar la documentación.
            p Con la finalidad de controlar adecuadamente la documentación, es importante establecer protocolos para crear, guardar, clasificar, catalogar y gestionar todos los archivos de la empresa, esto economiza tiempo al organizar los procesos y garantizar que ningún documento sea extraviado, lo cual es importante en los procesos administrativos y por ende para la empresa.
        p Inicialmente, es claro entender que, con una estructura pequeña en la planta de personal, todos los colaboradores deben conocer e implementar el protocolo de recepción de documentos, ya que muchas veces por temas financieros se dificulta designar una persona para esta función específica con un turno integral, para el protocolo de recepción de documentos se recomienda incluir los siguientes procesos:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            p Separar la correspondencia y documentos de conocimiento común de aquellas con carácter sigiloso, encaminando hacia la caracterización de las confidenciales a sus respectivos destinatarios.
          li 
            i.fas.fa-angle-right
            p Conocer el contenido de las correspondencias que tienen una relación en común y pedir documentos que contengan antecedentes, si existieran.
          li 
            i.fas.fa-angle-right
            p Clasificar el documento de acuerdo con el método específico que la empresa implemente, por ejemplo: sellándolo.
          li 
            i.fas.fa-angle-right
            p Elaborar un resumen del documento si se pudiera realizar.
    h5.text-center Una vez implementado el protocolo para la recepción de documentos en la empresa trae las siguientes ventajas:                     
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5.a1
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(data-aos="fade-right")(src='@/assets/curso/tema3/img28.svg', alt='Texto que describa la imagen')
          
        h5.text-center Mejora la organización
        p Tener conocimiento que los documentos están debidamente guardados y que son fáciles de encontrar, permite que las diversas labores se concentren en aquello que realmente le importa a la empresa, minimiza las preocupaciones en medio de los problemas del día a día. Pero no sólo es eso, garantiza que se mantengan los procesos organizados creando una política de responsabilidad interna.

      .col-md.tarjeta.color-primario.p-5.a2
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(data-aos="fade-right")(src='@/assets/curso/tema3/img29.svg', alt='Texto que describa la imagen')
          
        h5.text-center Profesionalismo
        p Sólo quién tuvo una experiencia sobre dejar esperando en la fila a un cliente o con vergüenza ante un comprador, sabe dar una explicación qué tanto perjudicó directamente la imagen al extraviar un documento o al demostrar la dificultad para encontrarlo. Mejorar estos aspectos demuestra profesionalismo.

      .col-md.tarjeta.color-primario.p-5.a3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(data-aos="fade-right")(src='@/assets/curso/tema3/img30.svg', alt='Texto que describa la imagen')
          
        h5.text-center Economía de tiempo
        p Suele pasar que cuando los documentos están debidamente organizados y que se implementa un protocolo de recepción, la rutina se agiliza y nadie pierde tiempo buscando los archivos, tras implantar los procesos, es muy probable esperar una mejora en el ejercicio diario y en la productividad, principalmente de aquellos que sus funciones están relacionadas con los archivos o dependen de ellos.


</template>

<script>
export default {
  name: 'Tema3',
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
.tabs-a.color-secundario .tabs-a__tab__selected
  background-color: #00F3BE!important
.tabs-a__tab
  background-color: #E8E8E8
.tarjeta.color-secundario
  background-color: #D8E1E9
.tabs-a.color-secundario .tabs-a__tab__selected:before
  background-color: #00F3BE!important
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFC631
  border: #FFC631
.slyder-a__bullets__item--active
  background-color: #033F71
.colort
  background-color: #92BFB1
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F9F7EC
.tarjeta--azul
  background-color:#C8DFD8
.tarjeta-flip.color-primario .tarjeta-flip__contenido
  background-color: #8AA2B6
.tarjeta.color-primario *
  color: #12263F
.tarjeta-flip.color-primario .tarjeta-flip__img
  background-color: #8AA2B6
.a1
  background-color:#92BFB1!important
.a2
  background-color:#D3E5E0!important
.a3
  background-color:#F4F9F7!important
.tarjeta--boton.color-primario.p-4
  background-color: #92BFB1
.tarjeta--boton.color-primario.p-4:hover
  background-color: #C8DFD8
</style>
