[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesList

# Class: NotesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.NotesList

## Hierarchy

- `Message`\<[`NotesList`](NotesList.md)\>

  ↳ **`NotesList`**

## Table of contents

### Constructors

- [constructor](NotesList.md#constructor)

### Properties

- [list](NotesList.md#list)
- [fields](NotesList.md#fields)
- [runtime](NotesList.md#runtime)
- [typeName](NotesList.md#typename)

### Methods

- [clone](NotesList.md#clone)
- [equals](NotesList.md#equals)
- [fromBinary](NotesList.md#frombinary)
- [fromJson](NotesList.md#fromjson)
- [fromJsonString](NotesList.md#fromjsonstring)
- [getType](NotesList.md#gettype)
- [toBinary](NotesList.md#tobinary)
- [toJSON](NotesList.md#tojson)
- [toJson](NotesList.md#tojson-1)
- [toJsonString](NotesList.md#tojsonstring)
- [equals](NotesList.md#equals-1)
- [fromBinary](NotesList.md#frombinary-1)
- [fromJson](NotesList.md#fromjson-1)
- [fromJsonString](NotesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesList**(`data?`): [`NotesList`](NotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesList`](NotesList.md)\> |

#### Returns

[`NotesList`](NotesList.md)

#### Overrides

Message\&lt;NotesList\&gt;.constructor

#### Defined in

src/notes.scailo_pb.ts:574

## Properties

### list

• **list**: [`Note`](Note.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Note list = 1;

#### Defined in

src/notes.scailo_pb.ts:572

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/notes.scailo_pb.ts:581

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/notes.scailo_pb.ts:579

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesList"``

#### Defined in

src/notes.scailo_pb.ts:580

## Methods

### clone

▸ **clone**(): [`NotesList`](NotesList.md)

Create a deep copy.

#### Returns

[`NotesList`](NotesList.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesList`](NotesList.md) \| `PlainMessage`\<[`NotesList`](NotesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesList`](NotesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesList`](NotesList.md)\>

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
| `a` | `undefined` \| [`NotesList`](NotesList.md) \| `PlainMessage`\<[`NotesList`](NotesList.md)\> |
| `b` | `undefined` \| [`NotesList`](NotesList.md) \| `PlainMessage`\<[`NotesList`](NotesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/notes.scailo_pb.ts:597

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesList`](NotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesList`](NotesList.md)

#### Defined in

src/notes.scailo_pb.ts:585

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesList`](NotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesList`](NotesList.md)

#### Defined in

src/notes.scailo_pb.ts:589

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesList`](NotesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesList`](NotesList.md)

#### Defined in

src/notes.scailo_pb.ts:593
