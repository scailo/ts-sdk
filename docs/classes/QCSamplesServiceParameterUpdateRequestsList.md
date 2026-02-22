[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServiceParameterUpdateRequestsList

# Class: QCSamplesServiceParameterUpdateRequestsList

Describes the parameters required to update a list of parameters in a qc sample

**`Generated`**

from message Scailo.QCSamplesServiceParameterUpdateRequestsList

## Hierarchy

- `Message`\<[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)\>

  ↳ **`QCSamplesServiceParameterUpdateRequestsList`**

## Table of contents

### Constructors

- [constructor](QCSamplesServiceParameterUpdateRequestsList.md#constructor)

### Properties

- [list](QCSamplesServiceParameterUpdateRequestsList.md#list)
- [fields](QCSamplesServiceParameterUpdateRequestsList.md#fields)
- [runtime](QCSamplesServiceParameterUpdateRequestsList.md#runtime)
- [typeName](QCSamplesServiceParameterUpdateRequestsList.md#typename)

### Methods

- [clone](QCSamplesServiceParameterUpdateRequestsList.md#clone)
- [equals](QCSamplesServiceParameterUpdateRequestsList.md#equals)
- [fromBinary](QCSamplesServiceParameterUpdateRequestsList.md#frombinary)
- [fromJson](QCSamplesServiceParameterUpdateRequestsList.md#fromjson)
- [fromJsonString](QCSamplesServiceParameterUpdateRequestsList.md#fromjsonstring)
- [getType](QCSamplesServiceParameterUpdateRequestsList.md#gettype)
- [toBinary](QCSamplesServiceParameterUpdateRequestsList.md#tobinary)
- [toJSON](QCSamplesServiceParameterUpdateRequestsList.md#tojson)
- [toJson](QCSamplesServiceParameterUpdateRequestsList.md#tojson-1)
- [toJsonString](QCSamplesServiceParameterUpdateRequestsList.md#tojsonstring)
- [equals](QCSamplesServiceParameterUpdateRequestsList.md#equals-1)
- [fromBinary](QCSamplesServiceParameterUpdateRequestsList.md#frombinary-1)
- [fromJson](QCSamplesServiceParameterUpdateRequestsList.md#fromjson-1)
- [fromJsonString](QCSamplesServiceParameterUpdateRequestsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServiceParameterUpdateRequestsList**(`data?`): [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Overrides

Message\&lt;QCSamplesServiceParameterUpdateRequestsList\&gt;.constructor

#### Defined in

[src/qc_samples.scailo_pb.ts:1690](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1690)

## Properties

### list

• **list**: [`QCSamplesServiceParameterUpdateRequest`](QCSamplesServiceParameterUpdateRequest.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QCSamplesServiceParameterUpdateRequest list = 1;

#### Defined in

[src/qc_samples.scailo_pb.ts:1688](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1688)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:1697](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1697)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1695)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceParameterUpdateRequestsList"``

#### Defined in

[src/qc_samples.scailo_pb.ts:1696](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1696)

## Methods

### clone

▸ **clone**(): [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

Create a deep copy.

#### Returns

[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md) \| `PlainMessage`\<[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)\>

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
| `a` | `undefined` \| [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md) \| `PlainMessage`\<[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)\> |
| `b` | `undefined` \| [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md) \| `PlainMessage`\<[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_samples.scailo_pb.ts:1713](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1713)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:1701](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1701)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:1705](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1705)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceParameterUpdateRequestsList`](QCSamplesServiceParameterUpdateRequestsList.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:1709](https://github.com/scailo/ts-sdk/blob/ef4df6d9e1da794d280b9f50eaab47dee444e872/src/qc_samples.scailo_pb.ts#L1709)
