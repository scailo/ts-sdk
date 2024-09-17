[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupItemHistoryRequest

# Class: QCGroupItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.QCGroupItemHistoryRequest

## Hierarchy

- `Message`\<[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)\>

  ↳ **`QCGroupItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](QCGroupItemHistoryRequest.md#constructor)

### Properties

- [qcGroupId](QCGroupItemHistoryRequest.md#qcgroupid)
- [qcParamId](QCGroupItemHistoryRequest.md#qcparamid)
- [fields](QCGroupItemHistoryRequest.md#fields)
- [runtime](QCGroupItemHistoryRequest.md#runtime)
- [typeName](QCGroupItemHistoryRequest.md#typename)

### Methods

- [clone](QCGroupItemHistoryRequest.md#clone)
- [equals](QCGroupItemHistoryRequest.md#equals)
- [fromBinary](QCGroupItemHistoryRequest.md#frombinary)
- [fromJson](QCGroupItemHistoryRequest.md#fromjson)
- [fromJsonString](QCGroupItemHistoryRequest.md#fromjsonstring)
- [getType](QCGroupItemHistoryRequest.md#gettype)
- [toBinary](QCGroupItemHistoryRequest.md#tobinary)
- [toJSON](QCGroupItemHistoryRequest.md#tojson)
- [toJson](QCGroupItemHistoryRequest.md#tojson-1)
- [toJsonString](QCGroupItemHistoryRequest.md#tojsonstring)
- [equals](QCGroupItemHistoryRequest.md#equals-1)
- [fromBinary](QCGroupItemHistoryRequest.md#frombinary-1)
- [fromJson](QCGroupItemHistoryRequest.md#fromjson-1)
- [fromJsonString](QCGroupItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupItemHistoryRequest**(`data?`): [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)\> |

#### Returns

[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Overrides

Message\&lt;QCGroupItemHistoryRequest\&gt;.constructor

#### Defined in

src/qc_groups.scailo_pb.ts:982

## Properties

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 10;

#### Defined in

src/qc_groups.scailo_pb.ts:973

___

### qcParamId

• **qcParamId**: `bigint` = `protoInt64.zero`

The ID of the qc param that is a part of the qc group

**`Generated`**

from field: uint64 qc_param_id = 11;

#### Defined in

src/qc_groups.scailo_pb.ts:980

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_groups.scailo_pb.ts:989

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_groups.scailo_pb.ts:987

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupItemHistoryRequest"``

#### Defined in

src/qc_groups.scailo_pb.ts:988

## Methods

### clone

▸ **clone**(): [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md) \| `PlainMessage`\<[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md) \| `PlainMessage`\<[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md) \| `PlainMessage`\<[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_groups.scailo_pb.ts:1006

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:994

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:998

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupItemHistoryRequest`](QCGroupItemHistoryRequest.md)

#### Defined in

src/qc_groups.scailo_pb.ts:1002
