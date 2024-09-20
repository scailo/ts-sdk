[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteItemHistoryRequest

# Class: CreditNoteItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.CreditNoteItemHistoryRequest

## Hierarchy

- `Message`\<[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)\>

  ↳ **`CreditNoteItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](CreditNoteItemHistoryRequest.md#constructor)

### Properties

- [creditNoteId](CreditNoteItemHistoryRequest.md#creditnoteid)
- [familyId](CreditNoteItemHistoryRequest.md#familyid)
- [fields](CreditNoteItemHistoryRequest.md#fields)
- [runtime](CreditNoteItemHistoryRequest.md#runtime)
- [typeName](CreditNoteItemHistoryRequest.md#typename)

### Methods

- [clone](CreditNoteItemHistoryRequest.md#clone)
- [equals](CreditNoteItemHistoryRequest.md#equals)
- [fromBinary](CreditNoteItemHistoryRequest.md#frombinary)
- [fromJson](CreditNoteItemHistoryRequest.md#fromjson)
- [fromJsonString](CreditNoteItemHistoryRequest.md#fromjsonstring)
- [getType](CreditNoteItemHistoryRequest.md#gettype)
- [toBinary](CreditNoteItemHistoryRequest.md#tobinary)
- [toJSON](CreditNoteItemHistoryRequest.md#tojson)
- [toJson](CreditNoteItemHistoryRequest.md#tojson-1)
- [toJsonString](CreditNoteItemHistoryRequest.md#tojsonstring)
- [equals](CreditNoteItemHistoryRequest.md#equals-1)
- [fromBinary](CreditNoteItemHistoryRequest.md#frombinary-1)
- [fromJson](CreditNoteItemHistoryRequest.md#fromjson-1)
- [fromJsonString](CreditNoteItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteItemHistoryRequest**(`data?`): [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)\> |

#### Returns

[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Overrides

Message\&lt;CreditNoteItemHistoryRequest\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:1277

## Properties

### creditNoteId

• **creditNoteId**: `bigint` = `protoInt64.zero`

Stores the credit note ID

**`Generated`**

from field: uint64 credit_note_id = 10;

#### Defined in

src/credit_notes.scailo_pb.ts:1268

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/credit_notes.scailo_pb.ts:1275

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:1284

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:1282

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteItemHistoryRequest"``

#### Defined in

src/credit_notes.scailo_pb.ts:1283

## Methods

### clone

▸ **clone**(): [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md) \| `PlainMessage`\<[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md) \| `PlainMessage`\<[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md) \| `PlainMessage`\<[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:1301

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1289

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1293

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteItemHistoryRequest`](CreditNoteItemHistoryRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1297
