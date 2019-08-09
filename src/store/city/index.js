import { city_api } from 'api/list'
const state = {
    cityHot:JSON.parse(sessionStorage.getItem("cityHot"))||[],
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    cityName:sessionStorage.getItem('cityName')||"北京",
    cityId:sessionStorage.getItem('cityId')||"2",
}
const actions = {
    async handleGetCityList({ commit }) {
        let data = await city_api();
        commit('handleGetCityList', data)
    }
}
const mutations = {
    handleToggleCity(state,params)
    {
        state.cityName = params.cityName
        state.cityId = params.cityId
        sessionStorage.setItem('cityName',state.cityName)
        sessionStorage.setItem('cityId',state.cityId)
    },
    handleGetCityList(state, params) {
        let cityList = [], cityHot = []
        for (let i = 0; i < params.length; i++) {
            if (params[i].hotCity&&params[i].provinceId<100) {
                cityHot.push(params[i])
            }
        }
        /*
            城市列表
            [{index:A,list:[{cityId:"",cityName:""},{cityId:"",cityName:""},{cityId:"",cityName:""}]}]
        */
        for (var i = 0; i < params.length; i++) {
            if(params[i].provinceId>=100)
            {
                continue
            }
            var letterFirst = params[i].cityAbbrCode.substr(0, 1).toUpperCase();
            var data = isCityList(letterFirst);
            if (data.bStop) {
                cityList[data.num].list.push({ cityId: params[i].cityId, cityName: params[i].cityName });
            } else {
                cityList.push({ index: letterFirst, list: [{ cityId: params[i].cityId, cityName: params[i].cityName }] })
            }
        }


        //判断当前标识是否在cityList当中
        function isCityList(letterFirst) {
            let obj= [];
            obj.bStop = false;
            for (var i = 0; i < cityList.length; i++) {
                if (cityList[i].index == letterFirst) {
                    obj.bStop = true;
                    obj.num = i;
                    break;
                }
            }

            return obj;//存在为true 不存在未false
        }

        //排序
        cityList.sort((item1, item2) => {          
            return item1.index.charCodeAt(0) - item2.index.charCodeAt(0);
        })

        state.cityList = cityList;
        state.cityHot = cityHot;
        sessionStorage.setItem("cityList", JSON.stringify(cityList))
        sessionStorage.setItem("cityHot", JSON.stringify(cityHot))
    }
}
export default {
    state,
    actions,
    mutations,
    namespaced: true
}