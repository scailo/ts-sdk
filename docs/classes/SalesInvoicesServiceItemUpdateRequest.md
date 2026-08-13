[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceItemUpdateRequest

# Class: SalesInvoicesServiceItemUpdateRequest

Request message for modifying the core transactional parameters of an existing billable line item within a Sales Invoice.
This payload supports updating billed quantities (across both internal and client-specific units of measure),
commercial terms (unit price, tax group, round-offs), and custom specifications.

**Note:** These modifications are typically utilized during the draft or revision phases
of the billing lifecycle, ensuring the invoice accurately reflects the final financial obligations
before being officially approved and issued to the buyer.

**`Generated`**

from message Scailo.SalesInvoicesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\>

  ↳ **`SalesInvoicesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesInvoicesServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](SalesInvoicesServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesInvoicesServiceItemUpdateRequest.md#clientuomid)
- [id](SalesInvoicesServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesInvoicesServiceItemUpdateRequest.md#internalquantity)
- [roundOff](SalesInvoicesServiceItemUpdateRequest.md#roundoff)
- [specifications](SalesInvoicesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesInvoicesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesInvoicesServiceItemUpdateRequest.md#unitprice)
- [userComment](SalesInvoicesServiceItemUpdateRequest.md#usercomment)
- [fields](SalesInvoicesServiceItemUpdateRequest.md#fields)
- [runtime](SalesInvoicesServiceItemUpdateRequest.md#runtime)
- [typeName](SalesInvoicesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceItemUpdateRequest.md#clone)
- [equals](SalesInvoicesServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceItemUpdateRequest.md#tojson)
- [toJson](SalesInvoicesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceItemUpdateRequest**(`data?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:1926](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1926)

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

[src/sales_invoices.scailo_pb.ts:1860](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1860)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated invoiced quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/sales_invoices.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1844)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.

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

[src/sales_invoices.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1828)

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

[src/sales_invoices.scailo_pb.ts:1796](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1796)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated invoiced quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/sales_invoices.scailo_pb.ts:1812](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1812)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The updated applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.

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

[src/sales_invoices.scailo_pb.ts:1908](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1908)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Updated additional custom textual requirements, notes, or specifications associated with this billed item.

**`Example`**

```ts
"Billed per expedited shipping agreement."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 19;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1924](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1924)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the tax group or tax bracket applicable to this specific line item.

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

[src/sales_invoices.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1892)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated invoiced price per unit for this item, represented in the base currency subunit (e.g., cents).

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

[src/sales_invoices.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1876)

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

[src/sales_invoices.scailo_pb.ts:1780](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1780)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1933)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1931](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1931)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceItemUpdateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1932)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1958](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1958)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1946](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1946)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1950)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceItemUpdateRequest`](SalesInvoicesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1954](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_invoices.scailo_pb.ts#L1954)
