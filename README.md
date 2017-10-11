# native-grid

A responsive CSS native grid layout.

## Usage

Include the following stylesheet into your page:

```html
<link rel="stylesheet" href="./native-grid/dist/grid.css" />
```

Use the prefixes to define the grid column behavior in multiple breakpoints:

```html
<div class="grid">
  <div class="grid__col md:grid__col--3 lg:grid__col--8">1</div>
  <div class="grid__col md:grid__col--6 lg:grid__col--2">2</div>
  <div class="grid__col md:grid__col--3 lg:grid__col--2">3</div>
</div>
```

### Prefixes

- `xs` - Extra small breakpoint (`min-width: 0`)
- `sm` - Small breakpoint (`min-width: 36rem`)
- `md` - Medium breakpoint (`min-width: 48rem`)
- `lg` - Large breakpoint (`min-width: 62rem`)
- `xl` - Extra large breakpoint (`min-width: 75rem`)

## Options

### Gutter

The grid has a default gutter of `1rem` between it's columns, but you can customize it using the following options:

- **Small gutter (`.5rem`):** Add the `grid--small-gutter` class to your grid container element;
- **Zero gutter:** Add the `grid--no-gutter` class to your grid container element.

### Column system

The default column system is based on `12`, but it also can be set as a 16-column grid system applying the `grid--16-column` class to your grid container element:

```html
<div class="grid grid--16-column">
  <div class="grid__col md:grid__col--6">1</div>
  <div class="grid__col md:grid__col--4">2</div>
  <div class="grid__col md:grid__col--3">3</div>
  <div class="grid__col md:grid__col--3">4</div>
</div>
```

## License

[MIT](LICENSE.md)
