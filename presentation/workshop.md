
<img src="https://ionic-in-action.github.io/presentation-poweredbyjavascript/img/ionic-logo.png" class="logo" width="350" style="display:block; margin:auto; margin-bottom:100px;">

---

### `$ whoamI`

<img src="https://pbs.twimg.com/profile_images/692904108424982528/0PESpDwT.jpg" style="border-radius: 50%; width: 250px">

- Developer for Ionic
- Egghead Author
- Google Developer Expert

---

<div style="
          background: url('http://mhartington.io/ionic-v2-and-beyond/img/ionic-logo.png') no-repeat center center;
          background-size: 390px 390px;
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1; z-index: -1;"></div>

# Ionic Recap!

### SDK for Developing Hybrid Apps
### Performant and Native feeling apps
### Sass for easy customization
### Angular for code structure

---

# EMPOWERED Web DEVELOPERS EVERYWHERE

---

```javascript
angular.module('MainController', [])
.controller('MainCtrl',function($scope){
  $scope.items = [1,2,3];
  $scope.add = function(){
    $scope.items.push($scope.items.length + 1)
   }
})
```

---

```javascript
// Controller As
angular.module('MainController', [])
.controller('MainCtrl', MainCtrl)

function MainCtrl(){
  var main = this;
  main.items = [1,2,3];
}
MainCtrl.prototype.add = function(){
    main.items.push(main.items.length + 1)
}
```

---

```javascript
export class MainController {
  constructor(){
    this.items = [1,2,3];
  }
  add(){
      this.items.push(this.items.length + 1)
  }
}

```

---

## Decorator the class in a hat

---

```javascript

export class MainController {
  constructor(){
    this.items = [1,2,3];
  }
  add(){
      this.items.push(this.items.length + 1)
  }
}

```

---

### NG1 + UIRouter

```javascript
.state('main', {
    templateUrl: 'main.html',
    controller: 'MainController as main'
})

```

---

### Enter the component decorator

```javascript
@Component({
  selector: 'hello-app',
  template: `
    <p>{{items | json}}</p>
    <button (click)="add()">Add item</button>
  `
})
export class MainController {
  constructor(){
    this.items = [1,2,3];
  }
  add(){
      this.items.push(this.items.length + 1)
  }
}

```

---

### Decorators

Provides meta data to the class

Describes how that class should be used

---

### `@Injectable()`

Tells the DI system how to hanlde injection

---

### Lodash Decorators

https://github.com/megawac/lodash-decorators

https://github.com/steelsojka/lodash-decorators

---

### Directives?

---

### Still there in NG2

More specialized in NG2

Properties on a component

Don't provide a template

---

```javascript
@Component({
  template: `
    <p *ngFor=item of items>{{item}}</p>
    <button (click)="add()">Add item</button>
  `
})
export class MainController {
  constructor(){
    this.items = [1,2,3];
  }
  add(){
      this.items.push(this.items.length + 1)
  }
}

```

---

### TypeScript: A second set of eyes

---


> Whats are the arguments for http?

> What properties does `@Component` have?

> I've never used this library before...help

---

- Static analysis of code

- Meaningful completion

- Type checks your code at build time

---

### But there's more than that...


---

- Large support for third-part libraries

- Excellent Tooling

- Great community


---

### So...what does it look like?

```typescript
var foo : string = 'bar';
var baz : number = 123;
```

---

![](/img/typescript.png)

---

> ### OK, But does this change my code?

---

## Nope!

It all compiles away at build time

The goal is build time debugging


---

### Tools and Build process

> AKA, Demo time

---

#### https://github.com/angular/angular-cli

