# ContactBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Using Signals

1. create service for signal
2. create signal like below

```
isClicked = signal(false)
```

3. expose signal for use by components using compute()

```
buttonState = computed(() => this.isClicked())
```

4. import service into external component and initialise new component variable to use the signal compute

```
isClicked = this.contactService.buttonState;
```

5. remember that signal values are read like a function --> isClicked(), not isClicked
6. signals can be updated using set, update or mutate. I used update as seen below

```
this.isClicked.update((value)=> value = !this.isClicked())
```
