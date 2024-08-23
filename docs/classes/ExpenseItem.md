[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpenseItem

# Class: ExpenseItem

Describes the parameters that constitute an item associated to a expense

**`Generated`**

from message Scailo.ExpenseItem

## Hierarchy

- `Message`\<[`ExpenseItem`](ExpenseItem.md)\>

  ↳ **`ExpenseItem`**

## Table of contents

### Constructors

- [constructor](ExpenseItem.md#constructor)

### Properties

- [amount](ExpenseItem.md#amount)
- [approvalMetadata](ExpenseItem.md#approvalmetadata)
- [billNo](ExpenseItem.md#billno)
- [dateOfExpense](ExpenseItem.md#dateofexpense)
- [description](ExpenseItem.md#description)
- [entityUuid](ExpenseItem.md#entityuuid)
- [expenseId](ExpenseItem.md#expenseid)
- [ledgerId](ExpenseItem.md#ledgerid)
- [metadata](ExpenseItem.md#metadata)
- [name](ExpenseItem.md#name)
- [needApproval](ExpenseItem.md#needapproval)
- [taxGroupId](ExpenseItem.md#taxgroupid)
- [userComment](ExpenseItem.md#usercomment)
- [fields](ExpenseItem.md#fields)
- [runtime](ExpenseItem.md#runtime)
- [typeName](ExpenseItem.md#typename)

### Methods

- [clone](ExpenseItem.md#clone)
- [equals](ExpenseItem.md#equals)
- [fromBinary](ExpenseItem.md#frombinary)
- [fromJson](ExpenseItem.md#fromjson)
- [fromJsonString](ExpenseItem.md#fromjsonstring)
- [getType](ExpenseItem.md#gettype)
- [toBinary](ExpenseItem.md#tobinary)
- [toJSON](ExpenseItem.md#tojson)
- [toJson](ExpenseItem.md#tojson-1)
- [toJsonString](ExpenseItem.md#tojsonstring)
- [equals](ExpenseItem.md#equals-1)
- [fromBinary](ExpenseItem.md#frombinary-1)
- [fromJson](ExpenseItem.md#fromjson-1)
- [fromJsonString](ExpenseItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpenseItem**(`data?`): [`ExpenseItem`](ExpenseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpenseItem`](ExpenseItem.md)\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Overrides

Message\&lt;ExpenseItem\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:952

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: uint64 amount = 17;

#### Defined in

src/expenses.scailo_pb.ts:943

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/expenses.scailo_pb.ts:880

___

### billNo

• **billNo**: `string` = `""`

The associated bill number

**`Generated`**

from field: string bill_no = 12;

#### Defined in

src/expenses.scailo_pb.ts:915

___

### dateOfExpense

• **dateOfExpense**: `string` = `""`

The date on which this expense was incurred

**`Generated`**

from field: string date_of_expense = 18;

#### Defined in

src/expenses.scailo_pb.ts:950

___

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 13;

#### Defined in

src/expenses.scailo_pb.ts:922

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/expenses.scailo_pb.ts:866

___

### expenseId

• **expenseId**: `bigint` = `protoInt64.zero`

Stores the expense ID

**`Generated`**

from field: uint64 expense_id = 10;

#### Defined in

src/expenses.scailo_pb.ts:901

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger account (can be 0 temporarily)

**`Generated`**

from field: uint64 ledger_id = 15;

#### Defined in

src/expenses.scailo_pb.ts:929

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this expense

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/expenses.scailo_pb.ts:873

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/expenses.scailo_pb.ts:908

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/expenses.scailo_pb.ts:887

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/expenses.scailo_pb.ts:936

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/expenses.scailo_pb.ts:894

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:959

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:957

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpenseItem"``

#### Defined in

src/expenses.scailo_pb.ts:958

## Methods

### clone

▸ **clone**(): [`ExpenseItem`](ExpenseItem.md)

Create a deep copy.

#### Returns

[`ExpenseItem`](ExpenseItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpenseItem`](ExpenseItem.md) \| `PlainMessage`\<[`ExpenseItem`](ExpenseItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpenseItem`](ExpenseItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpenseItem`](ExpenseItem.md)\>

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
| `a` | `undefined` \| [`ExpenseItem`](ExpenseItem.md) \| `PlainMessage`\<[`ExpenseItem`](ExpenseItem.md)\> |
| `b` | `undefined` \| [`ExpenseItem`](ExpenseItem.md) \| `PlainMessage`\<[`ExpenseItem`](ExpenseItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:987

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpenseItem`](ExpenseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Defined in

src/expenses.scailo_pb.ts:975

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpenseItem`](ExpenseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Defined in

src/expenses.scailo_pb.ts:979

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpenseItem`](ExpenseItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpenseItem`](ExpenseItem.md)

#### Defined in

src/expenses.scailo_pb.ts:983
