[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceUpdateRequest

# Class: ClientStreamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ClientStreamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)\>

  ↳ **`ClientStreamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceUpdateRequest.md#constructor)

### Properties

- [id](ClientStreamsServiceUpdateRequest.md#id)
- [notifyUsers](ClientStreamsServiceUpdateRequest.md#notifyusers)
- [title](ClientStreamsServiceUpdateRequest.md#title)
- [userComment](ClientStreamsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ClientStreamsServiceUpdateRequest.md#vaultfolderid)
- [fields](ClientStreamsServiceUpdateRequest.md#fields)
- [runtime](ClientStreamsServiceUpdateRequest.md#runtime)
- [typeName](ClientStreamsServiceUpdateRequest.md#typename)

### Methods

- [clone](ClientStreamsServiceUpdateRequest.md#clone)
- [equals](ClientStreamsServiceUpdateRequest.md#equals)
- [fromBinary](ClientStreamsServiceUpdateRequest.md#frombinary)
- [fromJson](ClientStreamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ClientStreamsServiceUpdateRequest.md#fromjsonstring)
- [getType](ClientStreamsServiceUpdateRequest.md#gettype)
- [toBinary](ClientStreamsServiceUpdateRequest.md#tobinary)
- [toJSON](ClientStreamsServiceUpdateRequest.md#tojson)
- [toJson](ClientStreamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ClientStreamsServiceUpdateRequest.md#tojsonstring)
- [equals](ClientStreamsServiceUpdateRequest.md#equals-1)
- [fromBinary](ClientStreamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ClientStreamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceUpdateRequest**(`data?`): [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)\> |

#### Returns

[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ClientStreamsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/client_streams.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L527)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/client_streams.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L504)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/client_streams.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L511)

___

### title

• **title**: `string` = `""`

The title of the client stream

**`Generated`**

from field: string title = 10;

#### Defined in

[src/client_streams.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L525)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/client_streams.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L497)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/client_streams.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L518)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/client_streams.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L534)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/client_streams.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L532)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceUpdateRequest"``

#### Defined in

[src/client_streams.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L533)

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/client_streams.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L554)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L542)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L546)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceUpdateRequest`](ClientStreamsServiceUpdateRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/client_streams.scailo_pb.ts#L550)
