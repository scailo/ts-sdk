[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesStatusesServiceCountReq

# Class: ActivitiesStatusesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ActivitiesStatusesServiceCountReq

## Hierarchy

- `Message`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\>

  ↳ **`ActivitiesStatusesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesStatusesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ActivitiesStatusesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ActivitiesStatusesServiceCountReq.md#approvedonend)
- [approvedOnStart](ActivitiesStatusesServiceCountReq.md#approvedonstart)
- [approverRoleId](ActivitiesStatusesServiceCountReq.md#approverroleid)
- [bgColor](ActivitiesStatusesServiceCountReq.md#bgcolor)
- [code](ActivitiesStatusesServiceCountReq.md#code)
- [creationTimestampEnd](ActivitiesStatusesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesStatusesServiceCountReq.md#creationtimestampstart)
- [entityUuid](ActivitiesStatusesServiceCountReq.md#entityuuid)
- [fgColor](ActivitiesStatusesServiceCountReq.md#fgcolor)
- [isActive](ActivitiesStatusesServiceCountReq.md#isactive)
- [modificationTimestampEnd](ActivitiesStatusesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesStatusesServiceCountReq.md#modificationtimestampstart)
- [name](ActivitiesStatusesServiceCountReq.md#name)
- [status](ActivitiesStatusesServiceCountReq.md#status)
- [fields](ActivitiesStatusesServiceCountReq.md#fields)
- [runtime](ActivitiesStatusesServiceCountReq.md#runtime)
- [typeName](ActivitiesStatusesServiceCountReq.md#typename)

### Methods

- [clone](ActivitiesStatusesServiceCountReq.md#clone)
- [equals](ActivitiesStatusesServiceCountReq.md#equals)
- [fromBinary](ActivitiesStatusesServiceCountReq.md#frombinary)
- [fromJson](ActivitiesStatusesServiceCountReq.md#fromjson)
- [fromJsonString](ActivitiesStatusesServiceCountReq.md#fromjsonstring)
- [getType](ActivitiesStatusesServiceCountReq.md#gettype)
- [toBinary](ActivitiesStatusesServiceCountReq.md#tobinary)
- [toJSON](ActivitiesStatusesServiceCountReq.md#tojson)
- [toJson](ActivitiesStatusesServiceCountReq.md#tojson-1)
- [toJsonString](ActivitiesStatusesServiceCountReq.md#tojsonstring)
- [equals](ActivitiesStatusesServiceCountReq.md#equals-1)
- [fromBinary](ActivitiesStatusesServiceCountReq.md#frombinary-1)
- [fromJson](ActivitiesStatusesServiceCountReq.md#fromjson-1)
- [fromJsonString](ActivitiesStatusesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesStatusesServiceCountReq**(`data?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Overrides

Message\&lt;ActivitiesStatusesServiceCountReq\&gt;.constructor

#### Defined in

src/activities_statuses.scailo_pb.ts:867

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/activities_statuses.scailo_pb.ts:830

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/activities_statuses.scailo_pb.ts:823

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/activities_statuses.scailo_pb.ts:816

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/activities_statuses.scailo_pb.ts:837

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 23;

#### Defined in

src/activities_statuses.scailo_pb.ts:865

___

### code

• **code**: `string` = `""`

The unique code by which the activity status is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/activities_statuses.scailo_pb.ts:851

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/activities_statuses.scailo_pb.ts:781

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/activities_statuses.scailo_pb.ts:774

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/activities_statuses.scailo_pb.ts:802

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 22;

#### Defined in

src/activities_statuses.scailo_pb.ts:858

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/activities_statuses.scailo_pb.ts:767

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/activities_statuses.scailo_pb.ts:795

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/activities_statuses.scailo_pb.ts:788

___

### name

• **name**: `string` = `""`

The name of the activity status

**`Generated`**

from field: string name = 20;

#### Defined in

src/activities_statuses.scailo_pb.ts:844

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/activities_statuses.scailo_pb.ts:809

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_statuses.scailo_pb.ts:874

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_statuses.scailo_pb.ts:872

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesStatusesServiceCountReq"``

#### Defined in

src/activities_statuses.scailo_pb.ts:873

## Methods

### clone

▸ **clone**(): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

Create a deep copy.

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |
| `b` | `undefined` \| [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_statuses.scailo_pb.ts:904

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:892

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:896

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:900
