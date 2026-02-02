[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceMultipleItemsCreateRequest

# Class: DebitNotesServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a debit note

**`Generated`**

from message Scailo.DebitNotesServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)\>

  ↳ **`DebitNotesServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [debitNoteId](DebitNotesServiceMultipleItemsCreateRequest.md#debitnoteid)
- [list](DebitNotesServiceMultipleItemsCreateRequest.md#list)
- [userComment](DebitNotesServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](DebitNotesServiceMultipleItemsCreateRequest.md#fields)
- [runtime](DebitNotesServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](DebitNotesServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](DebitNotesServiceMultipleItemsCreateRequest.md#clone)
- [equals](DebitNotesServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](DebitNotesServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](DebitNotesServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](DebitNotesServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](DebitNotesServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](DebitNotesServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](DebitNotesServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](DebitNotesServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](DebitNotesServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceMultipleItemsCreateRequest**(`data?`): [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1025)

## Properties

### debitNoteId

• **debitNoteId**: `bigint` = `protoInt64.zero`

Stores the debit note ID

**`Generated`**

from field: uint64 debit_note_id = 10;

#### Defined in

[src/debit_notes.scailo_pb.ts:1016](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1016)

___

### list

• **list**: [`DebitNotesServiceMultipleItemsSingleton`](DebitNotesServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.DebitNotesServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/debit_notes.scailo_pb.ts:1023](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1023)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:1009](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1009)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1032)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1030)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceMultipleItemsCreateRequest"``

#### Defined in

[src/debit_notes.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1031)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1050)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1038)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1042)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceMultipleItemsCreateRequest`](DebitNotesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/debit_notes.scailo_pb.ts#L1046)
