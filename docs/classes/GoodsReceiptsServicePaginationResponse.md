[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServicePaginationResponse

# Class: GoodsReceiptsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.GoodsReceiptsServicePaginationResponse

## Hierarchy

- `Message`\<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\>

  ↳ **`GoodsReceiptsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServicePaginationResponse.md#constructor)

### Properties

- [count](GoodsReceiptsServicePaginationResponse.md#count)
- [offset](GoodsReceiptsServicePaginationResponse.md#offset)
- [payload](GoodsReceiptsServicePaginationResponse.md#payload)
- [total](GoodsReceiptsServicePaginationResponse.md#total)
- [fields](GoodsReceiptsServicePaginationResponse.md#fields)
- [runtime](GoodsReceiptsServicePaginationResponse.md#runtime)
- [typeName](GoodsReceiptsServicePaginationResponse.md#typename)

### Methods

- [clone](GoodsReceiptsServicePaginationResponse.md#clone)
- [equals](GoodsReceiptsServicePaginationResponse.md#equals)
- [fromBinary](GoodsReceiptsServicePaginationResponse.md#frombinary)
- [fromJson](GoodsReceiptsServicePaginationResponse.md#fromjson)
- [fromJsonString](GoodsReceiptsServicePaginationResponse.md#fromjsonstring)
- [getType](GoodsReceiptsServicePaginationResponse.md#gettype)
- [toBinary](GoodsReceiptsServicePaginationResponse.md#tobinary)
- [toJSON](GoodsReceiptsServicePaginationResponse.md#tojson)
- [toJson](GoodsReceiptsServicePaginationResponse.md#tojson-1)
- [toJsonString](GoodsReceiptsServicePaginationResponse.md#tojsonstring)
- [equals](GoodsReceiptsServicePaginationResponse.md#equals-1)
- [fromBinary](GoodsReceiptsServicePaginationResponse.md#frombinary-1)
- [fromJson](GoodsReceiptsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServicePaginationResponse**(`data?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Overrides

Message\&lt;GoodsReceiptsServicePaginationResponse\&gt;.constructor

#### Defined in

src/goods_receipts.scailo_pb.ts:1570

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/goods_receipts.scailo_pb.ts:1547

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/goods_receipts.scailo_pb.ts:1554

___

### payload

• **payload**: [`GoodsReceipt`](GoodsReceipt.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.GoodsReceipt payload = 4;

#### Defined in

src/goods_receipts.scailo_pb.ts:1568

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/goods_receipts.scailo_pb.ts:1561

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_receipts.scailo_pb.ts:1577

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_receipts.scailo_pb.ts:1575

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptsServicePaginationResponse"``

#### Defined in

src/goods_receipts.scailo_pb.ts:1576

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md) \| `PlainMessage`\<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md) \| `PlainMessage`\<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md) \| `PlainMessage`\<[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_receipts.scailo_pb.ts:1596

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1584

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1588

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServicePaginationResponse`](GoodsReceiptsServicePaginationResponse.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1592
