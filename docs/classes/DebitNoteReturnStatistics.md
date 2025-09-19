[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNoteReturnStatistics

# Class: DebitNoteReturnStatistics

Describes the returned statistics of the debit note

**`Generated`**

from message Scailo.DebitNoteReturnStatistics

## Hierarchy

- `Message`\<[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)\>

  ↳ **`DebitNoteReturnStatistics`**

## Table of contents

### Constructors

- [constructor](DebitNoteReturnStatistics.md#constructor)

### Properties

- [billedQuantity](DebitNoteReturnStatistics.md#billedquantity)
- [familyId](DebitNoteReturnStatistics.md#familyid)
- [returnedQuantity](DebitNoteReturnStatistics.md#returnedquantity)
- [fields](DebitNoteReturnStatistics.md#fields)
- [runtime](DebitNoteReturnStatistics.md#runtime)
- [typeName](DebitNoteReturnStatistics.md#typename)

### Methods

- [clone](DebitNoteReturnStatistics.md#clone)
- [equals](DebitNoteReturnStatistics.md#equals)
- [fromBinary](DebitNoteReturnStatistics.md#frombinary)
- [fromJson](DebitNoteReturnStatistics.md#fromjson)
- [fromJsonString](DebitNoteReturnStatistics.md#fromjsonstring)
- [getType](DebitNoteReturnStatistics.md#gettype)
- [toBinary](DebitNoteReturnStatistics.md#tobinary)
- [toJSON](DebitNoteReturnStatistics.md#tojson)
- [toJson](DebitNoteReturnStatistics.md#tojson-1)
- [toJsonString](DebitNoteReturnStatistics.md#tojsonstring)
- [equals](DebitNoteReturnStatistics.md#equals-1)
- [fromBinary](DebitNoteReturnStatistics.md#frombinary-1)
- [fromJson](DebitNoteReturnStatistics.md#fromjson-1)
- [fromJsonString](DebitNoteReturnStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNoteReturnStatistics**(`data?`): [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)\> |

#### Returns

[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Overrides

Message\&lt;DebitNoteReturnStatistics\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:2593](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2593)

## Properties

### billedQuantity

• **billedQuantity**: `bigint` = `protoInt64.zero`

Stores the billed quantity

**`Generated`**

from field: uint64 billed_quantity = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:2584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2584)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:2577](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2577)

___

### returnedQuantity

• **returnedQuantity**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned_quantity = 3;

#### Defined in

[src/debit_notes.scailo_pb.ts:2591](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2591)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:2600](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2600)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:2598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2598)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNoteReturnStatistics"``

#### Defined in

[src/debit_notes.scailo_pb.ts:2599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2599)

## Methods

### clone

▸ **clone**(): [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

Create a deep copy.

#### Returns

[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md) \| `PlainMessage`\<[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)\>

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
| `a` | `undefined` \| [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md) \| `PlainMessage`\<[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)\> |
| `b` | `undefined` \| [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md) \| `PlainMessage`\<[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:2618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2618)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2606)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2610)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNoteReturnStatistics`](DebitNoteReturnStatistics.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:2614](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L2614)
