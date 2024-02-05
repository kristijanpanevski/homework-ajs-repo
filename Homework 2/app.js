console.log("It works");

const fetchStudentsAsync = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong in fetch users");
  }
};

// 1.Average age and average grade of all students combined
const averageAgeAverageGradeStudents = async () => {
  try {
    const students = await fetchStudentsAsync();

    const studentAges = students.map((student) => student.age);
    const studentGrades = students.map((student) => student.averageGrade);

    const studentTotalAges = studentAges.reduce((acc, age) => acc + age, 0);
    const studentTotalGrades = studentGrades.reduce(
      (acc, grade) => acc + grade,
      0
    );

    const studentAverageAge = studentTotalAges / students.length;
    const studentAverageGrade = studentTotalGrades / students.length;

    return { studentAverageAge, studentAverageGrade };
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

(async () => {
  try {
    const { studentAverageAge, studentAverageGrade } =
      await averageAgeAverageGradeStudents();
    console.log("All students average age:", studentAverageAge);
    console.log("All students average grade:", studentAverageGrade);
  } catch (error) {
    console.error("Error:", error);
  }
})();

//2.Show the number of students that are over 60 and the number of students that are under 30 years old

const studentsOver30Under60 = async () => {
  try {
    const students = await fetchStudentsAsync();
    const studentsOver60 = students.filter(
      (student) => student.age > 60
    ).length;
    const studentsUnder30 = students.filter(
      (student) => student.age < 30
    ).length;

    return { studentsOver60, studentsUnder30 };
  } catch (error) {
    console.log("Error", error);
  }
};

(async () => {
  try {
    const { studentsOver60, studentsUnder30 } = await studentsOver30Under60();
    console.log("Students older than 60:", studentsOver60);
    console.log("Students younger than 30:", studentsUnder30);
  } catch (error) {
    console.error("Error:", error);
  }
})();

//3.Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above

const firstAndLastNameCityOver30Grade4AndAbove = async () => {
  try {
    const students = await fetchStudentsAsync();
    const studentsOver60 = students.filter(
      (student) => student.age > 60
    ).length;
    const studentsUnder30 = students.filter(
      (student) => student.age < 30
    ).length;

    return { studentsOver60, studentsUnder30 };
  } catch (error) {
    console.log("Error", error);
  }
};

(async () => {
  try {
    const { studentsOver60, studentsUnder30 } = await studentsOver30Under60();
    console.log("Students older than 60:", studentsOver60);
    console.log("Students younger than 30:", studentsUnder30);
  } catch (error) {
    console.error("Error:", error);
  }
})();
