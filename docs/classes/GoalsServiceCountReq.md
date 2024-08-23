[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceCountReq

# Class: GoalsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.GoalsServiceCountReq

## Hierarchy

- `Message`\<[`GoalsServiceCountReq`](GoalsServiceCountReq.md)\>

  ↳ **`GoalsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](GoalsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](GoalsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](GoalsServiceCountReq.md#approvedonend)
- [approvedOnStart](GoalsServiceCountReq.md#approvedonstart)
- [approverRoleId](GoalsServiceCountReq.md#approverroleid)
- [completedOnEnd](GoalsServiceCountReq.md#completedonend)
- [completedOnStart](GoalsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](GoalsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](GoalsServiceCountReq.md#creationtimestampstart)
- [endDateEnd](GoalsServiceCountReq.md#enddateend)
- [endDateExact](GoalsServiceCountReq.md#enddateexact)
- [endDateStart](GoalsServiceCountReq.md#enddatestart)
- [entityUuid](GoalsServiceCountReq.md#entityuuid)
- [finalRefNumber](GoalsServiceCountReq.md#finalrefnumber)
- [isActive](GoalsServiceCountReq.md#isactive)
- [modificationTimestampEnd](GoalsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](GoalsServiceCountReq.md#modificationtimestampstart)
- [referenceId](GoalsServiceCountReq.md#referenceid)
- [startDateEnd](GoalsServiceCountReq.md#startdateend)
- [startDateExact](GoalsServiceCountReq.md#startdateexact)
- [startDateStart](GoalsServiceCountReq.md#startdatestart)
- [status](GoalsServiceCountReq.md#status)
- [userId](GoalsServiceCountReq.md#userid)
- [fields](GoalsServiceCountReq.md#fields)
- [runtime](GoalsServiceCountReq.md#runtime)
- [typeName](GoalsServiceCountReq.md#typename)

### Methods

- [clone](GoalsServiceCountReq.md#clone)
- [equals](GoalsServiceCountReq.md#equals)
- [fromBinary](GoalsServiceCountReq.md#frombinary)
- [fromJson](GoalsServiceCountReq.md#fromjson)
- [fromJsonString](GoalsServiceCountReq.md#fromjsonstring)
- [getType](GoalsServiceCountReq.md#gettype)
- [toBinary](GoalsServiceCountReq.md#tobinary)
- [toJSON](GoalsServiceCountReq.md#tojson)
- [toJson](GoalsServiceCountReq.md#tojson-1)
- [toJsonString](GoalsServiceCountReq.md#tojsonstring)
- [equals](GoalsServiceCountReq.md#equals-1)
- [fromBinary](GoalsServiceCountReq.md#frombinary-1)
- [fromJson](GoalsServiceCountReq.md#fromjson-1)
- [fromJsonString](GoalsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceCountReq**(`data?`): [`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceCountReq`](GoalsServiceCountReq.md)\> |

#### Returns

[`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Overrides

Message\&lt;GoalsServiceCountReq\&gt;.constructor

#### Defined in

src/goals.scailo_pb.ts:1900

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/goals.scailo_pb.ts:1814

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/goals.scailo_pb.ts:1807

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/goals.scailo_pb.ts:1800

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/goals.scailo_pb.ts:1821

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/goals.scailo_pb.ts:1835

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/goals.scailo_pb.ts:1828

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/goals.scailo_pb.ts:1765

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/goals.scailo_pb.ts:1758

___

### endDateEnd

• **endDateEnd**: `string` = `""`

The max end date of the plan (in string)

**`Generated`**

from field: string end_date_end = 37;

#### Defined in

src/goals.scailo_pb.ts:1891

___

### endDateExact

• **endDateExact**: `string` = `""`

The exact end date of the plan (in string)

**`Generated`**

from field: string end_date_exact = 38;

#### Defined in

src/goals.scailo_pb.ts:1898

___

### endDateStart

• **endDateStart**: `string` = `""`

The min end date of the plan (in string)

**`Generated`**

from field: string end_date_start = 36;

#### Defined in

src/goals.scailo_pb.ts:1884

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/goals.scailo_pb.ts:1786

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/goals.scailo_pb.ts:1849

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/goals.scailo_pb.ts:1751

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/goals.scailo_pb.ts:1779

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/goals.scailo_pb.ts:1772

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goal

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/goals.scailo_pb.ts:1842

___

### startDateEnd

• **startDateEnd**: `string` = `""`

The max start date of the plan (in string)

**`Generated`**

from field: string start_date_end = 31;

#### Defined in

src/goals.scailo_pb.ts:1870

___

### startDateExact

• **startDateExact**: `string` = `""`

The exact start date of the plan (in string)

**`Generated`**

from field: string start_date_exact = 32;

#### Defined in

src/goals.scailo_pb.ts:1877

___

### startDateStart

• **startDateStart**: `string` = `""`

The min start date of the plan (in string)

**`Generated`**

from field: string start_date_start = 30;

#### Defined in

src/goals.scailo_pb.ts:1863

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this goal

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/goals.scailo_pb.ts:1793

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: uint64 user_id = 22;

#### Defined in

src/goals.scailo_pb.ts:1856

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goals.scailo_pb.ts:1907

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goals.scailo_pb.ts:1905

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceCountReq"``

#### Defined in

src/goals.scailo_pb.ts:1906

## Methods

### clone

▸ **clone**(): [`GoalsServiceCountReq`](GoalsServiceCountReq.md)

Create a deep copy.

#### Returns

[`GoalsServiceCountReq`](GoalsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceCountReq`](GoalsServiceCountReq.md) \| `PlainMessage`\<[`GoalsServiceCountReq`](GoalsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceCountReq`](GoalsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceCountReq`](GoalsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`GoalsServiceCountReq`](GoalsServiceCountReq.md) \| `PlainMessage`\<[`GoalsServiceCountReq`](GoalsServiceCountReq.md)\> |
| `b` | `undefined` \| [`GoalsServiceCountReq`](GoalsServiceCountReq.md) \| `PlainMessage`\<[`GoalsServiceCountReq`](GoalsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/goals.scailo_pb.ts:1944

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Defined in

src/goals.scailo_pb.ts:1932

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Defined in

src/goals.scailo_pb.ts:1936

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceCountReq`](GoalsServiceCountReq.md)

#### Defined in

src/goals.scailo_pb.ts:1940
