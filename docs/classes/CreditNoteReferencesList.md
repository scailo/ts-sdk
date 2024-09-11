[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteReferencesList

# Class: CreditNoteReferencesList

Describes the message consisting of the list of credit note references

**`Generated`**

from message Scailo.CreditNoteReferencesList

## Hierarchy

- `Message`\<[`CreditNoteReferencesList`](CreditNoteReferencesList.md)\>

  ↳ **`CreditNoteReferencesList`**

## Table of contents

### Constructors

- [constructor](CreditNoteReferencesList.md#constructor)

### Properties

- [list](CreditNoteReferencesList.md#list)
- [fields](CreditNoteReferencesList.md#fields)
- [runtime](CreditNoteReferencesList.md#runtime)
- [typeName](CreditNoteReferencesList.md#typename)

### Methods

- [clone](CreditNoteReferencesList.md#clone)
- [equals](CreditNoteReferencesList.md#equals)
- [fromBinary](CreditNoteReferencesList.md#frombinary)
- [fromJson](CreditNoteReferencesList.md#fromjson)
- [fromJsonString](CreditNoteReferencesList.md#fromjsonstring)
- [getType](CreditNoteReferencesList.md#gettype)
- [toBinary](CreditNoteReferencesList.md#tobinary)
- [toJSON](CreditNoteReferencesList.md#tojson)
- [toJson](CreditNoteReferencesList.md#tojson-1)
- [toJsonString](CreditNoteReferencesList.md#tojsonstring)
- [equals](CreditNoteReferencesList.md#equals-1)
- [fromBinary](CreditNoteReferencesList.md#frombinary-1)
- [fromJson](CreditNoteReferencesList.md#fromjson-1)
- [fromJsonString](CreditNoteReferencesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteReferencesList**(`data?`): [`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteReferencesList`](CreditNoteReferencesList.md)\> |

#### Returns

[`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Overrides

Message\&lt;CreditNoteReferencesList\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:2511

## Properties

### list

• **list**: [`CreditNoteReference`](CreditNoteReference.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.CreditNoteReference list = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:2509

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:2518

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:2516

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteReferencesList"``

#### Defined in

src/credit_notes.scailo_pb.ts:2517

## Methods

### clone

▸ **clone**(): [`CreditNoteReferencesList`](CreditNoteReferencesList.md)

Create a deep copy.

#### Returns

[`CreditNoteReferencesList`](CreditNoteReferencesList.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteReferencesList`](CreditNoteReferencesList.md) \| `PlainMessage`\<[`CreditNoteReferencesList`](CreditNoteReferencesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteReferencesList`](CreditNoteReferencesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteReferencesList`](CreditNoteReferencesList.md)\>

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
| `a` | `undefined` \| [`CreditNoteReferencesList`](CreditNoteReferencesList.md) \| `PlainMessage`\<[`CreditNoteReferencesList`](CreditNoteReferencesList.md)\> |
| `b` | `undefined` \| [`CreditNoteReferencesList`](CreditNoteReferencesList.md) \| `PlainMessage`\<[`CreditNoteReferencesList`](CreditNoteReferencesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:2534

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2522

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2526

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteReferencesList`](CreditNoteReferencesList.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2530
