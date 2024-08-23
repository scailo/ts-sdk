[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceFilterReq

# Class: AbsencesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.AbsencesServiceFilterReq

## Hierarchy

- `Message`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\>

  ↳ **`AbsencesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AbsencesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AbsencesServiceFilterReq.md#approvedonend)
- [approvedOnStart](AbsencesServiceFilterReq.md#approvedonstart)
- [approverRoleId](AbsencesServiceFilterReq.md#approverroleid)
- [completedOnEnd](AbsencesServiceFilterReq.md#completedonend)
- [completedOnStart](AbsencesServiceFilterReq.md#completedonstart)
- [count](AbsencesServiceFilterReq.md#count)
- [creationTimestampEnd](AbsencesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AbsencesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](AbsencesServiceFilterReq.md#entityuuid)
- [finalRefNumber](AbsencesServiceFilterReq.md#finalrefnumber)
- [fromTimestampEnd](AbsencesServiceFilterReq.md#fromtimestampend)
- [fromTimestampStart](AbsencesServiceFilterReq.md#fromtimestampstart)
- [isActive](AbsencesServiceFilterReq.md#isactive)
- [leaveRequestId](AbsencesServiceFilterReq.md#leaverequestid)
- [modificationTimestampEnd](AbsencesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AbsencesServiceFilterReq.md#modificationtimestampstart)
- [offset](AbsencesServiceFilterReq.md#offset)
- [quantityMax](AbsencesServiceFilterReq.md#quantitymax)
- [quantityMin](AbsencesServiceFilterReq.md#quantitymin)
- [referenceId](AbsencesServiceFilterReq.md#referenceid)
- [sortKey](AbsencesServiceFilterReq.md#sortkey)
- [sortOrder](AbsencesServiceFilterReq.md#sortorder)
- [status](AbsencesServiceFilterReq.md#status)
- [toTimestampEnd](AbsencesServiceFilterReq.md#totimestampend)
- [toTimestampStart](AbsencesServiceFilterReq.md#totimestampstart)
- [uomId](AbsencesServiceFilterReq.md#uomid)
- [userId](AbsencesServiceFilterReq.md#userid)
- [fields](AbsencesServiceFilterReq.md#fields)
- [runtime](AbsencesServiceFilterReq.md#runtime)
- [typeName](AbsencesServiceFilterReq.md#typename)

### Methods

- [clone](AbsencesServiceFilterReq.md#clone)
- [equals](AbsencesServiceFilterReq.md#equals)
- [fromBinary](AbsencesServiceFilterReq.md#frombinary)
- [fromJson](AbsencesServiceFilterReq.md#fromjson)
- [fromJsonString](AbsencesServiceFilterReq.md#fromjsonstring)
- [getType](AbsencesServiceFilterReq.md#gettype)
- [toBinary](AbsencesServiceFilterReq.md#tobinary)
- [toJSON](AbsencesServiceFilterReq.md#tojson)
- [toJson](AbsencesServiceFilterReq.md#tojson-1)
- [toJsonString](AbsencesServiceFilterReq.md#tojsonstring)
- [equals](AbsencesServiceFilterReq.md#equals-1)
- [fromBinary](AbsencesServiceFilterReq.md#frombinary-1)
- [fromJson](AbsencesServiceFilterReq.md#fromjson-1)
- [fromJsonString](AbsencesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceFilterReq**(`data?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Overrides

Message\&lt;AbsencesServiceFilterReq\&gt;.constructor

#### Defined in

src/absences.scailo_pb.ts:943

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/absences.scailo_pb.ts:843

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/absences.scailo_pb.ts:836

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/absences.scailo_pb.ts:829

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/absences.scailo_pb.ts:850

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/absences.scailo_pb.ts:864

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/absences.scailo_pb.ts:857

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/absences.scailo_pb.ts:759

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/absences.scailo_pb.ts:794

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/absences.scailo_pb.ts:787

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/absences.scailo_pb.ts:815

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/absences.scailo_pb.ts:878

___

### fromTimestampEnd

• **fromTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_end = 25;

#### Defined in

src/absences.scailo_pb.ts:906

___

### fromTimestampStart

• **fromTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "from timestamp"

**`Generated`**

from field: uint64 from_timestamp_start = 24;

#### Defined in

src/absences.scailo_pb.ts:899

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/absences.scailo_pb.ts:752

___

### leaveRequestId

• **leaveRequestId**: `bigint` = `protoInt64.zero`

The ID of the optionally associated leave request

**`Generated`**

from field: uint64 leave_request_id = 23;

#### Defined in

src/absences.scailo_pb.ts:892

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/absences.scailo_pb.ts:808

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/absences.scailo_pb.ts:801

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/absences.scailo_pb.ts:766

___

### quantityMax

• **quantityMax**: `bigint` = `protoInt64.zero`

The max quantity of absence (in cents)

**`Generated`**

from field: uint64 quantity_max = 30;

#### Defined in

src/absences.scailo_pb.ts:941

___

### quantityMin

• **quantityMin**: `bigint` = `protoInt64.zero`

The min quantity of absence (in cents)

**`Generated`**

from field: uint64 quantity_min = 29;

#### Defined in

src/absences.scailo_pb.ts:934

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the absence

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/absences.scailo_pb.ts:871

___

### sortKey

• **sortKey**: [`ABSENCE_SORT_KEY`](../enums/ABSENCE_SORT_KEY.md) = `ABSENCE_SORT_KEY.ABSENCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ABSENCE_SORT_KEY sort_key = 5;

#### Defined in

src/absences.scailo_pb.ts:780

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/absences.scailo_pb.ts:773

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this absence

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/absences.scailo_pb.ts:822

___

### toTimestampEnd

• **toTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_end = 27;

#### Defined in

src/absences.scailo_pb.ts:920

___

### toTimestampStart

• **toTimestampStart**: `bigint` = `protoInt64.zero`

The start range of "to timestamp"

**`Generated`**

from field: uint64 to_timestamp_start = 26;

#### Defined in

src/absences.scailo_pb.ts:913

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

Stores the unit of material ID

**`Generated`**

from field: uint64 uom_id = 28;

#### Defined in

src/absences.scailo_pb.ts:927

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has been marked as absent

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/absences.scailo_pb.ts:885

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/absences.scailo_pb.ts:950

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/absences.scailo_pb.ts:948

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceFilterReq"``

#### Defined in

src/absences.scailo_pb.ts:949

## Methods

### clone

▸ **clone**(): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md) \| `PlainMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md) \| `PlainMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md) \| `PlainMessage`\<[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/absences.scailo_pb.ts:993

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Defined in

src/absences.scailo_pb.ts:981

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Defined in

src/absences.scailo_pb.ts:985

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceFilterReq`](AbsencesServiceFilterReq.md)

#### Defined in

src/absences.scailo_pb.ts:989
