[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AnnouncementsServiceFilterReq

# Class: AnnouncementsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.AnnouncementsServiceFilterReq

## Hierarchy

- `Message`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

  ↳ **`AnnouncementsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AnnouncementsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AnnouncementsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AnnouncementsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AnnouncementsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AnnouncementsServiceFilterReq.md#approverroleid)
- [completedOnEnd](AnnouncementsServiceFilterReq.md#completedonend)
- [completedOnStart](AnnouncementsServiceFilterReq.md#completedonstart)
- [count](AnnouncementsServiceFilterReq.md#count)
- [creationTimestampEnd](AnnouncementsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AnnouncementsServiceFilterReq.md#creationtimestampstart)
- [description](AnnouncementsServiceFilterReq.md#description)
- [endOnEnd](AnnouncementsServiceFilterReq.md#endonend)
- [endOnStart](AnnouncementsServiceFilterReq.md#endonstart)
- [entityUuid](AnnouncementsServiceFilterReq.md#entityuuid)
- [isActive](AnnouncementsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](AnnouncementsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AnnouncementsServiceFilterReq.md#modificationtimestampstart)
- [offset](AnnouncementsServiceFilterReq.md#offset)
- [sortKey](AnnouncementsServiceFilterReq.md#sortkey)
- [sortOrder](AnnouncementsServiceFilterReq.md#sortorder)
- [startOnEnd](AnnouncementsServiceFilterReq.md#startonend)
- [startOnStart](AnnouncementsServiceFilterReq.md#startonstart)
- [status](AnnouncementsServiceFilterReq.md#status)
- [title](AnnouncementsServiceFilterReq.md#title)
- [fields](AnnouncementsServiceFilterReq.md#fields)
- [runtime](AnnouncementsServiceFilterReq.md#runtime)
- [typeName](AnnouncementsServiceFilterReq.md#typename)

### Methods

- [clone](AnnouncementsServiceFilterReq.md#clone)
- [equals](AnnouncementsServiceFilterReq.md#equals)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring)
- [getType](AnnouncementsServiceFilterReq.md#gettype)
- [toBinary](AnnouncementsServiceFilterReq.md#tobinary)
- [toJSON](AnnouncementsServiceFilterReq.md#tojson)
- [toJson](AnnouncementsServiceFilterReq.md#tojson-1)
- [toJsonString](AnnouncementsServiceFilterReq.md#tojsonstring)
- [equals](AnnouncementsServiceFilterReq.md#equals-1)
- [fromBinary](AnnouncementsServiceFilterReq.md#frombinary-1)
- [fromJson](AnnouncementsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AnnouncementsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AnnouncementsServiceFilterReq**(`data?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Overrides

Message\&lt;AnnouncementsServiceFilterReq\&gt;.constructor

#### Defined in

[src/announcements.scailo_pb.ts:777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L777)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/announcements.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L712)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/announcements.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L705)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/announcements.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L698)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/announcements.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L719)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/announcements.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L733)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/announcements.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L726)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/announcements.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L628)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/announcements.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L663)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/announcements.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L656)

___

### description

• **description**: `string` = `""`

The description of the announcement

**`Generated`**

from field: string description = 21;

#### Defined in

[src/announcements.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L747)

___

### endOnEnd

• **endOnEnd**: `bigint` = `protoInt64.zero`

The end range of end timestamp

**`Generated`**

from field: uint64 end_on_end = 25;

#### Defined in

[src/announcements.scailo_pb.ts:775](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L775)

___

### endOnStart

• **endOnStart**: `bigint` = `protoInt64.zero`

The start range of end timestamp

**`Generated`**

from field: uint64 end_on_start = 24;

#### Defined in

[src/announcements.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L768)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/announcements.scailo_pb.ts:684](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L684)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/announcements.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L621)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/announcements.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L677)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/announcements.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L670)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/announcements.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L635)

___

### sortKey

• **sortKey**: [`ANNOUNCEMENT_SORT_KEY`](../enums/ANNOUNCEMENT_SORT_KEY.md) = `ANNOUNCEMENT_SORT_KEY.ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/announcements.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L649)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/announcements.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L642)

___

### startOnEnd

• **startOnEnd**: `bigint` = `protoInt64.zero`

The end range of start timestamp

**`Generated`**

from field: uint64 start_on_end = 23;

#### Defined in

[src/announcements.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L761)

___

### startOnStart

• **startOnStart**: `bigint` = `protoInt64.zero`

The start range of start timestamp

**`Generated`**

from field: uint64 start_on_start = 22;

#### Defined in

[src/announcements.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L754)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this announcement

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/announcements.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L691)

___

### title

• **title**: `string` = `""`

The title of the announcement

**`Generated`**

from field: string title = 20;

#### Defined in

[src/announcements.scailo_pb.ts:740](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L740)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/announcements.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L784)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/announcements.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L782)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AnnouncementsServiceFilterReq"``

#### Defined in

[src/announcements.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L783)

## Methods

### clone

▸ **clone**(): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md) \| `PlainMessage`\<[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/announcements.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L822)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:810](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L810)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L814)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AnnouncementsServiceFilterReq`](AnnouncementsServiceFilterReq.md)

#### Defined in

[src/announcements.scailo_pb.ts:818](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/announcements.scailo_pb.ts#L818)
