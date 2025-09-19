[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteItemsList

# Class: DebitNoteItemsList

Describes the message consisting of the list of debit note items

**`Generated`**

from message Scailo.DebitNoteItemsList

## Hierarchy

- `Message`\<[`DebitNoteItemsList`](DebitNoteItemsList.md)\>

  ↳ **`DebitNoteItemsList`**

## Table of contents

### Constructors

- [constructor](DebitNoteItemsList.md#constructor)

### Properties

- [list](DebitNoteItemsList.md#list)
- [fields](DebitNoteItemsList.md#fields)
- [runtime](DebitNoteItemsList.md#runtime)
- [typeName](DebitNoteItemsList.md#typename)

### Methods

- [clone](DebitNoteItemsList.md#clone)
- [equals](DebitNoteItemsList.md#equals)
- [fromBinary](DebitNoteItemsList.md#frombinary)
- [fromJson](DebitNoteItemsList.md#fromjson)
- [fromJsonString](DebitNoteItemsList.md#fromjsonstring)
- [getType](DebitNoteItemsList.md#gettype)
- [toBinary](DebitNoteItemsList.md#tobinary)
- [toJSON](DebitNoteItemsList.md#tojson)
- [toJson](DebitNoteItemsList.md#tojson-1)
- [toJsonString](DebitNoteItemsList.md#tojsonstring)
- [equals](DebitNoteItemsList.md#equals-1)
- [fromBinary](DebitNoteItemsList.md#frombinary-1)
- [fromJson](DebitNoteItemsList.md#fromjson-1)
- [fromJsonString](DebitNoteItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteItemsList**(`data?`): [`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteItemsList`](DebitNoteItemsList.md)\> |

#### Returns

[`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Overrides

Message\&lt;DebitNoteItemsList\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1207)

## Properties

### list

• **list**: [`DebitNoteItem`](DebitNoteItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.DebitNoteItem list = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1205)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:1214](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1214)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1212)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteItemsList"``

#### Defined in

[src/debit_notes.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1213)

## Methods

### clone

▸ **clone**(): [`DebitNoteItemsList`](DebitNoteItemsList.md)

Create a deep copy.

#### Returns

[`DebitNoteItemsList`](DebitNoteItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNoteItemsList`](DebitNoteItemsList.md) \| `PlainMessage`\<[`DebitNoteItemsList`](DebitNoteItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNoteItemsList`](DebitNoteItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteItemsList`](DebitNoteItemsList.md)\>

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
| `a` | `undefined` \| [`DebitNoteItemsList`](DebitNoteItemsList.md) \| `PlainMessage`\<[`DebitNoteItemsList`](DebitNoteItemsList.md)\> |
| `b` | `undefined` \| [`DebitNoteItemsList`](DebitNoteItemsList.md) \| `PlainMessage`\<[`DebitNoteItemsList`](DebitNoteItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:1230](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1230)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1218)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1222)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteItemsList`](DebitNoteItemsList.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1226)
