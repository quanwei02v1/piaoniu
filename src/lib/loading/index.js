import Loading from './index.vue'
import Vue from 'vue'
export default ()=>{

    let LoadingComponent = Vue.extend(Loading)

    let vmm = new LoadingComponent({
        el:document.createElement('div'),
        methods:{
            handlemount(){
                document.body.appendChild(vmm.$mount().$el)
            },
            handledestroy(){
                document.body.removeChild(vmm.$mount().$el)
            }
        }
    })
    return vmm
}