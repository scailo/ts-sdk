[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesList

# Class: QCSamplesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.QCSamplesList

## Hierarchy

- `Message`\<[`QCSamplesList`](QCSamplesList.md)\>

  ↳ **`QCSamplesList`**

## Table of contents

### Constructors

- [constructor](QCSamplesList.md#constructor)

### Properties

- [list](QCSamplesList.md#list)
- [fields](QCSamplesList.md#fields)
- [runtime](QCSamplesList.md#runtime)
- [typeName](QCSamplesList.md#typename)

### Methods

- [clone](QCSamplesList.md#clone)
- [equals](QCSamplesList.md#equals)
- [fromBinary](QCSamplesList.md#frombinary)
- [fromJson](QCSamplesList.md#fromjson)
- [fromJsonString](QCSamplesList.md#fromjsonstring)
- [getType](QCSamplesList.md#gettype)
- [toBinary](QCSamplesList.md#tobinary)
- [toJSON](QCSamplesList.md#tojson)
- [toJson](QCSamplesList.md#tojson-1)
- [toJsonString](QCSamplesList.md#tojsonstring)
- [equals](QCSamplesList.md#equals-1)
- [fromBinary](QCSamplesList.md#frombinary-1)
- [fromJson](QCSamplesList.md#fromjson-1)
- [fromJsonString](QCSamplesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesList**(`data?`): [`QCSamplesList`](QCSamplesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesList`](QCSamplesList.md)\> |

#### Returns

[`QCSamplesList`](QCSamplesList.md)

#### Overrides

Message\&lt;QCSamplesList\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:774

## Properties

### list

• **list**: [`QCSample`](QCSample.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QCSample list = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:772

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:781

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:779

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesList"``

#### Defined in

src/qc_samples.scailo_pb.ts:780

## Methods

### clone

▸ **clone**(): [`QCSamplesList`](QCSamplesList.md)

Create a deep copy.

#### Returns

[`QCSamplesList`](QCSamplesList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesList`](QCSamplesList.md) \| `PlainMessage`\<[`QCSamplesList`](QCSamplesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesList`](QCSamplesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesList`](QCSamplesList.md)\>

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
| `a` | `undefined` \| [`QCSamplesList`](QCSamplesList.md) \| `PlainMessage`\<[`QCSamplesList`](QCSamplesList.md)\> |
| `b` | `undefined` \| [`QCSamplesList`](QCSamplesList.md) \| `PlainMessage`\<[`QCSamplesList`](QCSamplesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:797

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesList`](QCSamplesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesList`](QCSamplesList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:785

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesList`](QCSamplesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesList`](QCSamplesList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:789

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesList`](QCSamplesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesList`](QCSamplesList.md)

#### Defined in

src/qc_samples.scailo_pb.ts:793
