[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSampleParametersList

# Class: QCSampleParametersList

Describes the message consisting of the list of qc sample parameters

**`Generated`**

from message Scailo.QCSampleParametersList

## Hierarchy

- `Message`\<[`QCSampleParametersList`](QCSampleParametersList.md)\>

  ↳ **`QCSampleParametersList`**

## Table of contents

### Constructors

- [constructor](QCSampleParametersList.md#constructor)

### Properties

- [list](QCSampleParametersList.md#list)
- [fields](QCSampleParametersList.md#fields)
- [runtime](QCSampleParametersList.md#runtime)
- [typeName](QCSampleParametersList.md#typename)

### Methods

- [clone](QCSampleParametersList.md#clone)
- [equals](QCSampleParametersList.md#equals)
- [fromBinary](QCSampleParametersList.md#frombinary)
- [fromJson](QCSampleParametersList.md#fromjson)
- [fromJsonString](QCSampleParametersList.md#fromjsonstring)
- [getType](QCSampleParametersList.md#gettype)
- [toBinary](QCSampleParametersList.md#tobinary)
- [toJSON](QCSampleParametersList.md#tojson)
- [toJson](QCSampleParametersList.md#tojson-1)
- [toJsonString](QCSampleParametersList.md#tojsonstring)
- [equals](QCSampleParametersList.md#equals-1)
- [fromBinary](QCSampleParametersList.md#frombinary-1)
- [fromJson](QCSampleParametersList.md#fromjson-1)
- [fromJsonString](QCSampleParametersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSampleParametersList**(`data?`): [`QCSampleParametersList`](QCSampleParametersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSampleParametersList`](QCSampleParametersList.md)\> |

#### Returns

[`QCSampleParametersList`](QCSampleParametersList.md)

#### Overrides

Message\&lt;QCSampleParametersList\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:1794

## Properties

### list

• **list**: [`QCSampleParameter`](QCSampleParameter.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QCSampleParameter list = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:1792

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:1801

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:1799

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSampleParametersList"``

#### Defined in

src/qc_samples.scailo_pb.ts:1800

## Methods

### clone

▸ **clone**(): [`QCSampleParametersList`](QCSampleParametersList.md)

Create a deep copy.

#### Returns

[`QCSampleParametersList`](QCSampleParametersList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSampleParametersList`](QCSampleParametersList.md) \| `PlainMessage`\<[`QCSampleParametersList`](QCSampleParametersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSampleParametersList`](QCSampleParametersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSampleParametersList`](QCSampleParametersList.md)\>

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
| `a` | `undefined` \| [`QCSampleParametersList`](QCSampleParametersList.md) \| `PlainMessage`\<[`QCSampleParametersList`](QCSampleParametersList.md)\> |
| `b` | `undefined` \| [`QCSampleParametersList`](QCSampleParametersList.md) \| `PlainMessage`\<[`QCSampleParametersList`](QCSampleParametersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:1817

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSampleParametersList`](QCSampleParametersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSampleParametersList`](QCSampleParametersList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1805

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSampleParametersList`](QCSampleParametersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParametersList`](QCSampleParametersList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1809

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSampleParametersList`](QCSampleParametersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleParametersList`](QCSampleParametersList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1813
