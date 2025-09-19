[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceCountReq

# Class: ExpensesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ExpensesServiceCountReq

## Hierarchy

- `Message`\<[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)\>

  ↳ **`ExpensesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ExpensesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ExpensesServiceCountReq.md#approvedonend)
- [approvedOnStart](ExpensesServiceCountReq.md#approvedonstart)
- [approverRoleId](ExpensesServiceCountReq.md#approverroleid)
- [completedOnEnd](ExpensesServiceCountReq.md#completedonend)
- [completedOnStart](ExpensesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ExpensesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ExpensesServiceCountReq.md#creationtimestampstart)
- [currencyId](ExpensesServiceCountReq.md#currencyid)
- [entityUuid](ExpensesServiceCountReq.md#entityuuid)
- [finalRefNumber](ExpensesServiceCountReq.md#finalrefnumber)
- [formData](ExpensesServiceCountReq.md#formdata)
- [isActive](ExpensesServiceCountReq.md#isactive)
- [modificationTimestampEnd](ExpensesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ExpensesServiceCountReq.md#modificationtimestampstart)
- [paidByUserId](ExpensesServiceCountReq.md#paidbyuserid)
- [projectId](ExpensesServiceCountReq.md#projectid)
- [referenceId](ExpensesServiceCountReq.md#referenceid)
- [status](ExpensesServiceCountReq.md#status)
- [fields](ExpensesServiceCountReq.md#fields)
- [runtime](ExpensesServiceCountReq.md#runtime)
- [typeName](ExpensesServiceCountReq.md#typename)

### Methods

- [clone](ExpensesServiceCountReq.md#clone)
- [equals](ExpensesServiceCountReq.md#equals)
- [fromBinary](ExpensesServiceCountReq.md#frombinary)
- [fromJson](ExpensesServiceCountReq.md#fromjson)
- [fromJsonString](ExpensesServiceCountReq.md#fromjsonstring)
- [getType](ExpensesServiceCountReq.md#gettype)
- [toBinary](ExpensesServiceCountReq.md#tobinary)
- [toJSON](ExpensesServiceCountReq.md#tojson)
- [toJson](ExpensesServiceCountReq.md#tojson-1)
- [toJsonString](ExpensesServiceCountReq.md#tojsonstring)
- [equals](ExpensesServiceCountReq.md#equals-1)
- [fromBinary](ExpensesServiceCountReq.md#frombinary-1)
- [fromJson](ExpensesServiceCountReq.md#fromjson-1)
- [fromJsonString](ExpensesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceCountReq**(`data?`): [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)\> |

#### Returns

[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Overrides

Message\&lt;ExpensesServiceCountReq\&gt;.constructor

#### Defined in

[src/expenses.scailo_pb.ts:1860](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1860)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/expenses.scailo_pb.ts:1795](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1795)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/expenses.scailo_pb.ts:1788](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1788)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/expenses.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1781)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/expenses.scailo_pb.ts:1802](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1802)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/expenses.scailo_pb.ts:1816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1816)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/expenses.scailo_pb.ts:1809](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1809)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/expenses.scailo_pb.ts:1746](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1746)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/expenses.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1739)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The currency ID of the expense

**`Generated`**

from field: uint64 currency_id = 22;

#### Defined in

[src/expenses.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1837)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/expenses.scailo_pb.ts:1767](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1767)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/expenses.scailo_pb.ts:1830](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1830)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/expenses.scailo_pb.ts:1858](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1858)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/expenses.scailo_pb.ts:1732](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1732)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/expenses.scailo_pb.ts:1760](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1760)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/expenses.scailo_pb.ts:1753](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1753)

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: uint64 paid_by_user_id = 23;

#### Defined in

[src/expenses.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1844)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 30;

#### Defined in

[src/expenses.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1851)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the expense

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/expenses.scailo_pb.ts:1823](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1823)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this expense

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/expenses.scailo_pb.ts:1774](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1774)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1867)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1865)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServiceCountReq"``

#### Defined in

[src/expenses.scailo_pb.ts:1866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1866)

## Methods

### clone

▸ **clone**(): [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

Create a deep copy.

#### Returns

[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md) \| `PlainMessage`\<[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md) \| `PlainMessage`\<[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)\> |
| `b` | `undefined` \| [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md) \| `PlainMessage`\<[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses.scailo_pb.ts:1901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1901)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Defined in

[src/expenses.scailo_pb.ts:1889](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1889)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Defined in

[src/expenses.scailo_pb.ts:1893](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1893)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCountReq`](ExpensesServiceCountReq.md)

#### Defined in

[src/expenses.scailo_pb.ts:1897](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1897)
