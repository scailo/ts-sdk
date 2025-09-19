[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceFilterReq

# Class: SalariesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SalariesServiceFilterReq

## Hierarchy

- `Message`\<[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)\>

  ↳ **`SalariesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalariesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalariesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalariesServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalariesServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalariesServiceFilterReq.md#approverroleid)
- [bankAccountId](SalariesServiceFilterReq.md#bankaccountid)
- [completedOnEnd](SalariesServiceFilterReq.md#completedonend)
- [completedOnStart](SalariesServiceFilterReq.md#completedonstart)
- [count](SalariesServiceFilterReq.md#count)
- [creationTimestampEnd](SalariesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalariesServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalariesServiceFilterReq.md#currencyid)
- [employeeId](SalariesServiceFilterReq.md#employeeid)
- [entityUuid](SalariesServiceFilterReq.md#entityuuid)
- [finalRefNumber](SalariesServiceFilterReq.md#finalrefnumber)
- [formData](SalariesServiceFilterReq.md#formdata)
- [isActive](SalariesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](SalariesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalariesServiceFilterReq.md#modificationtimestampstart)
- [offset](SalariesServiceFilterReq.md#offset)
- [payrollGroupId](SalariesServiceFilterReq.md#payrollgroupid)
- [referenceId](SalariesServiceFilterReq.md#referenceid)
- [sortKey](SalariesServiceFilterReq.md#sortkey)
- [sortOrder](SalariesServiceFilterReq.md#sortorder)
- [status](SalariesServiceFilterReq.md#status)
- [taxGroupId](SalariesServiceFilterReq.md#taxgroupid)
- [fields](SalariesServiceFilterReq.md#fields)
- [runtime](SalariesServiceFilterReq.md#runtime)
- [typeName](SalariesServiceFilterReq.md#typename)

### Methods

- [clone](SalariesServiceFilterReq.md#clone)
- [equals](SalariesServiceFilterReq.md#equals)
- [fromBinary](SalariesServiceFilterReq.md#frombinary)
- [fromJson](SalariesServiceFilterReq.md#fromjson)
- [fromJsonString](SalariesServiceFilterReq.md#fromjsonstring)
- [getType](SalariesServiceFilterReq.md#gettype)
- [toBinary](SalariesServiceFilterReq.md#tobinary)
- [toJSON](SalariesServiceFilterReq.md#tojson)
- [toJson](SalariesServiceFilterReq.md#tojson-1)
- [toJsonString](SalariesServiceFilterReq.md#tojsonstring)
- [equals](SalariesServiceFilterReq.md#equals-1)
- [fromBinary](SalariesServiceFilterReq.md#frombinary-1)
- [fromJson](SalariesServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalariesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceFilterReq**(`data?`): [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)\> |

#### Returns

[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Overrides

Message\&lt;SalariesServiceFilterReq\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:2374](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2374)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/salaries.scailo_pb.ts:2295](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2295)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/salaries.scailo_pb.ts:2288](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2288)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/salaries.scailo_pb.ts:2281](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2281)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/salaries.scailo_pb.ts:2302](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2302)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The bank account ID of the salary

**`Generated`**

from field: int64 bank_account_id = 23;

#### Defined in

[src/salaries.scailo_pb.ts:2344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2344)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/salaries.scailo_pb.ts:2316](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2316)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/salaries.scailo_pb.ts:2309](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2309)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/salaries.scailo_pb.ts:2211](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2211)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/salaries.scailo_pb.ts:2246](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2246)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/salaries.scailo_pb.ts:2239](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2239)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The currency ID of the salary

**`Generated`**

from field: int64 currency_id = 24;

#### Defined in

[src/salaries.scailo_pb.ts:2351](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2351)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The employee ID of the salary

**`Generated`**

from field: int64 employee_id = 22;

#### Defined in

[src/salaries.scailo_pb.ts:2337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2337)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/salaries.scailo_pb.ts:2267](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2267)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/salaries.scailo_pb.ts:2330](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2330)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/salaries.scailo_pb.ts:2372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2372)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/salaries.scailo_pb.ts:2204](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2204)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/salaries.scailo_pb.ts:2260](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2260)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/salaries.scailo_pb.ts:2253](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2253)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/salaries.scailo_pb.ts:2218](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2218)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The payroll group ID of the salary

**`Generated`**

from field: int64 payroll_group_id = 25;

#### Defined in

[src/salaries.scailo_pb.ts:2358](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2358)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the salary

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/salaries.scailo_pb.ts:2323](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2323)

___

### sortKey

• **sortKey**: [`SALARY_SORT_KEY`](../enums/SALARY_SORT_KEY.md) = `SALARY_SORT_KEY.SALARY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALARY_SORT_KEY sort_key = 5;

#### Defined in

[src/salaries.scailo_pb.ts:2232](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2232)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/salaries.scailo_pb.ts:2225](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2225)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this salary

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/salaries.scailo_pb.ts:2274](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2274)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The tax group ID of the salary

**`Generated`**

from field: int64 tax_group_id = 26;

#### Defined in

[src/salaries.scailo_pb.ts:2365](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2365)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:2381](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2381)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:2379](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2379)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceFilterReq"``

#### Defined in

[src/salaries.scailo_pb.ts:2380](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2380)

## Methods

### clone

▸ **clone**(): [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md) \| `PlainMessage`\<[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md) \| `PlainMessage`\<[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md) \| `PlainMessage`\<[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:2421](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2421)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Defined in

[src/salaries.scailo_pb.ts:2409](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2409)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Defined in

[src/salaries.scailo_pb.ts:2413](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2413)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceFilterReq`](SalariesServiceFilterReq.md)

#### Defined in

[src/salaries.scailo_pb.ts:2417](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L2417)
