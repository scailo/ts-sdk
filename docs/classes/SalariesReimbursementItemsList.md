[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesReimbursementItemsList

# Class: SalariesReimbursementItemsList

Describes the message consisting of the list of salary reimbursement items

**`Generated`**

from message Scailo.SalariesReimbursementItemsList

## Hierarchy

- `Message`\<[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)\>

  ↳ **`SalariesReimbursementItemsList`**

## Table of contents

### Constructors

- [constructor](SalariesReimbursementItemsList.md#constructor)

### Properties

- [list](SalariesReimbursementItemsList.md#list)
- [fields](SalariesReimbursementItemsList.md#fields)
- [runtime](SalariesReimbursementItemsList.md#runtime)
- [typeName](SalariesReimbursementItemsList.md#typename)

### Methods

- [clone](SalariesReimbursementItemsList.md#clone)
- [equals](SalariesReimbursementItemsList.md#equals)
- [fromBinary](SalariesReimbursementItemsList.md#frombinary)
- [fromJson](SalariesReimbursementItemsList.md#fromjson)
- [fromJsonString](SalariesReimbursementItemsList.md#fromjsonstring)
- [getType](SalariesReimbursementItemsList.md#gettype)
- [toBinary](SalariesReimbursementItemsList.md#tobinary)
- [toJSON](SalariesReimbursementItemsList.md#tojson)
- [toJson](SalariesReimbursementItemsList.md#tojson-1)
- [toJsonString](SalariesReimbursementItemsList.md#tojsonstring)
- [equals](SalariesReimbursementItemsList.md#equals-1)
- [fromBinary](SalariesReimbursementItemsList.md#frombinary-1)
- [fromJson](SalariesReimbursementItemsList.md#fromjson-1)
- [fromJsonString](SalariesReimbursementItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesReimbursementItemsList**(`data?`): [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)\> |

#### Returns

[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Overrides

Message\&lt;SalariesReimbursementItemsList\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1908

## Properties

### list

• **list**: [`SalaryReimbursementItem`](SalaryReimbursementItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SalaryReimbursementItem list = 1;

#### Defined in

src/salaries.scailo_pb.ts:1906

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1915

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1913

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesReimbursementItemsList"``

#### Defined in

src/salaries.scailo_pb.ts:1914

## Methods

### clone

▸ **clone**(): [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

Create a deep copy.

#### Returns

[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md) \| `PlainMessage`\<[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)\>

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
| `a` | `undefined` \| [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md) \| `PlainMessage`\<[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)\> |
| `b` | `undefined` \| [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md) \| `PlainMessage`\<[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1931

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Defined in

src/salaries.scailo_pb.ts:1919

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Defined in

src/salaries.scailo_pb.ts:1923

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesReimbursementItemsList`](SalariesReimbursementItemsList.md)

#### Defined in

src/salaries.scailo_pb.ts:1927
