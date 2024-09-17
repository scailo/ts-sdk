[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceItemUpdateRequest

# Class: ExpensesServiceItemUpdateRequest

Describes the parameters required to update an item in a expense

**`Generated`**

from message Scailo.ExpensesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\>

  ↳ **`ExpensesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceItemUpdateRequest.md#constructor)

### Properties

- [amount](ExpensesServiceItemUpdateRequest.md#amount)
- [billNo](ExpensesServiceItemUpdateRequest.md#billno)
- [dateOfExpense](ExpensesServiceItemUpdateRequest.md#dateofexpense)
- [description](ExpensesServiceItemUpdateRequest.md#description)
- [id](ExpensesServiceItemUpdateRequest.md#id)
- [ledgerId](ExpensesServiceItemUpdateRequest.md#ledgerid)
- [name](ExpensesServiceItemUpdateRequest.md#name)
- [taxGroupId](ExpensesServiceItemUpdateRequest.md#taxgroupid)
- [userComment](ExpensesServiceItemUpdateRequest.md#usercomment)
- [fields](ExpensesServiceItemUpdateRequest.md#fields)
- [runtime](ExpensesServiceItemUpdateRequest.md#runtime)
- [typeName](ExpensesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](ExpensesServiceItemUpdateRequest.md#clone)
- [equals](ExpensesServiceItemUpdateRequest.md#equals)
- [fromBinary](ExpensesServiceItemUpdateRequest.md#frombinary)
- [fromJson](ExpensesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](ExpensesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](ExpensesServiceItemUpdateRequest.md#gettype)
- [toBinary](ExpensesServiceItemUpdateRequest.md#tobinary)
- [toJSON](ExpensesServiceItemUpdateRequest.md#tojson)
- [toJson](ExpensesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](ExpensesServiceItemUpdateRequest.md#tojsonstring)
- [equals](ExpensesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](ExpensesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](ExpensesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](ExpensesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceItemUpdateRequest**(`data?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;ExpensesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:818

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: uint64 amount = 17;

#### Defined in

src/expenses.scailo_pb.ts:809

___

### billNo

• **billNo**: `string` = `""`

The associated bill number

**`Generated`**

from field: string bill_no = 12;

#### Defined in

src/expenses.scailo_pb.ts:781

___

### dateOfExpense

• **dateOfExpense**: `string` = `""`

The date on which this expense was incurred

**`Generated`**

from field: string date_of_expense = 18;

#### Defined in

src/expenses.scailo_pb.ts:816

___

### description

• **description**: `string` = `""`

The description of the item

**`Generated`**

from field: string description = 13;

#### Defined in

src/expenses.scailo_pb.ts:788

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/expenses.scailo_pb.ts:767

___

### ledgerId

• **ledgerId**: `bigint` = `protoInt64.zero`

The ID of the associated ledger account (can be 0 temporarily)

**`Generated`**

from field: uint64 ledger_id = 15;

#### Defined in

src/expenses.scailo_pb.ts:795

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/expenses.scailo_pb.ts:774

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

src/expenses.scailo_pb.ts:802

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/expenses.scailo_pb.ts:760

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:825

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:823

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesServiceItemUpdateRequest"``

#### Defined in

src/expenses.scailo_pb.ts:824

## Methods

### clone

▸ **clone**(): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:849

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:837

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:841

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceItemUpdateRequest`](ExpensesServiceItemUpdateRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:845
