[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceFilterReq

# Class: ExpensesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ExpensesServiceFilterReq

## Hierarchy

- `Message`\<[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)\>

  ↳ **`ExpensesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ExpensesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ExpensesServiceFilterReq.md#approvedonend)
- [approvedOnStart](ExpensesServiceFilterReq.md#approvedonstart)
- [approverRoleId](ExpensesServiceFilterReq.md#approverroleid)
- [completedOnEnd](ExpensesServiceFilterReq.md#completedonend)
- [completedOnStart](ExpensesServiceFilterReq.md#completedonstart)
- [count](ExpensesServiceFilterReq.md#count)
- [creationTimestampEnd](ExpensesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ExpensesServiceFilterReq.md#creationtimestampstart)
- [currencyId](ExpensesServiceFilterReq.md#currencyid)
- [entityUuid](ExpensesServiceFilterReq.md#entityuuid)
- [finalRefNumber](ExpensesServiceFilterReq.md#finalrefnumber)
- [isActive](ExpensesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ExpensesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ExpensesServiceFilterReq.md#modificationtimestampstart)
- [offset](ExpensesServiceFilterReq.md#offset)
- [paidByUserId](ExpensesServiceFilterReq.md#paidbyuserid)
- [projectId](ExpensesServiceFilterReq.md#projectid)
- [referenceId](ExpensesServiceFilterReq.md#referenceid)
- [sortKey](ExpensesServiceFilterReq.md#sortkey)
- [sortOrder](ExpensesServiceFilterReq.md#sortorder)
- [status](ExpensesServiceFilterReq.md#status)
- [fields](ExpensesServiceFilterReq.md#fields)
- [runtime](ExpensesServiceFilterReq.md#runtime)
- [typeName](ExpensesServiceFilterReq.md#typename)

### Methods

- [clone](ExpensesServiceFilterReq.md#clone)
- [equals](ExpensesServiceFilterReq.md#equals)
- [fromBinary](ExpensesServiceFilterReq.md#frombinary)
- [fromJson](ExpensesServiceFilterReq.md#fromjson)
- [fromJsonString](ExpensesServiceFilterReq.md#fromjsonstring)
- [getType](ExpensesServiceFilterReq.md#gettype)
- [toBinary](ExpensesServiceFilterReq.md#tobinary)
- [toJSON](ExpensesServiceFilterReq.md#tojson)
- [toJson](ExpensesServiceFilterReq.md#tojson-1)
- [toJsonString](ExpensesServiceFilterReq.md#tojsonstring)
- [equals](ExpensesServiceFilterReq.md#equals-1)
- [fromBinary](ExpensesServiceFilterReq.md#frombinary-1)
- [fromJson](ExpensesServiceFilterReq.md#fromjson-1)
- [fromJsonString](ExpensesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceFilterReq**(`data?`): [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)\> |

#### Returns

[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Overrides

Message\&lt;ExpensesServiceFilterReq\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:1663

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/expenses.scailo_pb.ts:1605

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/expenses.scailo_pb.ts:1598

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/expenses.scailo_pb.ts:1591

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/expenses.scailo_pb.ts:1612

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/expenses.scailo_pb.ts:1626

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/expenses.scailo_pb.ts:1619

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/expenses.scailo_pb.ts:1521

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/expenses.scailo_pb.ts:1556

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/expenses.scailo_pb.ts:1549

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The currency ID of the expense

**`Generated`**

from field: uint64 currency_id = 22;

#### Defined in

src/expenses.scailo_pb.ts:1647

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/expenses.scailo_pb.ts:1577

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/expenses.scailo_pb.ts:1640

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/expenses.scailo_pb.ts:1514

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/expenses.scailo_pb.ts:1570

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/expenses.scailo_pb.ts:1563

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/expenses.scailo_pb.ts:1528

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: uint64 paid_by_user_id = 23;

#### Defined in

src/expenses.scailo_pb.ts:1654

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 30;

#### Defined in

src/expenses.scailo_pb.ts:1661

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the expense

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/expenses.scailo_pb.ts:1633

___

### sortKey

• **sortKey**: [`EXPENSE_SORT_KEY`](../enums/EXPENSE_SORT_KEY.md) = `EXPENSE_SORT_KEY.EXPENSE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.EXPENSE_SORT_KEY sort_key = 5;

#### Defined in

src/expenses.scailo_pb.ts:1542

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/expenses.scailo_pb.ts:1535

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this expense

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/expenses.scailo_pb.ts:1584

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:1670

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:1668

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServiceFilterReq"``

#### Defined in

src/expenses.scailo_pb.ts:1669

## Methods

### clone

▸ **clone**(): [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md) \| `PlainMessage`\<[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md) \| `PlainMessage`\<[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md) \| `PlainMessage`\<[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:1707

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Defined in

src/expenses.scailo_pb.ts:1695

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Defined in

src/expenses.scailo_pb.ts:1699

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceFilterReq`](ExpensesServiceFilterReq.md)

#### Defined in

src/expenses.scailo_pb.ts:1703
