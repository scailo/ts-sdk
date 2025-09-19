[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteItemHistoryRequest

# Class: DebitNoteItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.DebitNoteItemHistoryRequest

## Hierarchy

- `Message`\<[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)\>

  ↳ **`DebitNoteItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](DebitNoteItemHistoryRequest.md#constructor)

### Properties

- [debitNoteId](DebitNoteItemHistoryRequest.md#debitnoteid)
- [familyId](DebitNoteItemHistoryRequest.md#familyid)
- [fields](DebitNoteItemHistoryRequest.md#fields)
- [runtime](DebitNoteItemHistoryRequest.md#runtime)
- [typeName](DebitNoteItemHistoryRequest.md#typename)

### Methods

- [clone](DebitNoteItemHistoryRequest.md#clone)
- [equals](DebitNoteItemHistoryRequest.md#equals)
- [fromBinary](DebitNoteItemHistoryRequest.md#frombinary)
- [fromJson](DebitNoteItemHistoryRequest.md#fromjson)
- [fromJsonString](DebitNoteItemHistoryRequest.md#fromjsonstring)
- [getType](DebitNoteItemHistoryRequest.md#gettype)
- [toBinary](DebitNoteItemHistoryRequest.md#tobinary)
- [toJSON](DebitNoteItemHistoryRequest.md#tojson)
- [toJson](DebitNoteItemHistoryRequest.md#tojson-1)
- [toJsonString](DebitNoteItemHistoryRequest.md#tojsonstring)
- [equals](DebitNoteItemHistoryRequest.md#equals-1)
- [fromBinary](DebitNoteItemHistoryRequest.md#frombinary-1)
- [fromJson](DebitNoteItemHistoryRequest.md#fromjson-1)
- [fromJsonString](DebitNoteItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteItemHistoryRequest**(`data?`): [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)\> |

#### Returns

[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Overrides

Message\&lt;DebitNoteItemHistoryRequest\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1256)

## Properties

### debitNoteId

• **debitNoteId**: `bigint` = `protoInt64.zero`

Stores the debit note ID

**`Generated`**

from field: uint64 debit_note_id = 10;

#### Defined in

[src/debit_notes.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1247)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/debit_notes.scailo_pb.ts:1254](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1254)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1263)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1261)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteItemHistoryRequest"``

#### Defined in

[src/debit_notes.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1262)

## Methods

### clone

▸ **clone**(): [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md) \| `PlainMessage`\<[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md) \| `PlainMessage`\<[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md) \| `PlainMessage`\<[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:1280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1280)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1268)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1272)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItemHistoryRequest`](DebitNoteItemHistoryRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1276)
