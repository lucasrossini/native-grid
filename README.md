# native-grid

A responsive CSS native grid layout.

## Usage

Include the following stylesheet into your page:

```html
<link rel="stylesheet" href="./native-grid/dist/grid.css" />
```

Use the prefixes to define the grid item behavior in multiple breakpoints:

```html
<div class="grid">
    <div class="grid__item md:grid__item--3 lg:grid__item--8">1</div>
    <div class="grid__item md:grid__item--6 lg:grid__item--2">2</div>
    <div class="grid__item md:grid__item--3 lg:grid__item--2">3</div>
</div>
```

### Prefixes

- `xs` - Extra small breakpoint (`min-width: 0px`)
- `sm` - Small breakpoint (`min-width: 576px`)
- `md` - Medium breakpoint (`min-width: 768px`)
- `lg` - Large breakpoint (`min-width: 992px`)
- `xl` - Extra large breakpoint (`min-width: 1200px`)

## Options

- **Small gutter:** Add the `grid--small-gutter` class to your grid container element;
- **Zero gutter:** Add the `grid--no-gutter` class to your grid container element.

## Configuration

The default column system is based on `12`, as well as the default gutter width
is `16px`, but it can be redefined on the [./src/_settings.scss](src/_settings.scss) file.

After modifying the values, you just have to re-compile the stylesheet executing
`npm start`.
