# Vue-Autorequest

`vue-autorequest` is a Vue plugin that enables the automatic loading feature of the component and reduces duplicates of `axios.get` across your Vue instance's life-cycle hooks. It is designed to simplify small to medium components. It is created with [Vue on Rails](vueonrails.com) in mind. 

`vue-autorequest` is not meant for complex components with multiple endpoints. 

Instead of writing the following `axios.get` request at `mounted` function:

```
mounted: function(){
  axios.get('https://yesno.wtf/api')
  .then(function (res) {
    console.log(res.data)
  })
  .catch(function(err){
    console.log(err)
  })
}
```

We could simply set the endpoint at Vue's `data` at the `this.mounted.url`

```
data: function(){
  return {
    mounted: { url: 'https://yesno.wtf/api'}
  }
}
```
> Replace `mounted` with `created` or `updated`

Receive response or catch error at its corresponding `watch` method onMounted().
```
watch: {
  onMounted:function(res){
    console.log(res.data)
  }
}
```
> Replace `onMounted()` with `onCreated` or `onUpdated()`

---

## Install & Usage

```
//npm
npm install vue-autorequest

//yarn
yarn add vue-autorequest

```

```
import Autorequest from 'vue-autorequest'
Vue.use(Autorequest)
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
