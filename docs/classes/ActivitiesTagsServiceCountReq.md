[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsServiceCountReq

# Class: ActivitiesTagsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ActivitiesTagsServiceCountReq

## Hierarchy

- `Message`\<[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)\>

  ↳ **`ActivitiesTagsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ActivitiesTagsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ActivitiesTagsServiceCountReq.md#approvedonend)
- [approvedOnStart](ActivitiesTagsServiceCountReq.md#approvedonstart)
- [approverRoleId](ActivitiesTagsServiceCountReq.md#approverroleid)
- [bgColor](ActivitiesTagsServiceCountReq.md#bgcolor)
- [code](ActivitiesTagsServiceCountReq.md#code)
- [creationTimestampEnd](ActivitiesTagsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesTagsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ActivitiesTagsServiceCountReq.md#entityuuid)
- [fgColor](ActivitiesTagsServiceCountReq.md#fgcolor)
- [isActive](ActivitiesTagsServiceCountReq.md#isactive)
- [isLeaf](ActivitiesTagsServiceCountReq.md#isleaf)
- [modificationTimestampEnd](ActivitiesTagsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesTagsServiceCountReq.md#modificationtimestampstart)
- [name](ActivitiesTagsServiceCountReq.md#name)
- [parentActivityTagId](ActivitiesTagsServiceCountReq.md#parentactivitytagid)
- [status](ActivitiesTagsServiceCountReq.md#status)
- [fields](ActivitiesTagsServiceCountReq.md#fields)
- [runtime](ActivitiesTagsServiceCountReq.md#runtime)
- [typeName](ActivitiesTagsServiceCountReq.md#typename)

### Methods

- [clone](ActivitiesTagsServiceCountReq.md#clone)
- [equals](ActivitiesTagsServiceCountReq.md#equals)
- [fromBinary](ActivitiesTagsServiceCountReq.md#frombinary)
- [fromJson](ActivitiesTagsServiceCountReq.md#fromjson)
- [fromJsonString](ActivitiesTagsServiceCountReq.md#fromjsonstring)
- [getType](ActivitiesTagsServiceCountReq.md#gettype)
- [toBinary](ActivitiesTagsServiceCountReq.md#tobinary)
- [toJSON](ActivitiesTagsServiceCountReq.md#tojson)
- [toJson](ActivitiesTagsServiceCountReq.md#tojson-1)
- [toJsonString](ActivitiesTagsServiceCountReq.md#tojsonstring)
- [equals](ActivitiesTagsServiceCountReq.md#equals-1)
- [fromBinary](ActivitiesTagsServiceCountReq.md#frombinary-1)
- [fromJson](ActivitiesTagsServiceCountReq.md#fromjson-1)
- [fromJsonString](ActivitiesTagsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsServiceCountReq**(`data?`): [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)\> |

#### Returns

[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Overrides

Message\&lt;ActivitiesTagsServiceCountReq\&gt;.constructor

#### Defined in

src/activities_tags.scailo_pb.ts:929

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/activities_tags.scailo_pb.ts:878

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/activities_tags.scailo_pb.ts:871

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/activities_tags.scailo_pb.ts:864

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/activities_tags.scailo_pb.ts:885

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 23;

#### Defined in

src/activities_tags.scailo_pb.ts:913

___

### code

• **code**: `string` = `""`

The unique code by which the activity tag is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/activities_tags.scailo_pb.ts:899

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/activities_tags.scailo_pb.ts:829

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/activities_tags.scailo_pb.ts:822

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/activities_tags.scailo_pb.ts:850

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 22;

#### Defined in

src/activities_tags.scailo_pb.ts:906

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/activities_tags.scailo_pb.ts:815

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Filter with the given leaf property

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 27;

#### Defined in

src/activities_tags.scailo_pb.ts:927

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/activities_tags.scailo_pb.ts:843

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/activities_tags.scailo_pb.ts:836

___

### name

• **name**: `string` = `""`

The name of the activity tag

**`Generated`**

from field: string name = 20;

#### Defined in

src/activities_tags.scailo_pb.ts:892

___

### parentActivityTagId

• **parentActivityTagId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)

**`Generated`**

from field: uint64 parent_activity_tag_id = 26;

#### Defined in

src/activities_tags.scailo_pb.ts:920

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity tag

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/activities_tags.scailo_pb.ts:857

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_tags.scailo_pb.ts:936

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_tags.scailo_pb.ts:934

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsServiceCountReq"``

#### Defined in

src/activities_tags.scailo_pb.ts:935

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_tags.scailo_pb.ts:968

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Defined in

src/activities_tags.scailo_pb.ts:956

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Defined in

src/activities_tags.scailo_pb.ts:960

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceCountReq`](ActivitiesTagsServiceCountReq.md)

#### Defined in

src/activities_tags.scailo_pb.ts:964
