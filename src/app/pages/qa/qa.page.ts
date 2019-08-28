import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.page.html',
  styleUrls: ['./qa.page.scss'],
})
export class QaPage implements OnInit {

  public qaDates;

  qaCategories = [
    {
      nombre:"Estilos de Vida",
      comentario:"Hablamos del cambio de el estilo de vida de la gestante",
      ev : [
        { 
          id:1,
          pregunta:"¿Cuantos kilos debo de subir durante mi embarazo?",
          respuesta:"Dependerá de tu peso inicial del mismo. Si pesaras menos de lo normal al inicio de tu embarazo, debes subir más que aquellas que empezaron con un peso normal o mayor.  El cálculo exacto depende de tu Indice de Masa Corporal inicial. En promedio se recomienda ganar entre 10 a 15 kilos. Si tu IMC es menor a 18 debes ganar entre 12 a 18 kilos. Si estás dentro de los esperado entre 11 a 15 y estás con sobrepeso puedes ganar entre 7 y 11 kilos y si estas con obesidad debes ganar entre 5 y 9 kilos.  En tu proxima consulta puedes preguntar a medico como calcular tu IMC para que te explique la cantidad exacta de kilos que puedes subir"
        },
        {
          id:2,
          pregunta:"¿Puedo manejar?",
          respuesta:"Puedes manejar sin ningun problema durante todo tu embarazo, salvo tu médico  te haya contraindicacdo hacerlo por algún motivo específico de tu embarazo.  Pero cuando viaja en automóvil, es importante: Usa siempre tu cinturón de seguridad. El cinturón del hombro debe ir entre sus senos y al costado de su vientre. El cinturón de regazo debe ir debajo de tu vientre."
        },
        {
          id:3,
          pregunta:"Puedo viajar en avión?",
          respuesta:"Puedes viajar en avión durante el embarazo a menos que tu médico te lo haya contraindicado por algun motivo especifico de tu embarazo. Pero si planeas volar hacia el final de su embarazo, consulte con la aerolínea. La mayoría de las aerolíneas no permiten que las mujeres vuelen durante el último mes de embarazo.Si tienes vuelos largos, debes movilizarte para evitar la formación de coagulos en la sangre e hinchazon de pies. Evita viajar a países o lugares donde exista riesgo de exposión a ciertas enfermedades endémicas como la malaria o el zika."
        }
      ]
    },
    {
      nombre:"Alimentación y Nutrición",
      comentario:"Consejos Utiles sobre alimentación sobre la gestante",
      ev:[
        {
          id:1,
          pregunta:"¿Puedo comer embutidos?",
          respuesta:"Los embutidos se recomiendan consumirlos con precaucion durante el embarazo ya que se considera carne cruda y podría contener algunos microorganismos que puedan comprometer a la salud de tu bebé. Si vas a comer embutidos asegurate que hayan sido congelados previamente o se encuentren cocidos. Los embutidos crudos son mas peligosos para la salud del bebé."
        },
        {
          id:2,
          pregunta:"¿Puedo tomar bebidas alchólicas?",
          respuesta:"No hay ninguna cantidad de alcohol que sea seguro tomar duranteel embarazo y puede afectar al desarrollo del embrióndesde las primeras semanas y a lo largo de su desarrollo en tu vientre. La recomendación es evitar el consumo de alcohol en todas sus presentaciones."
        },
        {
          id:3,
          pregunta:"¿Puedo tomar café?",
          respuesta:"El consumo de cafeína está restringido en el embarazo. Se recomienda consumir como maximo una taza al día. El consumo de cafina esta asociado a múltiples resultados adversos para el bebé como anomalias congenitas, parto prematuro o pérdida fetal en el peor de los casos. La recomendación es evitar o en todo caso disminuir el consumo de café o bebidas con cafeina incluido bebidas gaseosas."
        }
      ]
    },
    {
      nombre:"Piel y Cuidado Personal",
      comentario:"Preguntas y respuestas sobre la piel y cuidado personal",
      ev:[
        {
          id:1,
          pregunta:"¿Qué puedo hacer para controlar las estrias?",
          respuesta:"Usa desde el principio un producto antiestrías para que evites su aparicion durante el embarazo. Aunque suelen aparecer a partir de la segunda mitad de tu embarazo, cuanto más preparada esté tu piel, mejor soportará los cambios mecánicos y hormonales."
        },
        {
          id:2,
          pregunta:"¿Se me cae el cabello es normal?",
          respuesta:"La caída del cabello es normal durante el embarazo y más aun durante el periodo posparto. Sucede por los múltiples cambios a nivel hormonal que experimentas en estas etapas de tu vida."
        },
        {
          id:3,
          pregunta:"¿Estoy en tratamiento para el acné debo de interrumpirlo?",
          respuesta:"Dependerá especificamente de qué medicamento estes utilizando. Consulta con tu médico las medicinas que estas tomando para ver si continuas o tienes que suspender algunos medicamentos."
        }
      ]
    },
    {
      nombre:"Embarazo y Salud",
      comentario:"Preguntas y respuestas sobre embarazo y salud",
      ev:[
        {
          id:1,
          pregunta:"'Me duele mucho la cabeza, es normal? cuándo debo de ir a urgencias?",
          respuesta:"Si ya superaste las 24 semanas es necesario que vayas a la mergencia ya que se considera un signo de alarma que deberá de se descartado si se trata de algo relacionado o no a tu embarazo.  "
        },
        {
          id:2,
          pregunta:"¿Que puedo tomar para el dolor de cabeza?",
          respuesta:"Si se ha descartado que tu dolor de cabeza no se debe a una preeclampsia o si te encuentras por debajo de las 24 semanas, de primera línea puedes tomar paracetamol, amenos que tengas alergia a este medicamento. La dosis y la frecuencia de las tomas deberan de ser confirmadas con tu médico. Si e dolor es muy intenso y no ha bajado con paracetamol es necesario que acudas por emergencia."
        },
        {
          id:3,
          pregunta:"¿Me han recetado antibioticos estando embarazada, son seguros para mi bebé?",
          respuesta:"Existen varios antibióticos que son seguros en el embarazo, va depender de cual te hayan indicado. "
        }
      ]
    },
    {
      nombre:"Medicamentos y Pruebas",
      comentario:"Preguntas y respuestas para medicamentos y pruebas",
      ev:[
        {
          id:1,
          pregunta:"¿Los rayos X son peligrosos para mi bebé?",
          respuesta:"Definitivamente. Durante tu embarazo no deberias estar expuesta  este tipo de examenes a menos que sea estrictamente necesario y sea indicado por tu médico, examen que deberá de ser realizado con todas las medidas de proteccion necesarias. "
        },
        {
          id:2,
          pregunta:"¿Que vitaminas debo tomar en el embarazo?",
          respuesta:"Las escenciales son ácido fólico (incluso meses antes de salir embarazada) y hierro. Son las dos principales vitaminas que no deben de faltar como suplemento a tu dieta diaria. Consulta con tu médico para que te indique cual es la mejor opcion multivitaminica para tu embarazo."
        },
        {
          id:3,
          pregunta:"Para qué sirven las vitaminas en el embarazo?",
          respuesta:"La principal vitaminica que debe estar presente en tu suplemento es el hierro. Es importate para tratar o evitar que aparezca la anemia, condicion en la cual tu capacidad para transportar oxigeno puede estar disminuida. Teniendo varias repercusiones sobre tu bebé"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  qaDetail(q){
    this.qaDates = q.ev;
  }
  showModal(){
    
  }
}

