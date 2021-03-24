import { KeyValueStore } from "pages/common/keyValStore.js"

const indexdb = new KeyValueStore("user-metadata", "metadata");

function sortByDate(weight) {
    weight.sort(GetSortOrder("weightdate")).reverse()
    return weight
}

function setWeight(weight) {
    const bodyWeightList = {
        "data" : weight
        }
    return bodyWeightList
}

function GetSortOrder(weight) {    
    return function(a, b) {    
      if (a[weight] > b[weight]) {    
          return -1;    
      } else if (a[weight] < b[weight]) {    
          return 1;    
      }    
      return 0;    
    }    
}

function arryUserWeight( obj ) {
    const arryWeight = []
        for (var i= 0 ; i < obj.length; i++) {
            arryWeight.push({
              "weightdate": obj[i].weightdate, 
              "weight": obj[i].weight,
            }
          )
        }
    return arryWeight
  }

function getChartLabel ( obj ) {
    let json = {}
    let labelData = []

    json = obj //this.bodyWeightList
    
    console.log('json : ', json)
    
    json.data.forEach((item,idx)=>{
      labelData.push(item.weightdate)
    })

    return labelData
  }

function getChartValue ( obj ) {
    let json = {}
    let valueData = []

    json = obj //this.bodyWeightList
    
    console.log('json : ', json)
    
    json.data.forEach((item,idx)=>{
      valueData.push(parseInt(item.weight));
    });

    return valueData

  }

function createChartData () {
    indexdb.get('userWeight').then(response => {
    const weight = setWeight(sortByDate(arryUserWeight(response)).slice(-5))
    const chartData = {
        "labelData": getChartLabel(weight),
        "valueData": getChartValue(weight)
        }
    return chartData
    })
    .catch(error => {
        console.log('error', error)
    })
}

module.exports = {
    createChartData
  };
  
