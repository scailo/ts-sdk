[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesServiceFilterReq

# Class: NotesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.NotesServiceFilterReq

## Hierarchy

- `Message`\<[`NotesServiceFilterReq`](NotesServiceFilterReq.md)\>

  ↳ **`NotesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](NotesServiceFilterReq.md#constructor)

### Properties

- [activityId](NotesServiceFilterReq.md#activityid)
- [activityStatusId](NotesServiceFilterReq.md#activitystatusid)
- [completedOnEnd](NotesServiceFilterReq.md#completedonend)
- [completedOnStart](NotesServiceFilterReq.md#completedonstart)
- [count](NotesServiceFilterReq.md#count)
- [creationTimestampEnd](NotesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](NotesServiceFilterReq.md#creationtimestampstart)
- [employeeId](NotesServiceFilterReq.md#employeeid)
- [entityUuid](NotesServiceFilterReq.md#entityuuid)
- [isActive](NotesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](NotesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](NotesServiceFilterReq.md#modificationtimestampstart)
- [offset](NotesServiceFilterReq.md#offset)
- [projectId](NotesServiceFilterReq.md#projectid)
- [sortKey](NotesServiceFilterReq.md#sortkey)
- [sortOrder](NotesServiceFilterReq.md#sortorder)
- [status](NotesServiceFilterReq.md#status)
- [title](NotesServiceFilterReq.md#title)
- [fields](NotesServiceFilterReq.md#fields)
- [runtime](NotesServiceFilterReq.md#runtime)
- [typeName](NotesServiceFilterReq.md#typename)

### Methods

- [clone](NotesServiceFilterReq.md#clone)
- [equals](NotesServiceFilterReq.md#equals)
- [fromBinary](NotesServiceFilterReq.md#frombinary)
- [fromJson](NotesServiceFilterReq.md#fromjson)
- [fromJsonString](NotesServiceFilterReq.md#fromjsonstring)
- [getType](NotesServiceFilterReq.md#gettype)
- [toBinary](NotesServiceFilterReq.md#tobinary)
- [toJSON](NotesServiceFilterReq.md#tojson)
- [toJson](NotesServiceFilterReq.md#tojson-1)
- [toJsonString](NotesServiceFilterReq.md#tojsonstring)
- [equals](NotesServiceFilterReq.md#equals-1)
- [fromBinary](NotesServiceFilterReq.md#frombinary-1)
- [fromJson](NotesServiceFilterReq.md#fromjson-1)
- [fromJsonString](NotesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesServiceFilterReq**(`data?`): [`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesServiceFilterReq`](NotesServiceFilterReq.md)\> |

#### Returns

[`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Overrides

Message\&lt;NotesServiceFilterReq\&gt;.constructor

#### Defined in

[src/notes.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L883)

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Filter by the associated activity ID

**`Generated`**

from field: uint64 activity_id = 27;

#### Defined in

[src/notes.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L874)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

Filter by the associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 28;

#### Defined in

[src/notes.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L881)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/notes.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L846)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/notes.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L839)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/notes.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L769)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/notes.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L804)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/notes.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L797)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The ID of the employee

**`Generated`**

from field: uint64 employee_id = 26;

#### Defined in

[src/notes.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L867)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/notes.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L825)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/notes.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L762)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/notes.scailo_pb.ts:818](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L818)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/notes.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L811)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/notes.scailo_pb.ts:776](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L776)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 25;

#### Defined in

[src/notes.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L860)

___

### sortKey

• **sortKey**: [`NOTE_SORT_KEY`](../enums/NOTE_SORT_KEY.md) = `NOTE_SORT_KEY.NOTE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/notes.scailo_pb.ts:790](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L790)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/notes.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L783)

___

### status

• **status**: [`NOTE_LIFECYCLE`](../enums/NOTE_LIFECYCLE.md) = `NOTE_LIFECYCLE.NOTE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this note

**`Generated`**

from field: Scailo.NOTE_LIFECYCLE status = 10;

#### Defined in

[src/notes.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L832)

___

### title

• **title**: `string` = `""`

The title of the note

**`Generated`**

from field: string title = 20;

#### Defined in

[src/notes.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L853)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/notes.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L890)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/notes.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L888)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesServiceFilterReq"``

#### Defined in

[src/notes.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L889)

## Methods

### clone

▸ **clone**(): [`NotesServiceFilterReq`](NotesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`NotesServiceFilterReq`](NotesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesServiceFilterReq`](NotesServiceFilterReq.md) \| `PlainMessage`\<[`NotesServiceFilterReq`](NotesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesServiceFilterReq`](NotesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesServiceFilterReq`](NotesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`NotesServiceFilterReq`](NotesServiceFilterReq.md) \| `PlainMessage`\<[`NotesServiceFilterReq`](NotesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`NotesServiceFilterReq`](NotesServiceFilterReq.md) \| `PlainMessage`\<[`NotesServiceFilterReq`](NotesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/notes.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L923)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Defined in

[src/notes.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L911)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Defined in

[src/notes.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L915)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceFilterReq`](NotesServiceFilterReq.md)

#### Defined in

[src/notes.scailo_pb.ts:919](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/notes.scailo_pb.ts#L919)
