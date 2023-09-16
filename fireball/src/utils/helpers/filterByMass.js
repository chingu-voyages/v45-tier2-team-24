function massData(meteorData) {
  return meteorData
    .map((meteor) => (meteor.mass ? meteor.mass : 0))
    .reduce(
      (a, c) => {
        if (c <= 1000) {
          a[0]++
        } else if (c <= 10000) {
          a[1]++
        } else if (c <= 20000) {
          a[2]++
        } else if (c <= 50000) {
          a[3]++
        } else if (c <= 100000) {
          a[4]++
        } else {
          a[5]++
        }

        return a
      },
      [0, 0, 0, 0, 0, 0]
    )
}

function filterByRecclass(meteorData) {
  const recclassCount = {}

  meteorData.forEach((record) => {
    const recclass = record.recclass
    if (!recclassCount[recclass]) {
      recclassCount[recclass] = 1
    } else {
      recclassCount[recclass]++
    }
  })

  let labels = []
  let cData = []

  let n = 0
  for (let key in recclassCount) {
    if (recclassCount[key] > 40) {
      labels.push(key)
      cData.push(recclassCount[key])
    } else {
      n += recclassCount[key]
    }
  }

  labels.push('misc')
  cData.push(n)

  const data = {
    labels: labels,
    datasets: [
      {
        label: '# Most Common Meteorite Compositions',
        data: cData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 3,
      },
    ],
  }

  return data
}
