const postmanGetObject = {
  id: 245,
  title: {
    rendered:
      'HIST-123-70 &#8211; Proseminar &#8211; Spring 2021 &#8211; Oidtmann',
  },
  information_literacy_objectives: [11, 17, 10],
  threshold_concepts: [18, 19],
  modules: [28, 29, 30, 32, 38],
  librarians: [39],
  acf: {
    course_code: 'HIST-123-70',
    course_title: 'Proseminar',
    faculty_first_name: 'Max',
    faculty_last_name: 'Oidtmann',
    semester: 'summer',
    year: '2021',
    co_instructor: '',
    session_date: '03/11/2021',
    duration_of_session: '45',
    number_of_learners: '12',
    class_assignment: 'Research a historical topic and write a paper.',
    learning_outcomes:
      '<ul>\n<li>Be able to locate and request a physical book from the library</li>\n<li>Search for and access online materials such as articles and e-books</li>\n<li>Search and access materials according to content type, date, peer-review/popular</li>\n<li>Learn how to find and copy automated citations</li>\n</ul>\n',
    resources: '',
  },
};

const reactObj = {
  course_code: 'ECON-002-72',
  course_name: 'Econ Principles Macro',
  faculty: 'McCornac, Dennis',
  semester: 'Spring',
  year: '2021',
  duration: '50',
  librarians: [39],
  class_assignment: 'Read a book',
  information_literacy_objectives: [11, 8, 12, 14],
  threshold_concepts: [22, 21, 23],
  modules: [26, 29, 32, 33, 34],
};

const postmanPostObj = {
  information_literacy_objectives: [10, 11, 17],
  threshold_concepts: [18, 19],
  modules: [28, 29, 30, 32, 38],
  librarians: [39],
  title: 'HIST-123-70 - Proseminar - Spring 2021 - Oidtmann',
  fields: {
    semester: 'summer',
    session_date: '2021-03-04',
    duration_of_session: '45',
    number_of_learners: '15',
    learning_outcomes:
      '<ul><li>Find resources</li><li>Checkout books</li><li>Write paper</li></ul>',
  },
};
