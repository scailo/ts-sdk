[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceItemCreateRequest

# Class: ExpensesServiceItemCreateRequest

Describes the parameters required to add an item to a expense

**`Generated`**

from message Scailo.ExpensesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)\>

  ↳ **`ExpensesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceItemCreateRequest.md#constructor)

### Properties

- [amount](ExpensesServiceItemCreateRequest.md#amount)
- [billNo](ExpensesServiceItemCreateRequest.md#billno)
- [dateOfExpense](ExpensesServiceItemCreateRequest.md#dateofexpense)
- [description](ExpensesServiceItemCreateRequest.md#description)
- [expenseId](ExpensesServiceItemCreateRequest.md#expenseid)
- [ledgerId](ExpensesServiceItemCreateRequest.md#ledgerid)
- [name](ExpensesServiceItemCreateRequest.md#name)
- [taxGroupId](ExpensesServiceItemCreateRequest.md#taxgroupid)
- [userComment](ExpensesServiceItemCreateRequest.md#usercomment)
- [fields](ExpensesServiceItemCreateRequest.md#fields)
- [runtime](ExpensesServiceItemCreateRequest.md#runtime)
- [typeName](ExpensesServiceItemCreateRequest.md#typename)

### Methods

- [clone](ExpensesServiceItemCreateRequest.md#clone)
- [equals](ExpensesServiceItemCreateRequest.md#equals)
- [fromBinary](ExpensesServiceItemCreateRequest.md#frombinary)
- [fromJson](ExpensesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](ExpensesServiceItemCreateRequest.md#fromjsonstring)
- [getType](ExpensesServiceItemCreateRequest.md#gettype)
- [toBinary](ExpensesServiceItemCreateRequest.md#tobinary)
- [toJSON](ExpensesServiceItemCreateRequest.md#tojson)
- [toJson](ExpensesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](ExpensesServiceItemCreateRequest.md#tojsonstring)
- [equals](ExpensesServiceItemCreateRequest.md#equals-1)
- [fromBinary](ExpensesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](ExpensesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](ExpensesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceItemCreateRequest**(`data?`): [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)\> |

#### Returns

[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;ExpensesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/expenses.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L712)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: uint64 amount = 17;

#### Defined in

[src/expenses.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L703)

___

### billNo

• **billNo**: `string` = `""`

The associated bill number

**`Generated`**

from field: string bill_no = 12;

#### Defined in

[src/expenses.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L675)

___

### dateOfExpense

• **dateOfExpense**: `string` = `""`

The date on which this expense was incurred

**`Generated`**

from field: string date_of_expense = 18;

#### Defined in

[src/expenses.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L710)

___

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 13;

#### Defined in

[src/expenses.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L682)

___

### expenseId

• **expenseId**: `bigint` = `protoInt64.zero`

Stores the expense ID

**`Generated`**

from field: uint64 expense_id = 10;

#### Defined in

[src/expenses.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L661)

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger account (can be 0 temporarily)

**`Generated`**

from field: uint64 ledger_id = 15;

#### Defined in

[src/expenses.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L689)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/expenses.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L668)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/expenses.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L696)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/expenses.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L654)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L719)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L717)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServiceItemCreateRequest"``

#### Defined in

[src/expenses.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L718)

## Methods

### clone

▸ **clone**(): [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md) \| `PlainMessage`\<[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses.scailo_pb.ts:743](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L743)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Defined in

[src/expenses.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L731)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Defined in

[src/expenses.scailo_pb.ts:735](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L735)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemCreateRequest`](ExpensesServiceItemCreateRequest.md)

#### Defined in

[src/expenses.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L739)
