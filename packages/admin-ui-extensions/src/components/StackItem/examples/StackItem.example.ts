import {extend, InlineStack, StackItem, Text} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const stack = root.createComponent(InlineStack);
  const stackItemFill = root.createComponent(StackItem, {fill: true});

  const stackItemText = root.createComponent(Text);
  stackItemText.appendChild('Fill the space');

  const stackItemNoFill = root.createComponent(StackItem);
  const text1 = root.createComponent(Text);
  text1.appendChild('Other text');
  const text2 = root.createComponent(Text);
  text2.appendChild('Even more text');

  stackItemFill.appendChild(stackItemText);
  stack.appendChild(stackItemFill);

  stackItemNoFill.appendChild(text1);
  stackItemNoFill.appendChild(text2);
  stack.appendChild(stackItemNoFill);

  root.appendChild(stack);
  root.mount();
});
