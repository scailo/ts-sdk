[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItemProspectiveInfoRequest

# Class: GoodsDispatchItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective goods dispatch item

**`Generated`**

from message Scailo.GoodsDispatchItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\>

  ↳ **`GoodsDispatchItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](GoodsDispatchItemProspectiveInfoRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchItemProspectiveInfoRequest.md#goodsdispatchid)
- [fields](GoodsDispatchItemProspectiveInfoRequest.md#fields)
- [runtime](GoodsDispatchItemProspectiveInfoRequest.md#runtime)
- [typeName](GoodsDispatchItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](GoodsDispatchItemProspectiveInfoRequest.md#clone)
- [equals](GoodsDispatchItemProspectiveInfoRequest.md#equals)
- [fromBinary](GoodsDispatchItemProspectiveInfoRequest.md#frombinary)
- [fromJson](GoodsDispatchItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](GoodsDispatchItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](GoodsDispatchItemProspectiveInfoRequest.md#gettype)
- [toBinary](GoodsDispatchItemProspectiveInfoRequest.md#tobinary)
- [toJSON](GoodsDispatchItemProspectiveInfoRequest.md#tojson)
- [toJson](GoodsDispatchItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](GoodsDispatchItemProspectiveInfoRequest.md#tojsonstring)
- [equals](GoodsDispatchItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](GoodsDispatchItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](GoodsDispatchItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItemProspectiveInfoRequest**(`data?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;GoodsDispatchItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/goods_dispatches.scailo_pb.ts:1170

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1168

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1161

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1177

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1175

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchItemProspectiveInfoRequest"``

#### Defined in

src/goods_dispatches.scailo_pb.ts:1176

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1194

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1182

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1186

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1190
