// filter through assignments to return assignment name and grades
// need avg of grades for each assignment
// figuring out if we need to track amount collected for each assignment
// make the assignemnt the key and making the grades the array of the number of values
// reduce the values in the returned array

// function minutesSpentByPerson(chores, person) {
// return chores
// .filter((chore) => chore.doneBy === person)
// .map((chore) => chore.minutes)
// .reduce((total, minutes) => total + minutes, 0)
// }



function calculateAverageByAssignment(mockGrades) {
  const gradesByAssignment = mockGrades.reduce((acc, grades) => {
    const { assignment, score } = grades

    acc[assignment] = acc[assignment] ? acc[assignment].concat([score]) : [score]

    return acc
  }, {})

  let output = []

  for (let name in gradesByAssignment) {
    // key = 'The Price is Right'
    const total = gradesByAssignment[name].reduce((acc, current) => acc + current, 0)
    const average = total / gradesByAssignment[name].length

    output = output.concat([{ name, average }])
    console.log(output)
    // gradesByAssignment[key] = [ 85, 89, 96, 90 ]
    // calculate average
    // Build  { name: 'The Price is Right', average: 90 },
    // output.concat([built object])
  }

  return output
  // console.log(gradesByAssignment)
}

function calculateAverageByStudent() {
  return mockGrades.reduce((acc, grades) => {
    const { assignment, score } = grades

    acc[assignment] = acc[assignment] ? acc[assignment].concat([score]) : [score]

    return acc
  }, []).reduce((acc, hw) => {
    const { assignment, score } = hw
    let total = 0

    for (let i = 0; i < score.length; i++) {
      total += score[i]
    }
    total = total / score.length
    acc[assignment] = total ? acc[assignment].concat([score]) : [score]

    return acc
  }, [])
}

module.exports = { calculateAverageByAssignment, calculateAverageByStudent }