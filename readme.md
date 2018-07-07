#Vue-Autorequest

`vue-autorequest` is a plugin that enables Vue-component 
self-loading feature and reduces duplicates of `axios.get` across your component life-cycle hooks. 
It depends on axios to make HTTP request.

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

We could simply set the endpoint at `data` at `this.mounted.url`

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

Receive response or catch error its corresponding 
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

The life-cycle variable and its corresponding watch method. 

- Lifecycle stage | Watch method
- created         | onCreated
- mounted         | onMounted
- updated         | onUpdated

# License 

MIT

# Contact

[@ytbryan](http://twitter.com/ytbryan) | [email](mailto:ytbryan@gmail.com)
