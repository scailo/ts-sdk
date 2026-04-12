[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Meeting

# Class: Meeting

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Meeting

## Hierarchy

- `Message`\<[`Meeting`](Meeting.md)\>

  ↳ **`Meeting`**

## Table of contents

### Constructors

- [constructor](Meeting.md#constructor)

### Properties

- [completedOn](Meeting.md#completedon)
- [description](Meeting.md#description)
- [endsAt](Meeting.md#endsat)
- [entityUuid](Meeting.md#entityuuid)
- [formData](Meeting.md#formdata)
- [logs](Meeting.md#logs)
- [metadata](Meeting.md#metadata)
- [projectId](Meeting.md#projectid)
- [startsAt](Meeting.md#startsat)
- [status](Meeting.md#status)
- [title](Meeting.md#title)
- [vaultFolderId](Meeting.md#vaultfolderid)
- [fields](Meeting.md#fields)
- [runtime](Meeting.md#runtime)
- [typeName](Meeting.md#typename)

### Methods

- [clone](Meeting.md#clone)
- [equals](Meeting.md#equals)
- [fromBinary](Meeting.md#frombinary)
- [fromJson](Meeting.md#fromjson)
- [fromJsonString](Meeting.md#fromjsonstring)
- [getType](Meeting.md#gettype)
- [toBinary](Meeting.md#tobinary)
- [toJSON](Meeting.md#tojson)
- [toJson](Meeting.md#tojson-1)
- [toJsonString](Meeting.md#tojsonstring)
- [equals](Meeting.md#equals-1)
- [fromBinary](Meeting.md#frombinary-1)
- [fromJson](Meeting.md#fromjson-1)
- [fromJsonString](Meeting.md#fromjsonstring-1)

## Constructors

### constructor

• **new Meeting**(`data?`): [`Meeting`](Meeting.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Meeting`](Meeting.md)\> |

#### Returns

[`Meeting`](Meeting.md)

#### Overrides

Message\&lt;Meeting\&gt;.constructor

#### Defined in

[src/meetings.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L665)

## Properties

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this meeting was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/meetings.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L614)

___

### description

• **description**: `string` = `""`

The description of the meeting

**`Generated`**

from field: string description = 13;

#### Defined in

[src/meetings.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L656)

___

### endsAt

• **endsAt**: `bigint` = `protoInt64.zero`

The end UNIX timestamp

**`Generated`**

from field: uint64 ends_at = 12;

#### Defined in

[src/meetings.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L649)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/meetings.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L586)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/meetings.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L663)

___

### logs

• **logs**: [`LogbookLogMeetingLC`](LogbookLogMeetingLC.md)[] = `[]`

Stores the logs of every operation performed on this meeting

**`Generated`**

from field: repeated Scailo.LogbookLogMeetingLC logs = 5;

#### Defined in

[src/meetings.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L607)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this meeting

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/meetings.scailo_pb.ts:593](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L593)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

[src/meetings.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L628)

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 11;

#### Defined in

[src/meetings.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L642)

___

### status

• **status**: [`MEETING_LIFECYCLE`](../enums/MEETING_LIFECYCLE.md) = `MEETING_LIFECYCLE.MEETING_LIFECYCLE_ANY_UNSPECIFIED`

The status of this meeting

**`Generated`**

from field: Scailo.MEETING_LIFECYCLE status = 4;

#### Defined in

[src/meetings.scailo_pb.ts:600](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L600)

___

### title

• **title**: `string` = `""`

The title of the meeting

**`Generated`**

from field: string title = 10;

#### Defined in

[src/meetings.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L635)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

[src/meetings.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L621)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/meetings.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L672)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/meetings.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L670)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Meeting"``

#### Defined in

[src/meetings.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L671)

## Methods

### clone

▸ **clone**(): [`Meeting`](Meeting.md)

Create a deep copy.

#### Returns

[`Meeting`](Meeting.md)

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
| `other` | `undefined` \| ``null`` \| [`Meeting`](Meeting.md) \| `PlainMessage`\<[`Meeting`](Meeting.md)\> |

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

▸ **getType**(): `MessageType`\<[`Meeting`](Meeting.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Meeting`](Meeting.md)\>

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
| `a` | `undefined` \| [`Meeting`](Meeting.md) \| `PlainMessage`\<[`Meeting`](Meeting.md)\> |
| `b` | `undefined` \| [`Meeting`](Meeting.md) \| `PlainMessage`\<[`Meeting`](Meeting.md)\> |

#### Returns

`boolean`

#### Defined in

[src/meetings.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L699)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Meeting`](Meeting.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Meeting`](Meeting.md)

#### Defined in

[src/meetings.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L687)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Meeting`](Meeting.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Meeting`](Meeting.md)

#### Defined in

[src/meetings.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L691)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Meeting`](Meeting.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Meeting`](Meeting.md)

#### Defined in

[src/meetings.scailo_pb.ts:695](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/meetings.scailo_pb.ts#L695)
