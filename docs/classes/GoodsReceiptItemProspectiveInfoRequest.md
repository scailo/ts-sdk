[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptItemProspectiveInfoRequest

# Class: GoodsReceiptItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective goods receipt item

**`Generated`**

from message Scailo.GoodsReceiptItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)\>

  ↳ **`GoodsReceiptItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](GoodsReceiptItemProspectiveInfoRequest.md#familyid)
- [goodsReceiptId](GoodsReceiptItemProspectiveInfoRequest.md#goodsreceiptid)
- [fields](GoodsReceiptItemProspectiveInfoRequest.md#fields)
- [runtime](GoodsReceiptItemProspectiveInfoRequest.md#runtime)
- [typeName](GoodsReceiptItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](GoodsReceiptItemProspectiveInfoRequest.md#clone)
- [equals](GoodsReceiptItemProspectiveInfoRequest.md#equals)
- [fromBinary](GoodsReceiptItemProspectiveInfoRequest.md#frombinary)
- [fromJson](GoodsReceiptItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](GoodsReceiptItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](GoodsReceiptItemProspectiveInfoRequest.md#gettype)
- [toBinary](GoodsReceiptItemProspectiveInfoRequest.md#tobinary)
- [toJSON](GoodsReceiptItemProspectiveInfoRequest.md#tojson)
- [toJson](GoodsReceiptItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](GoodsReceiptItemProspectiveInfoRequest.md#tojsonstring)
- [equals](GoodsReceiptItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](GoodsReceiptItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](GoodsReceiptItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptItemProspectiveInfoRequest**(`data?`): [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)\> |

#### Returns

[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;GoodsReceiptItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/goods_receipts.scailo_pb.ts:1146

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/goods_receipts.scailo_pb.ts:1144

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

Stores the goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 10;

#### Defined in

src/goods_receipts.scailo_pb.ts:1137

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_receipts.scailo_pb.ts:1153

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_receipts.scailo_pb.ts:1151

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptItemProspectiveInfoRequest"``

#### Defined in

src/goods_receipts.scailo_pb.ts:1152

## Methods

### clone

▸ **clone**(): [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_receipts.scailo_pb.ts:1170

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1158

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1162

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItemProspectiveInfoRequest`](GoodsReceiptItemProspectiveInfoRequest.md)

#### Defined in

src/goods_receipts.scailo_pb.ts:1166
