[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStream

# Class: GeneralStream

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.GeneralStream

## Hierarchy

- `Message`\<[`GeneralStream`](GeneralStream.md)\>

  ↳ **`GeneralStream`**

## Table of contents

### Constructors

- [constructor](GeneralStream.md#constructor)

### Properties

- [completedOn](GeneralStream.md#completedon)
- [entityUuid](GeneralStream.md#entityuuid)
- [internalRef](GeneralStream.md#internalref)
- [lastMessageBy](GeneralStream.md#lastmessageby)
- [logs](GeneralStream.md#logs)
- [messageCount](GeneralStream.md#messagecount)
- [metadata](GeneralStream.md#metadata)
- [status](GeneralStream.md#status)
- [title](GeneralStream.md#title)
- [unreadCount](GeneralStream.md#unreadcount)
- [vaultFolderId](GeneralStream.md#vaultfolderid)
- [fields](GeneralStream.md#fields)
- [runtime](GeneralStream.md#runtime)
- [typeName](GeneralStream.md#typename)

### Methods

- [clone](GeneralStream.md#clone)
- [equals](GeneralStream.md#equals)
- [fromBinary](GeneralStream.md#frombinary)
- [fromJson](GeneralStream.md#fromjson)
- [fromJsonString](GeneralStream.md#fromjsonstring)
- [getType](GeneralStream.md#gettype)
- [toBinary](GeneralStream.md#tobinary)
- [toJSON](GeneralStream.md#tojson)
- [toJson](GeneralStream.md#tojson-1)
- [toJsonString](GeneralStream.md#tojsonstring)
- [equals](GeneralStream.md#equals-1)
- [fromBinary](GeneralStream.md#frombinary-1)
- [fromJson](GeneralStream.md#fromjson-1)
- [fromJsonString](GeneralStream.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStream**(`data?`): [`GeneralStream`](GeneralStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStream`](GeneralStream.md)\> |

#### Returns

[`GeneralStream`](GeneralStream.md)

#### Overrides

Message\&lt;GeneralStream\&gt;.constructor

#### Defined in

[src/general_streams.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L520)

## Properties

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this general stream was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/general_streams.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L476)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/general_streams.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L448)

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 50;

#### Defined in

[src/general_streams.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L497)

___

### lastMessageBy

• **lastMessageBy**: `string` = `""`

Stores the username of the user who added the last message

**`Generated`**

from field: string last_message_by = 62;

#### Defined in

[src/general_streams.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L518)

___

### logs

• **logs**: [`LogbookLogGeneralStreamLC`](LogbookLogGeneralStreamLC.md)[] = `[]`

Stores the logs of every operation performed on this general stream

**`Generated`**

from field: repeated Scailo.LogbookLogGeneralStreamLC logs = 5;

#### Defined in

[src/general_streams.scailo_pb.ts:469](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L469)

___

### messageCount

• **messageCount**: `bigint` = `protoInt64.zero`

Stores the total number of messages in the stream

**`Generated`**

from field: uint64 message_count = 61;

#### Defined in

[src/general_streams.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L511)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this general stream

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/general_streams.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L455)

___

### status

• **status**: [`GENERAL_STREAM_LIFECYCLE`](../enums/GENERAL_STREAM_LIFECYCLE.md) = `GENERAL_STREAM_LIFECYCLE.GENERAL_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this general stream

**`Generated`**

from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 4;

#### Defined in

[src/general_streams.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L462)

___

### title

• **title**: `string` = `""`

The title of the general stream

**`Generated`**

from field: string title = 10;

#### Defined in

[src/general_streams.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L490)

___

### unreadCount

• **unreadCount**: `bigint` = `protoInt64.zero`

Stores the number of unread messages in this stream for the specific user (on the basis of the auth token)

**`Generated`**

from field: uint64 unread_count = 60;

#### Defined in

[src/general_streams.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L504)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/general_streams.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L483)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/general_streams.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L527)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/general_streams.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L525)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStream"``

#### Defined in

[src/general_streams.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L526)

## Methods

### clone

▸ **clone**(): [`GeneralStream`](GeneralStream.md)

Create a deep copy.

#### Returns

[`GeneralStream`](GeneralStream.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStream`](GeneralStream.md) \| `PlainMessage`\<[`GeneralStream`](GeneralStream.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStream`](GeneralStream.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStream`](GeneralStream.md)\>

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
| `a` | `undefined` \| [`GeneralStream`](GeneralStream.md) \| `PlainMessage`\<[`GeneralStream`](GeneralStream.md)\> |
| `b` | `undefined` \| [`GeneralStream`](GeneralStream.md) \| `PlainMessage`\<[`GeneralStream`](GeneralStream.md)\> |

#### Returns

`boolean`

#### Defined in

[src/general_streams.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L553)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStream`](GeneralStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStream`](GeneralStream.md)

#### Defined in

[src/general_streams.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L541)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStream`](GeneralStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStream`](GeneralStream.md)

#### Defined in

[src/general_streams.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L545)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStream`](GeneralStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStream`](GeneralStream.md)

#### Defined in

[src/general_streams.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/general_streams.scailo_pb.ts#L549)
