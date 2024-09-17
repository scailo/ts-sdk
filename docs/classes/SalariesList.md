[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesList

# Class: SalariesList

Describes the message consisting of the list of salaries

**`Generated`**

from message Scailo.SalariesList

## Hierarchy

- `Message`\<[`SalariesList`](SalariesList.md)\>

  ↳ **`SalariesList`**

## Table of contents

### Constructors

- [constructor](SalariesList.md#constructor)

### Properties

- [list](SalariesList.md#list)
- [fields](SalariesList.md#fields)
- [runtime](SalariesList.md#runtime)
- [typeName](SalariesList.md#typename)

### Methods

- [clone](SalariesList.md#clone)
- [equals](SalariesList.md#equals)
- [fromBinary](SalariesList.md#frombinary)
- [fromJson](SalariesList.md#fromjson)
- [fromJsonString](SalariesList.md#fromjsonstring)
- [getType](SalariesList.md#gettype)
- [toBinary](SalariesList.md#tobinary)
- [toJSON](SalariesList.md#tojson)
- [toJson](SalariesList.md#tojson-1)
- [toJsonString](SalariesList.md#tojsonstring)
- [equals](SalariesList.md#equals-1)
- [fromBinary](SalariesList.md#frombinary-1)
- [fromJson](SalariesList.md#fromjson-1)
- [fromJsonString](SalariesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesList**(`data?`): [`SalariesList`](SalariesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesList`](SalariesList.md)\> |

#### Returns

[`SalariesList`](SalariesList.md)

#### Overrides

Message\&lt;SalariesList\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:852

## Properties

### list

• **list**: [`Salary`](Salary.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Salary list = 1;

#### Defined in

src/salaries.scailo_pb.ts:850

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:859

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:857

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesList"``

#### Defined in

src/salaries.scailo_pb.ts:858

## Methods

### clone

▸ **clone**(): [`SalariesList`](SalariesList.md)

Create a deep copy.

#### Returns

[`SalariesList`](SalariesList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesList`](SalariesList.md) \| `PlainMessage`\<[`SalariesList`](SalariesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesList`](SalariesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesList`](SalariesList.md)\>

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
| `a` | `undefined` \| [`SalariesList`](SalariesList.md) \| `PlainMessage`\<[`SalariesList`](SalariesList.md)\> |
| `b` | `undefined` \| [`SalariesList`](SalariesList.md) \| `PlainMessage`\<[`SalariesList`](SalariesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:875

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesList`](SalariesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesList`](SalariesList.md)

#### Defined in

src/salaries.scailo_pb.ts:863

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesList`](SalariesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesList`](SalariesList.md)

#### Defined in

src/salaries.scailo_pb.ts:867

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesList`](SalariesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesList`](SalariesList.md)

#### Defined in

src/salaries.scailo_pb.ts:871
