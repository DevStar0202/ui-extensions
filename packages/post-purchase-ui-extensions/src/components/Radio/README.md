# Radio

Use radios to present each item in a list of options where buyers must
make a single selection. Radio components should always appear in groups of
two or more; if a buyer has only a single, boolean option, use a checkbox
instead.

Unlike most field components, any children passed to this component will be used
as the label for the checkbox.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | A unique identifier for the field. When no `id` is provided, a globally unique value will be used instead.  |
| name | <code>string</code> | An identifier for the field that is unique within the nearest containing `&lt;Form /&gt;` component. When you create multiple radio components representing different options for the same choice, each one should have the same `name` property.  |
| value? | <code>boolean</code> | Whether the radio is selected. This prop is an alias for `checked`, and can be useful in form libraries that provide a normalized API for dealing with both `boolean` and `string` values. If both `value` and `checked` are provided, `checked` takes precedence.  |
| checked? | <code>boolean</code> | Whether the radio is selected.  |
| disabled? | <code>boolean</code> | Whether the radio can be changed.  |
| accessibilityLabel? | <code>string</code> | A label to use for the field that will be used for buyers using assistive technologies. When provided, any `children` supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read.  |
| onChange? | <code>(value: boolean) => void</code> | A callback that is run whenever the checkbox is changed. This callback is called with a boolean indicating whether the radio should now be active or inactive. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you **must** store this value in state and reflect it back in the `checked` or `value` props.  |