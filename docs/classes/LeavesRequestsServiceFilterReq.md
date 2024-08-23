[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesRequestsServiceFilterReq

# Class: LeavesRequestsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.LeavesRequestsServiceFilterReq

## Hierarchy

- `Message`\<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\>

  ↳ **`LeavesRequestsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesRequestsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LeavesRequestsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesRequestsServiceFilterReq.md#approvedonend)
- [approvedOnStart](LeavesRequestsServiceFilterReq.md#approvedonstart)
- [approverRoleId](LeavesRequestsServiceFilterReq.md#approverroleid)
- [completedOnEnd](LeavesRequestsServiceFilterReq.md#completedonend)
- [completedOnStart](LeavesRequestsServiceFilterReq.md#completedonstart)
- [count](LeavesRequestsServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesRequestsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesRequestsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesRequestsServiceFilterReq.md#entityuuid)
- [finalRefNumber](LeavesRequestsServiceFilterReq.md#finalrefnumber)
- [fromTimestampEnd](LeavesRequestsServiceFilterReq.md#fromtimestampend)
- [fromTimestampStart](LeavesRequestsServiceFilterReq.md#fromtimestampstart)
- [isActive](LeavesRequestsServiceFilterReq.md#isactive)
- [leaveTypeId](LeavesRequestsServiceFilterReq.md#leavetypeid)
- [modificationTimestampEnd](LeavesRequestsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesRequestsServiceFilterReq.md#modificationtimestampstart)
- [offset](LeavesRequestsServiceFilterReq.md#offset)
- [referenceId](LeavesRequestsServiceFilterReq.md#referenceid)
- [sortKey](LeavesRequestsServiceFilterReq.md#sortkey)
- [sortOrder](LeavesRequestsServiceFilterReq.md#sortorder)
- [status](LeavesRequestsServiceFilterReq.md#status)
- [toTimestampEnd](LeavesRequestsServiceFilterReq.md#totimestampend)
- [toTimestampStart](LeavesRequestsServiceFilterReq.md#totimestampstart)
- [userId](LeavesRequestsServiceFilterReq.md#userid)
- [fields](LeavesRequestsServiceFilterReq.md#fields)
- [runtime](LeavesRequestsServiceFilterReq.md#runtime)
- [typeName](LeavesRequestsServiceFilterReq.md#typename)

### Methods

- [clone](LeavesRequestsServiceFilterReq.md#clone)
- [equals](LeavesRequestsServiceFilterReq.md#equals)
- [fromBinary](LeavesRequestsServiceFilterReq.md#frombinary)
- [fromJson](LeavesRequestsServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesRequestsServiceFilterReq.md#fromjsonstring)
- [getType](LeavesRequestsServiceFilterReq.md#gettype)
- [toBinary](LeavesRequestsServiceFilterReq.md#tobinary)
- [toJSON](LeavesRequestsServiceFilterReq.md#tojson)
- [toJson](LeavesRequestsServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesRequestsServiceFilterReq.md#tojsonstring)
- [equals](LeavesRequestsServiceFilterReq.md#equals-1)
- [fromBinary](LeavesRequestsServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesRequestsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesRequestsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesRequestsServiceFilterReq**(`data?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Overrides

Message\&lt;LeavesRequestsServiceFilterReq\&gt;.constructor

#### Defined in

src/leaves_requests.scailo_pb.ts:880

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/leaves_requests.scailo_pb.ts:801

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/leaves_requests.scailo_pb.ts:794

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/leaves_requests.scailo_pb.ts:787

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/leaves_requests.scailo_pb.ts:808

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/leaves_requests.scailo_pb.ts:822

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/leaves_requests.scailo_pb.ts:815

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/leaves_requests.scailo_pb.ts:717

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/leaves_requests.scailo_pb.ts:752

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/leaves_requests.scailo_pb.ts:745

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/leaves_requests.scailo_pb.ts:773

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/leaves_requests.scailo_pb.ts:836

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

src/leaves_requests.scailo_pb.ts:864

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

src/leaves_requests.scailo_pb.ts:857

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/leaves_requests.scailo_pb.ts:710

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The ID of the corresponding leave type

**`Generated`**

from field: uint64 leave_type_id = 23;

#### Defined in

src/leaves_requests.scailo_pb.ts:850

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/leaves_requests.scailo_pb.ts:766

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/leaves_requests.scailo_pb.ts:759

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/leaves_requests.scailo_pb.ts:724

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the leave request

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/leaves_requests.scailo_pb.ts:829

___

### sortKey

• **sortKey**: [`LEAVE_REQUEST_SORT_KEY`](../enums/LEAVE_REQUEST_SORT_KEY.md) = `LEAVE_REQUEST_SORT_KEY.LEAVE_REQUEST_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LEAVE_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

src/leaves_requests.scailo_pb.ts:738

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/leaves_requests.scailo_pb.ts:731

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this leave request

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/leaves_requests.scailo_pb.ts:780

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

src/leaves_requests.scailo_pb.ts:878

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

src/leaves_requests.scailo_pb.ts:871

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for leave

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/leaves_requests.scailo_pb.ts:843

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_requests.scailo_pb.ts:887

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_requests.scailo_pb.ts:885

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesRequestsServiceFilterReq"``

#### Defined in

src/leaves_requests.scailo_pb.ts:886

## Methods

### clone

▸ **clone**(): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_requests.scailo_pb.ts:927

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Defined in

src/leaves_requests.scailo_pb.ts:915

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Defined in

src/leaves_requests.scailo_pb.ts:919

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesRequestsServiceFilterReq`](LeavesRequestsServiceFilterReq.md)

#### Defined in

src/leaves_requests.scailo_pb.ts:923
