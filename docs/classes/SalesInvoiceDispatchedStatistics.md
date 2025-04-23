[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceDispatchedStatistics

# Class: SalesInvoiceDispatchedStatistics

Describes the dispatched statistics of the sales invoice

**`Generated`**

from message Scailo.SalesInvoiceDispatchedStatistics

## Hierarchy

- `Message`\<[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)\>

  ↳ **`SalesInvoiceDispatchedStatistics`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceDispatchedStatistics.md#constructor)

### Properties

- [dispatchedQuantity](SalesInvoiceDispatchedStatistics.md#dispatchedquantity)
- [familyId](SalesInvoiceDispatchedStatistics.md#familyid)
- [invoicedQuantity](SalesInvoiceDispatchedStatistics.md#invoicedquantity)
- [fields](SalesInvoiceDispatchedStatistics.md#fields)
- [runtime](SalesInvoiceDispatchedStatistics.md#runtime)
- [typeName](SalesInvoiceDispatchedStatistics.md#typename)

### Methods

- [clone](SalesInvoiceDispatchedStatistics.md#clone)
- [equals](SalesInvoiceDispatchedStatistics.md#equals)
- [fromBinary](SalesInvoiceDispatchedStatistics.md#frombinary)
- [fromJson](SalesInvoiceDispatchedStatistics.md#fromjson)
- [fromJsonString](SalesInvoiceDispatchedStatistics.md#fromjsonstring)
- [getType](SalesInvoiceDispatchedStatistics.md#gettype)
- [toBinary](SalesInvoiceDispatchedStatistics.md#tobinary)
- [toJSON](SalesInvoiceDispatchedStatistics.md#tojson)
- [toJson](SalesInvoiceDispatchedStatistics.md#tojson-1)
- [toJsonString](SalesInvoiceDispatchedStatistics.md#tojsonstring)
- [equals](SalesInvoiceDispatchedStatistics.md#equals-1)
- [fromBinary](SalesInvoiceDispatchedStatistics.md#frombinary-1)
- [fromJson](SalesInvoiceDispatchedStatistics.md#fromjson-1)
- [fromJsonString](SalesInvoiceDispatchedStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceDispatchedStatistics**(`data?`): [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)\> |

#### Returns

[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Overrides

Message\&lt;SalesInvoiceDispatchedStatistics\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:2756

## Properties

### dispatchedQuantity

• **dispatchedQuantity**: `bigint` = `protoInt64.zero`

Stores the dispatched quantity

**`Generated`**

from field: uint64 dispatched_quantity = 3;

#### Defined in

src/sales_invoices.scailo_pb.ts:2754

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:2740

___

### invoicedQuantity

• **invoicedQuantity**: `bigint` = `protoInt64.zero`

Stores the invoiced quantity

**`Generated`**

from field: uint64 invoiced_quantity = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:2747

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:2763

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:2761

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceDispatchedStatistics"``

#### Defined in

src/sales_invoices.scailo_pb.ts:2762

## Methods

### clone

▸ **clone**(): [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

Create a deep copy.

#### Returns

[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md) \| `PlainMessage`\<[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)\>

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
| `a` | `undefined` \| [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md) \| `PlainMessage`\<[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)\> |
| `b` | `undefined` \| [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md) \| `PlainMessage`\<[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:2781

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2769

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2773

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceDispatchedStatistics`](SalesInvoiceDispatchedStatistics.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:2777
