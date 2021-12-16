const filterPersons = (arr, query) => {
    return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 )
  }

export default filterPersons