/*!
* Vue-Autorequest.js
* v1.0.0
* (c) Bryan Lim; MIT License
*/

import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)

const VueAutoload = {
  install(Vue) {
    Vue.mixin({
      data: function () {
        return {
          onMounted: "",
          onCreated: "",
          onUpdated: "",
          mounted: { url: "" },
          created: { url: "" }, 
          updated: { url: "" }
        }
      }, 
      updated: function(){
        var appl = this
        if(this.updated.url != ""){
          axios.get(this.updated.url)
          .then(function(response){
            appl.onUpdated = response
          })
          .catch(function(err){
            appl.onUpdated = err
          })
        }
      },
      mounted: function(){
        var appl = this
        if(this.mounted.url != ""){
          axios.get(this.mounted.url)
          .then(function(response){
            appl.onMounted = response
          })
          .catch(function(err){
            appl.onMounted = err
          })
        }
      },
      created: function(){
        var appl = this
        if(this.created.url != ""){
          axios.get(this.created.url)
          .then(function(response){
            appl.onCreated = response
          })
          .catch(function(err){
            appl.onCreated = err
          })
        }
      }    
    })
  }
};

export default VueAutoload;