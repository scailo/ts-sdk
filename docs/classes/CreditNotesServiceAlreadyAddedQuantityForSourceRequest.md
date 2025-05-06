[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceAlreadyAddedQuantityForSourceRequest

# Class: CreditNotesServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.CreditNotesServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:1419

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

src/credit_notes.scailo_pb.ts:1417

___

### refFrom

• **refFrom**: [`CREDIT_NOTE_REF_FROM`](../enums/CREDIT_NOTE_REF_FROM.md) = `CREDIT_NOTE_REF_FROM.CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:1403

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

src/credit_notes.scailo_pb.ts:1410

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:1426

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:1424

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

src/credit_notes.scailo_pb.ts:1425

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:1444

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1432

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1436

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceAlreadyAddedQuantityForSourceRequest`](CreditNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:1440
