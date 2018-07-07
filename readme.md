# Vue-Autorequest

`vue-autorequest` is a Vue plugin that enables the self-loading feature of Component and reduces duplicates of `axios.get` across your Vue instance's life-cycle hooks. It depends on axios to make HTTP request.

## Install & Usage

```
yarn add vue-autorequest
```

```
import Autorequest from 'vue-autorequest'
Vue.use(Autorequest)
```


Instead of writing the following `get` request:

```
new Vue({
  mounted: function(){
    axios.get('https://yesno.wtf/api')
    .then(function (res) {
      console.log(res.data)
    })
    .catch(function(err){
      console.log(err)
    })
  }
})
```

We could simply set the endpoint at Vue's `data` at the `this.mounted.url`

> Replace `mounted` with `created` or `updated`

```
new Vue({
  data: function(){
    return {
      mounted: { url: 'https://yesno.wtf/api'}
    }
  }
})
```

Receive response or catch error at its corresponding 
watch method onMounted(). Replace `onMounted()` with `onCreated` or `onUpdated()`

```
new Vue({
  watch: {
    onMounted:function(res){
      console.log(res.data)
    }
  }
})
```


## Lifecycle
The life-cycle variable and its corresponding watch method. 

- Lifecycle stage | Watch method
- created         | onCreated
- mounted         | onMounted
- updated         | onUpdated

# License 

MIT

# Contact

[@ytbryan](http://twitter.com/ytbryan) | [email](mailto:ytbryan@gmail.com)
