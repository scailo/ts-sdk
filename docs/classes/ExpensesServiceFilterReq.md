[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceFilterReq

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
- [formData](ExpensesServiceFilterReq.md#formdata)
- [includeFormData](ExpensesServiceFilterReq.md#includeformdata)
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

[src/expenses.scailo_pb.ts:2005](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2005)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/expenses.scailo_pb.ts:1879](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1879)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/expenses.scailo_pb.ts:1863](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1863)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/expenses.scailo_pb.ts:1847](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1847)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/expenses.scailo_pb.ts:1895](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1895)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/expenses.scailo_pb.ts:1927](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1927)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/expenses.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1911)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/expenses.scailo_pb.ts:1701](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1701)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/expenses.scailo_pb.ts:1771](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1771)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/expenses.scailo_pb.ts:1755](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1755)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The currency ID of the expense

**`Generated`**

from field: uint64 currency_id = 22;

#### Defined in

[src/expenses.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1966)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/expenses.scailo_pb.ts:1819](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1819)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/expenses.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1959)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/expenses.scailo_pb.ts:1990](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1990)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/expenses.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2003)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/expenses.scailo_pb.ts:1685](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1685)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/expenses.scailo_pb.ts:1803](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1803)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/expenses.scailo_pb.ts:1787](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1787)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/expenses.scailo_pb.ts:1717](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1717)

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: uint64 paid_by_user_id = 23;

#### Defined in

[src/expenses.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1973)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 30;

#### Defined in

[src/expenses.scailo_pb.ts:1980](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1980)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/expenses.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1943)

___

### sortKey

• **sortKey**: [`EXPENSE_SORT_KEY`](../enums/EXPENSE_SORT_KEY.md) = `EXPENSE_SORT_KEY.EXPENSE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.EXPENSE_SORT_KEY sort_key = 5;

#### Defined in

[src/expenses.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1739)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/expenses.scailo_pb.ts:1729](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1729)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/expenses.scailo_pb.ts:1831](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1831)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2012)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2010)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServiceFilterReq"``

#### Defined in

[src/expenses.scailo_pb.ts:2011](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2011)

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

[src/expenses.scailo_pb.ts:2051](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2051)

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

[src/expenses.scailo_pb.ts:2039](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2039)

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

[src/expenses.scailo_pb.ts:2043](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2043)

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

[src/expenses.scailo_pb.ts:2047](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L2047)
