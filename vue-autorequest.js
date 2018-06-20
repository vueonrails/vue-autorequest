/*!
* Vue-Autorequest.js
* v0.0.1
* (c) Bryan Lim; MIT License
*/

import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const VueAutorequest = {
  install(Vue, options) {
    Vue.mixin({
      data: function () {
        return {
          onComponentCreated: {
            url: "", delay: 0, load: true
          }, 
          onComponentMounted: {
            url: "", delay: 0, load: true
          }, 
          onComponentUpdated: {
            url: "", delay: 0, load: true
          }, 
          createdURL: "",
          mountedURL: "",
          updatedURL: "",
          onComponentMountedURL: "",
          onComponentUpdatedURL: ""
        }
      }, 
      mounted() {
        var appl = this
        if(this.onComponentMountedURL != ""){
          axios.get(this.onComponentMountedURL)
          .then(function (response) {
            appl.onComponentMounted = response
          })
        }
      },
      methods : {
        update_component: function(){
          var appl = this
          if(this.onComponentUpdatedURL != ""){
            axios.get(this.onComponentUpdatedURL)
            .then(function (response) {
              appl.onComponentUpdatedURL = response
            })
          } 
        } // update
      } // methods
    })
  }
}

export default VueAutorequest;