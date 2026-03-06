[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceMultipleItemsCreateRequest

# Class: CreditNotesServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a credit note

**`Generated`**

from message Scailo.CreditNotesServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)\>

  ↳ **`CreditNotesServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [creditNoteId](CreditNotesServiceMultipleItemsCreateRequest.md#creditnoteid)
- [list](CreditNotesServiceMultipleItemsCreateRequest.md#list)
- [userComment](CreditNotesServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](CreditNotesServiceMultipleItemsCreateRequest.md#fields)
- [runtime](CreditNotesServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](CreditNotesServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](CreditNotesServiceMultipleItemsCreateRequest.md#clone)
- [equals](CreditNotesServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](CreditNotesServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](CreditNotesServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](CreditNotesServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](CreditNotesServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](CreditNotesServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](CreditNotesServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](CreditNotesServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](CreditNotesServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceMultipleItemsCreateRequest**(`data?`): [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1073)

## Properties

### creditNoteId

• **creditNoteId**: `bigint` = `protoInt64.zero`

Stores the credit note ID

**`Generated`**

from field: uint64 credit_note_id = 10;

#### Defined in

[src/credit_notes.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1064)

___

### list

• **list**: [`CreditNotesServiceMultipleItemsSingleton`](CreditNotesServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.CreditNotesServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/credit_notes.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1071)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/credit_notes.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1057)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1080)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1078)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceMultipleItemsCreateRequest"``

#### Defined in

[src/credit_notes.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1079)

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:1098](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1098)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1086)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1090)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceMultipleItemsCreateRequest`](CreditNotesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/bb9a074aab68a823becc869431db7f9f7dd167d8/src/credit_notes.scailo_pb.ts#L1094)
