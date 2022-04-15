# Changelog

## 13.0.0

- Upgrade to angular 13

## 0.0.9

- Upgrade to angular 12

## 0.0.8

- Add Column Filters
- Add `getCsv` Function
- Fix sort to always clone rows before sorting

## 0.0.7

- Add Group By

## 0.0.6

- Add Virtual Scroll

## 0.0.5

- Add `DtColumnTemplate` directive. This allows to use `dtColumn` as template directive:

```html
<ng-template dtColumn let-player header="Name">
  {{player.name}}
</ng-template>
```

## 0.0.4

- Fix Printing and add `printStyleCss` and `printStyleUrl`

## 0.0.3

- Use div for rendering row and form for editing only

## 0.0.2

- Add loading indicator
- Rename css classes to `dt` instead `mat`

## 0.0.1

- First release
