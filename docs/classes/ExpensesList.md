[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesList

# Class: ExpensesList

Describes the message consisting of the list of expenses

**`Generated`**

from message Scailo.ExpensesList

## Hierarchy

- `Message`\<[`ExpensesList`](ExpensesList.md)\>

  ↳ **`ExpensesList`**

## Table of contents

### Constructors

- [constructor](ExpensesList.md#constructor)

### Properties

- [list](ExpensesList.md#list)
- [fields](ExpensesList.md#fields)
- [runtime](ExpensesList.md#runtime)
- [typeName](ExpensesList.md#typename)

### Methods

- [clone](ExpensesList.md#clone)
- [equals](ExpensesList.md#equals)
- [fromBinary](ExpensesList.md#frombinary)
- [fromJson](ExpensesList.md#fromjson)
- [fromJsonString](ExpensesList.md#fromjsonstring)
- [getType](ExpensesList.md#gettype)
- [toBinary](ExpensesList.md#tobinary)
- [toJSON](ExpensesList.md#tojson)
- [toJson](ExpensesList.md#tojson-1)
- [toJsonString](ExpensesList.md#tojsonstring)
- [equals](ExpensesList.md#equals-1)
- [fromBinary](ExpensesList.md#frombinary-1)
- [fromJson](ExpensesList.md#fromjson-1)
- [fromJsonString](ExpensesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesList**(`data?`): [`ExpensesList`](ExpensesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesList`](ExpensesList.md)\> |

#### Returns

[`ExpensesList`](ExpensesList.md)

#### Overrides

Message\&lt;ExpensesList\&gt;.constructor

#### Defined in

[src/expenses.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1006)

## Properties

### list

• **list**: [`Expense`](Expense.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Expense list = 1;

#### Defined in

[src/expenses.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1004)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1013)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses.scailo_pb.ts:1011](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1011)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesList"``

#### Defined in

[src/expenses.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1012)

## Methods

### clone

▸ **clone**(): [`ExpensesList`](ExpensesList.md)

Create a deep copy.

#### Returns

[`ExpensesList`](ExpensesList.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesList`](ExpensesList.md) \| `PlainMessage`\<[`ExpensesList`](ExpensesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesList`](ExpensesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesList`](ExpensesList.md)\>

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
| `a` | `undefined` \| [`ExpensesList`](ExpensesList.md) \| `PlainMessage`\<[`ExpensesList`](ExpensesList.md)\> |
| `b` | `undefined` \| [`ExpensesList`](ExpensesList.md) \| `PlainMessage`\<[`ExpensesList`](ExpensesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1029)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesList`](ExpensesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesList`](ExpensesList.md)

#### Defined in

[src/expenses.scailo_pb.ts:1017](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1017)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesList`](ExpensesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesList`](ExpensesList.md)

#### Defined in

[src/expenses.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1021)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesList`](ExpensesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesList`](ExpensesList.md)

#### Defined in

[src/expenses.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/expenses.scailo_pb.ts#L1025)
