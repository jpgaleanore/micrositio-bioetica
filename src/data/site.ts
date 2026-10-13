/**
 * Datos editables del micrositio.
 * Cambia aquí los nombres, el entrevistado, el video y el podcast
 * sin tocar los componentes.
 */

export const site = {
  titulo: 'Inteligencia artificial en el diagnóstico médico',
  subtitulo: '¿Quién responde cuando un algoritmo participa en la decisión sobre la salud de una persona?',
  curso: 'Ética y Axiología',
  fase: 'Fase 2',
  anio: 2026,
  integrantes: ['Juan Pablo Galeano Restrepo'],
  programa: 'Ética y Axiología',
  universidad: 'Universidad Católica Luis Amigó',
};

export const entrevista = {
  // EDITAR: datos del entrevistado
  nombre: '[Nombre del entrevistado]',
  cargo: '[Profesión / cargo, por ejemplo: Médico radiólogo, Hospital X]',
  presentacion:
    '[Formación, años de experiencia, relación con el uso de tecnologías diagnósticas o con la atención de pacientes.]',
  justificacionExtra:
    '[Completar con razones específicas: por qué esta persona, qué aporta su trayectoria, qué vínculo tiene con el dilema.]',
  // EDITAR: ID del video de YouTube (lo que va después de v= en la URL)
  youtubeId: 'VIDEO_ID',
  // EDITAR: fecha para la referencia APA
  fechaApa: '2026, [día] de [mes]',
  apellidoInicial: '[Apellido, Inicial del entrevistado]',
  entrevistador: '[Nombre del entrevistador]',
  preguntas: [
    '¿Ha utilizado o conoce sistemas de inteligencia artificial que apoyen el diagnóstico en su práctica? ¿Qué experiencia ha tenido?',
    'Si una IA y su criterio clínico discrepan frente a un mismo examen, ¿cómo decide y por qué?',
    '¿Considera que los pacientes deben ser informados cuando un algoritmo participa en su diagnóstico? ¿Cómo lo explicaría?',
    '¿Quién debería responder legal y éticamente cuando un diagnóstico asistido por IA resulta equivocado?',
    '¿Qué riesgos ve en entrenar estos sistemas con datos de poblaciones distintas a la colombiana?',
    '¿Cree que la IA puede ampliar el acceso al diagnóstico en zonas rurales o, por el contrario, profundizar las desigualdades?',
    '¿Qué debería exigirse a una institución antes de implementar una herramienta de este tipo?',
    '¿Cómo cambia la relación médico-paciente cuando hay un tercer "actor" tecnológico en la consulta?',
  ],
  // EDITAR: aportes reales obtenidos en la entrevista
  aportes: [
    '[Aporte 1: por ejemplo, cómo se usa hoy la IA en su institución y qué limitaciones ha encontrado.]',
    '[Aporte 2: su postura sobre la responsabilidad y la supervisión humana.]',
    '[Aporte 3: su visión sobre el consentimiento y la comunicación con el paciente.]',
    '[Aporte 4: riesgos de sesgo y equidad que identifica en el contexto colombiano.]',
    '[Aporte 5: condiciones que considera indispensables para una adopción responsable.]',
    '[Aporte 6: una frase o idea que resuma su posición.]',
  ],
};

export const podcast = {
  titulo: 'Diagnóstico compartido',
  // EDITAR: coloca el archivo en public/media/podcast.mp3 o cambia la ruta por un enlace externo
  archivo: 'media/podcast.mp3',
};

export const actores = [
  { icono: '🧑‍🦱', nombre: 'Pacientes y familias', texto: 'Titulares del derecho a la salud, a la información y a decidir sobre su cuerpo.' },
  { icono: '🩺', nombre: 'Profesionales de la salud', texto: 'Conservan la responsabilidad clínica y ética del acto médico (Ley 23 de 1981).' },
  { icono: '💻', nombre: 'Desarrolladores y empresas', texto: 'Diseñan, entrenan y comercializan los sistemas; deciden qué datos y qué métricas usar.' },
  { icono: '🏥', nombre: 'Instituciones de salud y EPS', texto: 'Adoptan la tecnología buscando eficiencia; definen protocolos de uso y supervisión.' },
  { icono: '⚖️', nombre: 'Estado y reguladores', texto: 'Ministerio de Salud, INVIMA, Superintendencia de Industria y Comercio: vigilan seguridad y datos.' },
  { icono: '🔬', nombre: 'Comunidad científica', texto: 'Valida la evidencia, detecta sesgos y propone estándares de evaluación.' },
];

export const valoresEnConflicto = [
  ['Innovación y eficiencia', 'Seguridad y prudencia'],
  ['Acceso ampliado', 'Equidad real en el desempeño'],
  ['Uso de datos para el bien común', 'Privacidad e intimidad'],
  ['Objetividad algorítmica', 'Juicio clínico y relación humana'],
];

export const teoriasEticas = [
  { nombre: 'Utilitarismo', texto: 'Si la IA reduce errores en promedio y permite atender a más personas, maximiza el bienestar agregado. Crítica: el "promedio" puede ocultar daños concentrados en grupos vulnerables.' },
  { nombre: 'Deontología kantiana', texto: 'El paciente nunca debe ser tratado como un mero medio (un dato más de entrenamiento). Exige consentimiento, veracidad y respeto a la dignidad con independencia de los resultados.' },
  { nombre: 'Ética de la virtud', texto: 'Pregunta qué haría un buen médico: usar la herramienta con prudencia, mantener la competencia propia y no abandonar el juicio clínico por comodidad.' },
  { nombre: 'Ética del cuidado', texto: 'Resalta la relación, la escucha y la vulnerabilidad del paciente (Gilligan, 1982). Un diagnóstico es también un acto de acompañamiento que una máquina no puede dar.' },
  { nombre: 'Principio de responsabilidad', texto: 'Jonas (1995) exige cautela ante tecnologías cuyos efectos a largo plazo no conocemos: "obra de tal modo que los efectos de tu acción sean compatibles con la permanencia de una vida humana auténtica".' },
  { nombre: 'Principialismo', texto: 'Marco dominante en bioética clínica: los cuatro principios se ponderan caso a caso. Es el enfoque que usamos en la deliberación (Sección 4).' },
];

export interface Referencia {
  html: string;
  url?: string;
}

export const referencias: { grupo: string; items: Referencia[] }[] = [
  {
    grupo: 'Artículos científicos y libros',
    items: [
      { html: 'Beauchamp, T. L., &amp; Childress, J. F. (2019). <em>Principles of biomedical ethics</em> (8.ª ed.). Oxford University Press.' },
      { html: 'Char, D. S., Shah, N. H., &amp; Magnus, D. (2018). Implementing machine learning in health care: Addressing ethical challenges. <em>New England Journal of Medicine, 378</em>(11), 981–983.', url: 'https://doi.org/10.1056/NEJMp1714229' },
      { html: 'Esteva, A., Kuprel, B., Novoa, R. A., Ko, J., Swetter, S. M., Blau, H. M., &amp; Thrun, S. (2017). Dermatologist-level classification of skin cancer with deep neural networks. <em>Nature, 542</em>(7639), 115–118.', url: 'https://doi.org/10.1038/nature21056' },
      { html: 'Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., Luetge, C., Madelin, R., Pagallo, U., Rossi, F., Schafer, B., Valcke, P., &amp; Vayena, E. (2018). AI4People: An ethical framework for a good AI society: Opportunities, risks, principles, and recommendations. <em>Minds and Machines, 28</em>(4), 689–707.', url: 'https://doi.org/10.1007/s11023-018-9482-5' },
      { html: 'Gerke, S., Minssen, T., &amp; Cohen, G. (2020). Ethical and legal challenges of artificial intelligence-driven healthcare. En A. Bohr &amp; K. Memarzadeh (Eds.), <em>Artificial intelligence in healthcare</em> (pp. 295–336). Academic Press.', url: 'https://doi.org/10.1016/B978-0-12-818438-7.00012-5' },
      { html: 'Gilligan, C. (1982). <em>In a different voice: Psychological theory and women\'s development</em>. Harvard University Press.' },
      { html: 'Goddard, K., Roudsari, A., &amp; Wyatt, J. C. (2012). Automation bias: A systematic review of frequency, effect mediators, and mitigators. <em>Journal of the American Medical Informatics Association, 19</em>(1), 121–127.', url: 'https://doi.org/10.1136/amiajnl-2011-000089' },
      { html: 'Jonas, H. (1995). <em>El principio de responsabilidad: Ensayo de una ética para la civilización tecnológica</em>. Herder. (Obra original publicada en 1979)' },
      { html: 'McKinney, S. M., Sieniek, M., Godbole, V., Godwin, J., Antropova, N., Ashrafian, H., Back, T., Chesus, M., Corrado, G. S., Darzi, A., Etemadi, M., Garcia-Vicente, F., Gilbert, F. J., Halling-Brown, M., Hassabis, D., Jansen, S., Karthikesalingam, A., Kelly, C. J., King, D., … Shetty, S. (2020). International evaluation of an AI system for breast cancer screening. <em>Nature, 577</em>(7788), 89–94.', url: 'https://doi.org/10.1038/s41586-019-1799-6' },
      { html: 'Morley, J., Machado, C. C. V., Burr, C., Cowls, J., Joshi, I., Taddeo, M., &amp; Floridi, L. (2020). The ethics of AI in health care: A mapping review. <em>Social Science &amp; Medicine, 260</em>, Artículo 113172.', url: 'https://doi.org/10.1016/j.socscimed.2020.113172' },
      { html: 'Obermeyer, Z., Powers, B., Vogeli, C., &amp; Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. <em>Science, 366</em>(6464), 447–453.', url: 'https://doi.org/10.1126/science.aax2342' },
      { html: 'Topol, E. J. (2019). High-performance medicine: The convergence of human and artificial intelligence. <em>Nature Medicine, 25</em>(1), 44–56.', url: 'https://doi.org/10.1038/s41591-018-0300-7' },
    ],
  },
  {
    grupo: 'Documentos legales y normativos',
    items: [
      { html: 'Congreso de la República de Colombia. (1981). <em>Ley 23 de 1981, por la cual se dictan normas en materia de ética médica</em>. Diario Oficial No. 35.711.', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66903' },
      { html: 'Congreso de la República de Colombia. (2012). <em>Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales</em>. Diario Oficial No. 48.587.', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981' },
      { html: 'Congreso de la República de Colombia. (2015). <em>Ley 1751 de 2015, por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones</em>. Diario Oficial No. 49.427.', url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733' },
      { html: 'Departamento Nacional de Planeación. (2019). <em>Documento CONPES 3975: Política nacional para la transformación digital e inteligencia artificial</em>.', url: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3975.pdf' },
      { html: 'Ministerio de Salud y Protección Social. (2019). <em>Resolución 2654 de 2019, por la cual se establecen disposiciones para la telesalud y parámetros para la práctica de la telemedicina en el país</em>.', url: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202654%20del%202019.pdf' },
      { html: 'Parlamento Europeo y Consejo de la Unión Europea. (2024). <em>Reglamento (UE) 2024/1689 por el que se establecen normas armonizadas en materia de inteligencia artificial (Ley de Inteligencia Artificial)</em>. Diario Oficial de la Unión Europea, L 2024/1689.', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj' },
    ],
  },
  {
    grupo: 'Informes técnicos y páginas institucionales',
    items: [
      { html: 'Organización Mundial de la Salud. (2021). <em>Ethics and governance of artificial intelligence for health: WHO guidance</em>.', url: 'https://www.who.int/publications/i/item/9789240029200' },
      { html: 'UNESCO. (2021). <em>Recomendación sobre la ética de la inteligencia artificial</em>.', url: 'https://unesdoc.unesco.org/ark:/48223/pf0000381137_spa' },
    ],
  },
];
