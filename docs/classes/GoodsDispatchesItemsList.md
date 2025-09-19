[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesItemsList

# Class: GoodsDispatchesItemsList

Describes the message consisting of the list of goods dispatch items

**`Generated`**

from message Scailo.GoodsDispatchesItemsList

## Hierarchy

- `Message`\<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\>

  ↳ **`GoodsDispatchesItemsList`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesItemsList.md#constructor)

### Properties

- [list](GoodsDispatchesItemsList.md#list)
- [fields](GoodsDispatchesItemsList.md#fields)
- [runtime](GoodsDispatchesItemsList.md#runtime)
- [typeName](GoodsDispatchesItemsList.md#typename)

### Methods

- [clone](GoodsDispatchesItemsList.md#clone)
- [equals](GoodsDispatchesItemsList.md#equals)
- [fromBinary](GoodsDispatchesItemsList.md#frombinary)
- [fromJson](GoodsDispatchesItemsList.md#fromjson)
- [fromJsonString](GoodsDispatchesItemsList.md#fromjsonstring)
- [getType](GoodsDispatchesItemsList.md#gettype)
- [toBinary](GoodsDispatchesItemsList.md#tobinary)
- [toJSON](GoodsDispatchesItemsList.md#tojson)
- [toJson](GoodsDispatchesItemsList.md#tojson-1)
- [toJsonString](GoodsDispatchesItemsList.md#tojsonstring)
- [equals](GoodsDispatchesItemsList.md#equals-1)
- [fromBinary](GoodsDispatchesItemsList.md#frombinary-1)
- [fromJson](GoodsDispatchesItemsList.md#fromjson-1)
- [fromJsonString](GoodsDispatchesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesItemsList**(`data?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Overrides

Message\&lt;GoodsDispatchesItemsList\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1098](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1098)

## Properties

### list

• **list**: [`GoodsDispatchItem`](GoodsDispatchItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.GoodsDispatchItem list = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1096)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1105](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1105)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1103)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesItemsList"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1104)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md) \| `PlainMessage`\<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md) \| `PlainMessage`\<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md) \| `PlainMessage`\<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1121)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1109](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1109)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1113](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1113)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L1117)
