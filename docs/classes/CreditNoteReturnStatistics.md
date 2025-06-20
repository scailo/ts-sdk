[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNoteReturnStatistics

# Class: CreditNoteReturnStatistics

Describes the returned statistics of the credit note

**`Generated`**

from message Scailo.CreditNoteReturnStatistics

## Hierarchy

- `Message`\<[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)\>

  ↳ **`CreditNoteReturnStatistics`**

## Table of contents

### Constructors

- [constructor](CreditNoteReturnStatistics.md#constructor)

### Properties

- [billedQuantity](CreditNoteReturnStatistics.md#billedquantity)
- [familyId](CreditNoteReturnStatistics.md#familyid)
- [returnedQuantity](CreditNoteReturnStatistics.md#returnedquantity)
- [fields](CreditNoteReturnStatistics.md#fields)
- [runtime](CreditNoteReturnStatistics.md#runtime)
- [typeName](CreditNoteReturnStatistics.md#typename)

### Methods

- [clone](CreditNoteReturnStatistics.md#clone)
- [equals](CreditNoteReturnStatistics.md#equals)
- [fromBinary](CreditNoteReturnStatistics.md#frombinary)
- [fromJson](CreditNoteReturnStatistics.md#fromjson)
- [fromJsonString](CreditNoteReturnStatistics.md#fromjsonstring)
- [getType](CreditNoteReturnStatistics.md#gettype)
- [toBinary](CreditNoteReturnStatistics.md#tobinary)
- [toJSON](CreditNoteReturnStatistics.md#tojson)
- [toJson](CreditNoteReturnStatistics.md#tojson-1)
- [toJsonString](CreditNoteReturnStatistics.md#tojsonstring)
- [equals](CreditNoteReturnStatistics.md#equals-1)
- [fromBinary](CreditNoteReturnStatistics.md#frombinary-1)
- [fromJson](CreditNoteReturnStatistics.md#fromjson-1)
- [fromJsonString](CreditNoteReturnStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNoteReturnStatistics**(`data?`): [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)\> |

#### Returns

[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Overrides

Message\&lt;CreditNoteReturnStatistics\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:2700

## Properties

### billedQuantity

• **billedQuantity**: `bigint` = `protoInt64.zero`

Stores the billed quantity

**`Generated`**

from field: uint64 billed_quantity = 2;

#### Defined in

src/credit_notes.scailo_pb.ts:2691

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:2684

___

### returnedQuantity

• **returnedQuantity**: `bigint` = `protoInt64.zero`

Stores the returned quantity

**`Generated`**

from field: uint64 returned_quantity = 3;

#### Defined in

src/credit_notes.scailo_pb.ts:2698

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:2707

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:2705

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNoteReturnStatistics"``

#### Defined in

src/credit_notes.scailo_pb.ts:2706

## Methods

### clone

▸ **clone**(): [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

Create a deep copy.

#### Returns

[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md) \| `PlainMessage`\<[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)\>

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
| `a` | `undefined` \| [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md) \| `PlainMessage`\<[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)\> |
| `b` | `undefined` \| [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md) \| `PlainMessage`\<[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:2725

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2713

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2717

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNoteReturnStatistics`](CreditNoteReturnStatistics.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2721
