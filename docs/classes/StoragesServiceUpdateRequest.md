[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceUpdateRequest

# Class: StoragesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.StoragesServiceUpdateRequest

## Hierarchy

- `Message`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\>

  ↳ **`StoragesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StoragesServiceUpdateRequest.md#constructor)

### Properties

- [description](StoragesServiceUpdateRequest.md#description)
- [id](StoragesServiceUpdateRequest.md#id)
- [name](StoragesServiceUpdateRequest.md#name)
- [notifyUsers](StoragesServiceUpdateRequest.md#notifyusers)
- [userComment](StoragesServiceUpdateRequest.md#usercomment)
- [fields](StoragesServiceUpdateRequest.md#fields)
- [runtime](StoragesServiceUpdateRequest.md#runtime)
- [typeName](StoragesServiceUpdateRequest.md#typename)

### Methods

- [clone](StoragesServiceUpdateRequest.md#clone)
- [equals](StoragesServiceUpdateRequest.md#equals)
- [fromBinary](StoragesServiceUpdateRequest.md#frombinary)
- [fromJson](StoragesServiceUpdateRequest.md#fromjson)
- [fromJsonString](StoragesServiceUpdateRequest.md#fromjsonstring)
- [getType](StoragesServiceUpdateRequest.md#gettype)
- [toBinary](StoragesServiceUpdateRequest.md#tobinary)
- [toJSON](StoragesServiceUpdateRequest.md#tojson)
- [toJson](StoragesServiceUpdateRequest.md#tojson-1)
- [toJsonString](StoragesServiceUpdateRequest.md#tojsonstring)
- [equals](StoragesServiceUpdateRequest.md#equals-1)
- [fromBinary](StoragesServiceUpdateRequest.md#frombinary-1)
- [fromJson](StoragesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StoragesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceUpdateRequest**(`data?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Overrides

Message\&lt;StoragesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L225)

## Properties

### description

• **description**: `string` = `""`

The description of the storage

**`Generated`**

from field: string description = 15;

#### Defined in

[src/storages.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L223)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/storages.scailo_pb.ts:202](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L202)

___

### name

• **name**: `string` = `""`

The name of the storage

**`Generated`**

from field: string name = 10;

#### Defined in

[src/storages.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L216)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that storages if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/storages.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L209)

___

### userComment

• **userComment**: `string` = `""`

Storages any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/storages.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L195)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L232)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L230)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceUpdateRequest"``

#### Defined in

[src/storages.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L231)

## Methods

### clone

▸ **clone**(): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md) \| `PlainMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md) \| `PlainMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md) \| `PlainMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L252)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L240)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L244)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:248](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/storages.scailo_pb.ts#L248)
