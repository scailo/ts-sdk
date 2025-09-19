[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchAncillaryParameters

# Class: GoodsDispatchAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.GoodsDispatchAncillaryParameters

## Hierarchy

- `Message`\<[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)\>

  ↳ **`GoodsDispatchAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchAncillaryParameters.md#constructor)

### Properties

- [locationUuid](GoodsDispatchAncillaryParameters.md#locationuuid)
- [refUuid](GoodsDispatchAncillaryParameters.md#refuuid)
- [fields](GoodsDispatchAncillaryParameters.md#fields)
- [runtime](GoodsDispatchAncillaryParameters.md#runtime)
- [typeName](GoodsDispatchAncillaryParameters.md#typename)

### Methods

- [clone](GoodsDispatchAncillaryParameters.md#clone)
- [equals](GoodsDispatchAncillaryParameters.md#equals)
- [fromBinary](GoodsDispatchAncillaryParameters.md#frombinary)
- [fromJson](GoodsDispatchAncillaryParameters.md#fromjson)
- [fromJsonString](GoodsDispatchAncillaryParameters.md#fromjsonstring)
- [getType](GoodsDispatchAncillaryParameters.md#gettype)
- [toBinary](GoodsDispatchAncillaryParameters.md#tobinary)
- [toJSON](GoodsDispatchAncillaryParameters.md#tojson)
- [toJson](GoodsDispatchAncillaryParameters.md#tojson-1)
- [toJsonString](GoodsDispatchAncillaryParameters.md#tojsonstring)
- [equals](GoodsDispatchAncillaryParameters.md#equals-1)
- [fromBinary](GoodsDispatchAncillaryParameters.md#frombinary-1)
- [fromJson](GoodsDispatchAncillaryParameters.md#fromjson-1)
- [fromJsonString](GoodsDispatchAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchAncillaryParameters**(`data?`): [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)\> |

#### Returns

[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Overrides

Message\&lt;GoodsDispatchAncillaryParameters\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L549)

## Properties

### locationUuid

• **locationUuid**: `string` = `""`

The UUID of the location (the UUID of the associated location_id)

**`Generated`**

from field: string location_uuid = 215;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L547)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L540)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L556)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L554)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchAncillaryParameters"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L555)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

Create a deep copy.

#### Returns

[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md) \| `PlainMessage`\<[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md) \| `PlainMessage`\<[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)\> |
| `b` | `undefined` \| [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md) \| `PlainMessage`\<[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L573)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L561)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:565](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L565)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchAncillaryParameters`](GoodsDispatchAncillaryParameters.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_dispatches.scailo_pb.ts#L569)
