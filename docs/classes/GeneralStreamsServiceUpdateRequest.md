[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceUpdateRequest

# Class: GeneralStreamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.GeneralStreamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)\>

  ↳ **`GeneralStreamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceUpdateRequest.md#constructor)

### Properties

- [id](GeneralStreamsServiceUpdateRequest.md#id)
- [notifyUsers](GeneralStreamsServiceUpdateRequest.md#notifyusers)
- [title](GeneralStreamsServiceUpdateRequest.md#title)
- [userComment](GeneralStreamsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](GeneralStreamsServiceUpdateRequest.md#vaultfolderid)
- [fields](GeneralStreamsServiceUpdateRequest.md#fields)
- [runtime](GeneralStreamsServiceUpdateRequest.md#runtime)
- [typeName](GeneralStreamsServiceUpdateRequest.md#typename)

### Methods

- [clone](GeneralStreamsServiceUpdateRequest.md#clone)
- [equals](GeneralStreamsServiceUpdateRequest.md#equals)
- [fromBinary](GeneralStreamsServiceUpdateRequest.md#frombinary)
- [fromJson](GeneralStreamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](GeneralStreamsServiceUpdateRequest.md#fromjsonstring)
- [getType](GeneralStreamsServiceUpdateRequest.md#gettype)
- [toBinary](GeneralStreamsServiceUpdateRequest.md#tobinary)
- [toJSON](GeneralStreamsServiceUpdateRequest.md#tojson)
- [toJson](GeneralStreamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](GeneralStreamsServiceUpdateRequest.md#tojsonstring)
- [equals](GeneralStreamsServiceUpdateRequest.md#equals-1)
- [fromBinary](GeneralStreamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](GeneralStreamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceUpdateRequest**(`data?`): [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)\> |

#### Returns

[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;GeneralStreamsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/general_streams.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L404)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/general_streams.scailo_pb.ts:381](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L381)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/general_streams.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L388)

___

### title

• **title**: `string` = `""`

The title of the general stream

**`Generated`**

from field: string title = 10;

#### Defined in

[src/general_streams.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L402)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/general_streams.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L374)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/general_streams.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L395)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/general_streams.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L411)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/general_streams.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L409)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceUpdateRequest"``

#### Defined in

[src/general_streams.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L410)

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/general_streams.scailo_pb.ts:431](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L431)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L419)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L423)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceUpdateRequest`](GeneralStreamsServiceUpdateRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L427)
