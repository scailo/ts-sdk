[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesCountStatistics

# Class: QCSamplesCountStatistics

Describes the payload that has the counts of all the QC samples for an inventory item

**`Generated`**

from message Scailo.QCSamplesCountStatistics

## Hierarchy

- `Message`\<[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)\>

  ↳ **`QCSamplesCountStatistics`**

## Table of contents

### Constructors

- [constructor](QCSamplesCountStatistics.md#constructor)

### Properties

- [accepted](QCSamplesCountStatistics.md#accepted)
- [acceptedWithDeviation](QCSamplesCountStatistics.md#acceptedwithdeviation)
- [cancelled](QCSamplesCountStatistics.md#cancelled)
- [finished](QCSamplesCountStatistics.md#finished)
- [open](QCSamplesCountStatistics.md#open)
- [rejected](QCSamplesCountStatistics.md#rejected)
- [fields](QCSamplesCountStatistics.md#fields)
- [runtime](QCSamplesCountStatistics.md#runtime)
- [typeName](QCSamplesCountStatistics.md#typename)

### Methods

- [clone](QCSamplesCountStatistics.md#clone)
- [equals](QCSamplesCountStatistics.md#equals)
- [fromBinary](QCSamplesCountStatistics.md#frombinary)
- [fromJson](QCSamplesCountStatistics.md#fromjson)
- [fromJsonString](QCSamplesCountStatistics.md#fromjsonstring)
- [getType](QCSamplesCountStatistics.md#gettype)
- [toBinary](QCSamplesCountStatistics.md#tobinary)
- [toJSON](QCSamplesCountStatistics.md#tojson)
- [toJson](QCSamplesCountStatistics.md#tojson-1)
- [toJsonString](QCSamplesCountStatistics.md#tojsonstring)
- [equals](QCSamplesCountStatistics.md#equals-1)
- [fromBinary](QCSamplesCountStatistics.md#frombinary-1)
- [fromJson](QCSamplesCountStatistics.md#fromjson-1)
- [fromJsonString](QCSamplesCountStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesCountStatistics**(`data?`): [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)\> |

#### Returns

[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Overrides

Message\&lt;QCSamplesCountStatistics\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:2416

## Properties

### accepted

• **accepted**: `bigint` = `protoInt64.zero`

The number of samples that were accepted

**`Generated`**

from field: uint64 accepted = 3;

#### Defined in

src/qc_samples.scailo_pb.ts:2393

___

### acceptedWithDeviation

• **acceptedWithDeviation**: `bigint` = `protoInt64.zero`

The number of samples that were accepted with deviation

**`Generated`**

from field: uint64 accepted_with_deviation = 4;

#### Defined in

src/qc_samples.scailo_pb.ts:2400

___

### cancelled

• **cancelled**: `bigint` = `protoInt64.zero`

The number of samples that were cancelled

**`Generated`**

from field: uint64 cancelled = 6;

#### Defined in

src/qc_samples.scailo_pb.ts:2414

___

### finished

• **finished**: `bigint` = `protoInt64.zero`

The number of finished samples

**`Generated`**

from field: uint64 finished = 2;

#### Defined in

src/qc_samples.scailo_pb.ts:2386

___

### open

• **open**: `bigint` = `protoInt64.zero`

The number of open samples

**`Generated`**

from field: uint64 open = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:2379

___

### rejected

• **rejected**: `bigint` = `protoInt64.zero`

The number of samples that were rejected

**`Generated`**

from field: uint64 rejected = 5;

#### Defined in

src/qc_samples.scailo_pb.ts:2407

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:2423

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:2421

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesCountStatistics"``

#### Defined in

src/qc_samples.scailo_pb.ts:2422

## Methods

### clone

▸ **clone**(): [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

Create a deep copy.

#### Returns

[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md) \| `PlainMessage`\<[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)\>

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
| `a` | `undefined` \| [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md) \| `PlainMessage`\<[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)\> |
| `b` | `undefined` \| [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md) \| `PlainMessage`\<[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:2444

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Defined in

src/qc_samples.scailo_pb.ts:2432

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Defined in

src/qc_samples.scailo_pb.ts:2436

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesCountStatistics`](QCSamplesCountStatistics.md)

#### Defined in

src/qc_samples.scailo_pb.ts:2440
