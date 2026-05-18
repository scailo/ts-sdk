[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpenseItemsSearchRequest

# Class: ExpenseItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.ExpenseItemsSearchRequest

## Hierarchy

- `Message`\<[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)\>

  ↳ **`ExpenseItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ExpenseItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](ExpenseItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](ExpenseItemsSearchRequest.md#approvedonend)
- [approvedOnStart](ExpenseItemsSearchRequest.md#approvedonstart)
- [approverRoleId](ExpenseItemsSearchRequest.md#approverroleid)
- [count](ExpenseItemsSearchRequest.md#count)
- [dateOfExpense](ExpenseItemsSearchRequest.md#dateofexpense)
- [entityUuid](ExpenseItemsSearchRequest.md#entityuuid)
- [expenseId](ExpenseItemsSearchRequest.md#expenseid)
- [isActive](ExpenseItemsSearchRequest.md#isactive)
- [ledgerId](ExpenseItemsSearchRequest.md#ledgerid)
- [offset](ExpenseItemsSearchRequest.md#offset)
- [searchKey](ExpenseItemsSearchRequest.md#searchkey)
- [sortKey](ExpenseItemsSearchRequest.md#sortkey)
- [sortOrder](ExpenseItemsSearchRequest.md#sortorder)
- [status](ExpenseItemsSearchRequest.md#status)
- [taxGroupId](ExpenseItemsSearchRequest.md#taxgroupid)
- [fields](ExpenseItemsSearchRequest.md#fields)
- [runtime](ExpenseItemsSearchRequest.md#runtime)
- [typeName](ExpenseItemsSearchRequest.md#typename)

### Methods

- [clone](ExpenseItemsSearchRequest.md#clone)
- [equals](ExpenseItemsSearchRequest.md#equals)
- [fromBinary](ExpenseItemsSearchRequest.md#frombinary)
- [fromJson](ExpenseItemsSearchRequest.md#fromjson)
- [fromJsonString](ExpenseItemsSearchRequest.md#fromjsonstring)
- [getType](ExpenseItemsSearchRequest.md#gettype)
- [toBinary](ExpenseItemsSearchRequest.md#tobinary)
- [toJSON](ExpenseItemsSearchRequest.md#tojson)
- [toJson](ExpenseItemsSearchRequest.md#tojson-1)
- [toJsonString](ExpenseItemsSearchRequest.md#tojsonstring)
- [equals](ExpenseItemsSearchRequest.md#equals-1)
- [fromBinary](ExpenseItemsSearchRequest.md#frombinary-1)
- [fromJson](ExpenseItemsSearchRequest.md#fromjson-1)
- [fromJsonString](ExpenseItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpenseItemsSearchRequest**(`data?`): [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)\> |

#### Returns

[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Overrides

Message\&lt;ExpenseItemsSearchRequest\&gt;.constructor

#### Defined in

[src/expenses.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1360)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/expenses.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1316)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/expenses.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1309)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/expenses.scailo_pb.ts:1302](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1302)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/expenses.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1323)

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

[src/expenses.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1234)

___

### dateOfExpense

• **dateOfExpense**: `string` = `""`

The date on which this expense was incurred

**`Generated`**

from field: string date_of_expense = 28;

#### Defined in

[src/expenses.scailo_pb.ts:1351](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1351)

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

from field: string entity_uuid = 6;

#### Defined in

[src/expenses.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1288)

___

### expenseId

• **expenseId**: `bigint` = `protoInt64.zero`

Stores the expense ID

**`Generated`**

from field: uint64 expense_id = 20;

#### Defined in

[src/expenses.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1330)

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

[src/expenses.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1218)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger account

**`Generated`**

from field: uint64 ledger_id = 25;

#### Defined in

[src/expenses.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1337)

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

[src/expenses.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1250)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/expenses.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1358)

___

### sortKey

• **sortKey**: [`EXPENSE_ITEM_SORT_KEY`](../enums/EXPENSE_ITEM_SORT_KEY.md) = `EXPENSE_ITEM_SORT_KEY.EXPENSE_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.EXPENSE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/expenses.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1272)

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

[src/expenses.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1262)

___

### status

• **status**: [`EXPENSE_ITEM_STATUS`](../enums/EXPENSE_ITEM_STATUS.md) = `EXPENSE_ITEM_STATUS.EXPENSE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.EXPENSE_ITEM_STATUS status = 7;

#### Defined in

[src/expenses.scailo_pb.ts:1295](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1295)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 26;

#### Defined in

[src/expenses.scailo_pb.ts:1344](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1344)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses.scailo_pb.ts:1367](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1367)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1365)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpenseItemsSearchRequest"``

#### Defined in

[src/expenses.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1366)

## Methods

### clone

▸ **clone**(): [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md) \| `PlainMessage`\<[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md) \| `PlainMessage`\<[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md) \| `PlainMessage`\<[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1398)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Defined in

[src/expenses.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1386)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Defined in

[src/expenses.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1390)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemsSearchRequest`](ExpenseItemsSearchRequest.md)

#### Defined in

[src/expenses.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/expenses.scailo_pb.ts#L1394)
