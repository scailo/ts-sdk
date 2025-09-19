[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Note

# Class: Note

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Note

## Hierarchy

- `Message`\<[`Note`](Note.md)\>

  ↳ **`Note`**

## Table of contents

### Constructors

- [constructor](Note.md#constructor)

### Properties

- [activityId](Note.md#activityid)
- [activityStatusId](Note.md#activitystatusid)
- [completedOn](Note.md#completedon)
- [description](Note.md#description)
- [employeeId](Note.md#employeeid)
- [entityUuid](Note.md#entityuuid)
- [logs](Note.md#logs)
- [metadata](Note.md#metadata)
- [projectId](Note.md#projectid)
- [status](Note.md#status)
- [title](Note.md#title)
- [vaultFolderId](Note.md#vaultfolderid)
- [fields](Note.md#fields)
- [runtime](Note.md#runtime)
- [typeName](Note.md#typename)

### Methods

- [clone](Note.md#clone)
- [equals](Note.md#equals)
- [fromBinary](Note.md#frombinary)
- [fromJson](Note.md#fromjson)
- [fromJsonString](Note.md#fromjsonstring)
- [getType](Note.md#gettype)
- [toBinary](Note.md#tobinary)
- [toJSON](Note.md#tojson)
- [toJson](Note.md#tojson-1)
- [toJsonString](Note.md#tojsonstring)
- [equals](Note.md#equals-1)
- [fromBinary](Note.md#frombinary-1)
- [fromJson](Note.md#fromjson-1)
- [fromJsonString](Note.md#fromjsonstring-1)

## Constructors

### constructor

• **new Note**(`data?`): [`Note`](Note.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Note`](Note.md)\> |

#### Returns

[`Note`](Note.md)

#### Overrides

Message\&lt;Note\&gt;.constructor

#### Defined in

[src/notes.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L521)

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

The associated activity ID

**`Generated`**

from field: uint64 activity_id = 21;

#### Defined in

[src/notes.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L512)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

The associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 22;

#### Defined in

[src/notes.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L519)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this note was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/notes.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L470)

___

### description

• **description**: `string` = `""`

The description of the note

**`Generated`**

from field: string description = 11;

#### Defined in

[src/notes.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L498)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The associated employee ID

**`Generated`**

from field: uint64 employee_id = 20;

#### Defined in

[src/notes.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L505)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/notes.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L442)

___

### logs

• **logs**: [`LogbookLogNoteLC`](LogbookLogNoteLC.md)[] = `[]`

Stores the logs of every operation performed on this note

**`Generated`**

from field: repeated Scailo.LogbookLogNoteLC logs = 5;

#### Defined in

[src/notes.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L463)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this note

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/notes.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L449)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

[src/notes.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L484)

___

### status

• **status**: [`NOTE_LIFECYCLE`](../enums/NOTE_LIFECYCLE.md) = `NOTE_LIFECYCLE.NOTE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this note

**`Generated`**

from field: Scailo.NOTE_LIFECYCLE status = 4;

#### Defined in

[src/notes.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L456)

___

### title

• **title**: `string` = `""`

The title of the note

**`Generated`**

from field: string title = 10;

#### Defined in

[src/notes.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L491)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

[src/notes.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L477)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/notes.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L528)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/notes.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L526)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Note"``

#### Defined in

[src/notes.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L527)

## Methods

### clone

▸ **clone**(): [`Note`](Note.md)

Create a deep copy.

#### Returns

[`Note`](Note.md)

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
| `other` | `undefined` \| ``null`` \| [`Note`](Note.md) \| `PlainMessage`\<[`Note`](Note.md)\> |

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

▸ **getType**(): `MessageType`\<[`Note`](Note.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Note`](Note.md)\>

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
| `a` | `undefined` \| [`Note`](Note.md) \| `PlainMessage`\<[`Note`](Note.md)\> |
| `b` | `undefined` \| [`Note`](Note.md) \| `PlainMessage`\<[`Note`](Note.md)\> |

#### Returns

`boolean`

#### Defined in

[src/notes.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L555)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Note`](Note.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Note`](Note.md)

#### Defined in

[src/notes.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L543)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Note`](Note.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Note`](Note.md)

#### Defined in

[src/notes.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L547)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Note`](Note.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Note`](Note.md)

#### Defined in

[src/notes.scailo_pb.ts:551](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L551)
