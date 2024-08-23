[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / Activity

# Class: Activity

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Activity

## Hierarchy

- `Message`\<[`Activity`](Activity.md)\>

  ↳ **`Activity`**

## Table of contents

### Constructors

- [constructor](Activity.md#constructor)

### Properties

- [activityGroupId](Activity.md#activitygroupid)
- [activityStatusId](Activity.md#activitystatusid)
- [completedOn](Activity.md#completedon)
- [description](Activity.md#description)
- [dueBy](Activity.md#dueby)
- [entityUuid](Activity.md#entityuuid)
- [internalRef](Activity.md#internalref)
- [logs](Activity.md#logs)
- [metadata](Activity.md#metadata)
- [startsAt](Activity.md#startsat)
- [status](Activity.md#status)
- [title](Activity.md#title)
- [vaultFolderId](Activity.md#vaultfolderid)
- [fields](Activity.md#fields)
- [runtime](Activity.md#runtime)
- [typeName](Activity.md#typename)

### Methods

- [clone](Activity.md#clone)
- [equals](Activity.md#equals)
- [fromBinary](Activity.md#frombinary)
- [fromJson](Activity.md#fromjson)
- [fromJsonString](Activity.md#fromjsonstring)
- [getType](Activity.md#gettype)
- [toBinary](Activity.md#tobinary)
- [toJSON](Activity.md#tojson)
- [toJson](Activity.md#tojson-1)
- [toJsonString](Activity.md#tojsonstring)
- [equals](Activity.md#equals-1)
- [fromBinary](Activity.md#frombinary-1)
- [fromJson](Activity.md#fromjson-1)
- [fromJsonString](Activity.md#fromjsonstring-1)

## Constructors

### constructor

• **new Activity**(`data?`): [`Activity`](Activity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Activity`](Activity.md)\> |

#### Returns

[`Activity`](Activity.md)

#### Overrides

Message\&lt;Activity\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:710

## Properties

### activityGroupId

• **activityGroupId**: `bigint` = `protoInt64.zero`

The associated activity group ID

**`Generated`**

from field: uint64 activity_group_id = 8;

#### Defined in

src/activities.scailo_pb.ts:666

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

The associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 9;

#### Defined in

src/activities.scailo_pb.ts:673

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this activity was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/activities.scailo_pb.ts:652

___

### description

• **description**: `string` = `""`

The description of the activity

**`Generated`**

from field: string description = 13;

#### Defined in

src/activities.scailo_pb.ts:701

___

### dueBy

• **dueBy**: `bigint` = `protoInt64.zero`

The UNIX timestamp of when the activity needs to be completed

**`Generated`**

from field: uint64 due_by = 12;

#### Defined in

src/activities.scailo_pb.ts:694

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/activities.scailo_pb.ts:624

___

### internalRef

• **internalRef**: `string` = `""`

Stores the internal reference that is automatically generated

**`Generated`**

from field: string internal_ref = 50;

#### Defined in

src/activities.scailo_pb.ts:708

___

### logs

• **logs**: [`LogbookLogActivityLC`](LogbookLogActivityLC.md)[] = `[]`

Stores the logs of every operation performed on this activity

**`Generated`**

from field: repeated Scailo.LogbookLogActivityLC logs = 5;

#### Defined in

src/activities.scailo_pb.ts:645

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this activity

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/activities.scailo_pb.ts:631

___

### startsAt

• **startsAt**: `bigint` = `protoInt64.zero`

The start UNIX timestamp

**`Generated`**

from field: uint64 starts_at = 11;

#### Defined in

src/activities.scailo_pb.ts:687

___

### status

• **status**: [`ACTIVITY_LIFECYCLE`](../enums/ACTIVITY_LIFECYCLE.md) = `ACTIVITY_LIFECYCLE.ACTIVITY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this activity

**`Generated`**

from field: Scailo.ACTIVITY_LIFECYCLE status = 4;

#### Defined in

src/activities.scailo_pb.ts:638

___

### title

• **title**: `string` = `""`

The title of the activity

**`Generated`**

from field: string title = 10;

#### Defined in

src/activities.scailo_pb.ts:680

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

src/activities.scailo_pb.ts:659

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:717

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:715

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Activity"``

#### Defined in

src/activities.scailo_pb.ts:716

## Methods

### clone

▸ **clone**(): [`Activity`](Activity.md)

Create a deep copy.

#### Returns

[`Activity`](Activity.md)

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
| `other` | `undefined` \| ``null`` \| [`Activity`](Activity.md) \| `PlainMessage`\<[`Activity`](Activity.md)\> |

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

▸ **getType**(): `MessageType`\<[`Activity`](Activity.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Activity`](Activity.md)\>

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
| `a` | `undefined` \| [`Activity`](Activity.md) \| `PlainMessage`\<[`Activity`](Activity.md)\> |
| `b` | `undefined` \| [`Activity`](Activity.md) \| `PlainMessage`\<[`Activity`](Activity.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:745

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Activity`](Activity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Activity`](Activity.md)

#### Defined in

src/activities.scailo_pb.ts:733

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Activity`](Activity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Activity`](Activity.md)

#### Defined in

src/activities.scailo_pb.ts:737

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Activity`](Activity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Activity`](Activity.md)

#### Defined in

src/activities.scailo_pb.ts:741
