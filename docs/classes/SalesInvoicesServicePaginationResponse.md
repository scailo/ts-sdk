[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServicePaginationResponse

# Class: SalesInvoicesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.SalesInvoicesServicePaginationResponse

## Hierarchy

- `Message`\<[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)\>

  ↳ **`SalesInvoicesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServicePaginationResponse.md#constructor)

### Properties

- [count](SalesInvoicesServicePaginationResponse.md#count)
- [offset](SalesInvoicesServicePaginationResponse.md#offset)
- [payload](SalesInvoicesServicePaginationResponse.md#payload)
- [total](SalesInvoicesServicePaginationResponse.md#total)
- [fields](SalesInvoicesServicePaginationResponse.md#fields)
- [runtime](SalesInvoicesServicePaginationResponse.md#runtime)
- [typeName](SalesInvoicesServicePaginationResponse.md#typename)

### Methods

- [clone](SalesInvoicesServicePaginationResponse.md#clone)
- [equals](SalesInvoicesServicePaginationResponse.md#equals)
- [fromBinary](SalesInvoicesServicePaginationResponse.md#frombinary)
- [fromJson](SalesInvoicesServicePaginationResponse.md#fromjson)
- [fromJsonString](SalesInvoicesServicePaginationResponse.md#fromjsonstring)
- [getType](SalesInvoicesServicePaginationResponse.md#gettype)
- [toBinary](SalesInvoicesServicePaginationResponse.md#tobinary)
- [toJSON](SalesInvoicesServicePaginationResponse.md#tojson)
- [toJson](SalesInvoicesServicePaginationResponse.md#tojson-1)
- [toJsonString](SalesInvoicesServicePaginationResponse.md#tojsonstring)
- [equals](SalesInvoicesServicePaginationResponse.md#equals-1)
- [fromBinary](SalesInvoicesServicePaginationResponse.md#frombinary-1)
- [fromJson](SalesInvoicesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](SalesInvoicesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServicePaginationResponse**(`data?`): [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)\> |

#### Returns

[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Overrides

Message\&lt;SalesInvoicesServicePaginationResponse\&gt;.constructor

#### Defined in

src/sales_invoices.scailo_pb.ts:1611

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/sales_invoices.scailo_pb.ts:1588

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/sales_invoices.scailo_pb.ts:1595

___

### payload

• **payload**: [`SalesInvoice`](SalesInvoice.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.SalesInvoice payload = 4;

#### Defined in

src/sales_invoices.scailo_pb.ts:1609

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/sales_invoices.scailo_pb.ts:1602

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_invoices.scailo_pb.ts:1618

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_invoices.scailo_pb.ts:1616

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServicePaginationResponse"``

#### Defined in

src/sales_invoices.scailo_pb.ts:1617

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md) \| `PlainMessage`\<[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_invoices.scailo_pb.ts:1637

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1625

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1629

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServicePaginationResponse`](SalesInvoicesServicePaginationResponse.md)

#### Defined in

src/sales_invoices.scailo_pb.ts:1633
