[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpenseItemsSearchRequest

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

src/expenses.scailo_pb.ts:1245

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/expenses.scailo_pb.ts:1201

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/expenses.scailo_pb.ts:1194

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/expenses.scailo_pb.ts:1187

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/expenses.scailo_pb.ts:1208

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/expenses.scailo_pb.ts:1145

___

### dateOfExpense

• **dateOfExpense**: `string` = `""`

The date on which this expense was incurred

**`Generated`**

from field: string date_of_expense = 28;

#### Defined in

src/expenses.scailo_pb.ts:1236

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/expenses.scailo_pb.ts:1173

___

### expenseId

• **expenseId**: `bigint` = `protoInt64.zero`

Stores the expense ID

**`Generated`**

from field: uint64 expense_id = 20;

#### Defined in

src/expenses.scailo_pb.ts:1215

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/expenses.scailo_pb.ts:1138

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger account

**`Generated`**

from field: uint64 ledger_id = 25;

#### Defined in

src/expenses.scailo_pb.ts:1222

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/expenses.scailo_pb.ts:1152

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/expenses.scailo_pb.ts:1243

___

### sortKey

• **sortKey**: [`EXPENSE_ITEM_SORT_KEY`](../enums/EXPENSE_ITEM_SORT_KEY.md) = `EXPENSE_ITEM_SORT_KEY.EXPENSE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.EXPENSE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/expenses.scailo_pb.ts:1166

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/expenses.scailo_pb.ts:1159

___

### status

• **status**: [`EXPENSE_ITEM_STATUS`](../enums/EXPENSE_ITEM_STATUS.md) = `EXPENSE_ITEM_STATUS.EXPENSE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.EXPENSE_ITEM_STATUS status = 7;

#### Defined in

src/expenses.scailo_pb.ts:1180

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 26;

#### Defined in

src/expenses.scailo_pb.ts:1229

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:1252

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:1250

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpenseItemsSearchRequest"``

#### Defined in

src/expenses.scailo_pb.ts:1251

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

src/expenses.scailo_pb.ts:1283

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

src/expenses.scailo_pb.ts:1271

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

src/expenses.scailo_pb.ts:1275

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

src/expenses.scailo_pb.ts:1279
