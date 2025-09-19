[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceCreateRequest

# Class: GeneralStreamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.GeneralStreamsServiceCreateRequest

## Hierarchy

- `Message`\<[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)\>

  ↳ **`GeneralStreamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceCreateRequest.md#constructor)

### Properties

- [assignSelfAsInternalSubscriber](GeneralStreamsServiceCreateRequest.md#assignselfasinternalsubscriber)
- [entityUuid](GeneralStreamsServiceCreateRequest.md#entityuuid)
- [title](GeneralStreamsServiceCreateRequest.md#title)
- [userComment](GeneralStreamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](GeneralStreamsServiceCreateRequest.md#vaultfolderid)
- [fields](GeneralStreamsServiceCreateRequest.md#fields)
- [runtime](GeneralStreamsServiceCreateRequest.md#runtime)
- [typeName](GeneralStreamsServiceCreateRequest.md#typename)

### Methods

- [clone](GeneralStreamsServiceCreateRequest.md#clone)
- [equals](GeneralStreamsServiceCreateRequest.md#equals)
- [fromBinary](GeneralStreamsServiceCreateRequest.md#frombinary)
- [fromJson](GeneralStreamsServiceCreateRequest.md#fromjson)
- [fromJsonString](GeneralStreamsServiceCreateRequest.md#fromjsonstring)
- [getType](GeneralStreamsServiceCreateRequest.md#gettype)
- [toBinary](GeneralStreamsServiceCreateRequest.md#tobinary)
- [toJSON](GeneralStreamsServiceCreateRequest.md#tojson)
- [toJson](GeneralStreamsServiceCreateRequest.md#tojson-1)
- [toJsonString](GeneralStreamsServiceCreateRequest.md#tojsonstring)
- [equals](GeneralStreamsServiceCreateRequest.md#equals-1)
- [fromBinary](GeneralStreamsServiceCreateRequest.md#frombinary-1)
- [fromJson](GeneralStreamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceCreateRequest**(`data?`): [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)\> |

#### Returns

[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Overrides

Message\&lt;GeneralStreamsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/general_streams.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L330)

## Properties

### assignSelfAsInternalSubscriber

• **assignSelfAsInternalSubscriber**: `boolean` = `false`

Assign self (the user creating the stream) as an internal subscriber

**`Generated`**

from field: bool assign_self_as_internal_subscriber = 80;

#### Defined in

[src/general_streams.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L328)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/general_streams.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L300)

___

### title

• **title**: `string` = `""`

The title of the general stream

**`Generated`**

from field: string title = 10;

#### Defined in

[src/general_streams.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L321)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/general_streams.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L307)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/general_streams.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L314)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/general_streams.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L337)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/general_streams.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L335)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceCreateRequest"``

#### Defined in

[src/general_streams.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L336)

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/general_streams.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L357)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L345)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L349)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceCreateRequest`](GeneralStreamsServiceCreateRequest.md)

#### Defined in

[src/general_streams.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L353)
