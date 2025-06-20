[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteReferencesList

# Class: DebitNoteReferencesList

Describes the message consisting of the list of debit note references

**`Generated`**

from message Scailo.DebitNoteReferencesList

## Hierarchy

- `Message`\<[`DebitNoteReferencesList`](DebitNoteReferencesList.md)\>

  ↳ **`DebitNoteReferencesList`**

## Table of contents

### Constructors

- [constructor](DebitNoteReferencesList.md#constructor)

### Properties

- [list](DebitNoteReferencesList.md#list)
- [fields](DebitNoteReferencesList.md#fields)
- [runtime](DebitNoteReferencesList.md#runtime)
- [typeName](DebitNoteReferencesList.md#typename)

### Methods

- [clone](DebitNoteReferencesList.md#clone)
- [equals](DebitNoteReferencesList.md#equals)
- [fromBinary](DebitNoteReferencesList.md#frombinary)
- [fromJson](DebitNoteReferencesList.md#fromjson)
- [fromJsonString](DebitNoteReferencesList.md#fromjsonstring)
- [getType](DebitNoteReferencesList.md#gettype)
- [toBinary](DebitNoteReferencesList.md#tobinary)
- [toJSON](DebitNoteReferencesList.md#tojson)
- [toJson](DebitNoteReferencesList.md#tojson-1)
- [toJsonString](DebitNoteReferencesList.md#tojsonstring)
- [equals](DebitNoteReferencesList.md#equals-1)
- [fromBinary](DebitNoteReferencesList.md#frombinary-1)
- [fromJson](DebitNoteReferencesList.md#fromjson-1)
- [fromJsonString](DebitNoteReferencesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteReferencesList**(`data?`): [`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteReferencesList`](DebitNoteReferencesList.md)\> |

#### Returns

[`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Overrides

Message\&lt;DebitNoteReferencesList\&gt;.constructor

#### Defined in

src/debit_notes.scailo_pb.ts:2537

## Properties

### list

• **list**: [`DebitNoteReference`](DebitNoteReference.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.DebitNoteReference list = 1;

#### Defined in

src/debit_notes.scailo_pb.ts:2535

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/debit_notes.scailo_pb.ts:2544

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/debit_notes.scailo_pb.ts:2542

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteReferencesList"``

#### Defined in

src/debit_notes.scailo_pb.ts:2543

## Methods

### clone

▸ **clone**(): [`DebitNoteReferencesList`](DebitNoteReferencesList.md)

Create a deep copy.

#### Returns

[`DebitNoteReferencesList`](DebitNoteReferencesList.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNoteReferencesList`](DebitNoteReferencesList.md) \| `PlainMessage`\<[`DebitNoteReferencesList`](DebitNoteReferencesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNoteReferencesList`](DebitNoteReferencesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteReferencesList`](DebitNoteReferencesList.md)\>

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
| `a` | `undefined` \| [`DebitNoteReferencesList`](DebitNoteReferencesList.md) \| `PlainMessage`\<[`DebitNoteReferencesList`](DebitNoteReferencesList.md)\> |
| `b` | `undefined` \| [`DebitNoteReferencesList`](DebitNoteReferencesList.md) \| `PlainMessage`\<[`DebitNoteReferencesList`](DebitNoteReferencesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/debit_notes.scailo_pb.ts:2560

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2548

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2552

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteReferencesList`](DebitNoteReferencesList.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2556
