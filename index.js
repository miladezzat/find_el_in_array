let searchInSimpleArray = (array, searchItem) => {
    var result;

    if (typeof searchItem === 'number') {
        result = array.find(el => {
            if (typeof el === "number") {
                if (searchItem == el) return el;
            }
        })
        if (typeof result === "undefined") {
            return `${searchItem} not found`
        }
        return result
    } else if (typeof searchItem === 'string') {
        result = array.find(el => {
            if (typeof el === "string") {
                if (searchItem.toLowerCase() == el.toLowerCase()) return el;
            }
        })
        if (typeof result === "undefined") {
            return `${searchItem} not found`
        }
        return result
    }
}

let searchInComplexArray = (array, key, searchItem) => {
    let newArray;
    let newkey;

    if (!isKey(array, key)) return key + " is not propery in any object of array"


    if (typeof searchItem === 'number') {
        newArray = array.find(el => {
            if (el[key] === searchItem) return el;
        })
    } else if (typeof searchItem === 'string') {
        newArray = array.find(el => {
            if (typeof el[key] === 'string' &&
                searchItem.toLowerCase() == el[key].toLowerCase()) return el;
        })
    } else {
        return `You sent ${searchItem} type of  (${typeof searchItem}) as a search item`
    }
    if (typeof newArray === 'undefined') return searchItem + " not founded in array"
    return newArray

}

let isKey = (array, key) => {
    let newkey = array.filter(el => {
        return el.hasOwnProperty(key)
    })
    if (newkey.length == 0) return false;
    return true
}

module.exports = {
    searchInComplexArray,
    searchInSimpleArray
}