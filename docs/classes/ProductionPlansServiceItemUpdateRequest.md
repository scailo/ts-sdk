[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServiceItemUpdateRequest

# Class: ProductionPlansServiceItemUpdateRequest

Describes the parameters required to update an item in a production plan

**`Generated`**

from message Scailo.ProductionPlansServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\>

  ↳ **`ProductionPlansServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServiceItemUpdateRequest.md#constructor)

### Properties

- [id](ProductionPlansServiceItemUpdateRequest.md#id)
- [quantity](ProductionPlansServiceItemUpdateRequest.md#quantity)
- [userComment](ProductionPlansServiceItemUpdateRequest.md#usercomment)
- [fields](ProductionPlansServiceItemUpdateRequest.md#fields)
- [runtime](ProductionPlansServiceItemUpdateRequest.md#runtime)
- [typeName](ProductionPlansServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ProductionPlansServiceItemUpdateRequest.md#clone)
- [equals](ProductionPlansServiceItemUpdateRequest.md#equals)
- [fromBinary](ProductionPlansServiceItemUpdateRequest.md#frombinary)
- [fromJson](ProductionPlansServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ProductionPlansServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ProductionPlansServiceItemUpdateRequest.md#gettype)
- [toBinary](ProductionPlansServiceItemUpdateRequest.md#tobinary)
- [toJSON](ProductionPlansServiceItemUpdateRequest.md#tojson)
- [toJson](ProductionPlansServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ProductionPlansServiceItemUpdateRequest.md#tojsonstring)
- [equals](ProductionPlansServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ProductionPlansServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ProductionPlansServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductionPlansServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServiceItemUpdateRequest**(`data?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;ProductionPlansServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/production_plans.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L880)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/production_plans.scailo_pb.ts:871](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L871)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/production_plans.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L878)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_plans.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L864)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L887)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L885)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlansServiceItemUpdateRequest"``

#### Defined in

[src/production_plans.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L886)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans.scailo_pb.ts:905](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L905)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Defined in

[src/production_plans.scailo_pb.ts:893](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L893)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Defined in

[src/production_plans.scailo_pb.ts:897](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L897)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServiceItemUpdateRequest`](ProductionPlansServiceItemUpdateRequest.md)

#### Defined in

[src/production_plans.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_plans.scailo_pb.ts#L901)
