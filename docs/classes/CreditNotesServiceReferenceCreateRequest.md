[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceReferenceCreateRequest

# Class: CreditNotesServiceReferenceCreateRequest

Describes the parameters necessary to create a credit note reference

**`Generated`**

from message Scailo.CreditNotesServiceReferenceCreateRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)\>

  ↳ **`CreditNotesServiceReferenceCreateRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceReferenceCreateRequest.md#constructor)

### Properties

- [creditNoteId](CreditNotesServiceReferenceCreateRequest.md#creditnoteid)
- [salesReturnId](CreditNotesServiceReferenceCreateRequest.md#salesreturnid)
- [userComment](CreditNotesServiceReferenceCreateRequest.md#usercomment)
- [fields](CreditNotesServiceReferenceCreateRequest.md#fields)
- [runtime](CreditNotesServiceReferenceCreateRequest.md#runtime)
- [typeName](CreditNotesServiceReferenceCreateRequest.md#typename)

### Methods

- [clone](CreditNotesServiceReferenceCreateRequest.md#clone)
- [equals](CreditNotesServiceReferenceCreateRequest.md#equals)
- [fromBinary](CreditNotesServiceReferenceCreateRequest.md#frombinary)
- [fromJson](CreditNotesServiceReferenceCreateRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceReferenceCreateRequest.md#fromjsonstring)
- [getType](CreditNotesServiceReferenceCreateRequest.md#gettype)
- [toBinary](CreditNotesServiceReferenceCreateRequest.md#tobinary)
- [toJSON](CreditNotesServiceReferenceCreateRequest.md#tojson)
- [toJson](CreditNotesServiceReferenceCreateRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceReferenceCreateRequest.md#tojsonstring)
- [equals](CreditNotesServiceReferenceCreateRequest.md#equals-1)
- [fromBinary](CreditNotesServiceReferenceCreateRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceReferenceCreateRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceReferenceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceReferenceCreateRequest**(`data?`): [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)\> |

#### Returns

[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceReferenceCreateRequest\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:2427

## Properties

### creditNoteId

• **creditNoteId**: `bigint` = `protoInt64.zero`

Stores the credit note ID

**`Generated`**

from field: uint64 credit_note_id = 10;

#### Defined in

src/credit_notes.scailo_pb.ts:2418

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

Stores the sales return ID

**`Generated`**

from field: uint64 sales_return_id = 11;

#### Defined in

src/credit_notes.scailo_pb.ts:2425

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:2411

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:2434

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:2432

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceReferenceCreateRequest"``

#### Defined in

src/credit_notes.scailo_pb.ts:2433

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:2452

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2440

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2444

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceReferenceCreateRequest`](CreditNotesServiceReferenceCreateRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2448
