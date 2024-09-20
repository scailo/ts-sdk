[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteAncillaryParameters

# Class: CreditNoteAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.CreditNoteAncillaryParameters

## Hierarchy

- `Message`\<[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)\>

  ↳ **`CreditNoteAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](CreditNoteAncillaryParameters.md#constructor)

### Properties

- [currencyUuid](CreditNoteAncillaryParameters.md#currencyuuid)
- [refUuid](CreditNoteAncillaryParameters.md#refuuid)
- [fields](CreditNoteAncillaryParameters.md#fields)
- [runtime](CreditNoteAncillaryParameters.md#runtime)
- [typeName](CreditNoteAncillaryParameters.md#typename)

### Methods

- [clone](CreditNoteAncillaryParameters.md#clone)
- [equals](CreditNoteAncillaryParameters.md#equals)
- [fromBinary](CreditNoteAncillaryParameters.md#frombinary)
- [fromJson](CreditNoteAncillaryParameters.md#fromjson)
- [fromJsonString](CreditNoteAncillaryParameters.md#fromjsonstring)
- [getType](CreditNoteAncillaryParameters.md#gettype)
- [toBinary](CreditNoteAncillaryParameters.md#tobinary)
- [toJSON](CreditNoteAncillaryParameters.md#tojson)
- [toJson](CreditNoteAncillaryParameters.md#tojson-1)
- [toJsonString](CreditNoteAncillaryParameters.md#tojsonstring)
- [equals](CreditNoteAncillaryParameters.md#equals-1)
- [fromBinary](CreditNoteAncillaryParameters.md#frombinary-1)
- [fromJson](CreditNoteAncillaryParameters.md#fromjson-1)
- [fromJsonString](CreditNoteAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteAncillaryParameters**(`data?`): [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)\> |

#### Returns

[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Overrides

Message\&lt;CreditNoteAncillaryParameters\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:567

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 214;

#### Defined in

src/credit_notes.scailo_pb.ts:565

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

src/credit_notes.scailo_pb.ts:558

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:574

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:572

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteAncillaryParameters"``

#### Defined in

src/credit_notes.scailo_pb.ts:573

## Methods

### clone

▸ **clone**(): [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

Create a deep copy.

#### Returns

[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md) \| `PlainMessage`\<[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md) \| `PlainMessage`\<[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)\> |
| `b` | `undefined` \| [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md) \| `PlainMessage`\<[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:591

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Defined in

src/credit_notes.scailo_pb.ts:579

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Defined in

src/credit_notes.scailo_pb.ts:583

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteAncillaryParameters`](CreditNoteAncillaryParameters.md)

#### Defined in

src/credit_notes.scailo_pb.ts:587
