[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCParamsList

# Class: QCParamsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.QCParamsList

## Hierarchy

- `Message`\<[`QCParamsList`](QCParamsList.md)\>

  ↳ **`QCParamsList`**

## Table of contents

### Constructors

- [constructor](QCParamsList.md#constructor)

### Properties

- [list](QCParamsList.md#list)
- [fields](QCParamsList.md#fields)
- [runtime](QCParamsList.md#runtime)
- [typeName](QCParamsList.md#typename)

### Methods

- [clone](QCParamsList.md#clone)
- [equals](QCParamsList.md#equals)
- [fromBinary](QCParamsList.md#frombinary)
- [fromJson](QCParamsList.md#fromjson)
- [fromJsonString](QCParamsList.md#fromjsonstring)
- [getType](QCParamsList.md#gettype)
- [toBinary](QCParamsList.md#tobinary)
- [toJSON](QCParamsList.md#tojson)
- [toJson](QCParamsList.md#tojson-1)
- [toJsonString](QCParamsList.md#tojsonstring)
- [equals](QCParamsList.md#equals-1)
- [fromBinary](QCParamsList.md#frombinary-1)
- [fromJson](QCParamsList.md#fromjson-1)
- [fromJsonString](QCParamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsList**(`data?`): [`QCParamsList`](QCParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCParamsList`](QCParamsList.md)\> |

#### Returns

[`QCParamsList`](QCParamsList.md)

#### Overrides

Message\&lt;QCParamsList\&gt;.constructor

#### Defined in

src/qc_params.scailo_pb.ts:369

## Properties

### list

• **list**: [`QCParam`](QCParam.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QCParam list = 1;

#### Defined in

src/qc_params.scailo_pb.ts:367

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_params.scailo_pb.ts:376

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_params.scailo_pb.ts:374

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCParamsList"``

#### Defined in

src/qc_params.scailo_pb.ts:375

## Methods

### clone

▸ **clone**(): [`QCParamsList`](QCParamsList.md)

Create a deep copy.

#### Returns

[`QCParamsList`](QCParamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsList`](QCParamsList.md) \| `PlainMessage`\<[`QCParamsList`](QCParamsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCParamsList`](QCParamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCParamsList`](QCParamsList.md)\>

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
| `a` | `undefined` \| [`QCParamsList`](QCParamsList.md) \| `PlainMessage`\<[`QCParamsList`](QCParamsList.md)\> |
| `b` | `undefined` \| [`QCParamsList`](QCParamsList.md) \| `PlainMessage`\<[`QCParamsList`](QCParamsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_params.scailo_pb.ts:392

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsList`](QCParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCParamsList`](QCParamsList.md)

#### Defined in

src/qc_params.scailo_pb.ts:380

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsList`](QCParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsList`](QCParamsList.md)

#### Defined in

src/qc_params.scailo_pb.ts:384

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsList`](QCParamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsList`](QCParamsList.md)

#### Defined in

src/qc_params.scailo_pb.ts:388
