[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteItemsList

# Class: CreditNoteItemsList

Describes the message consisting of the list of credit note items

**`Generated`**

from message Scailo.CreditNoteItemsList

## Hierarchy

- `Message`\<[`CreditNoteItemsList`](CreditNoteItemsList.md)\>

  ↳ **`CreditNoteItemsList`**

## Table of contents

### Constructors

- [constructor](CreditNoteItemsList.md#constructor)

### Properties

- [list](CreditNoteItemsList.md#list)
- [fields](CreditNoteItemsList.md#fields)
- [runtime](CreditNoteItemsList.md#runtime)
- [typeName](CreditNoteItemsList.md#typename)

### Methods

- [clone](CreditNoteItemsList.md#clone)
- [equals](CreditNoteItemsList.md#equals)
- [fromBinary](CreditNoteItemsList.md#frombinary)
- [fromJson](CreditNoteItemsList.md#fromjson)
- [fromJsonString](CreditNoteItemsList.md#fromjsonstring)
- [getType](CreditNoteItemsList.md#gettype)
- [toBinary](CreditNoteItemsList.md#tobinary)
- [toJSON](CreditNoteItemsList.md#tojson)
- [toJson](CreditNoteItemsList.md#tojson-1)
- [toJsonString](CreditNoteItemsList.md#tojsonstring)
- [equals](CreditNoteItemsList.md#equals-1)
- [fromBinary](CreditNoteItemsList.md#frombinary-1)
- [fromJson](CreditNoteItemsList.md#fromjson-1)
- [fromJsonString](CreditNoteItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteItemsList**(`data?`): [`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteItemsList`](CreditNoteItemsList.md)\> |

#### Returns

[`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Overrides

Message\&lt;CreditNoteItemsList\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:1263

## Properties

### list

• **list**: [`CreditNoteItem`](CreditNoteItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.CreditNoteItem list = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:1261

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:1270

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:1268

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteItemsList"``

#### Defined in

src/credit_notes.scailo_pb.ts:1269

## Methods

### clone

▸ **clone**(): [`CreditNoteItemsList`](CreditNoteItemsList.md)

Create a deep copy.

#### Returns

[`CreditNoteItemsList`](CreditNoteItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteItemsList`](CreditNoteItemsList.md) \| `PlainMessage`\<[`CreditNoteItemsList`](CreditNoteItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteItemsList`](CreditNoteItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteItemsList`](CreditNoteItemsList.md)\>

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
| `a` | `undefined` \| [`CreditNoteItemsList`](CreditNoteItemsList.md) \| `PlainMessage`\<[`CreditNoteItemsList`](CreditNoteItemsList.md)\> |
| `b` | `undefined` \| [`CreditNoteItemsList`](CreditNoteItemsList.md) \| `PlainMessage`\<[`CreditNoteItemsList`](CreditNoteItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:1286

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1274

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1278

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItemsList`](CreditNoteItemsList.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1282
