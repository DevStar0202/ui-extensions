<!-- This is a partial markdown file that gets injected into the auto-generated https://shopify.dev/api/checkout-extensions/checkout/extension-points/api -->

<a name="appmetafieldfilters"></a>

### AppMetaFieldFilters

| Name       | Type                                                                    | Description                                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id?        | <code>string</code>                                                     | The numeric owner ID that is associated with the metafield.                                                                                                                                              |
| type?      | <code>"customer" &#124; "product" &#124; "shop" &#124; "variant"</code> | The type of the metafield owner.                                                                                                                                                                         |
| namespace? | <code>string</code>                                                     | Container for a set of metafields. You need to define a custom namespace for your metafields to distinguish them from the metafields used by other apps. This value must be between 2 and 20 characters. |
| key?       | <code>string</code>                                                     | The name of the metafield. This value must be between 3 and 30 characters.                                                                                                                               |

<a name="metafieldfilter"></a>

### MetaFieldFilter

| Name       | Type                | Description                                                                                                                                                                                                |
| ---------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| namespace? | <code>string</code> | A container for a set of metafields. You need to define a custom namespace for your metafields to distinguish them from the metafields used by other apps. This value must be between 2 and 20 characters. |
| key?       | <code>string</code> | The name of the metafield. This value must be between 3 and 30 characters.                                                                                                                                 |

---

### React Hooks

Shopify provides a collection of [React hooks](https://reactjs.org/docs/hooks-intro.html), which make it easy to update your UI when the checkout state changes.

```jsx
import React from 'react';
import {
  render,
  Text,
  useShippingAddress,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  // Access and subscribe to the shipping address
  // Your <App /> will automatically re-render when the address has changed
  const address = useShippingAddress();
  const firstName = address?.firstName ?? 'guest';

  // Render UI
  return <Text>Hi {firstName}!</Text>;
}
```

> Note:
> React hooks are only available if you're using React. If you're using vanilla JavaScript, then you'll need to manually subscribe to the subscribable value directly with a callback. For example, `shippingAddress.subscribe(newValue => updateYourUI())`.

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| useApplyAttributeChange  | <code>(change: <a href="#attributeupdatechange">AttributeUpdateChange</a>) => Promise<<wbr><a href="#attributechangeresultsuccess">AttributeChangeResultSuccess</a> &#124; <a href="#attributechangeresulterror">AttributeChangeResultError</a><wbr>></code> | Performs an update on the attributes attached to the checkout. If successful, this mutation updates the value retrieved through the `attributes` property.                                             |
| useApplyCartLinesChange  | <code>(change: <a href="#cartlineaddchange">CartLineAddChange</a> &#124; <a href="#cartlineremovechange">CartLineRemoveChange</a> &#124; <a href="#cartlineupdatechange">CartLineUpdateChange</a>) => Promise<<wbr><a href="#cartlinechangeresultsuccess">CartLineChangeResultSuccess</a> &#124; <a href="#cartlinechangeresulterror">CartLineChangeResultError</a><wbr>></code> | Performs a signed update on the checkout. <br /><br />Performs an update on the merchandise cart lines. It resolves after the new cart lines have been negotiated and results in an update to the value that's retrieved through the `lines` property.                                             |
| useApplyMetafieldsChange | <code>(change: <a href="#metafieldremovechange">MetafieldRemoveChange</a> &#124; <a href="#metafieldupdatechange">MetafieldUpdateChange</a>) => Promise<<wbr><a href="#metafieldchangeresultsuccess">MetafieldChangeResultSuccess</a> &#124; <a href="#metafieldchangeresulterror">MetafieldChangeResultError</a><wbr>></code>                                             | Performs an update on a piece of metadata attached to the checkout. If successful, this mutation updates the value retrieved through the `metafields` property.                                                                                                                                        |
| useApplyNoteChange | <code>(change: <a href="#noteremovechange">NoteRemoveChange</a> &#124; <a href="#noteupdatechange">NoteUpdateChange</a>) => Promise<<wbr><a href="#notechangeresultsuccess">NoteChangeResultSuccess</a> &#124; <a href="#notechangeresulterror">NoteChangeResultError</a><wbr>></code>                                             | Performs an update on the note attached to the checkout. If successful, this mutation updates the value retrieved through the `note` property.                                                                                                                                        |
| useAppMetafields         | <code>(filters?: <a href="#appmetafieldfilters">AppMetafieldFilters</a>) => <a href="#appmetafieldentry">AppMetaFieldEntry</a>[]</code>                                                                                                                                                                                                                                    | Returns the metafields configured in the `shopify.ui.extension.toml` config.                                                                                                                                                                                                                                         |
| useAttributes      | <code>() => <a href="#attribute">Attribute</a>[] &#124; undefined</code>                                                                                                                                                                                                                                                                                                   | Returns the proposed `attributes` applied to the checkout.                                                                                                                                                                                                                                      |                                                                                       |
| useBuyerJourney          | <code>() => Promise<<wbr>() => void<wbr>></code>                                                                                                                                                                                                                                                                                                                           | Returns the `buyerJourney` details on buyer progression in checkout.                                                                                                                                                                                                                                   |
| useBuyerJourneyIntercept | <code>(interceptor: <a href="#interceptor">Interceptor</a>) => Promise<<wbr>() => void<wbr>></code>                                                                                                                                                                                                                                                                                 | Takes a function that allows you to block the buyer’s progress through the checkout by returning an object with `{behavior: 'block', reason: InvalidResultReason.UnknownReason}`. If you block, you are expected to also update some part of your UI to reflect the reason why navigation was blocked. |
| useCustomer       | <code>() => <a href="#customer">Customer</a> &#124; undefined</code>                                                                                                                                                                                                                                                                                         | Returns the customer information associated to the buyer.                                                                                                                                                                                                                                                  |
| useExtensionApi          | <code>() => <a href="#standardapi">StandardApi<a></code>                                                                                                                                                                                                                                                                                                                   | Gives you access to the full API object that was passed in to your extension when it was created.                                                                                                                                                                                                      |
| useExtensionData         | <code>() => <a href="#extension">Extension<a></code>                                                                                                                                                                                                                                                                                                                       | Returns the metadata about the extension.                                                                                                                                                                                                                                                              |
| useExtensionLanguage       | <code>() => string </code>                                                                                                                                                                                                                                                                                                                                                 | Returns the buyer's language, as supported by this extension.                                                                                                                                                                                                                                            |
| useCartLines             | <code>() => <a href="#cartline">CartLine</a>[] </code>                                                                                                                                                                                                                                                                                                                     | Returns the current cart lines for the checkout, and automatically re-renders your component if cart lines are added, removed, or updated.                                                                                                                                                             |
| useLanguage                | <code>() => string </code>                                                                                                                                                                                                                                                                                                                                                 | Returns the current language of the checkout, and automatically re-renders your component if the language changes.                                                                                                                                                                                         |
| useMetafield             | <code>(filters: <a href="#metafieldfilter">MetaFieldFilter</a>) => <a href="#metafield">MetaField</a> &#124; undefined </code>                                                                                                                                                                                                                                             | Returns a single, filtered checkout MetaField.                                                                                                                                                                                                                                                         |
| useMetafields            | <code>(filters?: <a href="#metafieldfilter">MetaFieldFilter</a>) => <a href="#metafield">MetaField</a>[] </code>                                                                                                                                                                                                                                                           | Returns the current array of `metafields` applied to the checkout. You can optionally filter the list of returned metafields.                                                                                                                                                                          |
| useNote                  | <code>() => string &#124; undefined </code>                                                                                                                                                                                                                                                                                                                                | Returns the proposed `note` applied to the checkout.                                                                                                                                                                                                                                                   |                                                                                                                                                                        |
| useTotalAmount          | <code>() => <a href="#money">Money</a> &#124; undefined</code>                                                                                                                                                                                                                                                                                                             | Returns the running total calculated at the current step.                                                                                                                                                                                                                                              |
| useShippingAddress       | <code>() => <a href="#mailingaddress">MailingAddress</a> &#124; undefined</code>                                                                                                                                                                                                                                                                                                         | Returns the proposed `shippingAddress` applied to the checkout.                                                                                                                                                                                                                                        |
| useShop                  | <code>() => <a href="#shop">Shop</a></code>                                                                                                                                                                                                                                                                                                                                | Returns the shop where the checkout is taking place.                                                                                                                                                                                                                                                   |
| useStorage               | <code>() => <a href="#storage">Storage</a></code>                                                                                                                                                                                                                                                                                                                          | Returns the interface for the key / value storage for this extension point.                                                                                                                                                                                                                            |
| useTarget             | <code>() => <a href="#CartLine">CartLine</a></code>                                                                                                                                                                                                                                                                                                              | Returns the cart line this extension is attached to.                                                                                                                                                                                                                                                        |  |
| useTranslate             | <code>() => <a href="#i18ntranslate">I18nTranslate</a></code>                                                                                                                                                                                                                                                                                                              | Returns the interface to translate strings.                                                                                                                                                                                                                                                            |  |