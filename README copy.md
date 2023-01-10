# mini-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<input type="text"  name='account-field-3' v-validate="'required|min:3|max:6'" placeholder="6" class="form-control" >

<input v-validate="'digits:3'" name="digits_field" type="text">

const myValidtion = yup
.string()
.trim()
.matches(/^[a-z]+$/ , 'Is not in correct format')
.required();


^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$