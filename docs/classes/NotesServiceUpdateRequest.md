[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesServiceUpdateRequest

# Class: NotesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.NotesServiceUpdateRequest

## Hierarchy

- `Message`\<[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)\>

  ↳ **`NotesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](NotesServiceUpdateRequest.md#constructor)

### Properties

- [activityId](NotesServiceUpdateRequest.md#activityid)
- [activityStatusId](NotesServiceUpdateRequest.md#activitystatusid)
- [description](NotesServiceUpdateRequest.md#description)
- [id](NotesServiceUpdateRequest.md#id)
- [notifyUsers](NotesServiceUpdateRequest.md#notifyusers)
- [projectId](NotesServiceUpdateRequest.md#projectid)
- [title](NotesServiceUpdateRequest.md#title)
- [userComment](NotesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](NotesServiceUpdateRequest.md#vaultfolderid)
- [fields](NotesServiceUpdateRequest.md#fields)
- [runtime](NotesServiceUpdateRequest.md#runtime)
- [typeName](NotesServiceUpdateRequest.md#typename)

### Methods

- [clone](NotesServiceUpdateRequest.md#clone)
- [equals](NotesServiceUpdateRequest.md#equals)
- [fromBinary](NotesServiceUpdateRequest.md#frombinary)
- [fromJson](NotesServiceUpdateRequest.md#fromjson)
- [fromJsonString](NotesServiceUpdateRequest.md#fromjsonstring)
- [getType](NotesServiceUpdateRequest.md#gettype)
- [toBinary](NotesServiceUpdateRequest.md#tobinary)
- [toJSON](NotesServiceUpdateRequest.md#tojson)
- [toJson](NotesServiceUpdateRequest.md#tojson-1)
- [toJsonString](NotesServiceUpdateRequest.md#tojsonstring)
- [equals](NotesServiceUpdateRequest.md#equals-1)
- [fromBinary](NotesServiceUpdateRequest.md#frombinary-1)
- [fromJson](NotesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](NotesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesServiceUpdateRequest**(`data?`): [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)\> |

#### Returns

[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Overrides

Message\&lt;NotesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/notes.scailo_pb.ts:394

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

The associated activity ID

**`Generated`**

from field: uint64 activity_id = 21;

#### Defined in

src/notes.scailo_pb.ts:385

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

The associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 22;

#### Defined in

src/notes.scailo_pb.ts:392

___

### description

• **description**: `string` = `""`

The description of the note

**`Generated`**

from field: string description = 11;

#### Defined in

src/notes.scailo_pb.ts:378

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/notes.scailo_pb.ts:343

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/notes.scailo_pb.ts:350

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

src/notes.scailo_pb.ts:364

___

### title

• **title**: `string` = `""`

The title of the note

**`Generated`**

from field: string title = 10;

#### Defined in

src/notes.scailo_pb.ts:371

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/notes.scailo_pb.ts:336

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

src/notes.scailo_pb.ts:357

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/notes.scailo_pb.ts:401

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/notes.scailo_pb.ts:399

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesServiceUpdateRequest"``

#### Defined in

src/notes.scailo_pb.ts:400

## Methods

### clone

▸ **clone**(): [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md) \| `PlainMessage`\<[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md) \| `PlainMessage`\<[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md) \| `PlainMessage`\<[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/notes.scailo_pb.ts:425

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Defined in

src/notes.scailo_pb.ts:413

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Defined in

src/notes.scailo_pb.ts:417

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceUpdateRequest`](NotesServiceUpdateRequest.md)

#### Defined in

src/notes.scailo_pb.ts:421
