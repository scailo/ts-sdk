[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceMultipleItemsCreateRequest

# Class: GoodsDispatchesServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a goods dispatch

**`Generated`**

from message Scailo.GoodsDispatchesServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\>

  ↳ **`GoodsDispatchesServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [goodsDispatchId](GoodsDispatchesServiceMultipleItemsCreateRequest.md#goodsdispatchid)
- [list](GoodsDispatchesServiceMultipleItemsCreateRequest.md#list)
- [userComment](GoodsDispatchesServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fields)
- [runtime](GoodsDispatchesServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceMultipleItemsCreateRequest.md#clone)
- [equals](GoodsDispatchesServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceMultipleItemsCreateRequest**(`data?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:932](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L932)

## Properties

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L923)

___

### list

• **list**: [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.GoodsDispatchesServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L930)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L916)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L939)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:937](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L937)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceMultipleItemsCreateRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L938)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L957)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L945)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L949)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/goods_dispatches.scailo_pb.ts#L953)
