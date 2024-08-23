[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpenseItemHistoryRequest

# Class: ExpenseItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.ExpenseItemHistoryRequest

## Hierarchy

- `Message`\<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\>

  ↳ **`ExpenseItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](ExpenseItemHistoryRequest.md#constructor)

### Properties

- [expenseId](ExpenseItemHistoryRequest.md#expenseid)
- [name](ExpenseItemHistoryRequest.md#name)
- [fields](ExpenseItemHistoryRequest.md#fields)
- [runtime](ExpenseItemHistoryRequest.md#runtime)
- [typeName](ExpenseItemHistoryRequest.md#typename)

### Methods

- [clone](ExpenseItemHistoryRequest.md#clone)
- [equals](ExpenseItemHistoryRequest.md#equals)
- [fromBinary](ExpenseItemHistoryRequest.md#frombinary)
- [fromJson](ExpenseItemHistoryRequest.md#fromjson)
- [fromJsonString](ExpenseItemHistoryRequest.md#fromjsonstring)
- [getType](ExpenseItemHistoryRequest.md#gettype)
- [toBinary](ExpenseItemHistoryRequest.md#tobinary)
- [toJSON](ExpenseItemHistoryRequest.md#tojson)
- [toJson](ExpenseItemHistoryRequest.md#tojson-1)
- [toJsonString](ExpenseItemHistoryRequest.md#tojsonstring)
- [equals](ExpenseItemHistoryRequest.md#equals-1)
- [fromBinary](ExpenseItemHistoryRequest.md#frombinary-1)
- [fromJson](ExpenseItemHistoryRequest.md#fromjson-1)
- [fromJsonString](ExpenseItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpenseItemHistoryRequest**(`data?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Overrides

Message\&lt;ExpenseItemHistoryRequest\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:1097

## Properties

### expenseId

• **expenseId**: `bigint` = `protoInt64.zero`

Stores the expense ID

**`Generated`**

from field: uint64 expense_id = 10;

#### Defined in

src/expenses.scailo_pb.ts:1088

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/expenses.scailo_pb.ts:1095

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:1104

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:1102

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpenseItemHistoryRequest"``

#### Defined in

src/expenses.scailo_pb.ts:1103

## Methods

### clone

▸ **clone**(): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md) \| `PlainMessage`\<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md) \| `PlainMessage`\<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md) \| `PlainMessage`\<[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:1121

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:1109

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:1113

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpenseItemHistoryRequest`](ExpenseItemHistoryRequest.md)

#### Defined in

src/expenses.scailo_pb.ts:1117
