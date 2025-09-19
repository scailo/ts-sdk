[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceAlreadyAddedQuantityForSourceRequest

# Class: DebitNotesServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Scailo.DebitNotesServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceAlreadyAddedQuantityForSourceRequest**(`data?`): [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1363)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 3;

#### Defined in

[src/debit_notes.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1361)

___

### refFrom

• **refFrom**: [`DEBIT_NOTE_REF_FROM`](../enums/DEBIT_NOTE_REF_FROM.md) = `DEBIT_NOTE_REF_FROM.DEBIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.DEBIT_NOTE_REF_FROM ref_from = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1347)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1354)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1370)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1368)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

[src/debit_notes.scailo_pb.ts:1369](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1369)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`\<[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:1388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1388)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1376)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1380](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1380)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceAlreadyAddedQuantityForSourceRequest`](DebitNotesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1384)
