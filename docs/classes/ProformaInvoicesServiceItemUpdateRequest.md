[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceItemUpdateRequest

# Class: ProformaInvoicesServiceItemUpdateRequest

Request message for modifying the core transactional parameters of an existing preliminary line item within a Proforma Invoice.
This payload supports updating estimated quantities (across both internal and client-specific units of measure),
anticipated commercial terms (unit price, tax group, round-offs), and custom specifications.

**Note:** These modifications are typically utilized during the negotiation or internal approval phases
of the pre-billing lifecycle, ensuring the proforma document accurately reflects the expected financial
obligations before advance payments are requested or final shipments occur.

**`Generated`**

from message Scailo.ProformaInvoicesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\>

  ↳ **`ProformaInvoicesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](ProformaInvoicesServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](ProformaInvoicesServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](ProformaInvoicesServiceItemUpdateRequest.md#clientuomid)
- [id](ProformaInvoicesServiceItemUpdateRequest.md#id)
- [internalQuantity](ProformaInvoicesServiceItemUpdateRequest.md#internalquantity)
- [roundOff](ProformaInvoicesServiceItemUpdateRequest.md#roundoff)
- [specifications](ProformaInvoicesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](ProformaInvoicesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](ProformaInvoicesServiceItemUpdateRequest.md#unitprice)
- [userComment](ProformaInvoicesServiceItemUpdateRequest.md#usercomment)
- [fields](ProformaInvoicesServiceItemUpdateRequest.md#fields)
- [runtime](ProformaInvoicesServiceItemUpdateRequest.md#runtime)
- [typeName](ProformaInvoicesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ProformaInvoicesServiceItemUpdateRequest.md#clone)
- [equals](ProformaInvoicesServiceItemUpdateRequest.md#equals)
- [fromBinary](ProformaInvoicesServiceItemUpdateRequest.md#frombinary)
- [fromJson](ProformaInvoicesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ProformaInvoicesServiceItemUpdateRequest.md#gettype)
- [toBinary](ProformaInvoicesServiceItemUpdateRequest.md#tobinary)
- [toJSON](ProformaInvoicesServiceItemUpdateRequest.md#tojson)
- [toJson](ProformaInvoicesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceItemUpdateRequest.md#tojsonstring)
- [equals](ProformaInvoicesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ProformaInvoicesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceItemUpdateRequest**(`data?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1965](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1965)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The updated client's specific alphanumeric part number, SKU, or family code used for their internal referencing.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1899](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1899)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
5000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1883](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1883)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1867)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1835](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1835)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1851)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The updated applicable rounding adjustment amount for this specific item's anticipated financial total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1947](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1947)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Updated additional custom textual requirements, notes, or specifications associated with this preliminary item.

**`Example`**

```ts
"Estimated based on current freight rates."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1963)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the tax group or tax bracket anticipated for this specific line item.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1931](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1931)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated anticipated price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1915](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1915)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1819](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1819)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1972)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1970)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceItemUpdateRequest"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1971](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1971)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1997](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1997)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1985](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1985)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1989)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceItemUpdateRequest`](ProformaInvoicesServiceItemUpdateRequest.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1993](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1993)
