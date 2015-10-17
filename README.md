Meteor Blaze To React
=========================

Turn any Blaze template into a React component.

Installation
------------

``` sh
meteor add gwendall:blaze-to-react
```

How it works
-----------

Use the `<BlazeToReact />` component. Pass it the `blazeTemplate` parameter with the name of your Blaze template, along with any parameter you want to pass to this Blaze template.


Example
-------

```html
<template name="fruitsList">
  <ul>
    {{#each items}}
      <li>{{this}}</li>
    {{/each}}
  </ul>
</template>
```

```javascript
var items = ['peers', 'bananas', 'apples'];
Meteor.startup(function() {
  React.render(<BlazeToReact blazeTemplate="fruitsList" items={items}/>, document.body);
});
```
