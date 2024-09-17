[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceCountReq

# Class: SalariesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SalariesServiceCountReq

## Hierarchy

- `Message`\<[`SalariesServiceCountReq`](SalariesServiceCountReq.md)\>

  ↳ **`SalariesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalariesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalariesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalariesServiceCountReq.md#approvedonend)
- [approvedOnStart](SalariesServiceCountReq.md#approvedonstart)
- [approverRoleId](SalariesServiceCountReq.md#approverroleid)
- [bankAccountId](SalariesServiceCountReq.md#bankaccountid)
- [completedOnEnd](SalariesServiceCountReq.md#completedonend)
- [completedOnStart](SalariesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](SalariesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalariesServiceCountReq.md#creationtimestampstart)
- [currencyId](SalariesServiceCountReq.md#currencyid)
- [employeeId](SalariesServiceCountReq.md#employeeid)
- [entityUuid](SalariesServiceCountReq.md#entityuuid)
- [finalRefNumber](SalariesServiceCountReq.md#finalrefnumber)
- [isActive](SalariesServiceCountReq.md#isactive)
- [modificationTimestampEnd](SalariesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalariesServiceCountReq.md#modificationtimestampstart)
- [payrollGroupId](SalariesServiceCountReq.md#payrollgroupid)
- [referenceId](SalariesServiceCountReq.md#referenceid)
- [status](SalariesServiceCountReq.md#status)
- [taxGroupId](SalariesServiceCountReq.md#taxgroupid)
- [fields](SalariesServiceCountReq.md#fields)
- [runtime](SalariesServiceCountReq.md#runtime)
- [typeName](SalariesServiceCountReq.md#typename)

### Methods

- [clone](SalariesServiceCountReq.md#clone)
- [equals](SalariesServiceCountReq.md#equals)
- [fromBinary](SalariesServiceCountReq.md#frombinary)
- [fromJson](SalariesServiceCountReq.md#fromjson)
- [fromJsonString](SalariesServiceCountReq.md#fromjsonstring)
- [getType](SalariesServiceCountReq.md#gettype)
- [toBinary](SalariesServiceCountReq.md#tobinary)
- [toJSON](SalariesServiceCountReq.md#tojson)
- [toJson](SalariesServiceCountReq.md#tojson-1)
- [toJsonString](SalariesServiceCountReq.md#tojsonstring)
- [equals](SalariesServiceCountReq.md#equals-1)
- [fromBinary](SalariesServiceCountReq.md#frombinary-1)
- [fromJson](SalariesServiceCountReq.md#fromjson-1)
- [fromJsonString](SalariesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceCountReq**(`data?`): [`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceCountReq`](SalariesServiceCountReq.md)\> |

#### Returns

[`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Overrides

Message\&lt;SalariesServiceCountReq\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:2565

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

src/salaries.scailo_pb.ts:2493

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

src/salaries.scailo_pb.ts:2486

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

src/salaries.scailo_pb.ts:2479

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

src/salaries.scailo_pb.ts:2500

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The bank account ID of the salary

**`Generated`**

from field: int64 bank_account_id = 23;

#### Defined in

src/salaries.scailo_pb.ts:2542

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

src/salaries.scailo_pb.ts:2514

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

src/salaries.scailo_pb.ts:2507

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/salaries.scailo_pb.ts:2444

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/salaries.scailo_pb.ts:2437

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The currency ID of the salary

**`Generated`**

from field: int64 currency_id = 24;

#### Defined in

src/salaries.scailo_pb.ts:2549

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The employee ID of the salary

**`Generated`**

from field: int64 employee_id = 22;

#### Defined in

src/salaries.scailo_pb.ts:2535

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/salaries.scailo_pb.ts:2465

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/salaries.scailo_pb.ts:2528

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/salaries.scailo_pb.ts:2430

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/salaries.scailo_pb.ts:2458

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/salaries.scailo_pb.ts:2451

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The payroll group ID of the salary

**`Generated`**

from field: int64 payroll_group_id = 25;

#### Defined in

src/salaries.scailo_pb.ts:2556

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the salary

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/salaries.scailo_pb.ts:2521

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this salary

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/salaries.scailo_pb.ts:2472

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The tax group ID of the salary

**`Generated`**

from field: int64 tax_group_id = 26;

#### Defined in

src/salaries.scailo_pb.ts:2563

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:2572

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:2570

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceCountReq"``

#### Defined in

src/salaries.scailo_pb.ts:2571

## Methods

### clone

▸ **clone**(): [`SalariesServiceCountReq`](SalariesServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalariesServiceCountReq`](SalariesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceCountReq`](SalariesServiceCountReq.md) \| `PlainMessage`\<[`SalariesServiceCountReq`](SalariesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceCountReq`](SalariesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceCountReq`](SalariesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalariesServiceCountReq`](SalariesServiceCountReq.md) \| `PlainMessage`\<[`SalariesServiceCountReq`](SalariesServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalariesServiceCountReq`](SalariesServiceCountReq.md) \| `PlainMessage`\<[`SalariesServiceCountReq`](SalariesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:2607

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Defined in

src/salaries.scailo_pb.ts:2595

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Defined in

src/salaries.scailo_pb.ts:2599

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceCountReq`](SalariesServiceCountReq.md)

#### Defined in

src/salaries.scailo_pb.ts:2603
