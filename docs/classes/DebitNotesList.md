[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesList

# Class: DebitNotesList

Describes the message consisting of the list of debit notes

**`Generated`**

from message Scailo.DebitNotesList

## Hierarchy

- `Message`\<[`DebitNotesList`](DebitNotesList.md)\>

  ↳ **`DebitNotesList`**

## Table of contents

### Constructors

- [constructor](DebitNotesList.md#constructor)

### Properties

- [list](DebitNotesList.md#list)
- [fields](DebitNotesList.md#fields)
- [runtime](DebitNotesList.md#runtime)
- [typeName](DebitNotesList.md#typename)

### Methods

- [clone](DebitNotesList.md#clone)
- [equals](DebitNotesList.md#equals)
- [fromBinary](DebitNotesList.md#frombinary)
- [fromJson](DebitNotesList.md#fromjson)
- [fromJsonString](DebitNotesList.md#fromjsonstring)
- [getType](DebitNotesList.md#gettype)
- [toBinary](DebitNotesList.md#tobinary)
- [toJSON](DebitNotesList.md#tojson)
- [toJson](DebitNotesList.md#tojson-1)
- [toJsonString](DebitNotesList.md#tojsonstring)
- [equals](DebitNotesList.md#equals-1)
- [fromBinary](DebitNotesList.md#frombinary-1)
- [fromJson](DebitNotesList.md#fromjson-1)
- [fromJsonString](DebitNotesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesList**(`data?`): [`DebitNotesList`](DebitNotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesList`](DebitNotesList.md)\> |

#### Returns

[`DebitNotesList`](DebitNotesList.md)

#### Overrides

Message\&lt;DebitNotesList\&gt;.constructor

#### Defined in

src/debit_notes.scailo_pb.ts:1165

## Properties

### list

• **list**: [`DebitNote`](DebitNote.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.DebitNote list = 1;

#### Defined in

src/debit_notes.scailo_pb.ts:1163

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/debit_notes.scailo_pb.ts:1172

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/debit_notes.scailo_pb.ts:1170

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesList"``

#### Defined in

src/debit_notes.scailo_pb.ts:1171

## Methods

### clone

▸ **clone**(): [`DebitNotesList`](DebitNotesList.md)

Create a deep copy.

#### Returns

[`DebitNotesList`](DebitNotesList.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesList`](DebitNotesList.md) \| `PlainMessage`\<[`DebitNotesList`](DebitNotesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesList`](DebitNotesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesList`](DebitNotesList.md)\>

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
| `a` | `undefined` \| [`DebitNotesList`](DebitNotesList.md) \| `PlainMessage`\<[`DebitNotesList`](DebitNotesList.md)\> |
| `b` | `undefined` \| [`DebitNotesList`](DebitNotesList.md) \| `PlainMessage`\<[`DebitNotesList`](DebitNotesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/debit_notes.scailo_pb.ts:1188

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesList`](DebitNotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesList`](DebitNotesList.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1176

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesList`](DebitNotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesList`](DebitNotesList.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1180

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesList`](DebitNotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesList`](DebitNotesList.md)

#### Defined in

src/debit_notes.scailo_pb.ts:1184
