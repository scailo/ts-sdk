[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceMultipleItemsSingleton

# Class: SalesInvoicesServiceMultipleItemsSingleton

Represents a single line item payload within a bulk creation request.
Contains the exact same transactional parameters as a standard item creation request,
omitting the parent invoice ID which is declared once at the batch level.

**`Generated`**

from message Scailo.SalesInvoicesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\>

  ↳ **`SalesInvoicesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](SalesInvoicesServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](SalesInvoicesServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](SalesInvoicesServiceMultipleItemsSingleton.md#clientuomid)
- [familyId](SalesInvoicesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](SalesInvoicesServiceMultipleItemsSingleton.md#internalquantity)
- [roundOff](SalesInvoicesServiceMultipleItemsSingleton.md#roundoff)
- [specifications](SalesInvoicesServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](SalesInvoicesServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](SalesInvoicesServiceMultipleItemsSingleton.md#unitprice)
- [fields](SalesInvoicesServiceMultipleItemsSingleton.md#fields)
- [runtime](SalesInvoicesServiceMultipleItemsSingleton.md#runtime)
- [typeName](SalesInvoicesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](SalesInvoicesServiceMultipleItemsSingleton.md#clone)
- [equals](SalesInvoicesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](SalesInvoicesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](SalesInvoicesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](SalesInvoicesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](SalesInvoicesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](SalesInvoicesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](SalesInvoicesServiceMultipleItemsSingleton.md#tojson)
- [toJson](SalesInvoicesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](SalesInvoicesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](SalesInvoicesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](SalesInvoicesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](SalesInvoicesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceMultipleItemsSingleton**(`data?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;SalesInvoicesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:1632](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1632)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.

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

[src/sales_invoices.scailo_pb.ts:1566](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1566)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The invoiced quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/sales_invoices.scailo_pb.ts:1550](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1550)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.

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

[src/sales_invoices.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1534)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being invoiced.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1502)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The invoiced quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/sales_invoices.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1518)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.

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

[src/sales_invoices.scailo_pb.ts:1614](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1614)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Additional custom textual requirements, notes, or specifications associated with this billed item.

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

[src/sales_invoices.scailo_pb.ts:1630](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1630)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the tax group or tax bracket applicable to this specific line item.

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

[src/sales_invoices.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1598)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The invoiced price per unit for this item, represented in the base currency subunit (e.g., cents).

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

[src/sales_invoices.scailo_pb.ts:1582](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1582)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1639)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1637](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1637)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceMultipleItemsSingleton"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1638)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1663](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1663)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1651)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1655](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1655)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1659](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L1659)
