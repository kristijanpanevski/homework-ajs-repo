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
    console.error(error);
    throw error;
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
    console.error(error);
    throw error;
  }
};

(async () => {
  try {
    const { studentAverageAge, studentAverageGrade } =
      await averageAgeAverageGradeStudents();
    console.log("1.All students average age:", studentAverageAge);
    console.log("1.All students average grade:", studentAverageGrade);
  } catch (error) {
    console.error(error);
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
    console.log(error);
  }
};

(async () => {
  try {
    const { studentsOver60, studentsUnder30 } = await studentsOver30Under60();
    console.log("2.Students older than 60:", studentsOver60);
    console.log("2.Students younger than 30:", studentsUnder30);
  } catch (error) {
    console.error(error);
  }
})();

//3.Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
const studentsOver30Grade4AndAbove = async () => {
  try {
    const students = await fetchStudentsAsync();
    const studentsFiltered = students.filter(
      (student) => student.age > 30 && student.averageGrade >= 4
    );

    const studentInformation = studentsFiltered.map((student) => {
      return {
        firstName: student.firstName,
        lastName: student.lastName,
        city: student.city,
      };
    });

    return studentInformation;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

(async () => {
  try {
    const studentList = await studentsOver30Grade4AndAbove();
    console.log(
      "3.Students over 30, city name and an average grade of 4 and above:",
      studentList
    );
  } catch (error) {
    console.error(error);
  }
})();

//4.Find the student named Arthur Cadore and display all of his information
const findArthur = async (studentFirstName, studentLastName) => {
  try {
    const students = await fetchStudentsAsync();
    return students.find(
      (student) =>
        student.firstName === studentFirstName &&
        student.lastName === studentLastName
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const displayStudentInfo = (student) => {
  if (student) {
    console.log("4.Student Arthur Cadore info:", student);
  }
};

(async () => {
  try {
    const firstName = "Arthur";
    const lastName = "Cadore";
    const arthurCadore = await findArthur(firstName, lastName);
    displayStudentInfo(arthurCadore);
  } catch (error) {
    console.error(error);
  }
})();

// 5.Find the oldest and youngest student and display their information on the screen
const oldestAndYoungestStudent = async () => {
  try {
    const students = await fetchStudentsAsync();
    const studentsCopy = [...students];

    const sortAge = studentsCopy.sort((a, b) => b.age - a.age);
    const oldestStudent = sortAge[0];
    const youngestStudent = sortAge[sortAge.length - 1];

    return { oldestStudent, youngestStudent };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

(async () => {
  try {
    const { oldestStudent, youngestStudent } = await oldestAndYoungestStudent();
    console.log("5.Oldest student is:", oldestStudent);
    console.log("5.Youngest student is:", youngestStudent);
  } catch (error) {
    console.error(error);
  }
})();

// 6.Show a list of the full names of students that have a last name longer than 8 characters
const fullNamesLongerThanEightCharacters = async () => {
  try {
    const students = await fetchStudentsAsync();
    const studentsFiltered = students.filter(
      (student) => student.lastName.length > 8
    );

    const fullNamesList = studentsFiltered.map(
      (student) => `${student.firstName} ${student.lastName}`
    );

    return fullNamesList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

(async () => {
  try {
    const fullNameList = await fullNamesLongerThanEightCharacters();
    console.log(
      "6.Students with last names longer than 8 characters:",
      fullNameList
    );
  } catch (error) {
    console.error(error);
  }
})();

// 7.Show a list of the top 10 best students by average grade
const bestStudentByAverageGrade = async () => {
  try {
    const students = await fetchStudentsAsync();
    const studentsCopy = [...students]; 

    studentsCopy.sort((a, b) => b - a);

    const bestStudents = studentsCopy.slice(0, 10);

    return bestStudents;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

(async () => {
  try {
    const bestStudents = await bestStudentByAverageGrade();
    console.log("7. 10 best students by average grade are:", bestStudents);
  } catch (error) {
    console.error(error);
  }
})();

// 8.Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
const determineStudentsAverageGradeAndAge = async () => {
  try {
    const students = await fetchStudentsAsync();

    const gradeOne = students.some((student) => student.averageGrade === 1);

    const over18 = students.every((student) => student.age > 18);

    if (gradeOne) {
      console.log("8.Some users have an average grade of 1.");
    } else {
      console.log("8.No users have an average grade of 1.");
    }

    if (over18) {
      console.log("8.All users are adults.");
    } else {
      console.log("8.Not all users are adults.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

determineStudentsAverageGradeAndAge();
