/*!
* Vue-Autorequest.js
* v1.1.0
* (c) Bryan Lim; MIT License
*/

const Autorequest = {
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
        this.request_for("updated", this.updated.url)
      },
      mounted: function(){
        this.request_for("mounted", this.mounted.url)
      },
      created: function(){
        this.request_for("created", this.created.url)
      }, 
      methods: {
        request_for: function(stage, endpoint){
          if(endpoint == "") return
          var appl = this
          var request = new XMLHttpRequest();
          request.open("GET", endpoint, true)
          request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              if(this.response == undefined) return
              var reply = JSON.parse(this.response)
              if(stage == "updated"){
                appl.onUpdated = reply
              }else if(stage == "mounted"){
                appl.onMounted = reply
              } else if(stage == "created") {
                appl.onCreated = reply
              }
            } 
          }
          request.onerror = function () {
            if(this.err == undefined) return
            var err = JSON.parse(this.err)
            if(stage == "updated"){
              appl.onUpdated = err
            } else if(stage == "mounted"){
              appl.onMounted = err
            } else if(stage == "created") {
              appl.onCreated = err
            }
          }
          request.send()
        }
      }
    })
  }
};

export default Autorequest;