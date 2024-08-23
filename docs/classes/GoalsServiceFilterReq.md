[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceFilterReq

# Class: GoalsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.GoalsServiceFilterReq

## Hierarchy

- `Message`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\>

  ↳ **`GoalsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](GoalsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](GoalsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](GoalsServiceFilterReq.md#approvedonend)
- [approvedOnStart](GoalsServiceFilterReq.md#approvedonstart)
- [approverRoleId](GoalsServiceFilterReq.md#approverroleid)
- [completedOnEnd](GoalsServiceFilterReq.md#completedonend)
- [completedOnStart](GoalsServiceFilterReq.md#completedonstart)
- [count](GoalsServiceFilterReq.md#count)
- [creationTimestampEnd](GoalsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](GoalsServiceFilterReq.md#creationtimestampstart)
- [endDateEnd](GoalsServiceFilterReq.md#enddateend)
- [endDateExact](GoalsServiceFilterReq.md#enddateexact)
- [endDateStart](GoalsServiceFilterReq.md#enddatestart)
- [entityUuid](GoalsServiceFilterReq.md#entityuuid)
- [finalRefNumber](GoalsServiceFilterReq.md#finalrefnumber)
- [isActive](GoalsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](GoalsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](GoalsServiceFilterReq.md#modificationtimestampstart)
- [offset](GoalsServiceFilterReq.md#offset)
- [referenceId](GoalsServiceFilterReq.md#referenceid)
- [sortKey](GoalsServiceFilterReq.md#sortkey)
- [sortOrder](GoalsServiceFilterReq.md#sortorder)
- [startDateEnd](GoalsServiceFilterReq.md#startdateend)
- [startDateExact](GoalsServiceFilterReq.md#startdateexact)
- [startDateStart](GoalsServiceFilterReq.md#startdatestart)
- [status](GoalsServiceFilterReq.md#status)
- [userId](GoalsServiceFilterReq.md#userid)
- [fields](GoalsServiceFilterReq.md#fields)
- [runtime](GoalsServiceFilterReq.md#runtime)
- [typeName](GoalsServiceFilterReq.md#typename)

### Methods

- [clone](GoalsServiceFilterReq.md#clone)
- [equals](GoalsServiceFilterReq.md#equals)
- [fromBinary](GoalsServiceFilterReq.md#frombinary)
- [fromJson](GoalsServiceFilterReq.md#fromjson)
- [fromJsonString](GoalsServiceFilterReq.md#fromjsonstring)
- [getType](GoalsServiceFilterReq.md#gettype)
- [toBinary](GoalsServiceFilterReq.md#tobinary)
- [toJSON](GoalsServiceFilterReq.md#tojson)
- [toJson](GoalsServiceFilterReq.md#tojson-1)
- [toJsonString](GoalsServiceFilterReq.md#tojsonstring)
- [equals](GoalsServiceFilterReq.md#equals-1)
- [fromBinary](GoalsServiceFilterReq.md#frombinary-1)
- [fromJson](GoalsServiceFilterReq.md#fromjson-1)
- [fromJsonString](GoalsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceFilterReq**(`data?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Overrides

Message\&lt;GoalsServiceFilterReq\&gt;.constructor

#### Defined in

src/goals.scailo_pb.ts:1686

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/goals.scailo_pb.ts:1600

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/goals.scailo_pb.ts:1593

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/goals.scailo_pb.ts:1586

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/goals.scailo_pb.ts:1607

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/goals.scailo_pb.ts:1621

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/goals.scailo_pb.ts:1614

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/goals.scailo_pb.ts:1516

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/goals.scailo_pb.ts:1551

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/goals.scailo_pb.ts:1544

___

### endDateEnd

• **endDateEnd**: `string` = `""`

The max end date of the plan (in string)

**`Generated`**

from field: string end_date_end = 37;

#### Defined in

src/goals.scailo_pb.ts:1677

___

### endDateExact

• **endDateExact**: `string` = `""`

The exact end date of the plan (in string)

**`Generated`**

from field: string end_date_exact = 38;

#### Defined in

src/goals.scailo_pb.ts:1684

___

### endDateStart

• **endDateStart**: `string` = `""`

The min end date of the plan (in string)

**`Generated`**

from field: string end_date_start = 36;

#### Defined in

src/goals.scailo_pb.ts:1670

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/goals.scailo_pb.ts:1572

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/goals.scailo_pb.ts:1635

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/goals.scailo_pb.ts:1509

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/goals.scailo_pb.ts:1565

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/goals.scailo_pb.ts:1558

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/goals.scailo_pb.ts:1523

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goal

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/goals.scailo_pb.ts:1628

___

### sortKey

• **sortKey**: [`GOAL_SORT_KEY`](../enums/GOAL_SORT_KEY.md) = `GOAL_SORT_KEY.GOAL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GOAL_SORT_KEY sort_key = 5;

#### Defined in

src/goals.scailo_pb.ts:1537

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/goals.scailo_pb.ts:1530

___

### startDateEnd

• **startDateEnd**: `string` = `""`

The max start date of the plan (in string)

**`Generated`**

from field: string start_date_end = 31;

#### Defined in

src/goals.scailo_pb.ts:1656

___

### startDateExact

• **startDateExact**: `string` = `""`

The exact start date of the plan (in string)

**`Generated`**

from field: string start_date_exact = 32;

#### Defined in

src/goals.scailo_pb.ts:1663

___

### startDateStart

• **startDateStart**: `string` = `""`

The min start date of the plan (in string)

**`Generated`**

from field: string start_date_start = 30;

#### Defined in

src/goals.scailo_pb.ts:1649

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this goal

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/goals.scailo_pb.ts:1579

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/goals.scailo_pb.ts:1642

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goals.scailo_pb.ts:1693

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goals.scailo_pb.ts:1691

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceFilterReq"``

#### Defined in

src/goals.scailo_pb.ts:1692

## Methods

### clone

▸ **clone**(): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md) \| `PlainMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md) \| `PlainMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md) \| `PlainMessage`\<[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/goals.scailo_pb.ts:1734

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Defined in

src/goals.scailo_pb.ts:1722

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Defined in

src/goals.scailo_pb.ts:1726

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceFilterReq`](GoalsServiceFilterReq.md)

#### Defined in

src/goals.scailo_pb.ts:1730
