const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const result = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < result.length; i++)
        callback(result[i])

      return collection
    },

    map: function(collection, callback) {
      const result = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < result.length; i++)
        result[i] = callback(result[i])

      return result
    },

    reduce: function(collection, callback, acc) {
      let newCollection = (Array.isArray(collection)) ? collection.slice() : Object.values(collection)

			if (!acc) {
				acc = newCollection[0]
				newCollection = newCollection.slice(1)
			}

			for (let i = 0; i < newCollection.length; i++) {
				acc = callback(acc, newCollection[i], newCollection)
			}
			return acc;
    },
    
    find: function(collection, predicate){
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          return collection[i]
        }
			}
    },

    filter(collection, predicate){
      let newCollection =[]
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    size(collection){
      return (Array.isArray(collection)) ? collection.length : Object.values(collection).length
    },

    first(array, n){
      return (n) ? array.slice(0,n) : array[0]
    },

    last(array, n){
      return (n) ? array.slice(-n) : array.slice(-1)[0]
    },

    compact(array){
      let newArray= []
      for (let i = 0; i < array.length; i++) {
        if (array[i]){
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          if (Array.isArray(val)){
            for (let i = 0; i < val.length; i++)
              newArr.push(val[i])
          } else {
            newArr.push(val)
          }
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    values: function(object){
      let result =[]

      for (let key in object){
        result.push(object[key])
      }

      return result
    },

    keys: function(object){
      let result =[]

      for (let key in object){
        result.push(key)
      }

      return result
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    functions: function(object) {
      let result =[]

      for (let key in object){
        if (typeof object[key] === 'function'){
          result.push(key)
        }
      }
      return result.sort()
    }

   
  }
})()

fi.libraryMethod()
