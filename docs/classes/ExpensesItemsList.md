[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ExpensesItemsList

# Class: ExpensesItemsList

Describes the message consisting of the list of expense items

**`Generated`**

from message Scailo.ExpensesItemsList

## Hierarchy

- `Message`\<[`ExpensesItemsList`](ExpensesItemsList.md)\>

  ↳ **`ExpensesItemsList`**

## Table of contents

### Constructors

- [constructor](ExpensesItemsList.md#constructor)

### Properties

- [list](ExpensesItemsList.md#list)
- [fields](ExpensesItemsList.md#fields)
- [runtime](ExpensesItemsList.md#runtime)
- [typeName](ExpensesItemsList.md#typename)

### Methods

- [clone](ExpensesItemsList.md#clone)
- [equals](ExpensesItemsList.md#equals)
- [fromBinary](ExpensesItemsList.md#frombinary)
- [fromJson](ExpensesItemsList.md#fromjson)
- [fromJsonString](ExpensesItemsList.md#fromjsonstring)
- [getType](ExpensesItemsList.md#gettype)
- [toBinary](ExpensesItemsList.md#tobinary)
- [toJSON](ExpensesItemsList.md#tojson)
- [toJson](ExpensesItemsList.md#tojson-1)
- [toJsonString](ExpensesItemsList.md#tojsonstring)
- [equals](ExpensesItemsList.md#equals-1)
- [fromBinary](ExpensesItemsList.md#frombinary-1)
- [fromJson](ExpensesItemsList.md#fromjson-1)
- [fromJsonString](ExpensesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesItemsList**(`data?`): [`ExpensesItemsList`](ExpensesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ExpensesItemsList`](ExpensesItemsList.md)\> |

#### Returns

[`ExpensesItemsList`](ExpensesItemsList.md)

#### Overrides

Message\&lt;ExpensesItemsList\&gt;.constructor

#### Defined in

src/expenses.scailo_pb.ts:1048

## Properties

### list

• **list**: [`ExpenseItem`](ExpenseItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ExpenseItem list = 1;

#### Defined in

src/expenses.scailo_pb.ts:1046

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/expenses.scailo_pb.ts:1055

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/expenses.scailo_pb.ts:1053

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ExpensesItemsList"``

#### Defined in

src/expenses.scailo_pb.ts:1054

## Methods

### clone

▸ **clone**(): [`ExpensesItemsList`](ExpensesItemsList.md)

Create a deep copy.

#### Returns

[`ExpensesItemsList`](ExpensesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesItemsList`](ExpensesItemsList.md) \| `PlainMessage`\<[`ExpensesItemsList`](ExpensesItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ExpensesItemsList`](ExpensesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ExpensesItemsList`](ExpensesItemsList.md)\>

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
| `a` | `undefined` \| [`ExpensesItemsList`](ExpensesItemsList.md) \| `PlainMessage`\<[`ExpensesItemsList`](ExpensesItemsList.md)\> |
| `b` | `undefined` \| [`ExpensesItemsList`](ExpensesItemsList.md) \| `PlainMessage`\<[`ExpensesItemsList`](ExpensesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/expenses.scailo_pb.ts:1071

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesItemsList`](ExpensesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ExpensesItemsList`](ExpensesItemsList.md)

#### Defined in

src/expenses.scailo_pb.ts:1059

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesItemsList`](ExpensesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesItemsList`](ExpensesItemsList.md)

#### Defined in

src/expenses.scailo_pb.ts:1063

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesItemsList`](ExpensesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ExpensesItemsList`](ExpensesItemsList.md)

#### Defined in

src/expenses.scailo_pb.ts:1067
