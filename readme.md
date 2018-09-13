# Welcome to Vue-Autorequest

Autorequest is a Vue component plugin to load the component part with initial data. It uses XMLHttpRequest. It is created with [Vue on Rails](http://vueonrails.com) in mind.

> `vue-autorequest` is designed for a single endpoint. And it is probably not for complex components with multiple endpoints. 

### Lesser `axios.get` on more component parts

One of autorequest's goals is to reduce the `axios.get` spinkles and give you a smaller component part. A common axios.get spinkle is like the one below.

```javascript
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

Autorequest allows me to write the same data loading code like this: 

```javascript
//1
data: function(){
  return {
    mounted: { url: 'https://yesno.wtf/api'}
  }
}
```
> Replace `mounted` with `created` or `updated`

At the `watch` method, receive response or catch error. 

```javascript
//2
watch: {
  onMounted:function(res){
    console.log({res})
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

```javascript
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
