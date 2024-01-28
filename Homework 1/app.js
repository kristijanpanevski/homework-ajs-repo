const STUDENTS_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const students = STUDENTS_URL;
function fetchStudents(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // All students with an average grade higher than 3
      const higherThanThreeGrade = data.filter(
        (student) => student.averageGrade > 3
      );
      console.log(higherThanThreeGrade);

      // All female student names with an average grade of 5
      const femaleFirstNamesAverageHigherThanThree = data
        .filter(
          (student) => student.gender === "Female" && student.averageGrade === 5
        )
        .map((student) => student.firstName);

      console.log(femaleFirstNamesAverageHigherThanThree);

      // All male student full names who live in Skopje and are over 18 years old
      const fullNamesArr = data.map((student) => {
        return `${student.firstName} ${student.lastName}`;
      });
      const maleFullNamesSkopjeOver18 = data
        .filter(
          (student) =>
            student.gender === "Male" &&
            student.city === "Skopje" &&
            student.age > 18
        )
        .map((student) => `${student.firstName} ${student.lastName}`);
      console.log(maleFullNamesSkopjeOver18);

      // The average grades of all female students over the age of 24
      const femaleStudentsOver24 = data.filter(
        (student) => student.gender === "Female" && student.age > 24
      );

      if (femaleStudentsOver24.length > 0) {
        const averageGrades = femaleStudentsOver24.reduce(
          (acc, student) => acc + student.averageGrade,
          0
        );
        const averageGrade = averageGrades / femaleStudentsOver24.length;
        console.log(
          "The average grade of female students over 24:",
          averageGrade
        );

        // All male students with a name starting with B and average grade over 2
        const maleFirstNameBGradeOver2 = data.filter(
          (student) =>
            student.gender === "Male" &&
            student.firstName.startsWith("B") &&
            student.averageGrade > 2
        );

        console.log(maleFirstNameBGradeOver2);
      }
    });
}

fetchStudents(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
);
