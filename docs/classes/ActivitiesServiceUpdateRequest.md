[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceUpdateRequest

# Class: ActivitiesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ActivitiesServiceUpdateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)\>

  ↳ **`ActivitiesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceUpdateRequest.md#constructor)

### Properties

- [activityGroupId](ActivitiesServiceUpdateRequest.md#activitygroupid)
- [activityStatusId](ActivitiesServiceUpdateRequest.md#activitystatusid)
- [description](ActivitiesServiceUpdateRequest.md#description)
- [dueBy](ActivitiesServiceUpdateRequest.md#dueby)
- [id](ActivitiesServiceUpdateRequest.md#id)
- [notifyUsers](ActivitiesServiceUpdateRequest.md#notifyusers)
- [startsAt](ActivitiesServiceUpdateRequest.md#startsat)
- [title](ActivitiesServiceUpdateRequest.md#title)
- [userComment](ActivitiesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ActivitiesServiceUpdateRequest.md#vaultfolderid)
- [fields](ActivitiesServiceUpdateRequest.md#fields)
- [runtime](ActivitiesServiceUpdateRequest.md#runtime)
- [typeName](ActivitiesServiceUpdateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceUpdateRequest.md#clone)
- [equals](ActivitiesServiceUpdateRequest.md#equals)
- [fromBinary](ActivitiesServiceUpdateRequest.md#frombinary)
- [fromJson](ActivitiesServiceUpdateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceUpdateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceUpdateRequest.md#gettype)
- [toBinary](ActivitiesServiceUpdateRequest.md#tobinary)
- [toJSON](ActivitiesServiceUpdateRequest.md#tojson)
- [toJson](ActivitiesServiceUpdateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceUpdateRequest.md#tojsonstring)
- [equals](ActivitiesServiceUpdateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceUpdateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceUpdateRequest**(`data?`): [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)\> |

#### Returns

[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:575

## Properties

### activityGroupId

• **activityGroupId**: `bigint` = `protoInt64.zero`

The associated activity group ID

**`Generated`**

from field: uint64 activity_group_id = 8;

#### Defined in

src/activities.scailo_pb.ts:538

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

The associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 9;

#### Defined in

src/activities.scailo_pb.ts:545

___

### description

• **description**: `string` = `""`

The description of the activity

**`Generated`**

from field: string description = 13;

#### Defined in

src/activities.scailo_pb.ts:573

___

### dueBy

• **dueBy**: `bigint` = `protoInt64.zero`

The UNIX timestamp of when the activity needs to be completed

**`Generated`**

from field: uint64 due_by = 12;

#### Defined in

src/activities.scailo_pb.ts:566

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/activities.scailo_pb.ts:517

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/activities.scailo_pb.ts:524

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 11;

#### Defined in

src/activities.scailo_pb.ts:559

___

### title

• **title**: `string` = `""`

The title of the activity

**`Generated`**

from field: string title = 10;

#### Defined in

src/activities.scailo_pb.ts:552

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/activities.scailo_pb.ts:510

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

src/activities.scailo_pb.ts:531

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:582

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:580

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceUpdateRequest"``

#### Defined in

src/activities.scailo_pb.ts:581

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:607

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:595

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:599

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceUpdateRequest`](ActivitiesServiceUpdateRequest.md)

#### Defined in

src/activities.scailo_pb.ts:603
