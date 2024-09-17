[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServicePaginationResponse

# Class: PurchasesOrdersServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.PurchasesOrdersServicePaginationResponse

## Hierarchy

- `Message`\<[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)\>

  ↳ **`PurchasesOrdersServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServicePaginationResponse.md#constructor)

### Properties

- [count](PurchasesOrdersServicePaginationResponse.md#count)
- [offset](PurchasesOrdersServicePaginationResponse.md#offset)
- [payload](PurchasesOrdersServicePaginationResponse.md#payload)
- [total](PurchasesOrdersServicePaginationResponse.md#total)
- [fields](PurchasesOrdersServicePaginationResponse.md#fields)
- [runtime](PurchasesOrdersServicePaginationResponse.md#runtime)
- [typeName](PurchasesOrdersServicePaginationResponse.md#typename)

### Methods

- [clone](PurchasesOrdersServicePaginationResponse.md#clone)
- [equals](PurchasesOrdersServicePaginationResponse.md#equals)
- [fromBinary](PurchasesOrdersServicePaginationResponse.md#frombinary)
- [fromJson](PurchasesOrdersServicePaginationResponse.md#fromjson)
- [fromJsonString](PurchasesOrdersServicePaginationResponse.md#fromjsonstring)
- [getType](PurchasesOrdersServicePaginationResponse.md#gettype)
- [toBinary](PurchasesOrdersServicePaginationResponse.md#tobinary)
- [toJSON](PurchasesOrdersServicePaginationResponse.md#tojson)
- [toJson](PurchasesOrdersServicePaginationResponse.md#tojson-1)
- [toJsonString](PurchasesOrdersServicePaginationResponse.md#tojsonstring)
- [equals](PurchasesOrdersServicePaginationResponse.md#equals-1)
- [fromBinary](PurchasesOrdersServicePaginationResponse.md#frombinary-1)
- [fromJson](PurchasesOrdersServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServicePaginationResponse**(`data?`): [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)\> |

#### Returns

[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Overrides

Message\&lt;PurchasesOrdersServicePaginationResponse\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:1717

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:1694

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:1701

___

### payload

• **payload**: [`PurchaseOrder`](PurchaseOrder.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.PurchaseOrder payload = 4;

#### Defined in

src/purchases_orders.scailo_pb.ts:1715

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/purchases_orders.scailo_pb.ts:1708

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:1724

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:1722

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServicePaginationResponse"``

#### Defined in

src/purchases_orders.scailo_pb.ts:1723

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:1743

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1731

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1735

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServicePaginationResponse`](PurchasesOrdersServicePaginationResponse.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:1739
