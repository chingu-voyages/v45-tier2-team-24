export function meteorSightingsByYear(meteorData) {
  let newData = meteorData.map((meteor) => {
    return {
      x: new Date(meteor.year).getFullYear(),
      y: Number(meteor.mass),
    }
  })

  newData = newData.filter((meteor) => meteor.x >= x && meteor.y <= y)

  return newData
}
