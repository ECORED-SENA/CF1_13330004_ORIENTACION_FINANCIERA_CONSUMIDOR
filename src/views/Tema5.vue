<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.colspan 5
      h1 Normas de seguridad y salud en el trabajo  
    .row.bg3
      p Aunque en las empresas se deben garantizar el bienestar de los trabajadores, es innegable que la principal razón por la que se implementa la seguridad y salud en el trabajo es por cumplir el requisito legal,  por lo tanto, es importante identificar la normatividad vigente, que regula la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores, además del mantenimiento del bienestar físico, mental y social de los trabajadores en todas las ocupaciones.                                             
      .row.justify-content-center
        .col-lg-10
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 A partir el año 2012, el Ministerio de Trabajo renovó la denominación del término salud ocupacional a seguridad y salud en el trabajo, debido a esto los empleados y empleadores deben acoplarse a esta novedad en cuanto al cambio de la terminología legal.
          p.mt-4 Anteriormente, este término salud ocupacional se centraba en la salud del trabajador, pero con esta novedad se complementan dos factores importantes: la salud y la seguridad del empleado que aplica desde el punto de vista el desarrollo de las labores estipuladas en su trabajo.
      #t_5_1.titulo-segundo.color-acento-contenido
        h2 5.1  Marco normativo    
      .row
        .col-lg-9
          .row
            .col-lg-9
              p Es necesario tener un acercamiento acerca de la legislación nacional que regula la seguridad y salud en el trabajo, reconociendo elementos en la aplicación del sistema integral que articula varias áreas administrativas de índole interno y externo, de hecho, en las empresas se crea un cargo específico para coordinar este tema tan relevante, donde busca garantizar el cumplimiento de esta normatividad que puede actualizarse o cambiar a lo largo de tiempo.

            .col-lg-3
              img(src='@/assets/curso/tema5/img3.png' alt='AvatarTop')
          p A continuación, se relacionan algunas normas de carácter obligatorio en el sistema laboral, donde se han dado avances significativos en materia de seguridad en el ejercicio de labores determinadas, la prevención de enfermedades laborales y otros complementos que se relacionan en este contexto. Cabe resaltar que existe una amplia normatividad internacional y nacional, sin embargo, se hace alusión a las normas vigentes que han sido aprobadas que impactan directamente en la funcionalidad del sistema y por tanto son las más relevantes, sin descartar la importancia e impacto de otras normas vigentes.
        .col-lg-3                          
          img(data-aos="fade-left")(src='@/assets/curso/tema5/img2.png' alt='AvatarTop')
      h5.text-center Normatividad nacional en seguridad y salud en el trabajo.
    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.mt-5.mb-5(titulo="2012")
          .col-md-3.mb-4.mb-md-0
            
            figure
              img(src='@/assets/curso/tema5/img4.png', alt='Texto que describa la imagen')
          .col-md-8
            h5 Resolución 1409
            p.mt-4 En esta se establece el reglamento de seguridad para protección contra caídas en trabajo de alturas, esta rige para todos los actores que estén vinculados de manera formal e informal a una empresa o sean independientes que desempeñan labores a una altura superior a 1.5 metros, igualmente esta norma aplica para actividades de atención de emergencias y rescate y actividades lúdicas, artísticas, deportivas o de alta montaña.
        .row.justify-content-center.mt-5.mb-5(titulo="2013")
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5/img5.png', alt='Texto que describa la imagen')
          .col-md-8
            h5 Resolución 90708
            p.mt-4 A través de esta se estipula el reglamento técnico de instalaciones eléctricas con cumplimiento obligatorio sobre todo el territorio nacional.
        
        .row.justify-content-center.mt-5.mb-5(titulo="2014")
          .col-md-5.mb-4.mb-md-0
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Resolución 1565
            p Esta expide la guía metodológica para la elaboración del plan estratégico de seguridad vial.
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Resolución 3368
            p Modifica la resolución 1409 del año 2012 con el fin de entregar definiciones de coordinador, entrenador en alturas y además establece el requerimiento de certificado de competencias o capacitación de trabajo realizado en alturas.
          .col-md-5.mb-4.mb-md-0
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Decreto 1507

            p Entra a regir el manual único para la calificación de la pérdida de la capacidad laboral u ocupacional.
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Decreto 1477

            p En este se establece la tabla de enfermedades laborales, permitiendo la identificación de agentes de riesgo para facilitar la de prevención de enfermedades en las actividades laborales y  el nombramiento de las enfermedades para determinar el diagnóstico médico a los trabajadores afectados.
        .row.justify-content-center.mt-5.mb-5(titulo="2015")
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5/img6.png', alt='Texto que describa la imagen')
          .col-md-8
            h5 Decreto 1072

            p.mt-4 En este se expide el decreto único reglamentario del sector del trabajo, donde se formulan y adoptan las políticas, planes generales, programas y proyectos para el trabajo, el respeto de los derechos fundamentales, las garantías de los trabajadores, el fortalecimiento, promoción y protección de las actividades de la economía solidaria y el trabajo decente.
        
        .row.justify-content-center.mt-5.mb-5(titulo="2016")
          .col-md-5.mb-4.mb-md-0
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Decreto 171
            p En este se reglamenta la transición para la implementación del sistema de gestión de la seguridad y salud en el trabajo, donde todos los empleadores los contratantes de cualquier modalidad deberán sustituir el programa de salud ocupacional por el SGSST.
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Resolución 974
            p Aporta el formulario único de afiliación y registro de novedades en al sistema general en seguridad social en salud, aplica para entidades vinculadas al sector salud.
          .col-md-5.mb-4.mb-md-0
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Decreto 1563
            p En este se establece la regla para la afiliación voluntaria de los trabajadores independientes que devengue más de 1 SMMLV y el pago de aportes de ARL, mediante la planilla integrada de liquidación de aportes.
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Resolución 4927
            p En esta se establecen los parámetros y requisitos para desarrollar, certificar y registrar la capacitación virtual en el SGSST, esta capacitación que debe ser gratuita la otorga la administradora de riesgos laborales.
        .row.justify-content-center.mt-5.mb-5(titulo="2017")
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5/img7.png', alt='Texto que describa la imagen')
          .col-md-8
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                h5 Resolución 1111
            p Se define los estándares mínimos del SGSST para empleadores y contratantes, esta incluye normas, requisitos y procedimientos obligatorios con que se verifica, controla que se cumplan las condiciones básicas para el desarrollo de actividades.
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                h5 Decreto 52	
            p Se modifica la fecha en que todos los empleadores y contratantes de personal bajo cualquier modalidad deberán sustituir el programa de salud ocupacional por el SGSST, ahora a partir del 1 junio 2017 se inicia de manera progresiva y sistemática la ejecución las fases de implementación.
        .row.justify-content-center.mt-5.mb-5(titulo="2018")
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5/img8.png', alt='Texto que describa la imagen')
          .col-md-8
            h5 Resolución 3310
            p Se adopta el formulario único para reporte de novedades al sistema de riesgos laborales.
        .row.justify-content-center.mt-5.mb-5(titulo="2019")
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema5/img9.png', alt='Texto que describa la imagen')
          .col-md-8
            h5 Resolución 0312
            p En esta se deroga la Resolución 1111 de 2017,  definiendo nuevos estándares mínimos del SGSST.
    separador  
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2  Aplicación de la norma en seguridad en el trabajo y el ambiente    
    .row
      .col-lg-4
        p Con los sistemas de gestión ambiental y gestión en la seguridad y salud en el trabajo, se busca garantizar la mejora de la calidad de los procesos, tanto operativos, como administrativos; de igual forma, se pueden disminuir las pérdidas por la inadecuada ejecución de los procesos. Esta estrategia es acogida por las organizaciones que quieran alcanzar un alto nivel de protección del medio ambiente en el marco de un desarrollo sostenible y se construyen con base en acciones medioambientales y herramientas de gestión que interaccionan entre sí para conseguir un objetivo claramente definido: protección medioambiental.
      .col-lg-4
        img(src='@/assets/curso/tema5/img10.png', alt='Texto que describa la imagen')

      .col-lg-4.color6.p-3
        p <strong>Las empresas hoy en día están poniendo en marcha el sistema de gestión ambiental, destinado en los casos más sencillos al ahorro de recursos tan habituales como el papel o la electricidad, consiguiendo así efectos significativamente positivos a nivel económico y ambiental. Tales acciones se derivan también por la preocupación que existe por el cuidado del planeta.</strong>
    .row.mt-4
      .col-lg-5
        img(data-aos="fade-down")(src='@/assets/curso/tema5/img11.png', alt='Texto que describa la imagen')
      .col-lg-7
        p Así como las empresas se preocupan por el cuidado del medio ambiente, también es importante que se responsabilicen por la seguridad y salud de sus trabajadores; por tanto, estas deben planificar la manera como se puede mejorar la seguridad y salud de sus empleados; para esto es necesario identificar las acciones que se estén realizando de forma incorrecta, que se pueden cambiar en pro del bienestar de los trabajadores.  
        p La gestión ambiental <strong><i>“es un proceso que busca prevenir, resolver, mantener y fortalecer el desarrollo sostenible, relacionado con el uso racional de los recursos, en el cual tienen participación diferentes actores como la comunidad, las organizaciones y el Estado”</i></strong> (Ministerio de Ciencias, 2018, p.5), esto le permite a las empresas pensar que todas las actividades que realicen deben enfocarse en el desarrollo sostenible para beneficio de sus trabajadores y el medio ambiente, considerando lo que esto implica han empezado a preocuparse por el impacto que deja su industria y por ello han comenzado a generar acciones que aporten a la disminución de los efectos y además ayudan a que sus colaboradores tomen consciencia de la importancia del cuidado del medio ambiente. 
    p.mt-4 Es así, que cobra relevancia la estructuración de la política ambiental dentro de las organizaciones, pues con esta se debe declarar el compromiso con el medio ambiente a través de tres aspectos relevantes:  
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h4.mb-2 La mejora continua, la prevención y control de la contaminación y el compromiso de cumplir la legislación ambiental relevante y los compromisos adquiridos para la protección del medio ambiente. Esta política se convierte en uno de los requisitos primordiales para la implementación de un sistema de gestión ambiental.
        p.mt-4 Estos sistemas se conforman por una estructura organizativa en la que se planifican actividades, responsabilidades, prácticas y recursos para desarrollar las actividades, manteniendo al día los compromisos en materia de protección ambiental que suscribe una empresa.  

  
</template>

<script>
export default {
  name: 'Tema5',
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
.bloque-texto-c.color-secundario
  background-color: #E2E4E9
</style>
