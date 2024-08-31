[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServiceParameterUpdateRequest

# Class: QCSamplesServiceParameterUpdateRequest

Describes the parameters required to update an parameter in a qc sample

**`Generated`**

from message Scailo.QCSamplesServiceParameterUpdateRequest

## Hierarchy

- `Message`\<[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)\>

  ↳ **`QCSamplesServiceParameterUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QCSamplesServiceParameterUpdateRequest.md#constructor)

### Properties

- [description](QCSamplesServiceParameterUpdateRequest.md#description)
- [id](QCSamplesServiceParameterUpdateRequest.md#id)
- [numberObservedValue](QCSamplesServiceParameterUpdateRequest.md#numberobservedvalue)
- [textObservedValue](QCSamplesServiceParameterUpdateRequest.md#textobservedvalue)
- [userComment](QCSamplesServiceParameterUpdateRequest.md#usercomment)
- [fields](QCSamplesServiceParameterUpdateRequest.md#fields)
- [runtime](QCSamplesServiceParameterUpdateRequest.md#runtime)
- [typeName](QCSamplesServiceParameterUpdateRequest.md#typename)

### Methods

- [clone](QCSamplesServiceParameterUpdateRequest.md#clone)
- [equals](QCSamplesServiceParameterUpdateRequest.md#equals)
- [fromBinary](QCSamplesServiceParameterUpdateRequest.md#frombinary)
- [fromJson](QCSamplesServiceParameterUpdateRequest.md#fromjson)
- [fromJsonString](QCSamplesServiceParameterUpdateRequest.md#fromjsonstring)
- [getType](QCSamplesServiceParameterUpdateRequest.md#gettype)
- [toBinary](QCSamplesServiceParameterUpdateRequest.md#tobinary)
- [toJSON](QCSamplesServiceParameterUpdateRequest.md#tojson)
- [toJson](QCSamplesServiceParameterUpdateRequest.md#tojson-1)
- [toJsonString](QCSamplesServiceParameterUpdateRequest.md#tojsonstring)
- [equals](QCSamplesServiceParameterUpdateRequest.md#equals-1)
- [fromBinary](QCSamplesServiceParameterUpdateRequest.md#frombinary-1)
- [fromJson](QCSamplesServiceParameterUpdateRequest.md#fromjson-1)
- [fromJsonString](QCSamplesServiceParameterUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServiceParameterUpdateRequest**(`data?`): [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Overrides

Message\&lt;QCSamplesServiceParameterUpdateRequest\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:1578

## Properties

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 20;

#### Defined in

src/qc_samples.scailo_pb.ts:1576

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/qc_samples.scailo_pb.ts:1555

___

### numberObservedValue

• **numberObservedValue**: `bigint` = `protoInt64.zero`

Stores the observed value when it is a number

**`Generated`**

from field: int64 number_observed_value = 13;

#### Defined in

src/qc_samples.scailo_pb.ts:1562

___

### textObservedValue

• **textObservedValue**: `string` = `""`

Stores the observed value when it is a string

**`Generated`**

from field: string text_observed_value = 14;

#### Defined in

src/qc_samples.scailo_pb.ts:1569

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:1548

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:1585

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:1583

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceParameterUpdateRequest"``

#### Defined in

src/qc_samples.scailo_pb.ts:1584

## Methods

### clone

▸ **clone**(): [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

Create a deep copy.

#### Returns

[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)\> |
| `b` | `undefined` \| [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md) \| `PlainMessage`\<[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:1605

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1593

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1597

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1601
