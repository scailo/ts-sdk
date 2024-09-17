[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsList

# Class: QCGroupsList

Describes the message consisting of the list of qc groups

**`Generated`**

from message Scailo.QCGroupsList

## Hierarchy

- `Message`\<[`QCGroupsList`](QCGroupsList.md)\>

  ↳ **`QCGroupsList`**

## Table of contents

### Constructors

- [constructor](QCGroupsList.md#constructor)

### Properties

- [list](QCGroupsList.md#list)
- [fields](QCGroupsList.md#fields)
- [runtime](QCGroupsList.md#runtime)
- [typeName](QCGroupsList.md#typename)

### Methods

- [clone](QCGroupsList.md#clone)
- [equals](QCGroupsList.md#equals)
- [fromBinary](QCGroupsList.md#frombinary)
- [fromJson](QCGroupsList.md#fromjson)
- [fromJsonString](QCGroupsList.md#fromjsonstring)
- [getType](QCGroupsList.md#gettype)
- [toBinary](QCGroupsList.md#tobinary)
- [toJSON](QCGroupsList.md#tojson)
- [toJson](QCGroupsList.md#tojson-1)
- [toJsonString](QCGroupsList.md#tojsonstring)
- [equals](QCGroupsList.md#equals-1)
- [fromBinary](QCGroupsList.md#frombinary-1)
- [fromJson](QCGroupsList.md#fromjson-1)
- [fromJsonString](QCGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsList**(`data?`): [`QCGroupsList`](QCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsList`](QCGroupsList.md)\> |

#### Returns

[`QCGroupsList`](QCGroupsList.md)

#### Overrides

Message\&lt;QCGroupsList\&gt;.constructor

#### Defined in

src/qc_groups.scailo_pb.ts:891

## Properties

### list

• **list**: [`QCGroup`](QCGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QCGroup list = 1;

#### Defined in

src/qc_groups.scailo_pb.ts:889

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_groups.scailo_pb.ts:898

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_groups.scailo_pb.ts:896

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsList"``

#### Defined in

src/qc_groups.scailo_pb.ts:897

## Methods

### clone

▸ **clone**(): [`QCGroupsList`](QCGroupsList.md)

Create a deep copy.

#### Returns

[`QCGroupsList`](QCGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsList`](QCGroupsList.md) \| `PlainMessage`\<[`QCGroupsList`](QCGroupsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsList`](QCGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsList`](QCGroupsList.md)\>

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
| `a` | `undefined` \| [`QCGroupsList`](QCGroupsList.md) \| `PlainMessage`\<[`QCGroupsList`](QCGroupsList.md)\> |
| `b` | `undefined` \| [`QCGroupsList`](QCGroupsList.md) \| `PlainMessage`\<[`QCGroupsList`](QCGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_groups.scailo_pb.ts:914

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsList`](QCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsList`](QCGroupsList.md)

#### Defined in

src/qc_groups.scailo_pb.ts:902

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsList`](QCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsList`](QCGroupsList.md)

#### Defined in

src/qc_groups.scailo_pb.ts:906

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsList`](QCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsList`](QCGroupsList.md)

#### Defined in

src/qc_groups.scailo_pb.ts:910
