[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceReferenceCreateRequest

# Class: DebitNotesServiceReferenceCreateRequest

Describes the parameters necessary to create a debit note reference

**`Generated`**

from message Scailo.DebitNotesServiceReferenceCreateRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)\>

  ↳ **`DebitNotesServiceReferenceCreateRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceReferenceCreateRequest.md#constructor)

### Properties

- [debitNoteId](DebitNotesServiceReferenceCreateRequest.md#debitnoteid)
- [purchaseReturnId](DebitNotesServiceReferenceCreateRequest.md#purchasereturnid)
- [userComment](DebitNotesServiceReferenceCreateRequest.md#usercomment)
- [fields](DebitNotesServiceReferenceCreateRequest.md#fields)
- [runtime](DebitNotesServiceReferenceCreateRequest.md#runtime)
- [typeName](DebitNotesServiceReferenceCreateRequest.md#typename)

### Methods

- [clone](DebitNotesServiceReferenceCreateRequest.md#clone)
- [equals](DebitNotesServiceReferenceCreateRequest.md#equals)
- [fromBinary](DebitNotesServiceReferenceCreateRequest.md#frombinary)
- [fromJson](DebitNotesServiceReferenceCreateRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceReferenceCreateRequest.md#fromjsonstring)
- [getType](DebitNotesServiceReferenceCreateRequest.md#gettype)
- [toBinary](DebitNotesServiceReferenceCreateRequest.md#tobinary)
- [toJSON](DebitNotesServiceReferenceCreateRequest.md#tojson)
- [toJson](DebitNotesServiceReferenceCreateRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceReferenceCreateRequest.md#tojsonstring)
- [equals](DebitNotesServiceReferenceCreateRequest.md#equals-1)
- [fromBinary](DebitNotesServiceReferenceCreateRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceReferenceCreateRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceReferenceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceReferenceCreateRequest**(`data?`): [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)\> |

#### Returns

[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceReferenceCreateRequest\&gt;.constructor

#### Defined in

src/debit_notes.scailo_pb.ts:2270

## Properties

### debitNoteId

• **debitNoteId**: `bigint` = `protoInt64.zero`

Stores the debit note ID

**`Generated`**

from field: uint64 debit_note_id = 10;

#### Defined in

src/debit_notes.scailo_pb.ts:2261

___

### purchaseReturnId

• **purchaseReturnId**: `bigint` = `protoInt64.zero`

Stores the purchase return ID

**`Generated`**

from field: uint64 purchase_return_id = 11;

#### Defined in

src/debit_notes.scailo_pb.ts:2268

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/debit_notes.scailo_pb.ts:2254

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/debit_notes.scailo_pb.ts:2277

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/debit_notes.scailo_pb.ts:2275

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceReferenceCreateRequest"``

#### Defined in

src/debit_notes.scailo_pb.ts:2276

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/debit_notes.scailo_pb.ts:2295

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2283

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2287

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceReferenceCreateRequest`](DebitNotesServiceReferenceCreateRequest.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2291
