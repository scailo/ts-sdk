[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptItemHistoryRequest

# Class: GoodsReceiptItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.GoodsReceiptItemHistoryRequest

## Hierarchy

- `Message`\<[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)\>

  ↳ **`GoodsReceiptItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptItemHistoryRequest.md#constructor)

### Properties

- [familyId](GoodsReceiptItemHistoryRequest.md#familyid)
- [goodsReceiptId](GoodsReceiptItemHistoryRequest.md#goodsreceiptid)
- [fields](GoodsReceiptItemHistoryRequest.md#fields)
- [runtime](GoodsReceiptItemHistoryRequest.md#runtime)
- [typeName](GoodsReceiptItemHistoryRequest.md#typename)

### Methods

- [clone](GoodsReceiptItemHistoryRequest.md#clone)
- [equals](GoodsReceiptItemHistoryRequest.md#equals)
- [fromBinary](GoodsReceiptItemHistoryRequest.md#frombinary)
- [fromJson](GoodsReceiptItemHistoryRequest.md#fromjson)
- [fromJsonString](GoodsReceiptItemHistoryRequest.md#fromjsonstring)
- [getType](GoodsReceiptItemHistoryRequest.md#gettype)
- [toBinary](GoodsReceiptItemHistoryRequest.md#tobinary)
- [toJSON](GoodsReceiptItemHistoryRequest.md#tojson)
- [toJson](GoodsReceiptItemHistoryRequest.md#tojson-1)
- [toJsonString](GoodsReceiptItemHistoryRequest.md#tojsonstring)
- [equals](GoodsReceiptItemHistoryRequest.md#equals-1)
- [fromBinary](GoodsReceiptItemHistoryRequest.md#frombinary-1)
- [fromJson](GoodsReceiptItemHistoryRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptItemHistoryRequest**(`data?`): [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)\> |

#### Returns

[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Overrides

Message\&lt;GoodsReceiptItemHistoryRequest\&gt;.constructor

#### Defined in

src/goods_receipts.scailo_pb.ts:1142

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/goods_receipts.scailo_pb.ts:1140

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 10;

#### Defined in

src/goods_receipts.scailo_pb.ts:1133

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_receipts.scailo_pb.ts:1149

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_receipts.scailo_pb.ts:1147

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptItemHistoryRequest"``

#### Defined in

src/goods_receipts.scailo_pb.ts:1148

## Methods

### clone

▸ **clone**(): [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_receipts.scailo_pb.ts:1166

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1154

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1158

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItemHistoryRequest`](GoodsReceiptItemHistoryRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1162
