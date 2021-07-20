class FindElementInArray {
    constructor(parameters) {

    }
    private isKey = (array, key) => {
        let newKey = array.filter(element => {
            return element.hasOwnProperty(key)
        });

        if (newKey.length === 0) {
            return false
        };

        return true
    }

    public searchInSimpleArray = (array, searchItem) => {
        let result;

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

    public searchInComplexArray = (array, key, searchItem) => {
        let newArray: any[];

        if (!this.isKey(array, key)) return key + " is not property in any object of array"


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
}


export default FindElementInArray;