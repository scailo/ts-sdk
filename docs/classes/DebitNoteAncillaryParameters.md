[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteAncillaryParameters

# Class: DebitNoteAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.DebitNoteAncillaryParameters

## Hierarchy

- `Message`\<[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)\>

  ↳ **`DebitNoteAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](DebitNoteAncillaryParameters.md#constructor)

### Properties

- [currencyUuid](DebitNoteAncillaryParameters.md#currencyuuid)
- [refUuid](DebitNoteAncillaryParameters.md#refuuid)
- [fields](DebitNoteAncillaryParameters.md#fields)
- [runtime](DebitNoteAncillaryParameters.md#runtime)
- [typeName](DebitNoteAncillaryParameters.md#typename)

### Methods

- [clone](DebitNoteAncillaryParameters.md#clone)
- [equals](DebitNoteAncillaryParameters.md#equals)
- [fromBinary](DebitNoteAncillaryParameters.md#frombinary)
- [fromJson](DebitNoteAncillaryParameters.md#fromjson)
- [fromJsonString](DebitNoteAncillaryParameters.md#fromjsonstring)
- [getType](DebitNoteAncillaryParameters.md#gettype)
- [toBinary](DebitNoteAncillaryParameters.md#tobinary)
- [toJSON](DebitNoteAncillaryParameters.md#tojson)
- [toJson](DebitNoteAncillaryParameters.md#tojson-1)
- [toJsonString](DebitNoteAncillaryParameters.md#tojsonstring)
- [equals](DebitNoteAncillaryParameters.md#equals-1)
- [fromBinary](DebitNoteAncillaryParameters.md#frombinary-1)
- [fromJson](DebitNoteAncillaryParameters.md#fromjson-1)
- [fromJsonString](DebitNoteAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteAncillaryParameters**(`data?`): [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)\> |

#### Returns

[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Overrides

Message\&lt;DebitNoteAncillaryParameters\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L578)

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 214;

#### Defined in

[src/debit_notes.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L576)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/debit_notes.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L569)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L585)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L583)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteAncillaryParameters"``

#### Defined in

[src/debit_notes.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L584)

## Methods

### clone

▸ **clone**(): [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

Create a deep copy.

#### Returns

[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md) \| `PlainMessage`\<[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md) \| `PlainMessage`\<[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)\> |
| `b` | `undefined` \| [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md) \| `PlainMessage`\<[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L602)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L590)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:594](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L594)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteAncillaryParameters`](DebitNoteAncillaryParameters.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L598)
